import getWords from './getWords'

export interface EncodedText { encodedText: string; encodedWords: string[]; warnings: string[] }

export default function encode(text: string): EncodedText {
  const { words, warnings } = getWords(text)

  const encodedText = words.reduce(encodeWordInText, text)

  return {
    encodedWords: words,
    encodedText,
    warnings
  }
}

const encodeWordInText = (text: string, word: string): string => text.replace(new RegExp(word, 'g'), word.length <= 3 ? word : encodeWord(word))

function encodeWord(word: string): string {
  interface ShuffleArray { number: number; value: string }

  const shuffled = word
    .substring(1, word.length - 1)
    .split('')
    .map((a: string) => ({ number: Math.random(), value: a }))
    .sort((a: ShuffleArray, b: ShuffleArray) => a.number - b.number) // n*logn while the shuffle can be done in Θ(n)
    .map((a: ShuffleArray) => a.value)
    .join('')

  const shuffleWord = word[0] + shuffled + word[word.length - 1]

  if (word !== shuffleWord) {
    return shuffleWord
  }

  // it could take a while
  return encodeWord(word)
}
