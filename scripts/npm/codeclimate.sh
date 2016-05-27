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

    if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then
        echo "Only master branch can be reported to the codeclimate service. Skipping ..."
        exit 0
    fi

# /2 ####################################################################################################
#  3 ############################################# SCRIPT ###############################################

    npm run codeclimate

# /3 ####################################################################################################
