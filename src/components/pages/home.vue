<template>
  <div style="height:100%">
    <bar></bar>
    <div style="height:100%;">  
      <first></first>
      <paper></paper>
      <list></list>
      <imageList :list="list1" :info="info1"></imageList>
      <imageList :list="list2" :info="info2"></imageList>
      <contact></contact>
    </div>
  </div>
</template>
<style scoped>

</style>

<script type="text/javascript">
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css'

import imageList from './imageList'
import list from './list.vue'
import swipe from './swipe.vue'
import contact from './contact.vue'
import first from './swipe.vue'
import paper from './paper.vue'
  export default {
    data(){
      return{
        list1:[{"title":"雅思官方合作","content":"雅思官方合作伙伴机构，同步官方考试政策资讯，学员共享官方第一手资料。","src":"/static/img/01.png"},{"title":"个性化定制学习","content":"学习服务管理中心针对学员实现个性化课程定制，监督学习进度，及时调整学辅方案。","src":"static/img/02.png"}],
        list2:[{"title":"园桌小班互动","content":"朗阁美国考试学院专业教学研发，不超过6人的钻石圆桌小班授课，互动频率高，学生参与度高。","src":"/static/img/03.png"},{"title":"机考模拟中心","content":"紧贴官方全电脑考试模式，配以官方题库测试，还原生动考试场景。","src":"/static/img/04.png"}],
        info2:{
          title:'北美课程',
          enTitle:'North American Courses',
          color:'#7894BB'
        },
         info1:{
          title:'雅思课程',
          enTitle:'IELTS Courses',
          color:'#D1676E'
        }
      }
    },
    components:{
      'list':list,
      'imageList':imageList,
      'contact':contact,
      'first':first,
      'paper':paper
    },
    mounted(){
      var mySwiper = new Swiper('.swiper-container', {
        direction: 'vertical'
      })
    }
  }
</script>