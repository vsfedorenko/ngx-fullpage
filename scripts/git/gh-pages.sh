#!/usr/bin/env bash

#  1 ############################### SCRIPT META INFO BASIC INITIALIZATION ##############################

    ### ---------------------- EXIT WITH NON ZERO EXIT CODE IF SOMETHING FAILS ---------------------- ###

    set -e

    ### --------------------- EXTRACT SCRIPT PATH TO ${THIS_SCRIPT_DIR} VARIABLE -------------------- ###

    SOURCE="${BASH_SOURCE[0]}"
    while [ -h "$SOURCE" ]; do
      THIS_SCRIPT_DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
      SOURCE="$(readlink "$SOURCE")"
      [[ ${SOURCE} != /* ]] && SOURCE="$THIS_SCRIPT_DIR/$SOURCE"
    done

    THIS_SCRIPT_DIR="$( cd -P "$( dirname "$SOURCE" )" && pwd )"
    PROJECT_ROOT_DIRECTORY=${THIS_SCRIPT_DIR}/../..

# /1 ####################################################################################################
#  2 #################################### SCRIPT ENVIRONMENT VALIDATION #################################

    if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
        echo "Pull requests and commits to other branches are not eligible for deploy. Skipping ..."
        exit 0
    fi

    # Check if it is release or not
    git show-ref --tags -d | grep ^`git rev-parse --verify HEAD` | sed -e 's,.* refs/tags/,,' -e 's/\^{}//' | grep -Eq ^release-
    IS_RELEASE=$?

    if [[ ! $IS_RELEASE ]]; then
        echo "Only releases are deployed. Skipping ..."
        exit 0
    fi

# /2 ####################################################################################################
#  3 ######################################## INIT SCRIPT CONTEXT #######################################

    REPOSITORY=`git config remote.origin.url`
    SSH_REPOSITORY=${REPOSITORY/https:\/\/github.com\//git@github.com:}
    SHA_HASH=`git rev-parse --verify HEAD`

# /3 ####################################################################################################
#  4 ############################################# SCRIPT ###############################################

    WORKING_DIR=${PROJECT_ROOT_DIRECTORY}/${PROJECT_PUBLISH_DIR_NAME}/gh-pages
    mkdir -p ${WORKING_DIR}

    cd ${WORKING_DIR}
    echo "Current dir: $(pwd)"

    git init
    git remote add origin ${REPOSITORY}
    git fetch --all --prune
    git checkout --track origin/${GIT_PAGES_TARGET_BRANCH} \
        || git checkout --orphan ${GIT_PAGES_TARGET_BRANCH}

    # Clean directory
    rm -rf *

    # Copy content from build directory to publish directory
    cp -r ${PROJECT_ROOT_DIRECTORY}/${PROJECT_BUILD_DIR_NAME}/demo/* ${WORKING_DIR}/

    echo "Content to be deployed: $(pwd)"
    ${THIS_SCRIPT_DIR}/../utils/tree.sh # Print directory content

    cd ${WORKING_DIR}
    echo "Current dir: $(pwd)"

    git config user.name "Travis CI"
    git config user.email "$COMMIT_AUTHOR_EMAIL"

    git add --all .
    git commit -m "Deploy to GitHub Pages: ${SHA_HASH}"

    # Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
    openssl aes-256-cbc -K $encrypted_26052853ecfe_key -iv $encrypted_26052853ecfe_iv \
            -in ${THIS_SCRIPT_DIR}/keys/deploy_key.enc -out deploy_key -d

    chmod 600 deploy_key
    eval `ssh-agent -s`
    ssh-add deploy_key
    rm deploy_key

    # Now that we're all set up, we can push.
    git push ${SSH_REPOSITORY} ${GIT_PAGES_TARGET_BRANCH}

# /4 ####################################################################################################
