#!/bin/bash

# Go the directory of the script
reldir="$( dirname -- "$0"; )";
cd "$reldir"

function init() {
    pip3 install -r requirements.txt
    npm install
}

function run-dev() {
    cd client
    npm install
    cd ..
    NODE_ENV=development npm run dev
}

function run-prod() {
    cd client
    rm -rf build
    npm run build
    cd ..
    pm2 stop TheGuardianProject
    pm2 delete TheGuardianProject
    NODE_ENV=production pm2 start server.js --name "TheGuardianProject"
}

if [[ "$1" == "dev" ]]
then
    init
    run-dev
elif [[ "$1" == "prod" ]]
then
    init
    run-prod
else
    echo "Invalid parameter!"
    echo "For development build -> run.sh dev"
    echo "For production build -> run.sh prod"
fi