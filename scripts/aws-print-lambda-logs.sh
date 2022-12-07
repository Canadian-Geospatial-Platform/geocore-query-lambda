#!/bin/bash

lambda_name="geocore-query-node-16"

aws logs tail "/aws/lambda/$lambda_name" --follow
