
const Types = {
  relative: 'relative',
  dominant: 'dominant',
  subdominant: 'subdominant',
  parallel: 'parallel',
  diagonal: 'diagonal',
  gentleBoost: 'gentleBoost',
  rapidBoost: 'rapidBoost'
}

const Algorithms = [
  {
    type: Types.relative,
    name: 'Relative key',
    move: {
      steps: 0,
      position: 'switch'
    }
  },
  {
    type: Types.dominant,
    name: 'Dominant key',
    move: {
      steps: 1,
      position: 'stay'
    }
  },
  {
    type: Types.subdominant,
    name: 'Subdominant key',
    move: {
      steps: -1,
      position: 'stay'
    }
  },
  {
    type: Types.parallel,
    name: 'Parallel key',
    move: {
      steps: -3,
      position: 'switch'
    }
  },
  {
    type: Types.diagonal,
    name: 'Diagonal mix',
    move: {
      fn: function (startingNumber, startingLetter) {
        if (startingLetter === 'A') {
          return {
            steps: -1,
            position: 'switch'
          }
        } else {
          return {
            steps: 1,
            position: 'switch'
          }
        }
      }
    }
  },
  {
    type: Types.gentleBoost,
    name: 'Gentle energy boost',
    move: {
      steps: 7,
      position: 'stay'
    }
  },
  {
    type: Types.rapidBoost,
    name: 'Rapid energy boost',
    move: {
      steps: 2,
      position: 'stay'
    }
  }
]

const camelotRegex = /\d{1,2}[ABab]{1}/g
const camelotNumberRegex = /\d{1,2}/g
const camelotLetterRegex = /[ABab]{1}/g

const getMixesFor = (inputCamelotSignature) => {

  if (thisIsACamelotSignature(inputCamelotSignature)) {
    var number = getNumberFromSignature(inputCamelotSignature)
    var letter = getLetterFromSignature(inputCamelotSignature)

    var result = {
      startingSignature: inputCamelotSignature,
      startingNumber: number,
      startingLetter: letter,
      possibleMixes: [].concat(CamelotMixer.Algorithms)
    }

    result.possibleMixes.map(function (algorithm, index, collection) {
      var newNumber
      var newLetter
      if (algorithm.move.fn) {
        var custom = algorithm.move.fn(this.startingNumber, this.startingLetter)
        newNumber = getNewNumber(this.startingNumber, custom.steps)
        newLetter = getNewLetter(this.startingLetter, custom.position)
      } else {
        newNumber = getNewNumber(this.startingNumber, algorithm.move.steps)
        newLetter = getNewLetter(this.startingLetter, algorithm.move.position)
      }

      var newSignature = newNumber + newLetter

      var newMix = {
        number: newNumber,
        letter: newLetter,
        signature: newSignature
      }

      algorithm.newMix = newMix
      return algorithm

      function getNewNumber(startingNumber, steps) {
        var positive = steps > 0
        var actualSteps = Math.abs(steps)
        var newStep = startingNumber
        while (actualSteps !== 0) {
          if (positive) {
            newStep++
          } else {
            newStep--
          }
          if (newStep === 0) {
            newStep = 12
          } else if (newStep === 13) {
            newStep = 1
          }
          actualSteps--
        }

        return newStep
      }

      function getNewLetter(startingLetter, position) {
        if (position === 'switch') {
          return startingLetter === 'A' ? 'B' : 'A'
        } else {
          return startingLetter
        }
      }
    }, result)

    return result
  } else {
    return null
  }
}

const thisIsACamelotSignature = (input) => {
  if (input.match(camelotRegex)) {
    var number = getNumberFromSignature(input)
    if (1 <= number && number <= 12) {
      return true
    } else {
      //console.error("1-12 please")
      return false
    }
  } else {
    //console.error("Examples: 12A, 1B, 5B")
    return false
  }
}

const getNumberFromSignature = (signature) => {
  var numberString = signature.match(camelotNumberRegex)[0]
  return Number.parseInt(numberString)
}

const getLetterFromSignature = (signature) => {
  return signature.match(camelotLetterRegex)[0].toUpperCase()
}

const CamelotMixer = {
  Types: Types,
  Algorithms: Algorithms,
  getMixesFor: getMixesFor,
  thisIsACamelotSignature: thisIsACamelotSignature,
  getNumberFromSignature: getNumberFromSignature,
  getLetterFromSignature: getLetterFromSignature
}

export { CamelotMixer as default }
