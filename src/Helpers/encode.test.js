import { encode } from './encode'

test('should return empty object', () => {
  expect(encode()).toEqual({})
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

test('should encode multiple words', () => {
  const text = 'Hello Luca'
  const expected = {
    words: ['Hello', 'Luca'],
    encodedText: 'Hlelo Lcua'
  }

  const output = encode({ text })

  expect(output).toEqual(expected)
})

test('should ignore puntuation', () => {
  const text = 'Hello! Luca.'
  const expected = {
    words: ['Hello', 'Luca'],
    encodedText: 'Hlelo! Lcua.'
  }

  const output = encode({ text })

  expect(output).toEqual(expected)
})

test('should return only shuffled words', () => {
  const text = 'Hey, hello! Luca.'
  const expected = {
    words: ['hello', 'Luca'],
    encodedText: 'Hey, hlelo! Lcua.'
  }

  const output = encode({ text })

  expect(output).toEqual(expected)
})

test.skip('should return unique words', () => { })
