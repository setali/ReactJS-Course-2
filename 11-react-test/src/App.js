import Counter from './Counter'
import Todos from './Todos'
import Todo from './Todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Counter />

      <hr/>

      <Todos />

      <hr/>

      <Todo/>
    </div>
  );
}

export default App;
