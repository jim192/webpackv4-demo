//获取所有页面，生成页面集合
//引入文件模块
let fs = require("fs");
const getFileNameList = path=> {
	let fileList = [];
	//返回指定目录下所有文件名称的数组对象
	let dirList = fs.readdirSync(path);
	dirList.forEach(item=>{
		if (item.indexOf('html')>-1) {
			fileList.push(item.split('.')[0]);
		}
	});
	return fileList;
}

module.exports = {
	// HTMLDirs:[
	// 	"index",
	// 	"pageOne",
	// 	"pageTwo",
	// 	"pageThree"
	// ],
	HTMLDirs:getFileNameList('./src/html')
}