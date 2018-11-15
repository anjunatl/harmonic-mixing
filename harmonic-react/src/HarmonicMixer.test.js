import React from 'react'
import ReactDOM from 'react-dom'
import HarmonicMixer from './HarmonicMixer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HarmonicMixer />, div)
  ReactDOM.unmountComponentAtNode(div)
})
