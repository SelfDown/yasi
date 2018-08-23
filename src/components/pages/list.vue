<template>
	<div class="main">
		<div class="title">
        	<div>教研师资<br><span>Research and Teaching Faculty</span></div>
    	</div>
		<ul>
			<li v-for="item in data">{{item.front}}<span class="gap">|</span>{{item.behind}}</li>
		</ul>
		<div class="bg">
			<img src="/static/img/teacher.png">
		</div>
	</div>
</template>
<style type="text/css" scoped>
    .main ul{
    	width: 80%;
    	margin: 0 auto;
    }
	li{
		list-style: disc;
	    font-size: 0.8rem;
	    line-height: 1.2rem;
	    margin-bottom: 1.2rem;
	}
	li .gap{
		margin-left: 10px;
		margin-right: 10px;
	}
	.bg img{
		 width: 100%;
	    height:75%;
	     background-position: 50%;
	      background-size: contain;
	}
	/*.bg{
		background: url("/static/img/teacher.png");
	    width: 100%;
	    height:75%;
	    background-size: contain;
	    background-position: 50%;
	    background-repeat: no-repeat
	}*/
	.title{
    	color:#7894BB;
    }
</style>
<script type="text/javascript">
   
	export default{
		data(){
			return{
				data:[{"front":"深度学术底蕴","behind":"官方大力支持同步与学术培训"},{"front":"雄厚师资背景","behind":"大咖教师均有海外名校教育背景"},{"front":"四轮筛选制度","behind":"保障最精良的师资"},{"front":"集中岗前培训","behind":"保证教师迅速适应团队节奏"},{"front":"严格考核体系","behind":"提升保障优质团队的战斗力"}]
			}
		}
	}
</script>