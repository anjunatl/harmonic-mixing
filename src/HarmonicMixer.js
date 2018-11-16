import React, { Component } from 'react'
import CamelotPicker from './CamelotPicker'
import CamelotOutput from './CamelotOutput'
import './HarmonicMixer.css'

class HarmonicMixer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      camelotKey: null
    }
  }

  render() {
    const updateKey = (camelotState) => {
      this.setState({camelotKey: camelotState})
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
            <CamelotPicker onKeyChange={updateKey}></CamelotPicker>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <CamelotOutput camelotKey={this.state.camelotKey}></CamelotOutput>
          </div>
        </div>
      </div>
    )
  }
}

export default HarmonicMixer
