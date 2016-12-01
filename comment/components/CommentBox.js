/*
* 1.引入模块及对应组件
* */

import React from 'react';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js';
//var React = require('react');相同，上面是es6语法
//import ReactDOM from 'react-dom';

//自己定义的组件继承自React.Compontent类就可以了
/*
* 2.创建组件CommentBox，默认导出default
* */
export default class CommentBox extends  React.Component{
/*
* 3.构造函数，初始化，使用父级的props属性，存储model，子类便可调用model上的方法了
* */
    //构造函数 在es6中是在构造函数初始化私有属性的数据的
    constructor(props){//构造函数中第一行要马上调用父类的构造函数
        //通过this.state初始状态相当于es5中的getInitialState()
        super(props);//父类.call（this）
        this.state = {comments:this.props.model.list()};
    }
/*
* 4.重新定义增加方法，包层外壳，重新设置初始化后的状态把model.add方法附到自己的身上
* 【！！！在ES6，自定义函数的this指针不会自动指向当前组件的实例】
* */
 addComment(comment){
        var newComments = this.props.model.add(comment);
        //!!!!!! 【【【在ES6，自定义函数的this指针不会自动指向当前组件的实例】】】
        this.setState({comments:newComments});
    }
/*
* 5.重新定义删除方法，同上，包层外壳，重新设置初始化后的状态把model.remove方法附到自己的身上
* */
   removeComment(id){
        var newComments  = this.props.model.remove(id);
        //!!!!!! 在ES6，自定义函数的this指针不会自动指向当前组件的实例
        this.setState({comments:newComments});
    }

/*
* 6.render渲染页面panel—》{heading，body《通过CommentList组件来渲染》，footer《通过CommentForm组件来渲染》}
*
* */
    //把数据通过属性传递给子组件
    render(){
        return(
            <div className="panel panel-success ">
                <div className="panel-heading">
                    <h3 className="text-center">wd留言板</h3>
                </div>
                <div className="panel-body">
                    <CommentList comments={this.state.comments} removeComment={this.removeComment.bind(this)}></CommentList>
                </div>
                <div className="panel-footer">
                    <CommentForm addComment={this.addComment.bind(this)}></CommentForm>
                </div>
            </div>
        )
    }
}
//export {CommentBox as default}

//npm run dev-comment