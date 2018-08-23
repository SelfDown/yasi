<template>
	<div class="main">
		<div class="header">
			<img :src="imgUrl" width="100%">
			
			
		</div>
		<div class="main_ul" style="position:relative">

			<ul style="">
				<li v-for="(item,$index) in data" @click="check($index)" :style="{'z-index':(4-$index)}">
					
					<div style="width:100%;height:100%;background:#FFFFFF">
						
						<img class="item_img" :src="item.imgURL" >
					</div>
					
				</li>
				
				
				
			</ul>
			<img src="/static/img/backgroud.png" style="width:100%;margin-top:-30%">

		</div>
		<div class="youshi">
			
			<div style="width:100%;line-height:160%;text-align:center;">
				<font face="FangSong" size="5">新托福课程4大优势</font>
			</div>
			<img :src="youshi"  >
			
			
			<div style="width:100%;text-align:center;padding-top:4%;padding-bottom:2%">
				<img :src="img_consult" style="width:30%;align:center">
			</div>
			<img :src="img_consult_background" style="background:100%;margin-top:-14%">
		</div>
		
		<div class="youshi">
			
			<div style="width:100%;line-height:300%;text-align:center;margin-top:5%">
				<font face="FangSong" size="5">朗格7A教学理念</font>
			</div>
			<img :src="idea"  />
			
			<div style="width:100%;text-align:center;padding-top:5%;">
				<img :src="img_consult" style="width:30%;align:center">
			</div>
			<img :src="img_consult_background_a2" style="background:100%;margin-top:-4%">
		</div>

		<div class="youshi">
			
			<div style="width:100%;line-height:300%;text-align:center;margin-top:5%">
				<font face="MingLiU" size="5">明星学员</font>
			</div>
			<div style="margin-top:10%;margin-bottom:3%">

				<div class="student">
					<div class="left" >
						<img src="/static/img/dutongxu.png" >
					</div>
					<div class="right">
						<div>
							<span class="name">杜同学</span>
							
						</div>
						<div>
							<span  class="all" style="font-family:Microsoft YaHei;font-weight:bold;">总分: 112</span>
						</div>
						<div>
							<span class="detail"> 阅读:29 听力:30 口语:28 写作:25</span>
						</div>
						
					</div>
				
				</div>
				<div class="student">
					<div class="left">
						<img src="/static/img/tang.png" >
					</div>
					<div class="right">
						<div >
							<span class="name"> 覃同学</span>
							
						</div>
						<div>
							<span  class="all" style="font-family:Microsoft YaHei;font-weight:bold;">总分: 103</span> 
						</div>
						<div>
							<font class="detail" style="font-size">阅读:27 听力:24 口语:28 写作:4</font>
						</div>
						
					</div>
				
				</div>
			</div>
			<div style="width:100%;text-align:center;padding-top:5%;">
				<img :src="img_consult2" style="width:30%;align:center">
			</div>
		</div>
		<div class="youshi" style="margin-top:0%">

			<img :src="youshilast" >
		</div>


	</div>
</template>

<script type="text/javascript">

	export default{
		data(){
			return{
				last:0,
				data:[
				{
					color:"#E69A9E",
					title:"新托福基础专研版",
					color_last:"#fff",
					imgURL:"/static/img/jichu.png",
					hour:"518课时/316小时",
					students_num:"6-12人小班",
					suite:"初一/初二或同等英语水平学员",
					words:"词汇量1000左右"
				},
				{
					color:"#F3E4A4",
					title:"雅思起步六分课程",
					color_last:"#E69A9E",
					imgURL:"/static/img/suda.png",
					hour:"434课时/324小时",
					students_num:"6-12人小班",
					suite:"初三或同等英语水平学员",
					words:"词汇量1500-2000左右"
				},
				{
					color:"#AFDCF0",
					title:"雅思预备六分课程",
					color_last:"#F3E4A4",
					imgURL:"/static/img/qianghua.png",
					hour:"252课时/264小时",
					students_num:"10-15人小班",
					suite:"高一/高二或同等英语水平学员",
					words:"词汇量2000-2500左右"
				},
				{
					color:"#DBE6BA",
					title:"雅思基础六分课程",
					color_last:"#AFDCF0",
					imgURL:"/static/img/jinying.png",
					hour:"272课时/204小时",
					students_num:"6-12人小班",
					suite:"高三/大一或同等英语水平学员",
					words:"词汇量2500-3500左右"
				}],
				
				imgUrl:require('../../assets/images/tuofu.png'),
				youshi301:require('../../assets/images/youshi3-01.png'),
				youshi:'/static/img/youshi4.png',
				youshilast:'/static/img/youshilast_7a.png',
				idea:'/static/img/7a_langge.png',
				img_consult:require('../../assets/images/consult.png'),
				img_consult2:require('../../assets/images/consult2.png'),
				img_consult_background:require('../../assets/images/consult_background.png'),
				img_consult_background_a2:require('../../assets/images/consult_background_a2.png'),
				a7_consult:require('../../assets/images/7a.png')
			}
		},
		methods:{
			check($index){
				if ($index == this.last){
					return 
				}
				document.querySelectorAll(".main  .main_ul ul li")[this.last].classList.remove("active")
				document.querySelectorAll(".main  .main_ul ul li")[$index].classList.add("active")
				this.last = $index

			}
		},
		mounted() {
			document.querySelectorAll(".main  .main_ul ul li:first-child")[0].classList.add("active")
			// this.data[1].color_last=this.data[0].color_last
		}
	}
