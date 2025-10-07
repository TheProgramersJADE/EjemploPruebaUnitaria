const request = require('supertest');
const app = require('../src/app');

test('GET / debe responder con API funcionando', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe('API funcionando');
});

test('GET /suma/4/4 debe devolver 8', async () => {
  const res = await request(app).get('/suma/4/4');
  expect(res.statusCode).toBe(200);
  expect(res.body.resultado).toBe(8);
});

test('GET /restar/15/2 debe devolver 13', async () => {
  const res = await request(app).get('/restar/15/2');
  expect(res.statusCode).toBe(200);
  expect(res.body.resultado).toBe(13);
});
