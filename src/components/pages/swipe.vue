<template>
	<div class="container main">
		<div class="swipe">
			<mt-swipe :auto="4000" :prevent="true">
	  			<mt-swipe-item v-for="item in images"><img :src="item.src" ></mt-swipe-item>
  			</mt-swipe>
		</div>
		<div class="con">
			<div class="top">
				<img :src="imgUrl" alt="">
				<button><span style="font-size:14px">立即咨询</span></button>
			</div>
			<ul >
				<li @click="gotIelts"><img :src="ielts"/></li>
				<li @click="getTuofu"><img :src="toefl"/></li>
				<li><img :src="fr"/></li>
				<li><img :src="gre"/></li>
			</ul>
			<ul>
				<li>雅思课程</li>
				<li>托福课程</li>
				<li>综合英语</li>
				<li>北美考试</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
    	data(){
      		return{
      			ielts:require('../../assets/images/ielts.png'),
      			toefl:require('../../assets/images/toefl.png'),
      			fr:require('../../assets/images/fr.png'),
      			gre:require('../../assets/images/gre.png'),
        		images:[{"src":"/static/img/image01.png"}],
        		imgUrl:require('../../assets/images/image02.png')
        	}
        },
        methods:{
        	gotIelts(){
        		this.$router.push('/colors')
        	},
        	getTuofu(){
        		this.$router.push('/tuofu')
        	}
        }
    }
</script>
<style scoped>
	.main .swipe{
		height:70%;
	}
	.main .con{
		height: 30%;
	}
	.main .con .top{
		height: 43%;
	    width: 77%;
	    margin: 0 auto;
	    padding-top: 3%;
	    padding-bottom: 3%;
	    overflow: hidden;
	}
	.swipe{
		width: 100%;
	}
	.swipe img{
		width: 100%;
		height: 100%;
	}
	.top img{
		width: 52%;
	}
	.top button{
		background-color: #7894BB;
	    color: #fff;
	    border: none;
	    border-radius: 8px;
	    padding: 3px 10px;
	    float: right;
	    padding-left: 35px;
	    padding-top: 8px;
	    padding-bottom: 8px;
	    padding-right: 35px;
	    margin-right: 8px;
	    margin-top: 23px;
	}
	ul{
		overflow:hidden;
	}
	li{
		float: left;
		margin-left:4%;
		width:20%;
		text-align: center;
		font-size:12px;
	}
	ul img{
		width:68%;
	}
	.main .con .bottom li{
		background:#7894BB;
		border-radius: 50%;
		height:3rem;
		line-height:3rem;
		color:#fff;
	}
	.mint-swipe-indicators{
	}
</style>