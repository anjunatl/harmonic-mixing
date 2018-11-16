import './scss/custom.scss'
import './index.css'

/* TODO: For some reason, the button box-shadow overrides in 
CamelotPicker.scss aren't recognized unless these are 
imported before the js imports */

import React from 'react'
import ReactDOM from 'react-dom'
import HarmonicMixer from './HarmonicMixer'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<HarmonicMixer />, document.getElementById('root'))
registerServiceWorker() // TODO: adapt to create-react-app@2
