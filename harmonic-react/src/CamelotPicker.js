import React, { Component } from 'react'

class CamelotPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: null,
      letter: null
    }
  }

  render() {
    const numericButtons = []
    for (let counter = 1; counter <= 12; counter++) {
      const numberHandler = () => {
        this.setState({number: counter})
      }
      numericButtons.push(<button key={counter} onClick={numberHandler}>{counter}</button>)
    }

    const letterHandler = (letter) => {
      return () => {
        this.setState({letter: letter})
      }
    }

    return (
      <div className="CamelotPicker">
        <div className="letters">
          <button onClick={letterHandler("A")}>A</button>
          <button onClick={letterHandler("B")}>B</button>
        </div>
        <div className="numbers">
          {numericButtons}
        </div>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.letter !== nextState.letter ||
        this.state.number !== nextState.number) {
      return true
    }

    return false
  }

  componentDidUpdate(prevProps, prevState) {
    if (!!this.state.letter && 
        !!this.state.number) {
      this.props.onKeyChange(this.state.number + this.state.letter)
    }
  }
}

export default CamelotPicker
