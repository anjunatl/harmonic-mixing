import React, { Component } from 'react'
import CamelotPicker from './CamelotPicker'
import './HarmonicMixer.css'
import * as CamelotMixer from './camelot.mixer'

class HarmonicMixer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      camelotKey: null
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!!this.state.camelotKey && (
      this.state.camelotKey !== prevState.camelotKey
    )) {
      const output = CamelotMixer.getMixesFor(this.state.camelotKey)
      output.possibleMixes.forEach((mix) => {
        const output = {
          name: mix.name,
          newMix: mix.newMix.signature
        };
        console.log(output);
      })
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
        <CamelotPicker onKeyChange={updateKey}></CamelotPicker>
      </div>
    )
  }
}

export default HarmonicMixer
