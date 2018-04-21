const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
        precios: path.resolve(__dirname, 'src/js/precios.js'),
        contacto: path.resolve(__dirname, 'src/js/contacto.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
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