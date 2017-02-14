<template>
  <div class="page">
    <div class="prev">&lt;</div>
    <div class="middle">第1页/共1页</div>
    <div class="next">&gt;</div>
  </div>
</template>

<script>
export default {
  name: 'page',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    tabColor(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  width: 100%;
  height: 50px;
  background: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ccc;
  margin-left: -10px;  
}
.page div{
  display: inline-block;
}
.middle{
  border: 1px solid #ddd;
  height: 38px;
  line-height: 38px;
  padding: 0 5px;
  font-size: 14px;
  font-family: "微软雅黑";
}
.prev,.next{
  width: 38px;
  height: 38px;
  border: 1px solid #ddd;
  margin-top: 5px;
  border-radius: 2px;
  text-align: center;
  line-height: 38px;
}
</style>
