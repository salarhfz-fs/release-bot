#!/bin/bash

set -e
# Available modes
arr=(watch watch-debug watch-test)
run_mode="$1"

if [[ " ${arr[*]} " == *"$run_mode"* ]]; then
  export WORKDIR='/home/node/app'
  RUN_MODE="$1" docker-compose -f docker-compose.dev.yml up --build
else
    echo "Mode $run_mode is not supported."
    exit 1
fi
