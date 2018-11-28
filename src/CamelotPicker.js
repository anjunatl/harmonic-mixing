import React, { Component } from 'react'
import CamelotMixer from './CamelotMixer'
import './CamelotPicker.scss'

class CamelotPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: null,
      letter: null
    }
  }

  componentWillReceiveProps(nextProps) {
    // For some reason this comes through as `camelot-key` instead of `camelotKey`
    const newCamelotKey = nextProps['camelot-key'] 
    if (!!newCamelotKey && CamelotMixer.thisIsACamelotSignature(newCamelotKey)) {
      this.setState({number: CamelotMixer.getNumberFromSignature(newCamelotKey)})
      this.setState({letter: CamelotMixer.getLetterFromSignature(newCamelotKey)})
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.letter !== nextState.letter ||
        this.state.number !== nextState.number)
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
        onClick={numberHandler}
        camelot-number={counter}>
        {counter}
        </button>)
    }

    const letterButtons = []

    const letterHandler = (letter) => {
      return () => {
        this.setState({letter: letter})
      }
    }

    ["A", "B"].forEach((letter, index) => {
      letterButtons.push(<button
        className={this.state.letter === letter ? 'btn btn-info' : 'btn btn-secondary'}
        key={index} 
        onClick={letterHandler(letter)}
        camelot-letter={letter}>
        {letter}
        </button>)
    })

    return (
      <div className="CamelotPicker">
        <div className="numbers top btn-group btn-group-lg" role="group" aria-label="Camelot numbers">
          {numericButtons.slice(0, 6)}
        </div>
        <div className="numbers middle btn-group btn-group-lg" role="group" aria-label="Camelot numbers">
          {numericButtons.slice(6, 12)}
        </div>
        <div className="letters btn-group btn-group-lg" role="group" aria-label="Camelot letters">
          {letterButtons}
        </div>
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {
    if (!!this.state.letter && 
        !!this.state.number) {
      this.props.onKeyChange(this.state.number + this.state.letter)
    }
  }
}

export default CamelotPicker
