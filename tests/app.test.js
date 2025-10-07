const request = require('supertest');
const app = require('../src/app');

test('GET / debe responder con API funcionando', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('API funcionando');
});

test('GET /suma/2/3 debe devolver 5', async () => {
  const res = await request(app).get('/suma/2/3');
  expect(res.statusCode).toBe(200);
  expect(res.body.resultado).toBe(5);
});

test('GET /restar/10/4 debe devolver 6', async () => {
  const res = await request(app).get('/restar/10/4');
  expect(res.statusCode).toBe(200);
  expect(res.body.resultado).toBe(6);
});
