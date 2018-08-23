<template>
	<div class="main" id="imageList">
    <div class="title">
      <div>朗阁培训<br><span>About Longre Training</span></div>
    </div>
    <p v-for="item in cons" class="con">{{item}}</p>
    <div class="images">
    	<img v-for="item in imgUrl" :src="item.src" alt="">
    </div>
</div>
</template>
<script type="text/javascript">
  export default {
      data(){
        return{
          cons:["英国总领事馆文化教育处管理雅思在中国的考试事项，向中国考生提供来自雅思官方的服务.","朗阁旗下机构拥有“雅思官方合作伙伴”称号。朗阁在师资培训、考情分享、政策分享及中国区考试研究方面与雅思官方紧密联系，同步官方信息，提供给考生最实用的备考指导。"],
          imgUrl:[{src:'/static/img/image03.png'},{src:'/static/img/introduction.png'}]
        }
      }
 }
</script>
<style type="text/css" scoped>
	.con{
		padding: 0 2rem 1rem 2rem;
    	font-size: 1rem;
    	color:rgb(80,87,87);
	}
	.images{
		width: 100%;
		height:100%;
	}
	.images img{
		width: 100%;
		/*height:37%;*/
	}
	.title{
    color:#7894BB;
  }
</style>