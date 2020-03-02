export function encode ({ text = '' } = {}) {
  if (!text.length) return {}

  let encodedText = text

  if (text.length > 3) {
    const [a, b, c] = text
    encodedText = text[0] + c + b + text.substring(3)
  }

  return {
    words: [text],
    encodedText
  }
}