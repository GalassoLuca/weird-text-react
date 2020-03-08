import getWords from './getWords'

export default function encode(text = '') {
  const { words, warnings } = getWords(text)

  const encodedText = words.reduce(encodeWordInText, text)

  return {
    encodedWords: words,
    encodedText,
    warnings
  }
}

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

  if (word !== shuffleWord) {
    return shuffleWord
  }

  // it could take a while
  return encodeWord(word)
}
