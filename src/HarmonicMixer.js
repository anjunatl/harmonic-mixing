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
      <div className="HarmonicMixer">
        <header className="HarmonicMixer-header">
          <h1 className="HarmonicMixer-title">Harmonic Mixer</h1>
        </header>
        <CamelotPicker onKeyChange={updateKey} ></CamelotPicker>
        <CamelotOutput camelotKey={this.state.camelotKey}></CamelotOutput>
      </div>
    )
  }
}

export default HarmonicMixer
