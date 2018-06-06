const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry:{
		app: './src/index.js'
	},
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist'),
		publicPath:'/'// Used by webpack-dev-middleware
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:['style-loader','css-loader']
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title:'output Management with html-webpack-plugin'
		}),
		new webpack.NamedModulesPlugin(),// It easier to see which dependencies are being patched
		new webpack.HotModuleReplacementPlugin()
	],
	// https://webpack.js.org/configuration/devtool/
	devtool:'eval-source-map',	
	//use webpack dev server
	devServer:{
		contentBase:'./dist',//Serve the file from the /dist/ on localhost:8080
		hot:true
	}
	
};