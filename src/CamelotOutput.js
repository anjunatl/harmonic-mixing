import React from 'react'
import CamelotMixer from './CamelotMixer'
import NoteMapping from './NoteMapping';
import './CamelotOutput.scss'

const CamelotOutput = (props) => {
  if (props.camelotKey) {
    const output = CamelotMixer.getMixesFor(props.camelotKey)
    const currentKey = NoteMapping.getHumanNotationFromCamelotSignature(props.camelotKey)
    const newMixes = output.possibleMixes.map((mix) => {
      return {
        type: mix.type,
        name: mix.name,
        newMix: mix.newMix.signature,
        newKey: NoteMapping.getHumanNotationFromCamelotSignature(mix.newMix.signature)
      }
    })

    return (
      <div className="CamelotOutput">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Transition from {props.camelotKey} / {currentKey}</th>
              <th>Mix</th>
              <th>Key</th>
            </tr>
          </thead>
          <tbody>
            {newMixes.map((item, index) => {
              return (
                <tr className={"result mix-type--" + item.type} key={index}>
                  <td>{item.name}</td>
                  <td className="mix-type">{item.newMix}</td>
                  <td className="mix-notation">{item.newKey}</td>
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
