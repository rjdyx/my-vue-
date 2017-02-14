<template>
  <div class="int">
      <div class="top">
        <a class="slider" @click="show()">
           <img src="../assets/slider.png">
        </a>
         <h1>养殖基础信息管理</h1>
      </div>
      <transition name="fade">
        <div class="sidebar" v-if="sideshow">
          <ul>
            <li @click="show()"><span>&gt;</span></li>
            <li><span>农业日志</span></li>
            <li><span>种植管理</span></li>
          </ul>
          <div class="sidebar_back">
            <button @click="show()">返回</button>
            
          </div>
      </div>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'int',
  data () {
    return {
     sideshow:false
    }
  },
  methods:{
    show:function(){
      if(this.sideshow==true){
        this.sideshow=false;
      }else{
        this.sideshow=true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top{
      width:100%;
      /*height:55px;*/
      background:#009acb;
      line-height: 55px;
      position: relative;
      font-weight: normal;
  }
  .slider{
  display:inline-block;
  position: absolute;
   width:25px;
  height: 25px;
  display:inline-block;
  position: absolute;
  left: 15px;
  top: 5px; 

  }
.slider img{
    width:21px;
  height: 22px;
}
  h1{
    color: #fff;
    font-size: 22px;
  }
.sidebar{
  width:200px;
  height:100%;
  background:#494949;
  position: absolute;
  z-index: 999999;
  top: 0px;
  left: 0px;
  color: #fff;
  font-family: "微软雅黑";
}
.sidebar ul{
  margin: 0;
  padding: 0;
}
.sidebar ul li{
  list-style: none;
  padding: 12px;
  padding-left: 15px;
  text-align: left;
  border-bottom:1px solid #323232;
  font-size: 14px;
}
.sidebar ul li:first-child{
  text-align: center;
}
.sidebar_back{
  width: 180px;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #323232;
  padding: 15px 10px;
}
.sidebar_back button{
  width: 100px;
  height: 30px;
  background: none;
  border:1px solid #fff;
  color: #fff;
}
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-active {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
