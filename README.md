Harmonic Mixing
================================================================================

A JavaScript tool to help you find music while djing.

For more information about harmonic mixing: http://www.harmonic-mixing.com/howto.aspx

Dev setup
--------------------------------------------------------------------------------

1. `npm install`
1. `npm run dev`

Usage
--------------------------------------------------------------------------------

1. Open `src/mixer.html` in a web browser

Development
--------------------------------------------------------------------------------

Things picked up along the way

* [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
* [Uncovered Line #s in jest output is not a count, it's a list](https://github.com/istanbuljs/nyc/issues/35#issuecomment-121008298)

## Tests

* Run `npm install` to install the dependencies
* Run `npm test` to run the Jest unit tests
* Run `npm run coverage` & browse to http://localhost:8001 to see code coverage

## Package Info

```json
  "devDependencies": {
    // peer-dependency for ajv-keywords@3.2.0
    // saw while installing `webpack webpack-cli`
    "ajv": "^6.5.4",
    // dev web server
    "http-server": "0.11.1",
    // unit tests - https://jestjs.io/
    "jest": "23.5.0",
    // functional programming helpers - https://underscorejs.org/
    "underscore": "1.8.3",
    // babel - so jest can understand the syntax https://github.com/vuejs/vue-cli/issues/1584#issuecomment-397738332 
    "babel-core": "^6.26.3",
    "babel-jest": "^23.6.0",
    "regenerator-runtime": "^0.12.1",
    "babel-preset-env": "^1.7.0"
  },
  "dependencies": {
    // HTML templates - https://polymer.github.io/lit-html/
    "lit-html": "^0.12.0"
  }
```

# Camelot System & Notation

The Camelot system and all related assets are (C) Mixed In Key LLC

I have no affiliation with [MixedInKey](https://mixedinkey.com/), this code just uses their Camelot notation to traverse the [circle of fifths](https://en.wikipedia.org/wiki/Circle_of_fifths).
