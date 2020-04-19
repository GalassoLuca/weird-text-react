export interface SplittedWords { words: string[], warnings: string[] }

export default function getWords(text: string): SplittedWords {
  let hasShortWords = false
  let hasNonCrytableLongWords = false

  const words = text
    .split(/[^a-zA-Z]+/g)
    .filter(Boolean)
    .filter(w => !(w.length <= 3 && (hasShortWords = true)))
    .filter(w => !(getUniqueCharacters(w.slice(1, w.length - 1)).size === 1 && (hasNonCrytableLongWords = true)))

  const warnings = []
  if (hasShortWords) warnings.push('Can not encode/decode words that have 3 character or less')
  if (hasNonCrytableLongWords) warnings.push('Can not encode/decode words that have a single distinct character (ignoring the first and last)')

  return {
    words: Array.from(new Set(words)),
    warnings
  }
}

const getUniqueCharacters = (text: string): Set<string> => new Set(text.split(''))
