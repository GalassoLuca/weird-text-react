import React, { useRef, useState } from 'react'
import decode, { DecodedText } from '../helpers/decode'

export default function Decoder() {
  const textRef = useRef<HTMLTextAreaElement>(null)
  const wordsRef = useRef<HTMLInputElement>(null)
  const [decoded, setDecoded] = useState<DecodedText>({ decodedText: '', warnings: [] })

  function decodeText() {
    const text = textRef.current?.value
    const words = wordsRef.current?.value
      .split(',')
      .map(w => w.trim())

    setDecoded(decode(text, words))
  }

  return (
    <>
      <h2>Decoder</h2>
      <h3>Input</h3>
      <h4>Text to decode</h4>
      <textarea rows={5} ref={textRef} onChange={decodeText}></textarea>

      <h4>List of the original words that got encoded, <i>divided by comma ","</i></h4>
      <div>
        <input type="text" ref={wordsRef} onChange={decodeText} />
      </div>

      <h3>Output</h3>
      <h4>Decoded text</h4>
      <div>
        {decoded.decodedText}
      </div>
    </>
  )
}
