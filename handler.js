const https = require('https');


'use strict';

module.exports.sendS3Path = async event => {
  const req = https.get('https://localhost:3000/')
  req.on('data', data => {
    console.log(data)
  })

  return {
    statusCode: 200,
    // body: JSON.stringify(
    //   {
    //     path: 'AWSLogs/261786166738/Config/us-east-2/2020/8/6/ConfigHistory/261786166738_Config_us-east-2_ConfigHistory_AWS::EC2::InternetGateway_20200806T183059Z_20200806T183059Z_1.json.gz'
    //   },
    //   null,
    //   2
    // ),
  };
};
