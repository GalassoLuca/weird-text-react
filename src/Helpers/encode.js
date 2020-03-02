export function encode ({ text = '' } = {}) {
  if (!text.length) return {}

  return {
    words: [text],
    encodedText: text
  }
}