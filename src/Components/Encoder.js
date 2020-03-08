import React, { useRef, useState } from 'react'
import encode from '../Helpers/encode'

export default function Encoder() {
  const textRef = useRef()
  const [encodedWords, setEncodedWords] = useState([])
  const [encodedText, setEncodeText] = useState('')

  function encodeText (e) {
    const text = textRef.current.value

    const encoded = encode(text)
    setEncodedWords(encoded.encodedWords)
    setEncodeText(encoded.encodedText)
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
        {encodedText}
      </div>

      <h4>List of the original words that got encoded</h4>
      <div>
        {encodedWords.join(', ')}
      </div>
    </>
  )
}
