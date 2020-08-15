const axios = require('axios');


'use strict';

module.exports.sendS3Path = async event => {
  const result = axios.post('http://localhost:3000/s3persist', {
    filePath: "AWSLogs/261786166738/Config/us-east-2/2020/8/6/ConfigHistory/261786166738_Config_us-east-2_ConfigHistory_AWS::EC2::InternetGateway_20200806T183059Z_20200806T183059Z_1.json.gz"
}).then(response => {
    console.log(response.data.message)
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
