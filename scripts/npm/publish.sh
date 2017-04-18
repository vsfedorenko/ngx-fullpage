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

    if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$PUBLISH_SOURCE_BRANCH" ]; then
        echo "Pull requests and commits to other branches are not eligible for deploy. Skipping ..."
        exit 0
    fi

# /2 ####################################################################################################
#  3 ############################################# SCRIPT ###############################################

    WORKING_DIR=${PROJECT_ROOT_DIRECTORY}/${PROJECT_PUBLISH_DIR_NAME}/npm
    mkdir -p ${WORKING_DIR}

    cp -r ${PROJECT_ROOT_DIRECTORY}/${PROJECT_BUILD_DIR_NAME}/* ${WORKING_DIR}/
    cp ${PROJECT_ROOT_DIRECTORY}/package.json ${WORKING_DIR}/package.json
    cp ${PROJECT_ROOT_DIRECTORY}/LICENSE ${WORKING_DIR}/LICENSE
    cp ${PROJECT_ROOT_DIRECTORY}/README.md ${WORKING_DIR}/README.md

    cd ${WORKING_DIR}
    echo "Content to be deployed: $(pwd)"
    ${THIS_SCRIPT_DIR}/../utils/tree.sh # Print directory content

    echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" > .npmrc
    npm publish

# /3 ####################################################################################################
