import React from 'react'

export default function Decoder() {
  return (
    <>
      <h2>Decoder</h2>
      <h3>Input</h3>
      <h4>Text to decode</h4>
      <textarea rows="5"></textarea>

      <h4>List of the original words that got encoded</h4>
      <div>
        <input type="text" />
      </div>

      <h3>Output</h3>
      <h4>Decoded text</h4>
      <div>Here the text.</div>
    </>
  )
}
