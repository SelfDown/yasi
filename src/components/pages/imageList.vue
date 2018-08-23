<template>
  <div class="main" id="imageList">
    <div class="title">
      <div :style="{'color':info.color}">{{info.title}}<br><span>{{info.enTitle}}</span></div>
      <button :style="{'background-color':info.color}"><a href="">了解更多</a></button>
    </div>
    <ul>
      <li v-for="item in list"  v-lazy.imageList="item">
        <div >
            <h2 >{{item.title}}</h2>
            <p>{{item.content}}</p>
            <img :src="item.src">
        </div>
      </li>
    </ul>
</div>
</template>
<script type="text/javascript">
  // require imgurl from ''
  export default {
    props:{
      list:{
        type:Array
      },
      info:{
        type:Object
      }
    },
    data(){
      return{
      }
    },
    mouted:function(){
     
    }
 }
</script>
<style scoped>
  #imageList{
    text-align: center;
  }
  #imageList ul{
    height: 100%;
  }
  #imageList ul li{
    width: 100%;
    overflow:hidden;
    height:46%;
    margin-bottom: 1%;
  }
  div[lazy=loading] {
  width: 100%;
    overflow:hidden;
    height:46%;
}
  #imageList ul li div{
    height: 100%;
  }
  #imageList ul li p{
    margin:10px auto; 
    width: 70%;
    font-size:13px;
  }
  #imageList ul li img{
    width: 100%;
    /*height:70%;*/
  }
  .title button {
    margin-top:1%;
  }
  .title button a{

    color:#fff;
  }
</style>
