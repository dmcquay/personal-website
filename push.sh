#!/bin/bash

set -e

TAG=gcr.io/personal-275815/personal-website:$(date +"%Y-%m-%d-%H-%I-%S")
docker tag personal-website:latest $TAG
docker push $TAG
echo "Pushed "$TAG