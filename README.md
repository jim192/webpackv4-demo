#待解决问题  
* 多页面配置  
* 使用独立的template  
	利用forEach 函数自动生成多个HTML页面。${page}获取对应的文件命名
* 使用公用的template  
* 使用公有js  
	HtmlWebpackPlugin 的chunks 属性，改用`[page,'common']` 
* 使用独有js  
	HtmlWebpackPlugin 的chunks 属性，使用`[page]`

#踩坑记录  
##1. 运行npm start 命令行无报错，页面显示 "cannot GET"  
 代码错误。webpack.config 中 HtmlWebpackPlugin 插件配置使用错误。template和filename概念混淆    
##2. 使用 `${page}` 时，命令行报错。  
 未注意单引号和反引号区别，使用了单引号，造成报错  

#解决问题

