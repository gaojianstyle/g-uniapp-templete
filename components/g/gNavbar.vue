<template>
	<view class="max">


		<!-- demo -->
		<!-- <view class="nav cc" :style="{marginTop:searchBarTop + 'px',height:searchBarHeight + 'px'}">
			{{title}}
		</view> -->




		<!-- 小程序 -->

		<!-- #ifdef APP-PLUS || H5-->
		<!-- 只在app和h5显示 -->
		
		<view class="bg nav nav-app cc " :style="{
			marginTop: statusBar + 'px',
			height: 33 + 'px',
		}">
			{{title}}
		</view>
		<view class="center bg " :style="{
			height: statusBar + 33 + 7  + 'px',
		}"></view>
		
		<!--  #endif  -->

		<!-- ////////////////////////////////////////////////////////////////////////// -->

		<!-- #ifndef APP-PLUS || H5-->
		<!-- 除了app和h5不显示,其他平台都显示,有一个隐患:没有测试支付宝小程序,支付宝可能不支持胶囊-->
		<!-- <view class="bg" :style="{height:searchBarTop + 'px'}"></view> -->
		<view class="bg nav cc" :style="{
			marginTop: searchBarTop + 'px',
			height: searchBarHeight + 'px',
		}">
			{{title}}
		</view>
		<view class="center bg " :style="{
			paddingTop: searchBarTop + searchBarHeight + 7 + 'px'
		}">
		</view>
		<!--  #endif  -->




	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchBarTop: 0, //搜索栏的外边框高度，单位px
				searchBarHeight: 0, //搜索栏的高度，单位px
				statusBar: 0, //手机状态栏高度
			}
		},
		props: {
			"title": {
				type: String,
				required: true,
				default: "默认标题"
			},
			"bgColor": {
				default: "默认标题"
			}
		},
		created() {
			// console.log('组件初始化完成');
			
			/**
			 * !小程序胶囊信息
			 */
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// H5 || APP-PLUS || MP-ALIPAY 不支持胶囊按钮样式的API
			let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			this.searchBarTop = menuButtonInfo.top;
			this.searchBarHeight = menuButtonInfo.height;
			// #endif
			
			/**
			 * 
			 */
			uni.getSystemInfo({
				success: (e) => {
					// console.log(e)
					// 获取手机状态栏高度
					let statusBar = e.statusBarHeight;
					this.statusBar = statusBar;
					// console.log(`获取手机状态栏高度:`, this.statusBar)
				}
			})
			

		}
	}
</script>

<style lang="scss" scoped>
	* {
		// border: 1px solid red;
	}

	.max {}

	.nav {
		position: fixed;
		top: 0rpx;
		left: 0rpx;
		z-index: 9999;
		width: 100%;
		height: 30px;
		padding: 7px 0px;
		font-weight: 700;
		position: block;
		
	}
	.nav-app{
	}

	.bg {
		// background-color: red;
		// 背景透明
		background-color: rgba(255, 0, 0, 0);
		// background-color: blue;
	}
	.bg-demo{
		// background-color:red !important;
	}
</style>
