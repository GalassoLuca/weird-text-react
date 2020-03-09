import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})

test.todo('should contains the title')
test.todo('should contains the Encoder')
test.todo('should contains the Decoder')