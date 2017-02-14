<template>
  <div class="hello">
    <div class="login_hello">
      <span class="logo"><img src="../assets/logo.png" alt=""></span>
    <div class="uesrname"><input type="text" placeholder="用户名/邮箱/电话"/>
      <span><img src="../assets/user.png"></span>
    </div>
  <div class="password"><input type="text" placeholder="密码"/>
      <span><img src="../assets/password.png"></span>
  </div>
  <!-- router-link相当于a标签 -->
    <router-link to="view-a" class="login"><button>登录</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data:function() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo img{
  width:119px;
  height: 114px;
}
.login_hello{
  width:100%;
  height: 500px;
  margin-top: 111px;
}
.hello {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0px;
  margin: auto;
  background: #009acb;

}
.uesrname,.password{
  padding:5px;
  height:60px;
  width:301px;
  margin:0 auto;
  background:#fff;
  margin-top:10px;
}
.uesrname input,.password input{
  width:200px;
  height:55px;
  border:none;
  font-size:16px;
  outline:none;
}
.uesrname span img,.password span img{
  width:38px;
  height:38px;
  display:inline-block;
  vertical-align:middle;
}
.login{
  width:306px;
  height:65px;
  display:block;
  margin:0 auto;
  background:#009acb;
  border:1px solid #fff;
  margin-top:10px;
  margin-bottom:10px;

}
.login button{
  width:306px;
  height:65px;
  background:none;
  border:none;
  font-size:24px;
  color:#fff;
  cursor:pointer;
}
</style>
