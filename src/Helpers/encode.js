export function encode ({ text = '' } = {}) {
  if (!text.length) return {}

  const words = text.split(/[^a-zA-Z]+/g)
    .filter(w => w.length > 3)

  const uniqueWords = Array.from(new Set(words))
  const encodedText = uniqueWords.reduce((encodedText, word) => encodedText.replace(new RegExp(word, 'g'), encodeWord(word)), text)

  return {
    words: uniqueWords,
    encodedText
  }
}

function encodeWord (word) {
  if (word.length <= 3) return word

  const [a, b, c] = word
  return word[0] + c + b + word.substring(3)
}