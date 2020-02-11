var path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    // entry: {
    //   demo:"../../../Batch5/Day17/ES6/src/ClassDemo/demo.js",
    //   main:"../../../Batch5/Day17/ES6/src/ClassDemo/main.js"
    // },
    mode:"production", // development
    entry:[

        "../OOS/src/Oops/Models/customerModel.js",
        "../OOS/src/Oops/Models/salesModel.js",

        "../OOS/src/Oops/Abstractions/salesAbstraction.js",

        "../OOS/src/Oops/BussinessLogics/silverCustomer.js",
        "../OOS/src/Oops/BussinessLogics/goldCustomer.js",
        "../OOS/src/Oops/BussinessLogics/platinumCustomer.js",
        "../OOS/src/Oops/BussinessLogics/customerContext.js",

        "../OOS/src/Oops/Controllers/salesController.js"


       
        
    ],
    output: {
        publicPath: "./dist/",
        path: path.join(__dirname, "./dist/"),
        //filename: "[name].build.js",
        filename:"build.js",
        library: 'appGlobal'
    },
    module: {
        rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" },
            //{test:/\.css?$/,loaders: ['style-loader', 'css-loader']}
             {
                 test: /\.css$/,
                 use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      // you can specify a publicPath here
                      // by default it uses publicPath in webpackOptions.output
                      publicPath: '../ES6/dist/',
                      hmr: process.env.NODE_ENV === 'development'
                      //minimize:true
                    },
                  },
                  'css-loader',
                ]
              }
        ]
   },
   resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js",".jsx",".json"]
   },
   plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new OptimizeCSSAssetsPlugin({})
  ]
};
