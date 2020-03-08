export default function encode(text = '') {
  const { wordsToEncode, warnings } = getWordsToEncrypt(text)

  const encodedText = wordsToEncode.reduce(encodeWordInText, text)

  return {
    encodedWords: wordsToEncode,
    encodedText,
    warn: warnings.length && `Remember that this encriptions does not works with  ${warnings.join(';')}`
  }
}

function getWordsToEncrypt(text = '') {
  const words = text.split(/[^a-zA-Z]+/g)
  let hasShortWords, hasNonCrytableLongWords

  const wordsToEncode = words
    .filter(Boolean)
    .filter(w => !(w.length <= 3 && (hasShortWords = true)))
    .filter(w => !(distinctChars(w.slice(1, w.length - 1)).size === 1 && (hasNonCrytableLongWords = true)))

  return {
    wordsToEncode: Array.from(new Set(wordsToEncode)),
    warnings: [
      hasShortWords && 'words that have 3 character or less',
      hasNonCrytableLongWords && 'words that have a single distinct character (ignoring the first and last)',
    ].filter(Boolean)
  }
}

function distinctChars(text = '') {
  return new Set(text.split(''))
}

/* TODO: improve encodeWordInText function
 * it should randomly suffle, or, at least, it should always return a different word from the one in input
 * e.g. `Yeeah`
 **/
function encodeWordInText(text, word) {
  const matchWith = new RegExp(word, 'g')
  let replaceWith = word

  if (word.length > 3) {
    replaceWith = encodeWord(word)
  }

  return text.replace(matchWith, replaceWith)
}

function encodeWord(word) {
  const shuffled = word
    .substring(1, word.length - 1)
    .split('')
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0]) // n*logn while the shuffle can be done in Θ(n)
    .map(a => a[1])
    .join('')

  const shuffleWord = word[0] + shuffled + word[word.length - 1]

  return word !== shuffleWord ? shuffleWord : encodeWord(word)
}
