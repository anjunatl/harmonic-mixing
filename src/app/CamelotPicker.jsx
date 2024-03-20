import React, { useState, useEffect, useCallback } from 'react'
import { partial } from 'underscore';
import CamelotMixer from './CamelotMixer'
import NoteMapping from './NoteMapping'
import './CamelotPicker.scss'

let numericButtons = []
let letterButtons = []
const letters = ["A", "B"]

const CamelotPicker = (props) => {
  const [number, setNumber] = useState(null)
  const [letter, setLetter] = useState(null)

  const changeKey = useCallback((number, letter) => {
    props.onKeyChange('' + number + letter)
  }, [props])
  

  useEffect(() => {
    if (props.camelotKey !== null) {
      setNumber(CamelotMixer.getNumberFromSignature(props.camelotKey))
      setLetter(CamelotMixer.getLetterFromSignature(props.camelotKey))
    }
  }, [props.camelotKey])

  useEffect(() => {
    if (number !== null && letter !== null) {
      changeKey(number, letter)
    }
  }, [number, letter, changeKey])

  const numberHandler = (number) => {
    setNumber(number)
  }
  
  const letterHandler = (letter) => {
    setLetter(letter)
  }
  
  numericButtons = []
  for (let counter = 1; counter <= 12; counter++) {
    const keyNotation = letter !== null ? NoteMapping.getChromaticNotationFromCamelotSignature('' + counter + letter) : null
    numericButtons.push(
      <button
        className={number === counter ? 'btn btn-info' : 'btn btn-secondary'}
        key={counter}
        onClick={partial(numberHandler, counter)}
        camelotnumber={counter}>
        
        {keyNotation === null && (<>{counter}{letter}</>)}
        {keyNotation !== null && (<>{keyNotation}<br/>{counter}{letter}</>)}
      </button>
    )
  }

  letterButtons = []
  letters.forEach((displayLetter, index) => {
    letterButtons.push(
      <button
        className={letter === displayLetter ? 'btn btn-info' : 'btn btn-secondary'}
        key={index}
        onClick={partial(letterHandler, displayLetter)}
        camelotletter={displayLetter}>
        {displayLetter === 'A' ? 'Minor' : 'Major'}
      </button>
    )
  })

  return (
    <div className="CamelotPicker">
      <div className="letters top btn-group btn-group-lg" role="group" aria-label="Camelot letters">
        {letterButtons}
      </div>
      <div className="numbers middle btn-group btn-group-lg" role="group" aria-label="Camelot numbers">
        {numericButtons.slice(0, 6)}
      </div>
    <div  className="numbers btn-group btn-group-lg" role="group" aria-label="Camelot numbers">
        {numericButtons.slice(6, 12)}
      </div>
    </div>
  )
}

export default CamelotPicker
