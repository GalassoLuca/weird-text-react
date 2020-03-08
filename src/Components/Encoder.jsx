import React, { useRef, useState } from 'react'
import encode from '../helpers/encode'

export default function Encoder() {
  const textRef = useRef()
  const [encoded, setEncoded] = useState({ encodedText: '', encodedWords: [], warnings: '' })

  function encodeText (e) {
    const text = textRef.current.value

    setEncoded(encode(text))
  }

  return (
    <>
      <h2>Encoder</h2>
      <h3>Input</h3>
      <h4>Text to encode</h4>
      <textarea rows="5" ref={textRef} onChange={encodeText}></textarea>

      <h3>Output</h3>
      <h4>Encoded text</h4>
      <div>
        {encoded.encodedText}
      </div>

      <h4>List of the original words that got encoded</h4>
      <div>
        {encoded.encodedWords.join(', ')}
      </div>
    </>
  )
}
