const { suma, restar, multiplicar, dividir } = require('../src/operaciones');

test('Suma de 4 + 4 = 8', () => {
  expect(suma(4, 4)).toBe(8);
});

test('Resta de 15 - 2 = 13', () => {
  expect(restar(15, 2)).toBe(13);
});

test('Multiplicar 10 * 5 = 50', () => {
  expect(multiplicar(10, 5)).toBe(50);
});

test('Dividir de 8 / 2 = 4', () => {
  expect(dividir(8, 2)).toBe(4);
});
