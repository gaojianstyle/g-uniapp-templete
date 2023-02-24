// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from '@/store/modules/moduleA'
import moduleB from '@/store/modules/moduleB'

Vue.use(Vuex); //vue的插件机制

//Vuex.Store 构造器选项
export default new Vuex.Store({
	modules: {
		moduleA,
		moduleB
	},
	state: { //存放状态
		"username": "foo",
		"age": 18,
		todos: [{
				id: 1,
				text: '我是内容一',
				done: true
			},
			{
				id: 2,
				text: '我是内容二',
				done: false
			},
			{
				id: 3,
				text: '我是内容22一',
				done: true
			},
		],
		count: 1,
	},
	getters: {
		demo: (getters, state) => (val) => {
			return `demos数据交互成功${val}`
		},
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		doneTodosCount: (state, getters) => {
			//state ：可以访问数据
			//getters：访问其他函数，等同于 store.getters
			return getters.doneTodos.length
		},
		getTodoById: (state) => (id) => {
			return state.todos.find(todo => todo.id === id)
		}
	},
	mutations: {
		add(state, n) {
			state.count += n
		},
		add2(state, payload) {
			state.count += payload.amount
		},
		add33(state) {
			state.count += 1
		},
		add34(state) {
			state.count += 1000
		}
	},
	actions: {
		addCountAction(context, n) {
			context.commit('add', n)
		},
		addCountAction2(context, payload) {
			context.commit('add2', payload)
		},
		actionA({
			commit
		}) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					commit('add33')
					resolve()
				}, 1000)
			})
		},
		actionB({
			commit,
			dispatch
		}) {
			return dispatch('actionA').then(() => {
				commit('add34')
			})
		},


		// async actionA1({
		// 	commit
		// }) {
		// 	commit('gotData', await getData())
		// },
		// async actionB1({
		// 	dispatch,
		// 	commit
		// }) {
		// 	await dispatch('actionA1') // 等待 actionA 完成
		// 	commit('gotOtherData', await getOtherData())
		// }

	}
})
// export default store

