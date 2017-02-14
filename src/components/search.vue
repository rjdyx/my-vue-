<template>
  <div class="search">
    <div class="search_tab">
    <button class="new" v-on:click="show()">新建</button>
    <input type="text" placeholder="畜禽名称" class="search_inp">
    <button class="search_btn">搜索</button>
  </div>
    <div class="list" v-if="willShow">
    <ul class="title">
      <li>序号</li>
      <li>养殖场名称</li>
      <li>养殖面积</li>
      <li>负责人</li>
    </ul>
    <ul class="title bg" v-for="item in list">
      <li><input type="checkbox" :value="item.name" v-model="checked"></li>
      <li>{{item.name}}</li>
      <li>{{item.inch}}</li>
      <li>{{item.people}}</li>
    </ul>
  </div>
    <div class="renew" v-else>
     <table cellspacing="0" width="100%" class="renewtable">
       <tr>
         <td colspan="2"><img src="../assets/upload.png"></td>
       </tr>
       <tr>
         <td colspan="2">
           <button class="delete">删除</button>
         </td>
       </tr>
       <tr>
         <td>禽兽名称</td>
         <td><input type="text" name="" value="必填"></td>
       </tr>
       <tr>
         <td>品种描述</td>
         <td><input type="text" name=""></td>
       </tr>
       <tr>
         <td>RFID位置</td>
         <td><input type="text" name=""></td>
       </tr>
       <tr>
         <td>备注信息</td>
         <td><input type="text" name=""></td>
       </tr>
       <tr>
         <td><button class="lasttd">取消</button></td>
         <td><button class="lasttd">保存</button></td>
       </tr>
     </table>
  </div>
    <div class="deleteLi">
    <ul class="deleteTit">
      <li><input type="checkbox" v-model='allChecked'></li>
      <li><button v-on:click="confirm()">删除</button></li>
    </ul>
  </div>
  <div class="confirm" v-if="confirmBox">
    <h3>删除选项</h3>
    <p>确认删除？</p>
    <button class="not" v-on:click="disappear()">取消</button>
    <button class="sure" v-on:click="sure()">确定</button>
  </div>
  <div class="mask">
    
  </div>
  </div>
</template>

<script>
var _list=[{
  name:'华农养殖场',
  inch:'1230',
  people:''
},{
  name:'从化养殖基地',
  inch:'1000',
  people:'高星'
}];

export default {
  name: 'search',
  data:function(){
    return{
      list:_list,
      willShow:true,
      confirmBox:false,
      checked:[]
    }
  },
  methods:{
   show:function(){
    if(this.willShow==true){
      this.willShow=false;
    }
   },
   confirm:function(){
    if(this.confirmBox==true){
      this.confirmBox=false;
    }else{
      this.confirmBox=true
    }
   }

  },
  //全选、反选
  computed:{
    allChecked:{
      get:function(){
        return this.checkedCount==this.list.length;
      },
      set:function(value){
        if(value){
          this.checked=this.list.map(function(item){
            return item.name
          })
        }else{
          this.checked=[]
        }
      }
    },
    //checkedCount用来记录勾选的数量
    checkedCount:{
      get:function(){
        return this.checked.length;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search_tab{
  width: 100%;
  margin: 0 auto;
  /*height: 31px;*/
  margin-top: 15px;
  margin-bottom: 10px;
}
button{
  border: none;
  background: none;
  outline: none;
}
.new{
  width: 24%;
  height: 31px;
  background: #009acb;
  color: #fff;
  font-size: 14px;
  float: left;
  font-weight: bold;
}
.search_inp{
  width: 48%;
  height: 28px;
  margin: 0;
  padding: 0;
  outline: none;
  margin: 0 1%;
  float: left;
  padding-left: 3px;
  font-weight: bold;
  font-size: 14px;
  color: #d4d4d4;
  border: 1px solid #d4d4d4;
}
.search_btn{
  width: 24%;
  height: 31px;
  border: 1px solid #d4d4d4;

}
.renewtable{
  /*border: 1px solid #ccc;*/
  border-collapse: collapse;
  font-family: "微软雅黑";
  font-size: 14px;
}
 .renewtable tr td{
  padding: 10px 0;
  border: 1px solid #ccc;
 }
 .renewtable tr td input{
  width: 90%;
  height: 100%;
  border:none;
  outline: none;
  font-family: "微软雅黑";
  text-align: center;
 }
.renewtable tr td button{
  outline: none;
  cursor: pointer;
}
.delete{
  width:98px;
  height: 39px;
  border: 1px solid #ccc;
  background: none; 
}
.lasttd{
  width: 50%;
  height: 100%;
  background: none;
  border:none;
  font-family: "微软雅黑";
  font-size: 14px;
}
.list{
  width: 100%;
  margin-top: 10px;
}
.title{
  height: 40px;
  background: #eaeaea;
  padding: 0;
  margin: 0;
  line-height: 40px;
}
.title li{
  width: 25%;
  list-style: none;
  float: left;
  font-size: 14px;
  font-family: "微软雅黑";
}
.title li input{
  width: 16px;
  height: 16px;
}
.bg{
  background: #fff;
}
.deleteLi{
  width: 100%;
  position: fixed;
  bottom: 36px;
}
.deleteTit{
  height: 40px;
  background: #eaeaea;
  padding: 0;
  margin-left: -10px;
  line-height: 40px;
  border-top: 1px solid #ccc;
}
.deleteTit li{
  height: 30px;
  list-style: none;
  float: left;
  font-size: 14px;
  font-family: "微软雅黑";
}
.deleteTit li:first-child{
  margin-left: 8%;
  margin-right: 2%;
}
.deleteTit li input{
  width: 16px;
  height: 16px;
}
.deleteTit li button{
  width: 100px;
  height: 28px;
  background: #009acb;
  border: none;
  color: #fff;
  font-size: 14px;
  outline: none;
}
.confirm{
  width: 100%;
  height: 165px;
  background: #fff;
  border:1px solid #ccc;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  margin-left: -10px;
  font-size: 14px;
  font-family: '微软雅黑';
}
.confirm p{
  color: #999;
  padding-left: 50px;
  text-align: left;
}
.not,.sure{
  margin-top: 20px;
  width: 40%;
  border:1px solid #ccc;
  padding: 8px 0;
  font-size: 14px;
  font-family: '微软雅黑';
  color: #999;
}
.not{
  border-radius: 30px 0 0 30px;
  border-right: none;
}
.sure{
  border-radius: 0px 30px 30px 0;
}
.mask{
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  z-index: 8888;
}
</style>
