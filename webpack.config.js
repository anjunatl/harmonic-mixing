const path = require('path');

module.exports = {
    entry: './src/camelot.mixer.js',
    output: {
        filename: 'mixer.js',
        path: path.resolve(__dirname, 'dist')
    }
}
