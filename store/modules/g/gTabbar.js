// 子模块moduleA路径：store/modules/moduleA.js 
export default {
	/**
	 * https://www.jb51.net/article/224323.htm
	 */
	namespaced: true,
	state: {
		// 测试数据
		text1: "我.....",
		index: 0,

		// 选中下标
		selectedIndex: 0
	},
	getters: {
		getindex(state) {
			return `get调用${state.index}`
		},
	},
	mutations: {
		demo_add(state, n) {
			return state.index = state.index + n
		},
		// 更新数据
		updateSelectedIndex(state, n) {
			state.selectedIndex = n
		}
	},
	actions: {
		async demo_add_sync(context, n) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					context.commit('demo_add', n)
					resolve()
				}, 1000)
			})
			// await context.commit('demo_add', n)
		},
		async demo_add2(context, n) {
			await context.dispatch('demo_add_sync', n).then(() => {
				// context.commit('demo_add', n)
				// console.log('执行成功')
			})

		}
	}
}
