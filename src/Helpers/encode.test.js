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

  expect(output.words.sort()).toEqual(expected.words.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test('should ignore puntuation', () => {
  const text = 'Hello! Luca.'
  const expected = {
    words: ['Hello', 'Luca'],
    encodedText: 'Hlelo! Lcua.'
  }

  const output = encode({ text })

  expect(output.words.sort()).toEqual(expected.words.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test('should return only shuffled words', () => {
  const text = 'Hey, hello! Luca.'
  const expected = {
    words: ['hello', 'Luca'],
    encodedText: 'Hey, hlelo! Lcua.'
  }

  const output = encode({ text })

  expect(output.words.sort()).toEqual(expected.words.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test('should return unique words', () => {
  const text = 'Hey Luca, hello! Luca.'
  const expected = {
    words: ['hello', 'Luca'],
    encodedText: 'Hey Lcua, hlelo! Lcua.'
  }

  const output = encode({ text })

  expect(output.words.sort()).toEqual(expected.words.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test.skip('should shuffle words', () => { })
