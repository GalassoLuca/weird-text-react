export function encode ({ text = '' } = {}) {
  if (!text.length) {
    return { warn: 'Missing text' }
  }

  const words = text.split(/[^a-zA-Z]+/g)

  const wordsToEncode = words.filter(w => w.length > 3) // TODO: return warn for words like biiiig, heeeeeey, ...
  const encodedWords = Array.from(new Set(wordsToEncode))
  const encodedText = encodedWords.reduce(encodeWord, text)

  const result = { encodedWords, encodedText }

  if (words.some(w => w.length <= 3)) {
    result.warn = 'Words with 3 characters or less are not encrypted'
  }

  return result
}

/* TODO: improve encodeWord function
 * it should randomly suffle, or, at least, it should always return a different word from the one in input
 * e.g. `Yeeah`
 **/
function encodeWord (text, word) {
  const matchWith = new RegExp(word, 'g')
  let replaceWith = word

  if (word.length > 3) {
    const [a, b, c] = word
    replaceWith = word[0] + c + b + word.substring(3)
  }

  return text.replace(matchWith, replaceWith)
}