const path = require('path')

// vue.config.js
module.exports = {
  // 基本路径(相对于服务器根目录   静态资源的相对路径)
  // publicPath: process.env.NODE_ENV === "production" ? "/bgc/" : "/bgc/", //font scss资源路径 不同环境切换控制
  publicPath: './',
  // assetsDir:"bgc",
  productionSourceMap: false, // 打包时不要map文件
  // 输出文件目录
  outputDir: 'dist',

  // 是否在保存的时候检查
  lintOnSave: true,

  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  // assetsDir: 'statick',

  devServer: {
    host: '0.0.0.0',
    // https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器  http://172.16.1.12:7071/rest/mcdPhoneBar/
    hotOnly: true, // 热更新
    disableHostCheck: true,
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://188.131.156.246:8110/api', // 测试
        //   target: 'http://192.168.3.45:8110/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

}
