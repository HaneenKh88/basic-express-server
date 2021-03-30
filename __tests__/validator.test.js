/* eslint-disable indent */

'use strict';

const supertest = require('supertest');
const server = require('../src/server');
const request = supertest(server.app);


describe('Server', () => {
   
  it('handle working routes', async () => {
    const response = await request.get('/person?name=haneen');
    // console.log(response);
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('haneen');

  });
  it('handle server errors', async () => {
    const response = await request.get('/bad');
    expect(response.status).toEqual(404);
  });

  it('handle method errors', async () => {
      const response = await request.post('/person');
      expect(response.status).toEqual(404);
    });

  it('handle server errors', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(500);
  
  });
});