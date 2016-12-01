var COMMENTS = "COMMENTS";
module.exports = {

    /*
    * 1.本地存储，所有的记录【localStorage（本地存储--只能放字符串）】
    * */
    //查询所有的留言
    list(){
        //从localStorage（本地存储--只能放字符串）获取中一个key值
   /*   【1-1】  localStorage方法：

        localStorage.getItem(key):获取指定key本地存储的值

        localStorage.setItem(key,value)：将value存储到key字段

        localStorage.removeItem(key):删除指定key本地存储的值*/
       var str = localStorage.getItem(COMMENTS);
        return str?JSON.parse(str):[];//有就转化成对象
    },

    /*
    * 2.定义自己的增加方法和删除方法的实质性操作方法
    * */

    //增加一个留言
    add(comment){
        /*参数：增加的内容
        * 1】先获取所有记录的旧数组
        * 2】给每一条增加的内容，增加一个id属性，方便删除时候获取
        * 3】添加时间字符串
        * 4】把增加的内容push增加到旧的数组中去
        * 5】设置COMMENTS，内容为旧的数组
        * 6】返回增加新纪录后的新数组
        * */
        var comments = this.list();//先查询老数组
        comment.id = 'ID_'+Date.now();//添加ID，为了以后方便删除
        comment.createAt = new Date().toLocaleString();//添加时间字符串
        comments.push(comment);//把此对象comment添加到comments里
        //再次转成字符串保存到localStorage中去
        localStorage.setItem(COMMENTS,JSON.stringify(comments));//转为字符串格式
        return comments;//返回最新数组
    },
    //删除一个留言
    remove(id){
        /*参数：删除内容的对应id
         * 1】先获取所有记录的旧数组
         * 2】过滤掉与所传id有相同id的那条记录内容，并返回过滤后的新数组
         * 3】重新设置COMMENTS，内容为现在的数组内容
         * 6】返回删除相应id记录后的新数组
         * */
        var comments = this.list();//先查询老数组
        comments=comments.filter(function(item){
            return item.id!=id;
        });
        localStorage.setItem(COMMENTS,JSON.stringify(comments));//转为字符串格式
        return comments;//返回最新数组
    }
};