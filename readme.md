##如何打包es6模块

## 全部步骤
0.新建文件夹webpack11-24 
1.初始化项目

```
  npm init -y
```
运行后会生成一个package.json文件
- 安装需要的模块
-》安装之前一定要检查当前目录有没有node_modules,如果有删除之后再在当球按目录下安装
```
npm install webpack babel-core babel-loader babel-preset-es2015 --save
```
  - webpack 就是打包的模块
  - babel-core 是babel的核心模块
  - babel-loader 是一个webpack加载器
  - babel-preset-es2015 是一个预设，是把es6代码转成es5代码的转换函数的集合
2.在webpack11-24 下新建app文件
3.app文件下新建入口文件index.js
 - app文件新建index.js入口文件和es6写的comm.js文件
4.创建配置文件webpack.config.js
```
//导出一个配置对象
module.exports ={
    entry:'./app/index.js',//要打包的入口文件
    output:{
        path:'./build',//打包后的路径
        filename:'bundle.js'//制定打包后的文件名
    },
    //设置模块加载器，配置一大堆的loader，对不同类型的文件如何加载，设置一个工具
    module:{
        loaders:[
            {
                test:/\.js$/,//配置文件匹配的文件后知名字
                loader:'babel'//设置加载器
            }
        ]
    }
};

```
5.创建babelrc.js文件,新建文件夹
```
{
  "presets":["es2015"]
}
```
6.配置package.json中的script
```
  "scripts": {
    "build": "webpack"
  }
```
7.执行打包
  F:\2016学习\C模块\webpack11-24>npm run build