module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "src/camelot.mixer.js"
    ],
    coverageDirectory: './coverage/',
    transform: {
        '^.+\\.js$': 'babel-jest'
    }
};
