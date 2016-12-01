/*
1.引入需要的模块 react ,reactDom,CommentBox组件，bootstrap，model
*/

import React from 'react'; //引入react模块
//var React = require('react');相同，上面是es6语法
import ReactDOM from 'react-dom';
import CommentBox from './components/CommentBox';
//引入bootstrap.css文件
require('bootstrap/dist/css/bootstrap.css');
var model = require('./model');

/*
2.渲染页面 通过组件 CommentBox把内容 填充到 app中，设置model属性，把model存到父类的props属性集合上了，通过this.propsd.model即可调用model上的对应方法
*/
ReactDOM.render(<CommentBox model={model}/>,document.getElementById('app'));