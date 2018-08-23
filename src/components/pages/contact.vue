<template>
	<div class="main">
		<div class="title">
        	<div>联系我们<br><span>Contact us</span></div>
         </div>
         <div class="top">
			<ul>
				<li><span class="one"></span>0773-3650999 <i>/</i> 5848999</li>
				<li><span class="two"></span>桂林市秀峰区中山中路36号大世界五楼</li>
				<li><span class="three"></span><button><a href="">在线咨询</a></button></li>
			</ul>
		</div>
		<div class="bottom">
			<div class="WeChat">
				<img  src="/static/img/QR_code.png">

			</div>
			
		</div>
	</div>
</template>
<style scoped>
	.top,.bottom{
		width: 100%;
	}
	.main{
		height:95%;
	}
	.main .top{
		height: 36%;
       margin-top: 6%;
	}
	.main .bottom{
		height: 50%
	}
	
	.main .bottom{
		background: #F1F1F3;
		text-align: center;
		overflow:hidden;
	}

    .main .bottom .WeChat{
		width: 60%;
		margin: 0 auto;
		height: 48%;
		margin-top: 20%;
		/*background-image: url('/static/img/QR_code.png');*/
		background-size: contain;
		background-position: 50%;
		background-repeat: no-repeat;
		/*transform: translateY(70%)*/
	}

	.WeChat img{
		width: 75%
	}
	.title{
		color: #7894BB;
    	margin-top: 16%;
    	height: 7%;
	}
	
    .main ul{
    	width: 84%;
    	margin: 0 auto;
    }
	ul li{
		margin-bottom: 10px;
		line-height:20px;
		font-size:0.8rem;
	}
	.one,.two,.three{ 
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-left: 10px;
		margin-right:1.2rem;
		background-size: contain;
		background-position: 50%;
		background-repeat: no-repeat;
	}
	.one{
		background-image: url('../../assets/images/tel.png');
	}
	ul li  .two{
		background-image: url('../../assets/images/location.png');
		background-size: cover;
		width:28px;
		height:28px;
		margin-left:5px;
		margin-right:0.8rem;
	}
	.three{
		background-image: url('../../assets/images/info.png');

	}

	ul li button{
		background: #7894BB;
		outline: none;
		border-radius: 8px;
		padding:3px 13px;
	}
	ul li a{
		color:#fff;
	}

</style>