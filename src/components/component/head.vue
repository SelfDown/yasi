<template>
   <header>
    <div class="logo">
      <img :src="imgurl" alt="">
    </div>
    
      <ul >
        <li v-for="item in icons">
          <span class="icon" :style="{'background-image':'url('+item+')'}"></span>
        </li>
      </ul>
    
    
    </header> 
</template>
<script type="text/javascript">
  export default {
      data(){
        return{
          imgurl:require('../../assets/images/logo.png'),
          icons:[require('../../assets/images/more.png'),
          require('../../assets/images/info.png'),require('../../assets/images/tel.png')]
        }
      }
 }
</script>
<style type="text/css" scoped>
header{
  overflow: hidden;
  position: fixed;
  top:0;
  left: 0;
  z-index: 1000;
  background: #fff;
  height: 8%;
}
.logo{
  float: left;
  width: 25%;
}
.logo img{
  width: 100%;
}
ul{
  float: right;
  width:50%;
  margin-top:3.3%;
}
ul li{
  float: right;
  margin-right: 28px;
}
.icon{
  display: inline-block;
  width: 25px;
  height: 25px;
  background-size: contain;
  background-position: 52%;
  background-repeat: no-repeat;
  float: right;
}
</style>