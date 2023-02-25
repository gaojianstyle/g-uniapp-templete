// 子模块moduleA路径：store/modules/moduleA.js 
export default {
	namespaced: true, // 开启命名空间
	state: {
		text1: "我.....",
		index: 0
	},
	getters: {
		getindex(state) {
			return `get调用${state.index}`
		},
	},
	mutations: {
		demo_add(state, n) {
			return state.index = state.index + n
		}
	},
	actions: {
		async demo_add2(context, dispatch, n) {
			context.commit('demo_add', n)
		},
	}
}
