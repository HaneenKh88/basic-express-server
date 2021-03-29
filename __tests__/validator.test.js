/* eslint-disable indent */

'use strict';

const supertest = require('supertest');
const validate = require('../src/middleware/validator');
const request = supertest(validate);


describe('Server', () => {
    it('handle working routes', async () => {
      const response = await request.get('/person');
      // console.log(response);
      expect(response.status).toEqual(200);
    });
});