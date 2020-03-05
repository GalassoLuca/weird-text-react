export default function isPalindromes (text = '', { normalize = w => w.toLowerCase() } = {}) {
  const reverse = text.split("").reverse().join('')

  console.log(normalize(text) + ' vs ' + normalize(reverse))
  return normalize(text) === normalize(reverse)
}
