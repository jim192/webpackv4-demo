const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清理dist 文件夹
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
//引入文件列表
const htmlName = require('./htmlName');
//通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = [];
//入口文件集合
let Entries = {};

htmlName.HTMLDirs.forEach((page)=>{
	const htmlPlugin = new HtmlWebpackPlugin({
		filename:`${page}.html`,
		template:path.resolve(__dirname,`../src/html/${page}.html`),
		//生成HTML文件时会自动插入相应的js
		chunks:[page],
	});
	HTMLPlugins.push(htmlPlugin);
	Entries[page] = path.resolve(__dirname,`../src/js/${page}.js`);
})


module.exports = {
	entry:Entries,
	output:{
		filename:'[name].bundle.js',
		path:path.resolve(__dirname,'../dist'),
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
		// new HtmlWebpackPlugin({
		// 	title:'output Management with html-webpack-plugin',
		// 	filename:'pageOne.html',
		// 	// template:'src/pageOne/pageOne.html'
		// 	template:'src/pageOne/pageOne.html'
		// }),
		...HTMLPlugins,
		new webpack.NamedModulesPlugin(),// It easier to see which dependencies are being patched
		new webpack.HotModuleReplacementPlugin()
	],
	// https://webpack.js.org/configuration/devtool/
	devtool:'eval-source-map',	
	//use webpack dev server
	// devServer:{
	// 	contentBase:'./dist/',//Serve the file from the /dist/ on localhost:8080
	// 	hot:true
	// }
	
};