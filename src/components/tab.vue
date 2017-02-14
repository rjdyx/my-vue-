<template>
  <div class="tab">
    <ul class="tabs">
      <li v-for="(item,$index) in items" @click="selectStyle(item,$index)" :class="{'active':item.active,'unactive':!item.active}">{{item.msg}}</li>
    </ul>
  </div>
</template>

<script>
// 注意导入vue,不然会无法识别出vue：
import Vue from 'vue'
export default {
  name: 'tab',
  data () {
    return {
      active:true,
      items:[
        {msg:'养殖场信息'},
        {msg:'养殖区信息'},
        {msg:'畜禽档案'}
      ],
    }
  },
  methods:{
    selectStyle(item,index){
      this.$nextTick(function(){
        this.items.forEach(function(item){
          Vue.set(item,'active',false);
        });
        Vue.set(item,'active',true)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab{
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.tabs{
  width: 100%;
  margin: 0;
  padding: 0;
}
.tabs li{
  list-style: none;
  width: 32.7%;
  height: 40px;
  float: left;
  border: 1px solid #d4d4d4;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
}
.active{
  background: #009acb;
}
.unactive{
  background: #eaeaea;
}
</style>
