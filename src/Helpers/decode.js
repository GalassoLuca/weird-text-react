import getWords from './getWords'

export default function decode(text = '', originalWords = []) {
  if (originalWords.length === 0) {
    return { warnings: { missingWords: true } }
  }

  let decodedText = text
  const { words: wordsToDecode } = getWords(text)

  const originalWordsHasMap = originalWords.reduce(toMap, new Map())
  const wordsToDecodeHasMap = wordsToDecode.reduce(toMap, new Map())

  wordsToDecode.forEach(wordToDecode => {
    const key = getKey(wordToDecode)
    const values = originalWordsHasMap.get(key)

    if (values.length > 1) throw new Error('handle this case')

    decodedText = decodedText.replace(wordToDecode, values[0])
  })

  return { decodedText }
}

function getKey(string) {
  return string.split('').sort().join('')
}

function toMap(map, word) {
  const key = getKey(word)
  const words = map.get(key) || []

  words.push(word)

  map.set(key, words)

  return map
}