const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry:{
		app: './src/index.js',
		print:'./src/print.js'
	},
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'dist')
	},
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title:'output Management with html-webpack-plugin'
		})
	],
	// https://webpack.js.org/configuration/devtool/
	devtool:'eval-source-map',
	devServer:{
		contentBase:'./dist'//Serve the file from the /dist/ on localhost:8080
	}
};