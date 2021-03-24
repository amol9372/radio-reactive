# CloudFormation Makefile

.ONESHELL:
SHELL := /bin/bash

##Parameters
AWS_REGION			 	?= ap-south-1
PROFILE                 ?= default
STACK_NAME 		  	 	?= okta-stack
IDPNAME					?= okta
CLIENT_ID				?= 0oacmfa21rEbplRKl5d6
CLIENT_SECRET			?= iU4YwKWVr2UfHZg0iuqzB6DL1zxcUsWP6hkLA5BF
ISSUER					?= https://dev-42106472.okta.com
COGNITO_DOMAIN			?= amplify-react
DEFAULT_CALL_LIMIT		?= 100
ARTEFACT_S3_BUCKET		?= amplify-amplifyokta-dev-133645-deployment
ROLE_ATTRIBUTE 	        ?= department
USERNAME                ?= email
##System paramteres
current_dir 	:=  $(shell dirname $(realpath $(firstword $(MAKEFILE_LIST))))
SOURCE_TEMPLATE	:=	$(current_dir)/CloudFormationTemplateFull.yaml
OUTPUT_TEMPLATE	:=	$(current_dir)/outputtemplate.yaml


build:
	@mkdir $(current_dir)/layers/python; \
	pip3 install -r $(current_dir)/layers/requirements.txt -t $(current_dir)/layers/python/; \
	cd $(current_dir)/layers; \
	zip -r dependencies.zip python/; \
	cd $(current_dir); \
	rm -fr $(current_dir)/layers/python; \
	aws cloudformation package --template-file $(SOURCE_TEMPLATE) \
	 --s3-bucket $(ARTEFACT_S3_BUCKET) \
	 --output-template-file $(OUTPUT_TEMPLATE) \
	 --profile $(PROFILE) \
	 --region $(AWS_REGION)

apply: 
	@aws cloudformation deploy \
	--template-file $(OUTPUT_TEMPLATE) \
	--stack-name $(STACK_NAME) \
	--capabilities CAPABILITY_NAMED_IAM \
	--parameter-overrides \
	Bucket=$(ARTEFACT_S3_BUCKET) \
	DefaultCallLimit=$(DEFAULT_CALL_LIMIT) \
	IdpName=$(IDPNAME) \
	ClientId=$(CLIENT_ID) \
	ClientSecret=$(CLIENT_SECRET) \
	Issuer=$(ISSUER) \
	CognitoDomain=$(COGNITO_DOMAIN) \
	RoleAttribute=$(ROLE_ATTRIBUTE) \
	Username=$(USERNAME) \
	--region $(AWS_REGION) \
	--profile $(PROFILE)

deploy: build apply




	
