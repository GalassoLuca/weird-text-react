import React, { useRef, useState } from 'react'
import decode from '../Helpers/decode'

export default function Decoder() {
  const textRef = useRef()
  const wordsRef = useRef()
  const [decoded, setDecoded] = useState({ decodedText: '', warnings: '' })

  function decodeText(e) {
    const text = textRef.current.value
    const words = wordsRef.current.value.split(',')

    console.log('text', text)
    console.log('words', words)
    setDecoded(decode(text, words))
  }

  return (
    <>
      <h2>Decoder</h2>
      <h3>Input</h3>
      <h4>Text to decode</h4>
      <textarea rows="5" ref={textRef} onChange={decodeText}></textarea>

      <h4>List of the original words that got encoded</h4>
      <div>
        <input type="text" ref={wordsRef} onChange={decodeText}/>
      </div>

      <h3>Output</h3>
      <h4>Decoded text</h4>
      <div>
        {decoded.decodedText}
      </div>
    </>
  )
}
