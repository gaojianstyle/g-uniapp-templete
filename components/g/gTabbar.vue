<template>
	<view class="max">



		<view class="tabbar flex justify-around">


			<view class="item flex cc flex-col" v-for="i in tabBar.list" :key="i.index" @click="tabbarSelect(i.index)">

				<view :class="{'hd': i.index === 2}">
					<view class="top cc">
						<image class="img" :src="i.selectedIconPath" mode="" v-if="selectedIndex === i.index"></image>
						<image class="img" :src="i.iconPath" mode="" v-if="selectedIndex !== i.index"></image>
					</view>
					<view class="bottom">
						<text :class="{ 'themeColor' : selectedIndex === i.index }">
							{{i.text}}
						</text>
					</view>
				</view>


				<view v-if="i.index === 2" class="yuan">
					<view class="top cc">
						<image class="img img_yuan" :src="i.selectedIconPath" mode="" v-if="selectedIndex === i.index">
						</image>
						<image class="img img_yuan" :src="i.iconPath" mode="" v-if="selectedIndex !== i.index"></image>
					</view>
					<view class="bottom cc">
						<text :class="{ 'themeColor' : selectedIndex === i.index }">
							{{i.text}}
						</text>
					</view>
				</view>





			</view>



		</view>






	</view>
</template>

<script>
	import {play_mp3} from '@/utils/playMp3.js'
	
	export default {
		data() {
			return {
				selectedIndex: 0, // 标记
				showselected: true, // 是否在页面使用tarBar
				tabBar: {
					list: [{
							"pagePath": "pages/index/index",
							"iconPath": require("@/static/g/1.svg"),
							"selectedIconPath": require("@/static/g/1.1.svg"),
							"text": "明细",
							"index": 0
						},
						{
							"pagePath": "pages/index/index",
							"iconPath": require("@/static/g/2.svg"),
							"selectedIconPath": require("@/static/g/2.1.svg"),
							"text": "图标",
							"index": 1
						},
						{
							"pagePath": "pages/index/index",
							"iconPath": require("@/static/g/3.svg"),
							"selectedIconPath": require("@/static/g/3.svg"),
							"text": "记账",
							"index": 2
						},
						{
							"pagePath": "pages/index/index",
							"iconPath": require("@/static/g/4.svg"),
							"selectedIconPath": require("@/static/g/4.1.svg"),
							"text": "发现",
							"index": 3
						},
						{
							"pagePath": "pages/index/index",
							"iconPath": require("@/static/g/5.svg"),
							"selectedIconPath": require("@/static/g/5.1.svg"),
							"text": "我的",
							"index": 4
						},
					]
				},

			}
		},
		methods: {
			tabbarSelect: function(index) {
				play_mp3();
				uni.vibrateShort();
				this.selectedIndex = index;
				// const innerAudioContext = uni.createInnerAudioContext();
				// innerAudioContext.src =  '../../static/g/1.mp3'; // 本地音乐文件绝对路径
				// innerAudioContext.play();
				
			},
			onFeedTap: function() {
				let platform = uni.getSystemInfoSync().platform
				// #ifdef APP-PLUS
				if (platform == "ios") {
					let UIImpactFeedbackGenerator = plus.ios.importClass('UIImpactFeedbackGenerator');
					let impact = new UIImpactFeedbackGenerator();
					impact.prepare();
					impact.init(1);
					impact.impactOccurred();
				}
				if (platform == "android") {
					uni.vibrateShort();
				}
				// #endif
			},
			vibrate: function() {
				uni.vibrateLong({
					success: function() {
						console.log('success');
					}
				});
			}
		},
		props: {
			"title": {
				type: String,
				default: "默认标题"
			},
			"bgColor": {
				default: "默认标题"
			}
		},
	}
</script>

<style lang="scss" scoped>
	* {
		// border: 1px solid red;
	}

	.tabbar {
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		z-index: 9999;
		background-color: #F8F8F8;
		width: 100%;
		display: flex;
		justify-content: space-around;
	}

	.item {
		height: 100%;
		padding: 7px 0px;

		.img {
			height: 28px;
			width: 28px;
		}

		.bottom {
			font-size: 0.8em;
			color: rgba(0, 0, 0, 0.5);
		}

	}

	.themeColor {
		color: $theme-green;
	}

	.themeColorSelect {
		color: $theme-green-bg;
	}

	// 中间的图标加大
	.yuan {
		position: fixed;
		bottom: 7px;
		border-radius: 50%;
		background-color: #F8F8F8;

		.img_yuan {
			padding: 0 !important;
			margin: 0 !important;
			height: 50px;
			width: 50px;
			border: 7px solid #F8F8F8;
			border-radius: 50%;
		}
	}

	.hd {
		visibility: hidden;
	}
</style>
