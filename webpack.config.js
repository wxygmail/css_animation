const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./index.js"
  },
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    //配置打包出来后的HTML模板，title此时无效，因为自定义了template
    new HtmlWebpackPlugin({
      title: "css animation",
      template: "./index.html"
    }),
    //整理dist
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        // 对".js"或".jsx"结尾的文件使用babel-loader进行转译
        // babel-loader的配置放到".babelrc"文件内
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        // 使用file-loader来加载图片文件
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: "file-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
    ]

  }
}