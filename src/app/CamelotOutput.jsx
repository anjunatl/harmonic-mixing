import React from 'react'
import CamelotMixer from './CamelotMixer'
import NoteMapping from './NoteMapping';
import './CamelotOutput.scss'

const CamelotOutput = (props) => {
  if (props.camelotKey) {
    const output = CamelotMixer.getMixesFor(props.camelotKey)
    const currentKey = NoteMapping.getChromaticNotationFromCamelotSignature(props.camelotKey)
    const newMixes = output.possibleMixes.map((mix) => {
      return {
        type: mix.type,
        name: mix.name,
        newMix: mix.newMix.signature,
        newKey: NoteMapping.getChromaticNotationFromCamelotSignature(mix.newMix.signature)
      }
    })

    return (
      <div className="CamelotOutput">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Transition from <span className={'segment-'+props.camelotKey}>{currentKey} / {props.camelotKey}</span></th>
              <th>Key</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {newMixes.map((item, index) => {
              return (
                <tr className={"result mix-type--" + item.type + " segment-" + item.newMix} key={index}>
                  <td>{item.name}</td>
                  <td className="mix-notation" data-testid={'output-mix-notation-' + item.type}><strong>{item.newKey}</strong></td>
                  <td className="mix-type" data-testid={'output-mix-' + item.type}><strong>{item.newMix}</strong></td>
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
