import { encode } from '../../Helpers/encode'

test('should return a warning for missing param', () => {
  const output = encode()
  expect(output.warn).toBeDefined()
})

test('should return a warning if there are short words', () => {
  const text = 'Hey'

  const output = encode({ text })

  expect(output.warn).toBeDefined()
})

test('should return the expected for one long word', () => {
  const text = 'Hello'
  const expected = {
    encodedWords: ['Hello'],
    encodedText: 'Hlelo'
  }

  const output = encode({ text })

  expect(output).toEqual(expected)
})

test('should encode multiple words', () => {
  const text = 'Hello Luca'
  const expected = {
    encodedWords: ['Hello', 'Luca'],
    encodedText: 'Hlelo Lcua'
  }

  const output = encode({ text })

  expect(output.encodedWords.sort()).toEqual(expected.encodedWords.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test('should ignore puntuation', () => {
  const text = 'Hello! Luca.'
  const expected = {
    encodedWords: ['Hello', 'Luca'],
    encodedText: 'Hlelo! Lcua.'
  }

  const output = encode({ text })

  expect(output.encodedWords.sort()).toEqual(expected.encodedWords.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test('should return only shuffled words', () => {
  const text = 'Hey, hello! Luca.'
  const expected = {
    encodedWords: ['hello', 'Luca'],
    encodedText: 'Hey, hlelo! Lcua.'
  }

  const output = encode({ text })

  expect(output.encodedWords.sort()).toEqual(expected.encodedWords.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test('should return unique words', () => {
  const text = 'Hey Luca, hello! Luca.'
  const expected = {
    encodedWords: ['hello', 'Luca'],
    encodedText: 'Hey Lcua, hlelo! Lcua.'
  }

  const output = encode({ text })

  expect(output.encodedWords.sort()).toEqual(expected.encodedWords.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test.skip('should shuffle words', () => { })
