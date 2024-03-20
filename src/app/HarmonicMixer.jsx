import React, { useState } from 'react'
import CamelotPicker from './CamelotPicker'
import CamelotOutput from './CamelotOutput'
import './HarmonicMixer.css'
  
// export interface IHarmonicMixerProps {

// } 


// const HarmonicMixer: IHarmonicMixer = (props: IHarmonicMixerProps) => {
const HarmonicMixer = (props) => {

  const [camelotKey, setCamelotKey] = useState(null);

  const updateKey = (camelotState) => {
    setCamelotKey(camelotState);
  }

  // todo - create & integrate a circle of fifths chart with nivo 
  // https://nivo.rocks/storybook/?path=/story/sunburst--with-custom-child-colors 
  // todo - hide arc link labels, show arc labels, change key by clicking on chart
  // todo - add a border around the active circle segment
  // todo - try to add the updated color scheme from mixedinkey
  // todo - when a mix is active, gray out the non-mix segments

  return (
    <div className="HarmonicMixer container-fluid">
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
          <div className="col HarmonicMixer-camelot-output">
            <CamelotOutput camelotKey={camelotKey}></CamelotOutput>
          </div>
        </div>
      )}
    </div>
  )
}

export default HarmonicMixer 
// export interface IHarmonicMixer extends React.FC<IHarmonicMixerProps> { }
