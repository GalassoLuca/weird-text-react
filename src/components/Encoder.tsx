import React, { useState } from 'react'
import encode, { EncodedText } from '../helpers/encode'

export default function Encoder() {
  const [textToEncode, setTextToEncode] = useState<string>('')
  const [encoded, setEncoded] = useState<EncodedText>({ encodedText: '', encodedWords: [], warnings: [] })

  function handleChange(text: string) {
    setTextToEncode(text)
    setEncoded(encode(text))
  }

  return (
    <>
      <h2>Encoder</h2>
      <h3>Input</h3>
      <h4>Text to encode</h4>
      <textarea rows={5} value={textToEncode} onChange={e => handleChange(e.target.value)}></textarea>

      <h3>Output</h3>
      <h4>Encoded text</h4>
      <div>
        {encoded.encodedText}
      </div>

      <h4>List of the original words that got encoded</h4>
      <div>
        {encoded.encodedWords.join(',')}
      </div>
      <h4>Warnings</h4>
      <div>
        {encoded.warnings.join(',')}
      </div>
    </>
  )
}
