import getWords from './getWords'

export interface DecodedText { decodedText: string; warnings: string[] }
type WordsMap = Map<string, string[]>

export default function decode(text: string, originalWords: string[]): DecodedText {
  if (originalWords.length === 0) {
    // Is it better to create ValidationError?
    return {
      warnings: ['Specify the list of the original words'],
      decodedText: text
    }
  }

  const mapOfOriginalWords = originalWords.reduce(addToMapWithUniqueKey, new Map())

  return getWords(text).words
    .reduce((result: DecodedText, wordToDecode) => {
      const key = getKey(wordToDecode)
      const values = mapOfOriginalWords.get(key)

      if (!values) {
        result.warnings.push(`Can not decode the word ${wordToDecode}. Can not found the original word in the specified list.`)
        return result
      }

      if (values.length > 1) {
        result.warnings.push(`Can not decode the word "${wordToDecode}". Found more the one similar word (${values.join(', ')})`)
        return result
      }

      result.decodedText = result.decodedText.replace(wordToDecode, values[0])

      return result
    }, { decodedText: text, warnings: [] })
}

const getKey = (value: string): string => value.split('').sort().join('')

function addToMapWithUniqueKey(wMap: WordsMap, word: string): WordsMap {
  const key = getKey(word)
  const words = wMap.get(key) || []

  wMap.set(key, [...words, word])

  return wMap
}
