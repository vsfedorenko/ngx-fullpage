#!/usr/bin/env bash

set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"
BUILD_DIR="build"

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  THIS_SCRIPT_DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ ${SOURCE} != /* ]] && SOURCE="$THIS_SCRIPT_DIR/$SOURCE"
done
THIS_SCRIPT_DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

function doBuild {
    ${THIS_SCRIPT_DIR}/build.sh
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Pull requests and commits to other branches are not eligible for deploy. Skipping ..."
    exit 0
fi

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:meiblorn\/ng2-fullpage.git}
SHA=`git rev-parse --verify HEAD`

# Clone the existing gh-pages for this repo into ${BUILD_DIR}/
# Create a new empty branch if gh-pages doesn't exist yet (should only happen on first deply)
git clone ${REPO} ${BUILD_DIR}
cd ${BUILD_DIR}
git checkout ${TARGET_BRANCH} || git checkout --orphan ${TARGET_BRANCH}
cd ..

# Clean $BUILD_DIR existing contents
rm -rf ${BUILD_DIR}/**/* || exit 0

# Run our build script
doBuild

# Now let's go have some fun with the cloned repo
cd ${BUILD_DIR}
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"

# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
if [ -z `git diff --exit-code` ]; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

git add .
git commit -m "Deploy to GitHub Pages: ${SHA}"

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K ${ENCRYPTED_KEY} -iv ${ENCRYPTED_IV} -in ${THIS_SCRIPT_DIR}/keys/deploy_key.enc -out deploy_key -d
chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

# Now that we're all set up, we can push.
git push ${SSH_REPO} ${TARGET_BRANCH}

