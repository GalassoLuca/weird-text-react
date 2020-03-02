import { encode } from './encode'

test('should return empty object', () => {
  expect(encode()).toEqual({})
})
