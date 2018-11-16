import React, { Component } from 'react'
import './CamelotPicker.scss'

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
      numericButtons.push(<button 
        className={this.state.number === counter ? 'btn btn-info' : 'btn btn-secondary'}
        key={counter} 
        onClick={numberHandler}>
        {counter}
        </button>)
    }

    const letterHandler = (letter) => {
      return () => {
        this.setState({letter: letter})
      }
    }

    return (
      <div className="CamelotPicker">
        <div className="letters btn-group btn-group-lg" role="group" aria-label="Camelot letters">
          <button className={this.state.letter === "A" ? 'btn btn-info' : 'btn btn-secondary'} onClick={letterHandler("A")}>A</button>
          <button className={this.state.letter === "B" ? 'btn btn-info' : 'btn btn-secondary'} onClick={letterHandler("B")}>B</button>
        </div>
        <div className="numbers middle btn-group btn-group-lg" role="group" aria-label="Camelot numbers">
          {numericButtons.slice(0, 6)}
        </div>
        <div className="numbers bottom btn-group btn-group-lg" role="group" aria-label="Camelot numbers">
          {numericButtons.slice(6, 12)}
        </div>
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.letter !== nextState.letter ||
        this.state.number !== nextState.number)
  }

  componentDidUpdate(prevProps, prevState) {
    if (!!this.state.letter && 
        !!this.state.number) {
      this.props.onKeyChange(this.state.number + this.state.letter)
    }
  }
}

export default CamelotPicker
