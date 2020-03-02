import { encode } from './encode'

test('should return empty object', () => {
  expect(encode()).toEqual({})
})

test('should return the expected for one short word', () => {
  const text = 'Hey'
  const expected = {
    words: ['Hey'],
    encodedText: 'Hey'
  }

  const output = encode({ text })

  expect(output).toEqual(expected)
})

test('should return the expected for one long word', () => {
  const text = 'Hello'
  const expected = {
    words: ['Hello'],
    encodedText: 'Hlelo'
  }

  const output = encode({ text })

  expect(output).toEqual(expected)
})
