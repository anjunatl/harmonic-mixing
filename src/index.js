import React from 'react'
import ReactDOM from 'react-dom'
import HarmonicMixer from './HarmonicMixer'
import registerServiceWorker from './registerServiceWorker'

import './scss/custom.scss'
import './index.css'

ReactDOM.render(<HarmonicMixer />, document.getElementById('root'))
registerServiceWorker() // TODO: adapt to create-react-app@2
