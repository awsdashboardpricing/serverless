
const axios = require('axios');

'use strict';

module.exports.sendS3Path = async (event, context, callback) => {
  // Event anatomy found here https://docs.aws.amazon.com/lambda/latest/dg/with-s3.html
  // Generate local event : https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-generate-event.html
  const result = axios.post('http://localhost:3000/s3persist', {
    filePath: event.Records[0].s3.object.key
}).then(response => {
    return {
      statusCode: 200,
      body: response.data
    };
  }).catch( error => {
    return {
      statusCode: 400
    }
  })

  return result
};
