/*
* 1.引入react模块
* */

import React from 'react';

/*
* 2.继承React，并自动默认导出
* */
export default class CommentForm extends React.Component{
    /*
    * 3.初始化构造函数，调用props
    * */
  constructor(props){
        super(props);
        this.state = {ctrlDown:false}
    }

    /*
    * 4.点击增加的事件
    *   获取含有ref属性标签中的所有内容
    *   分别赋给name和content,把姓名和内容传参到父组件的addComment中，
    *   最后清空输入框的内容
    * */
    handleClick(){
        var name = this.refs.name.value;
        var content = this.refs.content.value;
        this.props.addComment({name,content});
        this.refs.content.value = "";//清空文本域的内容
    }
    /*
    * 5.空格+回车 确认发送消息
    * */
    confirm(event){
        var code = event.keyCode;
        if(code==17){//空格
             this.setState({ctrlDown:true});//设置初始状态中的ctrlDOWM的值为true
            setTimeout(()=>{//箭头函数保证this上一级的相同，每隔一秒设置一次，ctrlDOWM的值变为默认
                this.setState({ctrlDown:false});
            },1000)
        }
        if(code==13){//enter
            if(this.state.ctrlDown){//如果空格了，并且在一秒内操作
                var content = this.refs.content.value;
                this.refs.content.value = content+'/n';//不在一秒内按下空格：内容=内容+空格
            }else{//一秒内按下空格和回车键运行点击发送
                this.handleClick();}
        }
    }
    /*
    * 6.渲染页面：姓名,文本框，留言按钮（click增加的方法）
    * */
    render(){
        return (
            <form className="form-horizontal">
                <div className="form-group">
                    <label className="control-label col-md-1" htmlFor="name">姓名</label>
                    <div className="col-md-11">
                        <input ref="name" className="form-control" type="text" id="name" name="name"/>
                    </div>
                </div>
                <div className="form-group">
                    <label className="control-label col-md-1" htmlFor="content">内容</label>
                    <div className="col-md-11">
                        <textarea  ref="content" name="content" id="content" cols="30" rows="10" className="form-control" onKeyDown={this.confirm.bind(this)}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-10 col-md-offset-2">
                        <button className="btn btn-primary" type="button" onClick={this.handleClick.bind(this)}>留言</button>
                    </div>
                </div>
            </form>
        )
    }
}