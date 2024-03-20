import './App.scss'
// @ts-ignore 
import HarmonicMixer from  './app/HarmonicMixer'
import gh_icon from './assets/GitHub-Mark-Light-32px.png'

function App() {
  return (
    <>
        <HarmonicMixer />
        <footer className="footer">
          <a href="http://www.harmonic-mixing.com/" target="_blank" rel="noopener noreferrer">Learn more about harmonic mixing</a><br />
          <a href="https://github.com/anjunatl/harmonic-mixing" target="_blank" rel="noopener noreferrer">
              <img src={gh_icon} alt='Github logo icon' width='32' height='32' />
          </a>
        </footer>
    </>
  )
}

export default App
