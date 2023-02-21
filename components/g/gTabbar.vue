<template>
	<view class="max">



		<view class="tabbar flex justify-around">


			<view class="item flex cc flex-col" v-for="i in tabBar.list">
				<view class="top">
					<image class="img" :src="i.iconPath" mode=""></image>
				</view>
				<view class="bottom">
					{{i.text}}
				</view>
			</view>



		</view>






	</view>
</template>

<script>
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
			height: 25px;
			width: 25px;
		}

		.bottom {
			font-size: 0.8em;
			color: rgba(0, 0, 0, 0.5);
		}
	}
</style>
