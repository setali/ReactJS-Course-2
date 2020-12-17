import ReactDOM from 'react-dom'
import {render} from '@testing-library/react'
import Counter from './Counter'

test('Counter testing pure', () => {
  const root = document.createElement('div')
  ReactDOM.render(<Counter />, root)

  const h3 = root.querySelector('h3').textContent
  expect(h3).toBe('My Counter')

  const button = root.querySelector('button').textContent
  expect(button).toBe('Increment')
})

test('Counter testing with testing library', () =>{
  const {getByText, getByTestId} = render(<Counter />)
  getByText(/My counter/i)
  getByText('Increment')
  expect(getByTestId('counter-value').textContent).toBe('0')
})

test('Counter testing click', () => {
  const {getByText, getByTestId} = render(<Counter />)
  const button = getByText('Increment')

  const value = getByTestId('counter-value')
  expect(value.textContent).toBe('0')

  button.click()
  button.click()
  button.click()
  button.click()

  expect(value.textContent).toBe('4')

  button.click()
  button.click()

  expect(value.textContent).toBe('6')
})




















