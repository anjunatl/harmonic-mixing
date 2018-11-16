import React, { Component } from 'react'
import CamelotPicker from './CamelotPicker'
import CamelotMixer from './camelot.mixer'
import MixingOutput from './MixingOutput'
import './HarmonicMixer.css'

class HarmonicMixer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      camelotKey: null,
      mixes: []
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!!this.state.camelotKey && (
      this.state.camelotKey !== prevState.camelotKey
    )) {
      const output = CamelotMixer.getMixesFor(this.state.camelotKey)
      const newMixes = output.possibleMixes.map((mix) => {
        return {
          type: mix.type,
          name: mix.name,
          newMix: mix.newMix.signature
        }
      })
      this.setState({mixes: newMixes})
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
        <MixingOutput camelotOutput={this.state.mixes}></MixingOutput>
      </div>
    )
  }
}

export default HarmonicMixer
