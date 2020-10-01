import React from 'react'
import CamelotMixer from './CamelotMixer'
import './CamelotOutput.scss'

const CamelotOutput = (props) => {
  if (props.camelotKey) {
    const output = CamelotMixer.getMixesFor(props.camelotKey)
    const newMixes = output.possibleMixes.map((mix) => {
      return {
        type: mix.type,
        name: mix.name,
        newMix: mix.newMix.signature
      }
    })

    return (
      <div className="CamelotOutput">
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
                <tr className={"result mix-type--" + item.type} key={index}>
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
      <div className="CamelotOutput empty">
        Set your current key above
      </div>
    )
  }
}

export default CamelotOutput
