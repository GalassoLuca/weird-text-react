import getWords from './getWords'

test('should return a warning if there are short words', () => {
  const text = 'Hey'

  const output = getWords(text)

  expect(output.warnings.length).toBeGreaterThan(0)
  expect(output.words).toEqual([])
})

test('should return a warning if there is a long words that is not encryptable', () => {
  const text = 'Biiiiiiiiiiiiig'

  const output = getWords(text)

  expect(output.warnings.length).toBeGreaterThan(0)
  expect(output.words).toEqual([])
})

test('should return the correct list of words for a single word', () => {
  const text = 'Hello'

  const output = getWords(text)

  expect(output.warnings).toEqual([])
  expect(output.words).toEqual([text])
})

test('should return the correct list of words for a multiple words', () => {
  const text = 'Hello World'

  const output = getWords(text)


  expect(output.warnings).toEqual([])
  const expectWords = ['Hello', 'World']
  expect(output.words.sort()).toEqual(expectWords.sort())
})

test('should ignore puntuation', () => {
  const text = 'Hello! World.'

  const output = getWords(text)

  expect(output.warnings).toEqual([])
  expect(output.warnings).toEqual([])

  const expectWords = ['Hello', 'World']
  expect(output.words.sort()).toEqual(expectWords.sort())
})

test('should return unique words', () => {
  const text = 'Hola Luca hello Luca'

  const output = getWords(text)

  expect(output.warnings).toEqual([])
  expect(output.warnings).toEqual([])

  const expectWords = ['Hola', 'Luca', 'hello']
  expect(output.words.sort()).toEqual(expectWords.sort())
})