</script>
<style scoped>

	.item_img{
		height: 9.2rem
	}


	.student{
		height: 120px;
	}
	.student .left{
		    width: 33%;
		    float: left;
		    padding-left: 5%;
		    position: relative;
		    bottom: 1.2em;
	}

	
	.student .right{
		margin-left: 30%;
		margin-top: 10%;
		height: 81%;
		/*background: #efefef;*/
		line-height: 75%;

		background: -webkit-linear-gradient(left, #F4FAFA , #FEFEFE); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(right, #F4FAFA, #FEFEFE); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(right, #F4FAFA, #FEFEFE); /* Firefox 3.6 - 15 */
		background: linear-gradient(to right, #F4FAFA , #FEFEFE); /* 标准的语法 */
	}
	.student .right .name{
		font-size: 10px;
		margin-left: 2%;
	}
	.student .right .detail{
		font-size: 10px;
		margin-left: 2%;
	}
	.student .right .all{
		font-weight:bold;
		margin-left: 2%;
	}
	.student .right div{
		padding: 3%;
		padding-left: 10%;
	}

	.youshi .student img{
		width: 96%;
	}

	.ideas_item{
		border:1px solid;
		/*padding:5%;*/
		height:80px;
		/*width: 25%;*/
		border-radius:15px; 
		margin: 3%;
		text-align:center

	}

	.ideas_item div_txt{
		line-height: 90%
	}
	
	.ideas_ul ul li{
		display: table-cell;
    	width: 15%;
    	text-align: center;
    	line-height: 80%
	}

	.idea_txt{
		font-size: 12px;
		line-height: 80%;
		margin:0px;
	}
	.idea_txt_min{
		font-size: 9px;
		width: 100%;
		line-height: 80%;
		margin:0px;
	}

	.div_content img{position:absolute;top:5.5%}

	.div_content .img_content{
		margin-top: 10%;
		margin-left:5%;
	}
	.youshi .div_content{
		
		height:100%;
		width: 100%;
		padding-top:10%;
		padding-left: 2%;
		padding-right:  2%;
		position:relative

	}
	.youshi table{
		table-layout : fixed;
		width: 100%;

	}

	.youshi table tr td{
		height: 100px;

	}

	.youshi table tr td{
		width: 33.33%
	}

	.youshi .you_height{
		height: 50%;
	}

	.youshi .img_txt{
		width: 16%;
		padding-top: 8%;
	}


	.youshi .txt{
		font-size:13px;
		margin-left: 16%;
		
	}
	.youshi img{
		width: 100%;
		margin-top:5%;
	}
	.subImg{
		width: 36%;
		margin:5%;

	}

	.content{
		background: #efefef;
		padding-top:10%;
		padding-left: 10%; 
		padding-bottom: 14%;
		padding-right: 10%;

	}
	/*.content table{

	}*/
	.course-text{
		font-size: 14px;
		font-family: FangSong;
	}

	.main{
		width: 100%;
		/*height: 100%;*/
		padding: 0px;
	}
	.main .main_ul{
		 width:100%;
	  /* 850=(800+2)*5+20*2 */
	  margin:5% auto;

	  text-align: center;
	}
	.main .main_ul ul{
		padding-left: 4%;
	}
	
	/* 配置图像信息盒子 */
	.main .main_ul li .image_title{
	  position:absolute;
	  width:100%;
	  height:50px;
	  /*background-color:rgba(0,0,0,.5);*/
	/*  text-indent:2em;*/
	  line-height:50px;
	  /*bottom:0px;*/
	  /*left:0*/
	}
	

	/* hover之后所有的li宽改为40px */
		/*.main .main_ul ul:hover li{
		  width:10%;
		}*/
		/* hover之后激活的li宽为640px，注意这两个设置有先后顺序 */
		.main .main_ul  .active{
		  width:64%;
		   box-shadow: 1px 3px 3px  #888888;

		}

	.main .main_ul  li{
		list-style:none;
	  width:10%;
	  height: 320px;
	  float:left;
	  position:relative;
	  overflow:hidden;
	  border-left:1px solid rgba(255,255,255,.8);
	 /* border-radius:3px;*/

	  box-shadow: 2px 1px 1px  #888888;
	}

	.main .main_ul  li div{
		/*border:1px solid;*/

	}
	
	.top{
		line-height: 51px;
		border-top-left-radius: 10px;
    	border-top-right-radius: 10px
	}

	@keyframes ani{
		from {height:10%; }
		to {height:70%;}
	}

	@media only screen and (max-width: 320px) {
   		.student .left{
		    width: 33%;
		    float: left;
		    padding-left: 5%;
		    position: relative;
		    bottom: 0.89em;
		}
		.item_img{
			height: 8.1rem
		}
		.main .main_ul  li{
			list-style:none;
		    width:10%;
		  	height: 280px;
		 	float:left;
		  	position:relative;
		  	overflow:hidden;
		  	border-left:1px solid rgba(255,255,255,.8);
		 /* border-radius:3px;*/

		  	box-shadow: 2px 1px 1px  #888888;
		}

	}

	@media only screen and (max-width: 360px min-width: 321px) {
   		.student .left{
		    width: 33%;
		    float: left;
		    padding-left: 5%;
		    position: relative;
		    bottom: 0.89em;
		}
		.main .main_ul  li{
			list-style:none;
		    width:10%;
		  	height: 322px;
		 	float:left;
		  	position:relative;
		  	overflow:hidden;
		  	border-left:1px solid rgba(255,255,255,.8);
		 /* border-radius:3px;*/

		  	box-shadow: 2px 1px 1px  #888888;
		}

	}
	@media only screen and (min-width: 375px ) {
   		.student .left{
		    width: 33%;
		    float: left;
		    padding-left: 5%;
		    position: relative;
		    bottom: 1.0em;
		}

		.item_img{
			height: 9.5rem
		}
		.main .main_ul  li{
			list-style:none;
		    width:10%;
		  	height: 335px;
		 	float:left;
		  	position:relative;
		  	overflow:hidden;
		  	border-left:1px solid rgba(255,255,255,.8);
		 /* border-radius:3px;*/

		  	box-shadow: 2px 1px 1px  #888888;
		}


	}

	@media only screen and (min-width:411px) {
   		.student .left{
		    width: 33%;
		    float: left;
		    padding-left: 5%;
		    position: relative;
		    bottom: 1.4em;
		}
		.item_img{
			height: 10.5rem
		}

		.main .main_ul  li{
			list-style:none;
		    width:10%;
		  	height: 350px;
		 	float:left;
		  	position:relative;
		  	overflow:hidden;
		  	border-left:1px solid rgba(255,255,255,.8);
		 /* border-radius:3px;*/

		  	box-shadow: 2px 1px 1px  #888888;
		}

	}

	@media only screen and (min-width:414px) {
   		.student .left{
		    width: 33%;
		    float: left;
		    padding-left: 5%;
		    position: relative;
		    bottom: 1.4em;
		}
		.item_img{
			height: 10.5rem
		}

		.main .main_ul  li{
			list-style:none;
		    width:10%;
		  	height: 360px;
		 	float:left;
		  	position:relative;
		  	overflow:hidden;
		  	border-left:1px solid rgba(255,255,255,.8);
		 /* border-radius:3px;*/

		  	box-shadow: 2px 1px 1px  #888888;
		}

	}
</style>