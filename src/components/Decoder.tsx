import React, { useState } from 'react'
import decode, { DecodedText } from '../helpers/decode'

export default function Decoder() {
  const [text, setText] = useState<string>('')
  const [words, setWords] = useState<string>('')
  const [decoded, setDecoded] = useState<DecodedText>({ decodedText: '', warnings: [] })

  function handleChange() {
    const wordsAsArray = words
      .split(',')
      .map(w => w.trim())

    setDecoded(decode(text, wordsAsArray))
  }

  return (
    <>
      <h2>Decoder</h2>
      <h3>Input</h3>
      <h4>Text to decode</h4>
      <textarea rows={5} value={text} onChange={e => { setText(e.target.value); handleChange(); }}></textarea>

      <h4>List of the original words that got encoded, <i>divided by comma ","</i></h4>
      <div>
        <input type="text" value={words} onChange={e => { setWords(e.target.value); handleChange(); }} />
      </div>

      <h3>Output</h3>
      <h4>Decoded text</h4>
      <div>
        {decoded.decodedText}
      </div>
      <h4>Warnings</h4>
      <div>
        {decoded.warnings.join(',')}
      </div>
    </>
  )
}
