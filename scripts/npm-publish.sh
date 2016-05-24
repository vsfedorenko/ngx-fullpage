#!/usr/bin/env bash

set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
BUILD_DIR="build"

SOURCE="${BASH_SOURCE[0]}"
while [ -h "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  THIS_SCRIPT_DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
  SOURCE="$(readlink "$SOURCE")"
  [[ ${SOURCE} != /* ]] && SOURCE="$THIS_SCRIPT_DIR/$SOURCE"
done
THIS_SCRIPT_DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"

function doPublish {
    if [ ! -d "${BUILD_DIR}" ]; then
        ./build.sh
    fi

    cp package.json ${BUILD_DIR}/package.json
    cp LICENSE ${BUILD_DIR}/LICENSE
    cp README.md ${BUILD_DIR}/README.md
    cd ${BUILD_DIR}
    echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > ${BUILD_DIR}/.npmrc

    npm publish
}

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Pull requests and commits to other branches are not eligible for npm publish. Skipping ..."
    exit 0
fi

doPublish
