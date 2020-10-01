import React, { useState } from 'react'
import CamelotPicker from './CamelotPicker'
import CamelotOutput from './CamelotOutput'
import './HarmonicMixer.css'

const HarmonicMixer = (props) => {

  const [camelotKey, setCamelotKey] = useState(null);

  const updateKey = (camelotState) => {
    setCamelotKey(camelotState);
  }

  return (
    <div className="HarmonicMixer container">
      <div className="row">
        <div className="col">
          <header className="HarmonicMixer-header">
            <h1 className="HarmonicMixer-title">Harmonic Mixer</h1>
          </header>
        </div>
      </div>
      <div className="row">
        <div className="col HarmonicMixer-camelot-picker">
          <CamelotPicker camelotKey={camelotKey} onKeyChange={updateKey}></CamelotPicker>
        </div>
      </div>
      {camelotKey !== null && (
        <div className="row">
          <div className="col">
            <CamelotOutput camelotKey={camelotKey}></CamelotOutput>
          </div>
        </div>
      )}
    </div>
  )
}

export default HarmonicMixer
