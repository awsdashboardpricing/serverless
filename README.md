Welcome to our app

To start function with input locally
** Make sure the path exist before invoke the function **
`sam local generate-event s3 put --bucket hoang-le-personal-data-bucket --key AWSLogs/261786166738/Config/us-east-2/2020/8/6/ConfigHistory/261786166738_Config_us-east-2_ConfigHistory_AWS::EC2::InternetGateway_20200806T183059Z_20200806T183059Z_1.json.gz | serverless invoke local --function sendS3Path`