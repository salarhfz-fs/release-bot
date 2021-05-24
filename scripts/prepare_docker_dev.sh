#!/bin/bash

# This script handles file permissions for shared Docker volumes during development.
# This is achieved by sharing a group - docker_dev_grp -  between host and container.

set -e

# Check if user exists
if id -u "$1" >/dev/null 2>&1 && grep -q $2 /etc/group; then
  mkdir -p dist logs node_modules src test
  chown "$1:$2" dist logs node_modules src test
  # 1400 could be any number for which no GID is present on host machine
  groupadd -g 1400 docker_dev_grp
  chown :1400 dist logs node_modules src test
  chmod 775 dist logs node_modules src test
  chmod g+s dist logs node_modules src test
  # Add current user to the group
  adduser $1 docker_dev_grp
else
  echo "User $1 or group $2 not found."
  exit 1
fi
