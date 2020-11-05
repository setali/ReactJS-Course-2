import React from 'react'

class CreateRef extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      showSearchBox: false
    }

    this.textInput = React.createRef()
  }


  componentDidMount () {
    // this.textInput.current.focus()
  }


  activeSearchBox() {
    // this.setState({showSearchBox: true}, () => {
    //   console.log(this.textInput.current)
    //   this.textInput.current.focus()
    // })
    this.textInput.current.focus()
  }

  render () {
    return (
      <div>
        {/*{*/}
        {/*  this.state.showSearchBox &&*/}
        {/*  <input ref={this.textInput} type="text"/>*/}
        {/*}*/}

        <input
          ref={this.textInput}
          type="text"
          // style={{display: this.state.showSearchBox ? 'inline' : 'none'}}
        />
        <button onClick={() => this.activeSearchBox()}>Search</button>
      </div>
    );
  }
}

export default CreateRef