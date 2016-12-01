/*
 1.CommentList--》对应body部分
 导入模块和子组件Comment
* */

import React from 'react';
import Comment from './Comment.js';

/*
* 2.默认导出此组件
* */

export default class CommentList extends React.Component{
    /*
    * 3.render方法渲染，调用子组件
    *  遍历循环comments中的每一条记录，渲染到页面中
    *  为Comment组件设置removeComment属性，，使用父组件中存到React父类的props属性集合上的removeComment方法，也可以说是Comment的爷爷的props里的方法，这里面的this要是CommentBox父组件的方法（React的），箭头函数中的this才是父组件中的this，所以此处使用箭头函数
    * */
    render(){
        return (
            <ul className="list-group">
                {
                    this.props.comments.map((item,index)=>{
                        return  <Comment key={index} removeComment={this.props.removeComment.bind(this)} item={item}></Comment>
                    })
                }
            </ul>
        )
    }
}