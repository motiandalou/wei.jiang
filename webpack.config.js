const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", // 开发模式
  entry: "./src/index.js", // 入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    // Webpack 打包的资源会基于根路径 / 访问，而不会有 public/ 前缀
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 将 @ 映射到 src 目录
    },
    extensions: [
      ".js",
      ".jsx",
      ".json",
      ".less",
      ".css",
      ".png",
      ".jpg",
      ".svg",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // 处理图片等的加载--路径对不准的问题
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset/resource", // 使用 Webpack 5 的内置资源处理
        generator: {
          filename: "images/[name].[hash][ext]", // 生成的文件路径
        },
      },
      // 处理普通 CSS
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], // 先用 css-loader，再用 style-loader
      },
      // 处理 LESS
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"], // 依次处理 less 文件
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "public"), // 直接传递路径
    // 开启 HMR（热模块替换）
    hot: true,
    // 打开一个新窗口
    open: true,
    /// 端口
    port: 3001,
    //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    historyApiFallback: true,
  },
};
