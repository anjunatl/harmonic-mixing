import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import HarmonicMixer from './HarmonicMixer'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<HarmonicMixer />, document.getElementById('root'))
registerServiceWorker() // TODO: adapt to create-react-app@2

