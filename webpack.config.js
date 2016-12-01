var OpenBrowerWebpackPlugin=require('open-browser-webpack-plugin');
var HtmlWebpackPlugin =require('html-webpack-plugin');//插件打包index.html
//导出一个配置对象
module.exports ={
    entry:'./app/index.js',//要打包的入口文件
    output:{
        path:'./build',//打包后的路径
        filename:'bundle.js'//制定打包后的文件名
    },
    devServer:{
        inline:true,//指定此配置项后，当源码修改后会自动打包并刷新
       port:8080,//指定静态文件端口号
       contentBase:'./build'//指定静态文件根目录
    },
    //设置模块加载器，配置一大堆的loader，对不同类型的文件如何加载，设置一个工具
    module:{
        loaders:[
            {
                test:/\.js$/,//配置文件匹配的文件后知名字
                loader:'babel'//设置加载器
            },
            {//加载css
                test:/\.css$/,
                loader:'style!css'
            },
            {//加载图片
                test:/\.(png|jpj|bmp|git|svg|ttf|woff|woff2|eot)$/,
                loader:'url?limit=4096'//判断如果大于4k就不编译成base64嵌入到bundle.js中，会引入的方式进入
            }
        ]
    },
    plugins:[
        //根据模板自动生成build目录下的html页面
        new HtmlWebpackPlugin({
            template:'./app/index.html'
        }),
        //
        new OpenBrowerWebpackPlugin({
            url:'http://localhost:8080'
        })
    ]
};
