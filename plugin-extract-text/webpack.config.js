const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                }),
                }
            ]
        },
    plugins: [
        //Aqui se depositaran los archivos que se estan extrayendo
        new ExtractTextPlugin("css/[name].css")
    ]
}