export function encode ({ text = '' } = {}) {
  if (!text.length) return {}

  const words = text.split(/[^a-zA-Z]+/g).filter(Boolean)
  const encodedText = words.reduce((encodedText, word) => encodedText.replace(word, encodeWord(word)), text)

  return {
    words,
    encodedText
  }
}

function encodeWord (word) {
  if (word.length <= 3) return word

  const [a, b, c] = word
  return word[0] + c + b + word.substring(3)
}