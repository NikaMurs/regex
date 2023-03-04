import Validator from '../validator';

test('Проверка правильного имени', () => {
  const userName = new Validator('Akim');
  const result = userName.validateUsername();
  expect(result).toBe(true);
});

test('Проверка на латинские буквы', () => {
  const userName = new Validator('Аким');
  const result = userName.validateUsername();
  expect(result).toBe(false);
});

test('Проверка на  цифры в начале', () => {
  const userName = new Validator('1akim');
  const result = userName.validateUsername();
  expect(result).toBe(false);
});

test('Проверка на  цифры в конце', () => {
  const userName = new Validator('akim1');
  const result = userName.validateUsername();
  expect(result).toBe(false);
});

test('Проверка на  цифры в середине (более 3 шт)', () => {
  const userName = new Validator('ak11111im');
  const result = userName.validateUsername();
  expect(result).toBe(false);
});
