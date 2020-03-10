import React from 'react'
import styled from 'styled-components'
import Decoder from './Decoder'
import Encoder from './Encoder'

const Skin = styled.div`
  font-family: sans-serif;
`

export default function App() {
  return (
    <Skin>
      <h1>WeirdText</h1>

      
      <Encoder />
      <Decoder />
    </Skin>
  )
}
