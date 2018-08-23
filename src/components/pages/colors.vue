<template>
	<div class="main">
		<div class="header">
			<img :src="imgUrl" width="100%">
			<div style="width:100%;line-height:300%;text-align:center">
				<font face="FangSong" size="5">朗格雅思课程体系</font>
			</div>
			
		</div>
		<div class="main_ul">

			<ul >
				<li v-for="(item,index) in data"   @click="check(index)" >
					<div :style="{background:item.color_last}">

						<div class="top" :style="{'background':item.color}">
							<span class="bar"></span> <font>{{item.title}} </font><font size="1">(保6争8)</font>
						</div>
						<div class="con" >
							
							<div class="content" >
							
								<table>
									<tr>
										<td>
											<span class="course-text">实际课时：</span>
										</td>
										<td>
											<span class="course-text">{{item.hour}}</span>
										</td>
									</tr>
									<tr>
										<td>
											<span class="course-text">班级人数：</span>
										</td>
										<td>
											<span class="course-text">{{item.students_num}}</span>
										</td>
									</tr>
									<tr>
										<td>
											<span class="course-text">入学标准：</span>
										</td>
										<td>
											<span class="course-text">{{item.suite}}</span>

											
										</td>
									</tr>
									<tr>
										<td>
											
										</td>
										<td>
											<span class="course-text">{{item.words}}</span>

											
										</td>
									</tr>
								</table>
									
								<div style="text-align:center">
									<img class="subImg" :src="item.imgURL">
								</div>
								
							</div>

							
						</div>

					</div>
				</li>
	    	</ul>
		</div>
		<div class="youshi">
			<img :src="youshi"  >
			<div style="width:100%;line-height:300%;text-align:center;">
				<font face="FangSong" size="5">朗格雅思课程9大优势</font>
			</div>
			<div style="padding-left:2%;padding-right:3%;margin-top:5%">
				<table border="0" cellspacing="0" >
					<tr>
						<td >
							
							<div style="background:#FDFAF8" class="div_content">
								
								
								<img class="img_txt" :src="youshi301"/>
								<div class="img_content">
									<span class="txt">雅思官方合作</span>	
								</div>
								
								
							</div>
							
						</td>
						<td>
							<div style="background:#FCF8F5;" class="div_content">
								<img class="img_txt" :src="youshi301"/>
								<div class="img_content">
									<span class="txt">18年雅思权威</span>
								</div>
							</div>
						</td>
						<td>
							<div style="background:#FBF5F2;" class="div_content">
								<img class="img_txt" :src="youshi301"/>
								<div class="img_content">
									<span class="txt">实力教学研发</span>
								</div>
							</div>
						</td>

					</tr>



					<tr>
						<td >
							
							<div style="background:#FBF5F2" class="div_content">
								<img class="img_txt" :src="youshi301"/>
								<div class="img_content">
									<span class="txt">学管个性辅导</span>
								</div>
							</div>
							
						</td>
						<td>
							<div style="background:#FAF3EE;" class="div_content">
								<img class="img_txt" :src="youshi301"/>
								<div class="img_content">
									<span class="txt">机考模拟中心</span>
								</div>
							</div>
						</td>
						<td>
							<div style="background:#F9F0EB;" class="div_content">
								<img class="img_txt" :src="youshi301"/>
								<div class="img_content">
									<span class="txt">多媒体互动教学</span>
								</div>
							</div>
							
						</td>

					</tr>


					<tr>
						<td >
							
							<div style="background:#F8EEE8" class="div_content">
								<img class="img_txt" :src="youshi301"/>
								<div class="img_content">
									<span class="txt">24H学习闭环</span>
								</div>
							</div>
							
						</td>
						<td>
							<div style="background:#F4EBE5;" class="div_content">
								<img class="img_txt" :src="youshi301"/>
								<div class="img_content">
									<span class="txt">签约提分制度</span>
								</div>
							</div>
						</td>
						<td>
							<div style="background:#F6E9E1;" class="div_content">
								<img class="img_txt" :src="youshi301"/>
								<div class="img_content">
									<span class="txt">第二文化课堂</span>
								</div>
							</div>
							
						</td>

					</tr>

				</table>

			</div>
			<div style="width:100%;text-align:center;padding-top:5%;padding-bottom:2%">
				<img :src="img_consult" style="width:30%;align:center">
			</div>
		</div>
		
		<div class="youshi">
			<img :src="idea"  />
			<div style="width:100%;line-height:300%;text-align:center;">
				<font face="FangSong" size="5">7A教学理念</font>
			</div>
			<div style="padding-left:2%;padding-right:2%;margin-top:5%">
				<div class="ideas_ul">
					    	<table >
					    		<tr>
					    			<td>
					    				 
									    	<div class="ideas_item"  >
									    		<div>
									    			<img src="/static/img/hezuo.png" style="width:21%;margin-top:15%">
									    		</div>
									    		<div style="line-height:90%">
									    			<span class="idea_txt">官方权威合作</span>
									    		</div>
									    		<div style="line-height:90%">
									    			<span class="idea_txt_min" >Authoritative</span>
									    		</div>

									    	</div>
					    			</td>
					    			<td>
					    					<div class="ideas_item" >
									    		<div>
									    			<img src="/static/img/moni.png" style="width:25%;margin-top:15%">
									    		</div>
										    	<div style="line-height:90%">
										    		<span class="idea_txt">机考模拟中心</span>
										    	</div>
										    	<div style="line-height:90%">
										    		<span class="idea_txt_min" >Advanced</span>
										    	</div>
										    </div>
					    			</td>
					    				<td>
					    					<div class="ideas_item">
									    	<div>
									    			<img src="/static/img/qianyue.png" style="width:25%;margin-top:15%">
									    		</div>
									    	<div style="line-height:90%">
									    		<span class="idea_txt">签约协议提分</span>
									    	</div>
									    	<div style="line-height:90%">
									    			<span class="idea_txt_min" >Assuring</span>
									    		</div>
								    	</div>
					    				</td>
					    				<td>
					    					<div class="ideas_item">
										    	<div>
										    			<img src="/static/img/moni.png" style="width:25%;margin-top:15%">
										    		</div>
										    	
											    	<div style="line-height:90%">
											    		<span class="idea_txt">星级教师面授</span>
											    	</div>
										    	<div style="line-height:90%">
										    			<span class="idea_txt_min" >Alive</span>
										    	</div>
										    </div>
					    			</td>
					    		</tr>
					    	</table>


					    		<table  style="padding-left:12.5%;padding-right:12.5%;">
					    		<tr>
					    			<td>
					    				 
									    	<div class="ideas_item"  >
									    		<div>
									    			<img src="/static/img/qianyue.png" style="width:25%;margin-top:15%">
									    		</div>
									    		<div style="line-height:90%">
									    			<span class="idea_txt">教学研究为先</span>
									    		</div>
									    		<div style="line-height:90%">
									    			<span class="idea_txt_min" >Academic</span>
									    		</div>
												    	</div>
								    			</td>
					    			<td>
					    					<div class="ideas_item" >
									    		<div>
									    			<img src="/static/img/duomeiti.png" style="width:25%;margin-top:15%">
									    		</div>
										    	<div style="line-height:90%">
										    		<span class="idea_txt">多媒体教学</span>
										    	</div>
										    	<div style="line-height:90%">
										    			<span class="idea_txt_min" >Asisting</span>
										    	</div>
											</div>
					    			</td>
					    				<td>
					    					<div class="ideas_item">
									    	<div>
									    			<img src="/static/img/hezuo.png" style="width:22%;margin-top:15%">
									    		</div>
									    		<div style="line-height:90%">
									    		<span class="idea_txt">学管跟踪服务</span>
									    	</div>
									    	<div style="line-height:90%">
									    			<span class="idea_txt_min" >Accstomed</span>
									    	</div>
								    	</div>
					    				</td>
					    				
					    		</tr>
					    	</table>
					  
					
					
				</div>

			</div>
			<div style="width:100%;text-align:center;padding-top:5%;">
				<img :src="a7_consult" style="width:30%;align:center">
			</div>
		</div>
		<div class="youshi">
			<img :src="idea2"  />
			<div style="width:100%;line-height:300%;text-align:center;">
				<font face="FangSong" size="5">明星学员</font>
			</div>
			<div style="margin-top:10%;margin-bottom:3%">

				<div class="student">
					<div class="left" >
						<img src="/static/img/wang.png" >
					</div>
					<div class="right">
						<div>
							<span class="name">王同学</span>
							
						</div>
						<div>
							<span  class="all" style="font-family:Microsoft YaHei;font-weight:bold;">总分: 7.5</span>
						</div>
						<div>
							<span class="detail"> 听力:9.0 阅读:8.0  写作:6.5 口语:5.5 </span>
						</div>
						
					</div>
				
				</div>
				<div class="student">
					<div class="left">
						<img src="/static/img/jiang.png" >
					</div>
					<div class="right">
						<div >
							<span class="name">蒋同学</span>
							
						</div>
						<div>
							<span  class="all" style="font-family:Microsoft YaHei;font-weight:bold;">总分: 7.5</span> 
						</div>
						<div>
							<font class="detail" style="font-size">听力:9.0 阅读:8.0  写作:6.0 口语:6.5</font>
						</div>
						
					</div>
				
				</div>
				<div class="student">
					<div class="left">
						<img src="/static/img/nong.png" >
					</div>
					<div class="right">
						<div >
							<span class="name"> 农同学</span>
							
						</div>
						<div>
							<span  class="all" style="font-family:Microsoft YaHei;font-weight:bold;">总分: 7.5</span> 
						</div>
						<div>
							<font class="detail" style="font-size">听力:8.5 阅读:9.0  写作:6.0 口语:5.5</font>
						</div>
						
					</div>
				
				</div>
			</div>
			<div style="width:100%;text-align:center;padding-top:5%;">
				<img :src="consult3" style="width:30%;align:center">
			</div>
		</div>
		<div class="youshi">
			
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
					title:"雅思入门六分课程",
					color_last:"#fff",
					imgURL:require("../../assets/images/rumen.png"),
					hour:"518课时/316小时",
					students_num:"6-12人小班",
					suite:"初一/初二或同等英语水平学员",
					words:"词汇量1000左右"
				},
				{
					color:"#F3E4A4",
					title:"雅思起步六分课程",
					color_last:"#E69A9E",
					imgURL:require("../../assets/images/qibu.png"),
					hour:"434课时/324小时",
					students_num:"6-12人小班",
					suite:"初三或同等英语水平学员",
					words:"词汇量1500-2000左右"
				},
				{
					color:"#AFDCF0",
					title:"雅思预备六分课程",
					color_last:"#F3E4A4",
					imgURL:require("../../assets/images/yubei.png"),
					hour:"252课时/264小时",
					students_num:"10-15人小班",
					suite:"高一/高二或同等英语水平学员",
					words:"词汇量2000-2500左右"
				},
				{
					color:"#DBE6BA",
					title:"雅思基础六分课程",
					color_last:"#AFDCF0",
					imgURL:require("../../assets/images/jichu.png"),
					hour:"272课时/204小时",
					students_num:"6-12人小班",
					suite:"高三/大一或同等英语水平学员",
					words:"词汇量2500-3500左右"
				},
				{
					color:"#E9B4D0",
					title:"雅思突破六分课程",
					color_last:"#DBE6BA",
					imgURL:require("../../assets/images/tupo.png"),
					hour:"192课时/144小时",
					students_num:"6-12人小班",
					suite:"大二/大三或英语四级英语水平学员",
					words:"词汇量4000-5000左右"
				},
					
				{
					color:"#EACEBD",
					title:"雅思精品六分课程",
					color_last:"#E9B4D0",
					imgURL:require("../../assets/images/jingping.png"),
					hour:"128课时/96小时",
					students_num:"6-12人小班",
					suite:"大四或英语六级英语水平学员",
					words:"词汇量4000-5000左右"
				}],
				
				imgUrl:require('../../assets/images/IELTS-01.png'),
				youshi301:require('../../assets/images/youshi3-01.png'),
				youshi:'/static/img/youshi.png',
				youshilast:'/static/img/youshilast.png',
				idea:'/static/img/idea.png',
				idea2:'/static/img/idea2.png',
				img_consult:require('../../assets/images/jingping.png'),
				a7_consult:require('../../assets/images/7a.png'),
				consult3:require('../../assets/images/consult3.png'),
			}
		},
		methods:{
			check:function(index){
				
				if(this.last != index){
					if(index==0){
						this.data[index].color_last = "#fff"
						this.data[index+1].color_last="#fff"
					}else if(index==this.data.length-1){
						// 
					}else{
						this.data[index].color_last=this.data[index-1].color
						this.data[index+1].color_last="#fff"
					

					}

					if(this.last !=this.data.length-1){
						this.data[this.last+1].color_last = this.data[this.last].color
					}

					
					document.querySelectorAll(".main  .main_ul ul li")[this.last].classList.remove("active")
					document.querySelectorAll(".main  .main_ul ul li")[index].classList.add("active")
					this.last = index


				}
				// let event = e||window.event
 				

				// for (let i = 0;i<list.length ;i++) {
				// 	list[i].classList.remove("active")
				// }
				// debugger;
				// if(event.target.parentNode){
				// 	event.target.parentNode.classList.add("active")
				// 	event.target.parentNode.classList.add("active")
				// }else{
				// 	event.target.parentElement.classList.add("active")
				// }
 				
			}
		},
		mounted() {
			document.querySelectorAll(".main  .main_ul ul li:first-child")[0].classList.add("active")
			this.data[1].color_last=this.data[0].color_last
		}
	}
