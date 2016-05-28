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

# /1 ####################################################################################################
#  2 #################################### SCRIPT ENVIRONMENT VALIDATION #################################

    if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$PUBLISH_SOURCE_BRANCH" ]; then
        echo "Pull requests and commits to other branches are not eligible for deploy. Skipping ..."
        exit 0
    fi

# /2 ####################################################################################################
#  3 ############################################# SCRIPT ###############################################

    cp package.json ${PROJECT_PUBLISH_DIR}/package.json
    cp LICENSE ${PROJECT_PUBLISH_DIR}/LICENSE
    cp README.md ${PROJECT_PUBLISH_DIR}/README.md

    cd ${PROJECT_PUBLISH_DIR}
    echo "Content to be deployed: $(pwd)"
    ${THIS_SCRIPT_DIR}/../utils/tree.sh # Print directory content

    echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
    npm publish

# /3 ####################################################################################################
