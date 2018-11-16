import React, { Component } from 'react'

class MixingOutput extends Component {
  render() {
    if (this.props.camelotOutput.length > 0) {
      return (
        <div className="MixingOutput">
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>Mix</th>
              </tr>
            </thead>
            <tbody>
              {this.props.camelotOutput.map((item, index) => {
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

export default MixingOutput