</script>
<style scoped>

	

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

	@media only screen and (max-width: 360px) {
   		.student .left{
		    width: 33%;
		    float: left;
		    padding-left: 5%;
		    position: relative;
		    bottom: 0.88em;
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

	}
	@media screen and (min-width:414px) {
   		.student .left{
		    width: 33%;
		    float: left;
		    padding-left: 5%;
		    position: relative;
		    bottom: 1.4em;
		}

	}
	.student .right{
		margin-left: 30%;
		margin-right: 8%;
		margin-top: 10%;
		height: 81%;
		/*background: #efefef;*/
		line-height: 75%;
		border: 1px solid #B7b7b7;
		border-top-right-radius:0.5em;
		border-bottom-right-radius:0.5em;

	}
	.student .right .name{
		font-size: 11px;
		margin-left: 2%;
	}
	.student .right .detail{
		font-size: 11px;
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
	.main .main_ul ul{
		width: 100%;
		height: 72%;

	}
	/*.header{
		height: 50%;
		width:100%;
		text-align: center;
	 
	}*/


	.main .main_ul ul li{
		height: 10%;
		width: 100%;
		margin: 0;
		background: #efefef;
		border-radius: 5px; 
		position: relative;
	}
	.main .main_ul ul li .top{
		height: 100%;
		width: 100%;
		color:#fff;
	}
	.main .main_ul ul li .con{
		height: 0;
		width: 100%;
		overflow: hidden;
	}
	.main .main_ul > ul .active{
		height: 70%;
		/*animation:ani 3s forwards;*/
	}
	.top{
		line-height: 51px;
		border-top-left-radius: 10px;
    	border-top-right-radius: 10px
	}
	.main  .main_ul ul .active .top{
		height: 18%;

	}
	.main  .main_ul ul .active .con{
		height: 44%;
		/*padding: 10% 10%;*/
		font-size: 1.5rem;
	}
	.main  .main_ul ul .active .con>div{
		/*margin-bottom: 4rem;*/
	}
	.bar{
		border:2px solid #fff;
		margin-left: 20%;
		margin-right: 7%;
	}
	.main  .main_ul ul .active .con .btn{
		width: 25%;
		margin: 0 auto;
	}
	.main  .main_ul ul .active .con .btn button{
		width: 100%;
		height:5rem;
		border-radius: 5px;
		font-size: 3rem;
	}
	@keyframes ani{
		from {height:10%; }
		to {height:70%;}
	}
</style>