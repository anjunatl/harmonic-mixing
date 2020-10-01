import React, { useState, useEffect } from 'react'
import { partial } from 'underscore';
import CamelotMixer from './CamelotMixer'
import './CamelotPicker.scss'

const CamelotPicker = (props) => {
  const [number, setNumber] = useState(null);
  const [letter, setLetter] = useState(null);

  useEffect(() => {
    if (props.camelotKey !== null) {
      setNumber(CamelotMixer.getNumberFromSignature(props.camelotKey));
      setLetter(CamelotMixer.getLetterFromSignature(props.camelotKey));
    }
  }, [props.camelotKey])

  useEffect(() => {
    if (number !== null && letter !== null) {
      props.onKeyChange('' + number + letter);
    }
  }, [number, letter]);
  
  const numericButtons = []
  const letterButtons = []

  const numberHandler = (number) => {
    setNumber(number)
  }
  
  const letterHandler = (letter) => {
    setLetter(letter)
  }
  
  for (let counter = 1; counter <= 12; counter++) {
    numericButtons.push(<button
      className={number === counter ? 'btn btn-info' : 'btn btn-secondary'}
      key={counter}
      onClick={partial(numberHandler, counter)}
      camelotnumber={counter}>
      {counter}
    </button>)
  }

  ["A", "B"].forEach((displayLetter, index) => {
    letterButtons.push(<button
      className={letter === displayLetter ? 'btn btn-info' : 'btn btn-secondary'}
      key={index}
      onClick={partial(letterHandler, displayLetter)}
      camelotletter={displayLetter}>
      {displayLetter}
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

export default CamelotPicker
