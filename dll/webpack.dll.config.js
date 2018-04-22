const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        //Mi archivo se llamara modules.js
        modules: [
            'react',
            'react-dom',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        //Aqui se depositaran los archivos que se estan extrayendo
//        new ExtractTextPlugin("css/[name].css"),
//        new webpack.optimize.CommonsChunkPlugin({
//            name: 'vendor',
//            minChunks: Infinity,
//        })
        new webpack.DllPlugin({
            //Que nombres vamos a exportar para que puedan ser usados como referencias.
            name: "[name]", 
            //Donde va a exortr el archvo json de configuracion para que sepa de donde va a tomar las dependencais comunes
            path: path.join(__dirname, "[name]-manifest.json")
        })
    ]
}