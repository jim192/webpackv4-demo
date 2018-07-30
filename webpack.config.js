//获取环境命令，去除首位空格
const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig,"");
//根据环境变量引用相关配置文件
module.exports = require(`./config/webpack.config.${env}.js`)