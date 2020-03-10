import getWords from './getWords'

export interface EncodedText { encodedText: string; encodedWords: string[]; warnings?: string[] }

export default function encode(text = ''): EncodedText {
  const { words, warnings } = getWords(text)

  const encodedText = words.reduce(encodeWordInText, text)

  return {
    encodedWords: words,
    encodedText,
    warnings
  }
}

function encodeWordInText(text: string, word: string): string {
  const matchWith = new RegExp(word, 'g')
  let replaceWith = word

  if (word.length > 3) {
    replaceWith = encodeWord(word)
  }

  return text.replace(matchWith, replaceWith)
}

function encodeWord(word: string): string {
  interface ShuffleArray { number: number; obj: string }

  const shuffled = word
    .substring(1, word.length - 1)
    .split('')
    .map((a: string) => ({ number: Math.random(), obj: a }))
    .sort((a: ShuffleArray, b: ShuffleArray) => a.number - b.number) // n*logn while the shuffle can be done in Θ(n)
    .map((a: ShuffleArray) => a.obj)
    .join('')

  const shuffleWord = word[0] + shuffled + word[word.length - 1]

  if (word !== shuffleWord) {
    return shuffleWord
  }

  // it could take a while
  return encodeWord(word)
}
