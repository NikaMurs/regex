import Phone from '../phone';

test('Проверка номера 8 (927) 000-00-00', () => {
  const number = new Phone('8 (927) 000-00-00');
  const result = number.validatePhone();
  expect(result).toBe('+79270000000');
});

test('Проверка номера +7 960 000 00 00', () => {
  const number = new Phone('+7 960 000 00 00');
  const result = number.validatePhone();
  expect(result).toBe('+79600000000');
});

test('Проверка номера +86 000 000 0000', () => {
  const number = new Phone('+86 000 000 0000');
  const result = number.validatePhone();
  expect(result).toBe('+860000000000');
});
