

class Counter extends React.Component {

  // state = {
  //   value: 0
  // }
  //
  constructor () {
    super();
    this.state = {
      value: 0
    }
  }

  counter = () => {
    return React.createElement('span', {}, this.state.value)
  }

  increaseButton = () => {
    return React.createElement(
      'button',
      {
        style: {margin: '10px'},
        onClick: () => { this.setState({value: this.state.value + 1})}
      },
      'Increase'
    )
  }

  decreaseButton = () => {
    return React.createElement(
      'button',
      {
        onClick: () => this.setState({value: this.state.value - 1})
      },
      'Decrease'
    )
  }

  render() {
    console.log('render')
    return React.createElement(
      'div',
      {},
      this.counter(),
      this.increaseButton(),
      this.decreaseButton()
    )
  }
}

ReactDOM.render(React.createElement(Counter), document.querySelector('#root'))