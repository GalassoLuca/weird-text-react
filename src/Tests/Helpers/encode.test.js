import encode from '../../Helpers/encode'
import sinon from 'sinon'
import faker from 'faker'

let random

beforeEach(() => {
  faker.seed(5)
})

beforeAll(() => {
  random = sinon.stub(Math, 'random')
  random.callsFake(() => 1 / faker.random.number())
})

afterAll(() => {
  sinon.resetBehavior()
})

test('should return a warning if there are short words', () => {
  const text = 'Hey'

  const output = encode(text)

  expect(output.warnings.length).toBeGreaterThan(0)
})

test('should encrypt a word', () => {
  const text = 'Hello'
  const expected = {
    encodedWords: ['Hello'],
    encodedText: 'Hlelo'
  }

  const output = encode(text)

  expect(output.warnings.hasShortWords).toBeFalsy()
  expect(output.encodedWords.sort()).toEqual(expected.encodedWords.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test('should encode multiple words', () => {
  const text = 'Hello World'
  const expected = {
    encodedWords: ['Hello', 'World'],
    encodedText: 'Hlelo Wolrd'
  }

  const output = encode(text)

  expect(output.encodedWords.sort()).toEqual(expected.encodedWords.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test('should ignore puntuation', () => {
  const text = 'Hello! World.'
  const expected = {
    encodedWords: ['Hello', 'World'],
    encodedText: 'Hlelo! Wolrd.'
  }

  const output = encode(text)

  expect(output.encodedWords.sort()).toEqual(expected.encodedWords.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test('should only return shuffled words', () => {
  const text = 'Hey, hello! Luca.'
  const expected = {
    encodedWords: ['hello', 'Luca'],
    encodedText: 'Hey, hlelo! Lcua.'
  }

  const output = encode(text)

  expect(output.encodedWords.sort()).toEqual(expected.encodedWords.sort())
  expect(output.encodedText).toStrictEqual(expected.encodedText)
})

test('should return unique words', () => {
  const text = 'Hey Luca, hello! Luca.'
  const expected = {
    encodedWords: ['hello', 'Luca'],
    encodedText: 'Hey Lcua, hlelo! Lcua.'
  }

  const output = encode(text)

  expect(output.encodedWords.sort()).toEqual(expected.encodedWords.sort())
})
