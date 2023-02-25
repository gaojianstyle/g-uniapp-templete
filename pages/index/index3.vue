<template>
	<view class="max">


		<gNavbar title="首页"></gNavbar>
		
		
		{{index}},,,{{$store.state.gTabbar.index}}
		<!-- {{$store.gTabbar.index}} -->
		<hr>
		{{text1}}
		<hr>
		{{getindex}}?
		<hr>
		{{age}}
		<view class="flex">
			<button @click="add(1)">1</button>
			<button @click="add2(10)">2</button>
		</view>
		
		
		
		
		
		
		
		<gTabbar></gTabbar>



	</view>
</template>

<script>
	import gNavbar from '@/components/g/gNavbar.vue'
	import gTabbar from '@/components/g/gTabbar.vue'
	import {
		mapState,
		mapGetters,
		mapMutations,
		mapActions
	} from 'vuex'
	export default {
		components: {
			gNavbar,
			gTabbar,
		},
		data() {
			return {

			}
		},
		computed: {
			...mapState(['age']),
			...mapState('gTabbar',[
				'index'
			]),
			...mapState('gTabbar',{
				text1: 'text1'
			}),
			...mapGetters('gTabbar',{
				getindex: 'getindex'
			}),
		},

		methods: {
			...mapMutations('gTabbar',{
				add: 'demo_add'
			}),
			...mapActions('gTabbar',{
				add2: 'demo_add2'
			})
		},
		created() {

		}
	}
</script>

<style lang="scss" scoped>
	* {
		// border: 1px solid red; 
	}

	.max {
		background-color: $theme-green;
	}
</style>
