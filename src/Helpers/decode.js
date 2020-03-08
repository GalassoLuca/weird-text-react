import getWords from './getWords'

export default function decode(text = '', originalWords = []) {
  if (originalWords.length === 0) {
    return { warnings: [ 'Specifie the list of the original words' ] }
  }

  let decodedText = text
  const warnings = []
  const { words: wordsToDecode } = getWords(text)

  const originalWordsHasMap = originalWords.reduce(toMap, new Map())

  wordsToDecode.forEach(wordToDecode => {
    const key = getKey(wordToDecode)
    const values = originalWordsHasMap.get(key)

    if (values.length > 1) {
      const message = `Can not decode the word "${wordToDecode}". Found more the one similar word (${values.join(', ')})`
      warnings.push(message)
      return
    }

    decodedText = decodedText.replace(wordToDecode, values[0])
  })

  return { decodedText, warnings }
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