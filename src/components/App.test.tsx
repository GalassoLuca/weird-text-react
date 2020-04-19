import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot()
})

test('should contains the title', async () => {
  const app = render(<App />)
  const title = await app.findByText('WeirdText')

  expect(title).toBeTruthy()
})
