<template>
	<view class="max">


		<gNavbar title="首页"></gNavbar>
		
		
		
		
		{{selectedIndex}}
		
		
		
		
		
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
			...mapState('gTabbar',[
				'selectedIndex'
			]),
			...mapState('gTabbar',{
			}),
			...mapGetters('gTabbar',[
				
			]),
		},

		methods: {
			...mapMutations('gTabbar',{
			}),
			...mapActions('gTabbar',{
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
