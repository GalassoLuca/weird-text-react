import decode from '../../Helpers/decode'

test('should return a warning if the words are missing', () => {
  const encrypted = 'random text'

  const result = decode(encrypted)

  expect(result.warn).toBeDefined()
})

test.skip('should return a warning if a word can be decoded to multiple words', () => {
  const original = 'Carnivorous species may die from Coronavirus, like the humans.'
  const encrypted = 'Carnivorous species may die from Coronavirus, like the humans.'
  const words = ['Carnivorous', 'species', 'may', 'die', 'from', 'Coronavirus', 'like', 'the', 'humans']

  const result = decode(encrypted, words)

  expect(result.warn).toBeDefined()
  expect(result.decoded).toEqual(original)
})
