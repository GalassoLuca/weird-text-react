import decode from '../../Helpers/decode'

test('should return a warning if the words are missing', () => {
  const encrypted = 'random text'

  const result = decode(encrypted)

  expect(result.warnings.length).toBe(1)
})

test('should return a warning if an original word is missing', () => {
  // const original = 'Hello World'
  const encrypted = 'Hlelo Wrlod'
  const words = ['Hello']
  const expected = 'Hello Wrlod'

  const result = decode(encrypted, words)

  expect(result.decodedText).toEqual(expected)
  expect(result.warnings.length).toBe(1)
})

test('should decrypt a single word', () => {
  const original = 'word'

  const words = [original]
  const encrypted = 'wrod'

  const result = decode(encrypted, words)

  expect(result.decodedText).toEqual(original)
})

test('should decrypt a multiple words', () => {
  const original = 'Hello World from Luca'

  const words = ['Hello', 'World', 'from', 'Luca']
  const encrypted = 'Hlelo Wrold form Lcua'

  const result = decode(encrypted, words)

  expect(result.decodedText).toEqual(original)
})

test('should return a warning if a word can be decoded to multiple words', () => {
  // const original = 'Carnivorous species may die from Coronavirus, like the humans.'
  const expected = 'Cavoruoirns species may die from Cvnaoiurors, like the humans.'
  const encrypted = 'Cavoruoirns seceips may die form Cvnaoiurors, lkie the huamns.'
  const words = ['Carnivorous', 'species', 'may', 'die', 'from', 'Coronavirus', 'like', 'the', 'humans']

  const result = decode(encrypted, words)

  expect(result.decodedText).toEqual(expected)
  expect(result.warnings.length).toBe(2)
})
