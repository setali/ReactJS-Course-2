import { render, unmountComponentAtNode } from "react-dom";
import { act } from 'react-dom/test-utils'
import Todo from '../Todo'

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Todo fetch testing', async () => {

  const fakeTodo = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }

  // global.alert = jest.fn(() => {})
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeTodo)
    })
  )

  await act(async () => {
    render(<Todo/>, container)
  })

  expect(container.querySelector("h1").textContent).toBe('Todo item')
  expect(container.querySelector("p").textContent).toBe(fakeTodo.title)
})















