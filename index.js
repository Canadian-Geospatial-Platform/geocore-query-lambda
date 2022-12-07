"use strict";

//import AthenaExpress from "athena-express";
//import * as AWS from "@aws-sdk/client-athena";

const AthenaExpress = require("athena-express");
const AWS = require("aws-sdk");
const { query } = require("compoents/query-builder/query-builder.js");

/* AWS Credentials are not required here 
    /* Make sure the IAM Execution Role used by this Lambda 
    /* has the necessary permission to execute Athena queries 
    /* and store the result in Amazon S3 bucket
    /* See configuration section above under Setup for more info */
const athenaExpressConfig = {
  aws: AWS,
  db: "geocore_metadata",
  formatJson: true,
  getStats: true,
};
const athenaExpress = new AthenaExpress(athenaExpressConfig);

exports.handler = async (event) => {
  console.log("even is: \n", event);
  const sqlQuery = query();

  try {
    let queryResults = await athenaExpress.query(sqlQuery);
    const results = queryResults.Items;
    console.log("result is:\n", results);
    return results;
  } catch (error) {
    console.log("result is:\n", error);
    return error;
  }
};
