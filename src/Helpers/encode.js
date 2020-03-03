export function encode ({ text = '' } = {}) {
  if (!text.length) return {}

  const words = text.split(/[^a-zA-Z]+/g)
    .filter(w => w.length > 3)

  const uniqueWords = Array.from(new Set(words))
  const encodedText = uniqueWords.reduce((encodedText, word) => {
    const matchWith = new RegExp(word, 'g')
    const replaceWith = encodeWord(word)

    return encodedText.replace(matchWith, replaceWith)
  }, text)

  return {
    words: uniqueWords,
    encodedText
  }
}

/* TODO: improve encodeWord function
 * it should randomly suffle, or, at least, it should always return a different word from the one in input
 * e.g. `Yeeah`
 **/
function encodeWord (word) {
  if (word.length <= 3) return word

  const [a, b, c] = word
  return word[0] + c + b + word.substring(3)
}