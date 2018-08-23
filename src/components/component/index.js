import Vue from 'vue'
import head from './head'  
const loading = {
	install:function(){
		Vue.component('bar',head)
	}
}
export default loading