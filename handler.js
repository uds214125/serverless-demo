'use strict';
const axios = require('axios');
const utils = require('./utils.js');
module.exports.parseOGD = async (event) => {

  const url = 'https://www.amazon.com/Unlocked-Original-Compatible-iPhone-A1457/dp/B08ZY4538D/';
  try {
    const res = await axios.get(url);
    const result = await utils.getData(res.data);

    return { 
      statusCode: 200, 
      body: JSON.stringify({ message: 'OK', output: result }, null, 2) 
    };
  } catch (error) {
    console.error(error);
  }
};
