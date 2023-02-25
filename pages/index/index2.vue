<!-- 
	vuex实例
 -->



<template>
	<view class="max">


		<gNav title="首页"></gNav>






		<view>用户名：{{username}}</view>
		<view>年龄：{{age}}</view>
		<view class="">
			{{todos}}
		</view>
		<hr>
		<view class="">
			{{todos1}}?
		</view>
		<hr>
		<view class="">
			{{doneTodos}}
		</view>
		<hr>
		<view class="">
			{{getTodoById}}
		</view>
		<hr>
		<view>数量：{{count}}</view>
		<view class="flex">
			<button @click="addCount">增加</button>
			<button @click="addCount2">增加2</button>
			<button @click="add2({amount: 29})">增加3</button>
			<button @click="add3()">增加4</button>
			<button @click="add4()">增加5</button>
			<button @click="add5(11111)">增加6</button>
			<button @click="add6()">增加7</button>
		</view>
		<view>{{text}}</view>
		<view>时间戳：{{timestamp}}</view>
		<view>当前时间:{{timeString}}</view>
		<button type="default" @click="updateTime">刷新当前时间</button>











		<gTabbar></gTabbar>



	</view>
</template>

<script>
	import gNav from '@/components/g/gNav.vue'
	import gNavbar from '@/components/g/gNavbar.vue'
	import gTabbar from '@/components/g/gTabbar.vue'
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex' //引入mapState
	import store from '@/store/index.js'
	export default {
		components: {
			gNav,
			gTabbar,
			gNavbar,
		},
		data() {
			return {
				searchBarTop: 0, //搜索栏的外边框高度，单位px
				searchBarHeight: 0, //搜索栏的高度，单位px
				statusBar: 0, //手机状态栏高度
			}
		},
		computed: {
			...mapState({
				username: function(state) {
					return this.statusBar + ' ' + state.username
				},
				age: state => state.age,
				todos: state => state.todos,

				text: state => state.moduleA.text,
				timestamp: state => state.moduleB.timestamp
			}),
			...mapGetters([
				'timeString'
			]),
			todos1() {
				return this.$store.getters.demo(3)
			},
			// doneTodos() {
			// 	return this.$store.getters.doneTodos
			// },
			getTodoById() {
				return this.$store.getters.getTodoById(2)
			},
			/**
			 * mapGetters只是辅助函数没有好的传参方式 
			 * https://qa.1r1g.com/sf/ask/3180630981/
			 */
			...mapGetters([
				'doneTodos'
			]),
			count() {
				return this.$store.state.count
			}
		},

		methods: {
			//对象展开运算符直接拿到add
			/**
			 * 传参参考 https://blog.csdn.net/mr_tony/article/details/114402936
			 */
			...mapMutations(['add2','updateTime']),
			...mapActions({
				add5: 'addCountAction'
			}),
			addCount() {
				store.commit('add', 5)
			},
			addCount2() { //把载荷和type分开提交
				// store.commit('add2', { amount: 10 })
				// 整个对象都作为载荷传给 mutation 函数
				store.commit({
					type: 'add2',
					amount: 6
				})
			},
			add3() {
				store.dispatch('addCountAction', 100)
			},
			add4() {
				// store.dispatch('addCountAction2', { amount: 1230 })
				// 或
				store.dispatch({
					type: 'addCountAction2',
					amount: 1230
				})
			},
			add6() {
				// store.dispatch('actionA').then(() => {
				// 	// ...
				// 	// console.log("actionA执行完毕")

				// })


				store.dispatch('actionB').then(() => {
					// ...
					// console.log("actionB执行完毕")
				})

			}
		},
	}
</script>

<style lang="scss" scoped>
	* {
		// border: 1px solid red; 
	}

	.max {
		background-color: $theme-green;
		// position: absolute;
		// left: 0px;
		// width: 100%;
		// top: 0px;
		// padding-top: 57px;
		// min-height: 100%;
	}

	.index-center {
		// background-color: red;
	}

	.f-left {
		position: fixed;
		left: 0px;
	}
</style>
