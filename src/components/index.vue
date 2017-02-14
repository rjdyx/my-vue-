<template>
  <div>
    <!-- 子路由 -->
    <router-view></router-view>
    <int></int>
    <tab></tab>
    <search></search>
    <page></page>
  </div>
</template>

<script>
import int from './int'
import tab from './tab'
import search from './search'
import page from './page'

export default {
  name: 'index',
  data:function(){
    
  },
  components: {
    // hello,
    int,
    tab,
    search,
    page,
  },
  methods:{
    
  }
}

</script>