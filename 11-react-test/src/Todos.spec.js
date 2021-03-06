import {render, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todos from './Todos'

test('Test add todo', () => {
  const {getByPlaceholderText, getByText} = render(<Todos />)

  const firstTask = 'First task'

  const input = getByPlaceholderText('todo')
  const button = getByText('Add todo')

  fireEvent.change(input, {target: {value: firstTask}})
  fireEvent.click(button)

  getByText(firstTask)
})

test('Test add todo with user event', () => {
  const {getByText, getByPlaceholderText, getByTestId} = render(<Todos/>)

  const list = getByTestId('todo-list')

  expect(list.childNodes.length).toBe(0)

  const firstTask = "First Task"

  const input = getByPlaceholderText('todo')
  const button = getByText('Add todo')

  userEvent.type(input, firstTask)
  userEvent.click(button)

  getByText(firstTask)

  expect(list.childNodes.length).toBe(1)

  const secondTask = 'Second Task'

  userEvent.type(input, secondTask)
  userEvent.click(button)

  getByText(secondTask)

  expect(list.childNodes.length).toBe(2)

  userEvent.type(input, '')
  userEvent.click(button)

  expect(list.childNodes.length).toBe(2)

})









