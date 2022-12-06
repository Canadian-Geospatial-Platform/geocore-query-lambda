#!/bin/bash

lambda_name="geocore-query-node-16"

zip -r function.zip . -x "function.zip*"
aws lambda update-function-code --function-name $lambda_name --zip-file fileb://function.zip