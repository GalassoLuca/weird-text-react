import { check } from '../../Helpers/palindromes'

test('should return true for empty string', () => {
  const output = check()
  expect(output).toBeTruthy()
})

test('should return true for a palindromes word', () => {
  const text = 'anna'

  const output = check(text)

  expect(output).toBeTruthy()
})

test('should convert normalize to loweCase as default', () => {
  const text = 'Anna'

  const output = check(text)

  expect(output).toBeTruthy()
})

test('should return false if there is no conversion', () => {
  const text = 'Anna'

  const output = check(text, { normalize: w => w })

  expect(output).toBeFalsy()
})

test('should return false for a non-palindromes word', () => {
  const text = 'Hola'

  const output = check(text)

  expect(output).toBeFalsy()
})
