# google-deployment-manager

* function/index.js => This is a simple JS code which responds with hello world and the time at which the request was received. It is deployed as a cloud function.
* cloud_function.yaml => This is the deployment manager's config file, where we specify certain parameters used to deploy our resources.
* cloud_function.py => This is a template file which is referenced in the yaml config file, and also used by deployment manager to compute the resources and deploys it in the background.

* This repo is used as a reference in one of my blog post here: https://raywontalks.com/iac-in-google-cloud/
