## Set up local env to be able to push docker image to gcr.io

gcloud auth configure-docker

## How to build and deploy

Build: `./build.sh`
Optionally test the container locally: `./run.sh`
Push to GCR: `./push.sh`

Then log into GCP > Cloud Run > Personal Website > Edit & Deploy New Revision

Update the image URL and deploy.

## View the site in production

https://personal-website-ricbnbmsmq-uw.a.run.app/