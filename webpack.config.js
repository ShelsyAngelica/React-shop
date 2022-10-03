
const path = require('path'); //const que nos permite saber donde vamos a trabajar , donde esta ubicado este proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { TRUE } = require('sass');

module.exports = {
    entry:'./src/index.js', //donde esta el punto de entrada de nuestro proyecto
    output: { //donde va a vivir nuestro proyecto una vez este preparado
        path: path.resolve(__dirname, 'dist'), //__dirname para saber donde me encuentro y dist carpeta donde va a vivir nuestro proyecto
        filename: 'bundle.js', //nombre al empaquetado que se va a crear
        publicPath: '/' //va a usar la raiz
    },
    mode: 'development',
    //con que extensiones voy a trabajar
    resolve:{
        extensions:['.js','.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@logos': path.resolve(__dirname, 'src/assets/Logos'),
            '@icons': path.resolve(__dirname, 'src/assets/Icons'),
            '@hooks': path.resolve(__dirname, 'src/hooks')
        }
    },
    //reglas que vamos a crear con nuestros loader y nuestros plugins 
    module:{
        rules: [
            {
                test: /\.js|jsx$/, //va a entender todos los archivos que sean js o jsx y poder trabajar con ellos
                exclude: /node_modules/, //excluir lo que no quiero que lea dentro de este proyecto
                 use: { // usamos el loader
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.html$/, //para trabajar con html
                use:[
                    {
                        loader:'html-loader'
                    }
                ]
            },
            {
                test: /\.(scss|css)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }

        ]
    },
    //agregramos los plugins que vamos a estar utilizando
    plugins: [
        new HtmlWebpackPlugin({
            inject:true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer:{
        historyApiFallback: true,
    }

} 