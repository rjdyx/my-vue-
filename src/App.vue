<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import hello from './components/hello'
// import header from './components/header'

export default {
  components: {
    // hello,
    // header
  }
}
</script>
<style>
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin:0 auto;
  width:100%;
  height:100%;
}


</style>
