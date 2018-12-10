const container = require('../../src/container');
const supertest = require('supertest');

const server = container.resolve('server');
const request = () => supertest(server.express);

module.exports = request;