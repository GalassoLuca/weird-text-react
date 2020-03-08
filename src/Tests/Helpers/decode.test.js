import decode from '../../Helpers/decode'

test('should return a warning if the words are missing', () => {
  const encrypted = 'random text'

  const result = decode(encrypted)

  expect(result.warnings.missingWords).toBeTruthy()
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

test.skip('should return a warning if a word can be decoded to multiple words', () => {
  const original = 'Carnivorous species may die from Coronavirus, like the humans.'
  const encrypted = 'Carnivorous species may die from Coronavirus, like the humans.'
  const words = ['Carnivorous', 'species', 'may', 'die', 'from', 'Coronavirus', 'like', 'the', 'humans']

  const result = decode(encrypted, words)

  expect(result.warn).toBeDefined()
  expect(result.decoded).toEqual(original)
})
