import CamelotMixer from './CamelotMixer'

const MIN = 'min'
const MAJ = 'maj'
const FLAT = 'flat'
const SHARP = 'sharp'

const getCircleSegment = (signature) => {
  const note = (letter, mod, mode) => ({ letter, modifier: mod, mode })
  const major = (letter, mod = null) => note(letter, mod, MAJ)
  const minor = (letter, mod = null) => note(letter, mod, MIN)
  const sector = (major, minor) => ({ major, minor })

  switch (CamelotMixer.getNumberFromSignature(signature)) {
    case 1:
      return sector(major('B'), minor('A', FLAT))
    case 2:
      return sector(major('F', SHARP), minor('E', FLAT))
    case 3:
      return sector(major('D', FLAT), minor('B', FLAT))
    case 4:
      return sector(major('A', FLAT), minor('F'))
    case 5:
      return sector(major('E', FLAT), minor('C'))
    case 6:
      return sector(major('B', FLAT), minor('G'))
    case 7:
      return sector(major('F'), minor('D'))
    case 8:
      return sector(major('C'), minor('A'))
    case 9:
      return sector(major('G'), minor('E'))
    case 10:
      return sector(major('D'), minor('B'))
    case 11:
      return sector(major('A'), minor('F', SHARP))
    case 12:
      return sector(major('E'), minor('D', FLAT))
    default:
      console.error("Invalid signature", signature)
      return null;
  }
}

const getChromaticNotationFromCamelotSignature = (signature) => {
  const note = fromCamelotSignature(signature)

  if (note) {
    const outLetter = note.letter
    const outMode = (note.mode === MIN ? 'min' : 'maj')
    let outModifier = null
    if (note.modifier === SHARP) {
      outModifier = '#'
    } else if (note.modifier === FLAT) {
      outModifier = 'b'
    }
    return outLetter + (outModifier ? outModifier : '') + ' ' + outMode
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

const NoteMapping = {
  getChromaticNotationFromCamelotSignature,
  fromCamelotSignature,
  MIN,
  MAJ,
  FLAT,
  SHARP
}

export { NoteMapping as default }
