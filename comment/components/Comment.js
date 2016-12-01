/*
* 1.导入react，继承并默认导出
* */

import React from 'react';
export default class Comment extends React.Component{
    /*
    * 2.定义自己的点击删除的事件方法，传入对应的id--》调用父组件中的删除的方法
    * */
    handleClickD(id){
        this.props.removeComment(id);
    }
    render(){
        return(
            <li className="list-group-item">
                {this.props.item.name}:{this.props.item.content}
                <span className="pull-right"> {this.props.item.createAt.toLocaleString()}
                    <button className="btn btn-danger" onClick={this.handleClickD.bind(this,this.props.item.id)}>删除</button>
                </span>
            </li>
        );
    }
}