'use strict';
const assert = require('chai').assert;
const request = require('supertest');
const utils = require('../utils.js');
const axios = require('axios');

describe('Test', () => {
  describe('Should return Title, Description and Image', async () => {
    const url = 'https://www.amazon.com/Unlocked-Original-Compatible-iPhone-A1457/dp/B08ZY4538D/';
    const res = await axios.get(url);
    const result = await utils.getData(res.data);    
    it('Result is not null', ()=>{
      assert.isNotNull(result);
    });
  });
});
