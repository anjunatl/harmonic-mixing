import React, { Component } from 'react'
import CamelotMixer from './CamelotMixer'
import './CamelotOutput.scss'

class CamelotOutput extends Component {
  render() {
    if (this.props.camelotKey) {
      const output = CamelotMixer.getMixesFor(this.props.camelotKey)
      const newMixes = output.possibleMixes.map((mix) => {
        return {
          type: mix.type,
          name: mix.name,
          newMix: mix.newMix.signature
        }
      })

      return (
        <div className="MixingOutput">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Type</th>
                <th>Mix</th>
              </tr>
            </thead>
            <tbody>
              {newMixes.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.newMix}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )
    } else {
      return (
        <div>
          Choose a mix from above
        </div>
      )
    }
    
  }
}

export default CamelotOutput
