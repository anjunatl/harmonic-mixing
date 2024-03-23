import CamelotMixer from './CamelotMixer'

const MIN = 'min'
const MAJ = 'maj'
const FLAT = 'flat'
const SHARP = 'sharp'

const getCircleSegment = (signature) => {
  const note = (letter, mod, mode) => ({ letter, modifier: mod, mode })
  const major = (letter, mod = null) => note(letter, mod, MAJ)
  const minor = (letter, mod = null) => note(letter, mod, MIN)
  const segment = (major, minor) => ({ major, minor })

  switch (CamelotMixer.getNumberFromSignature(signature)) {
    case 1:
      return segment(major('B'), minor('A', FLAT))
    case 2:
      return segment(major('F', SHARP), minor('E', FLAT))
    case 3:
      return segment(major('D', FLAT), minor('B', FLAT))
    case 4:
      return segment(major('A', FLAT), minor('F'))
    case 5:
      return segment(major('E', FLAT), minor('C'))
    case 6:
      return segment(major('B', FLAT), minor('G'))
    case 7:
      return segment(major('F'), minor('D'))
    case 8:
      return segment(major('C'), minor('A'))
    case 9:
      return segment(major('G'), minor('E'))
    case 10:
      return segment(major('D'), minor('B'))
    case 11:
      return segment(major('A'), minor('F', SHARP))
    case 12:
      return segment(major('E'), minor('D', FLAT))
    default:
      console.error("Invalid signature", signature)
      return null;
  }
}

const getChromaticNotationFromCamelotSignature = (signature) => {
  const note = fromCamelotSignature(signature)

  if (note) {
    const outLetter = note.letter
    const outMode = (note.mode === MIN ? 'm' : 'M')
    let outModifier = null
    if (note.modifier === SHARP) {
      outModifier = '#'
    } else if (note.modifier === FLAT) {
      outModifier = 'b'
    }
    return outLetter + (outModifier ? outModifier : '') + '' + outMode
  } else {
    return ''
  }
}

const fromCamelotSignature = (signature) => {
  
  const segment = getCircleSegment(signature);

  switch (CamelotMixer.getLetterFromSignature(signature)) {
    case 'A':
      return segment.minor
    case 'B':
      return segment.major
    default:
      console.error("Invalid signature", signature)
      return null
  }
}

const updateKeyNotationForDisplay = (keyNotationText) => {
  const first = keyNotationText[0]
  const rest = keyNotationText.slice(1)
  return <>{first}<small className='text-muted'>{rest}</small></>
}

const NoteMapping = {
  getChromaticNotationFromCamelotSignature,
  updateKeyNotationForDisplay,
  fromCamelotSignature,
  MIN,
  MAJ,
  FLAT,
  SHARP
}

export { NoteMapping as default }
