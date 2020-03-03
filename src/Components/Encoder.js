import React, { useRef } from 'react'

export default function Encoder() {
  const textRef = useRef()

  return (
    <>
      <h2>Encoder</h2>
      <h3>Input</h3>
      <h4>Text to encode</h4>
      <textarea rows="5" ref={textRef}></textarea>

      <h3>Output</h3>
      <h4>Encoded text</h4>
      <div>Here the text.</div>

      <h4>List of the original words that got encoded</h4>
      <div>Here the list.</div>
    </>
  )
}
