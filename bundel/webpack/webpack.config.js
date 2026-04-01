import path from 'path'
import HtmlWebpack  from 'html-webpack-plugin'

export default {
  entry: './src/index.js',
  output:{
    filename:'index.js',
    path: path.resolve('./dist'),
  },
  module:{
    rules:[
      {
        exclude: /node_modules/,
        test:/\.css$/i,
        use:['style-loader', 'css-loader']
      },
      //for babel
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  //optional create index.html in dist automatic
  plugins:[
    new HtmlWebpack({
      filename:'index.html',
      template: path.resolve('./src/index.html')
    })
  ],
   //optional
   devServer: {
    static: {
      directory: path.join('./dist'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  devtool:'source-map'
}