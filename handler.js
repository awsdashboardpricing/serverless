const axios = require('axios');


'use strict';

module.exports.sendS3Path = async event => {
  const result = axios.get('http://localhost:3000/').then(response => {
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
