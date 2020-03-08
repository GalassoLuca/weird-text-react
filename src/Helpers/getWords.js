export default function getWords(text = '') {
  let hasShortWords = false
  let hasNonCrytableLongWords = false

  const words = text
    .split(/[^a-zA-Z]+/g)
    .filter(Boolean)
    .filter(w => !(w.length <= 3 && (hasShortWords = true)))
    .filter(w => !(distinctChars(w.slice(1, w.length - 1)).size === 1 && (hasNonCrytableLongWords = true)))

  // if (hasShortWords) warnings.push('words that have 3 character or less')
  // if (hasNonCrytableLongWords) warnings.push('words that have a single distinct character (ignoring the first and last)')

  return {
    words: Array.from(new Set(words)),
    warnings: {
      hasShortWords,
      hasNonCrytableLongWords
    }
  }
}

function distinctChars(text = '') {
  return new Set(text.split(''))
}
