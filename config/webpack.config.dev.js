const webpackBase = require("./webpack.config.base");

const webpackMerge = require("webpack-merge");

module.exports = webpackMerge(webpackBase,{
	//配置 webpack-dev-server
	devServer:{
		//项目根目录
		contentBase:"../dist",
		hot:true
	}
})