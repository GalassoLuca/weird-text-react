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

test.skip('should return only shuffled words', () => { })
test.skip('should return unique words', () => { })
