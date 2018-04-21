const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/js/index.js'),
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
                },
                {
                    //Que tipo de archivo voy a recibir
                    test: /\.scss$/,
                    //Que loader lo va a cargar, es importante el orden si existe mas de 1
                    use: ExtractTextPlugin.extract({
                        use: ["css-loader","sass-loader"]
                    }),
                },
                {
                    //Que tipo de archivo voy a recibir
                    test: /\.less$/,
                    //Que loader lo va a cargar, es importante el orden si existe mas de 1
                    use: ExtractTextPlugin.extract({
                        use: ["css-loader", {
                            loader: 'less-loader',
                            options: {
                                noIeCompat: true,
                            }
                        }]
                    }),
                },
                {
                    //Que tipo de archivo voy a recibir
                    test: /\.styl$/,
                    //Que loader lo va a cargar, es importante el orden si existe mas de 1
                    use: ExtractTextPlugin.extract({
                        use: [
                            "css-loader",
                            {
                                loader: "stylus-loader",
                                options: {
                                    use: [
                                        //Ayuda a que algunos prefijos de navegadores viejos funcionen bien
                                        require('nib'),
                                        //Le da soporte a algunos mixies para que funcionen algunos media queries con una sintaxis mas sencilla
                                        require('rupture')
                                    ],
                                    import: [
                                        '~nib/lib/nib/index.styl',
                                        '~rupture/rupture/index.styl'
                                    ]
                                }
                            }
                        ]
                    }),
                },
                {
                    //Que tipo de archivo voy a recibir
                    test: /\.js/,
                    exclude: /(node_modules)/,
                    //Que loader lo va a cargar, es importante el orden si existe mas de 1
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['es2015', 'react']
                        }
                    },
                },
                {
                    //Que tipo de archivo voy a recibir
                    test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
                    use: {
                        loader: "url-loader",
                        options: {
                            presets: {
                                limit: 100000,
                            }
                        }
                    },
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                }
            ]
        },
    plugins: [
        //Aqui se depositaran los archivos que se estan extrayendo
        new ExtractTextPlugin("css/[name].css")
    ]
}