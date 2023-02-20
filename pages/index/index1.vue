<template>
	<view class="max">

		<view class="charts-box">
			<qiun-data-charts type="line" :opts="opts" :chartData="chartData" :canvas2d="true"
				canvasId="qakVQkYXThwiUfnMPGMkZkkqjctiuYpN" />
		</view>

		<view class=" flex flex-col items-center">

			<u-icon name="photo"></u-icon>
			<u-search shape="round"></u-search>

			<div class="p-7 m-5 bg-red-50">
				demo
			</div>


			<image class="w-12 h-12" src="../../static/logo.png"></image>
			<view>
				<text class="text-[44px] text-gray-800">{{ title }} World</text>
			</view>
			<view :class="[
				flag ? 'bg-red-900' : 'bg-[#fafa00]',
			]">Toggle</view>
			<view :class="{
				'bg-[#fafa00]': flag === true,
			}">Toggle</view>
			<view class="p-[20px] -mt-2 mb-[-20px] ">p-[20px] -mt-2 mb-[-20px] margin的jit 不能这么写 -m-[20px]</view>
			<view class="space-y-[1.6rem]">
				<view class="w-[300rpx] text-black text-opacity-[0.19]">w-[300rpx] text-black text-opacity-[0.19]</view>
				<view class="min-w-[300rpx] max-h-[100px] text-[20px] leading-[0.9]">min-w-[300rpx] max-h-[100px]
					text-[20px] leading-[0.9]</view>
				<view class="max-w-[300rpx] min-h-[100px] text-[#dddddd]">max-w-[300rpx] min-h-[100px] text-[#dddddd]</view>
				<view
					class="flex items-center justify-center h-[100px] w-[100px] rounded-[40px] bg-[#123456] bg-opacity-[0.54] text-[#ffffff]">
					Hello</view>
				<view class="border-[10px] border-[#098765] border-solid border-opacity-[0.44]">border-[10px]
					border-[#098765] border-solid border-opacity-[0.44]</view>
				<view class="grid grid-cols-3 divide-x-[10px] divide-[#010101] divide-solid">
					<div>1</div>
					<div>2</div>
					<div>3</div>
				</view>
				<view class="w-32 py-2 rounded-md font-semibold text-white bg-pink-500 ring-4 ring-pink-300">
					Default
				</view>
			</view>






		</view>
	</view>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
	data() {
		return {
			title: "Hello",
			flag: true,
			chartData: {},
			//这里的 opts 是图表类型 type="line" 的全部配置参数，您可以将此配置复制到 config-ucharts.js 文件中下标为 ['line'] 的节点中来覆盖全局默认参数。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
			opts: {
				timing: "easeOut",
				duration: 1000,
				rotate: false,
				rotateLock: false,
				color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
				padding: [15, 10, 0, 15],
				fontSize: 13,
				fontColor: "#666666",
				dataLabel: true,
				dataPointShape: true,
				dataPointShapeType: "solid",
				touchMoveLimit: 60,
				enableScroll: false,
				enableMarkLine: false,
				legend: {
					show: true,
					position: "bottom",
					float: "center",
					padding: 5,
					margin: 5,
					backgroundColor: "rgba(0,0,0,0)",
					borderColor: "rgba(0,0,0,0)",
					borderWidth: 0,
					fontSize: 13,
					fontColor: "#666666",
					lineHeight: 11,
					hiddenColor: "#CECECE",
					itemGap: 10
				},
				xAxis: {
					disableGrid: true,
					disabled: false,
					axisLine: true,
					axisLineColor: "#CCCCCC",
					calibration: false,
					fontColor: "#666666",
					fontSize: 13,
					lineHeight: 20,
					marginTop: 0,
					rotateLabel: false,
					rotateAngle: 45,
					itemCount: 5,
					boundaryGap: "center",
					splitNumber: 5,
					gridColor: "#CCCCCC",
					gridType: "solid",
					dashLength: 4,
					gridEval: 2,
					scrollShow: false,
					scrollAlign: "left",
					scrollColor: "#A6A6A6",
					scrollBackgroundColor: "#ab373700",
					title: "",
					titleFontSize: 13,
					titleOffsetY: 0,
					titleOffsetX: 0,
					titleFontColor: "#666666",
					format: ""
				},
				yAxis: {
					gridType: "dash",
					dashLength: 4,
					disabled: false,
					disableGrid: false,
					splitNumber: 5,
					gridColor: "#CCCCCC",
					padding: 10,
					showTitle: false,
					data: []
				},
				extra: {
					line: {
						type: "curve",
						width: 2,
						activeType: "hollow",
						linearType: "none",
						onShadow: false,
						animation: "vertical"
					},
					tooltip: {
						showBox: true,
						showArrow: true,
						showCategory: false,
						borderWidth: 0,
						borderRadius: 0,
						borderColor: "#000000",
						borderOpacity: 0.7,
						bgColor: "#000000",
						bgOpacity: 0.7,
						gridType: "solid",
						dashLength: 4,
						gridColor: "#CCCCCC",
						boxPadding: 3,
						fontSize: 13,
						lineHeight: 20,
						fontColor: "#FFFFFF",
						legendShow: true,
						legendShape: "auto",
						splitLine: true,
						horizentalLine: false,
						xAxisLabel: false,
						yAxisLabel: false,
						labelBgColor: "#FFFFFF",
						labelBgOpacity: 0.7,
						labelFontColor: "#666666"
					},
					markLine: {
						type: "solid",
						dashLength: 4,
						data: []
					}
				}
			}
		};
	},
	onReady() {
		this.getServerData();
	},
	methods: {
		getServerData() {
			//模拟从服务器获取数据时的延时
			setTimeout(() => {
				//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
				let res = {
					categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
					series: [
						{
							name: "消费",
							data: [352, 8, 25, 347, 4, 20]
						}
					]
				};
				this.chartData = JSON.parse(JSON.stringify(res));
			}, 500);
		},
	},
	onLoad() { },
	methods: {},
});
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin: 200rpx auto 50rpx auto;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}

.charts-box {
	width: 100%;
	height: 300px;
}
</style>
