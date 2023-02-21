<template>
	<view class="max">


		<gNav title="首页"></gNav>

		122222222222222222222222222222222222
		<!-- <view class="index-center">


			122222222222222222222222222222222222
			



		</view> -->



		<gTabbar></gTabbar>



	</view>
</template>

<script>
	import gNav from '@/components/g/gNav.vue'
	import gNavbar from '@/components/g/gNavbar.vue'
	import gTabbar from '@/components/g/gTabbar.vue'
	export default {
		components: {
			gNav,
			gTabbar,
			gNavbar
		},
		data() {
			return {
				searchBarTop: 0, //搜索栏的外边框高度，单位px
				searchBarHeight: 0, //搜索栏的高度，单位px
				statusBar: 0 //手机状态栏高度
			}
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
		background-color: #22dc8b;
		// position: absolute;
		// left: 0px;
		// width: 100%;
		// top: 0px;
		// padding-top: 57px;
		// min-height: 100%;
	}
	.index-center{
		// background-color: red;
	}
	.f-left{
		position: fixed;
		left: 0px;
	}
</style>
