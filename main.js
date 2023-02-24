
import App from './App'

// main.js
import uView from '@/uni_modules/uview-ui'





// #ifndef VUE3
import Vue from 'vue'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
	// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	store,
	...App
})

Vue.use(uView)




app.$mount()
// #endif





// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
