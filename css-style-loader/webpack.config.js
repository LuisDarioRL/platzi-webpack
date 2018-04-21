const path = require('path')

module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
                {
                //Que tipo de archivo voy a recibir
                test: /\.css$/,
                //Que loader lo va a cargar, es importante el orden si existe mas de 1
                use: ['style-loader', 'css-loader']
                }
            ]
        }
}