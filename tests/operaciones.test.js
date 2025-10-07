const { suma, restar, multiplicar, dividir } = require('../src/operaciones');

test('Suma de 2 + 3 = 5', () => {
  expect(suma(2, 3)).toBe(5);
});

test('Resta de 10 - 4 = 6', () => {
  expect(restar(10, 4)).toBe(6);
});

test('Multiplicar 4 * 5 = 20', () => {
  expect(multiplicar(4, 5)).toBe(20);
});

test('Dividir de 4 / 2 = 2', () => {
  expect(dividir(4, 2)).toBe(2);
});
