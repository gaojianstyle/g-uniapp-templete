<script>
	
	import Vue from 'vue'
	export default {
		// onLaunch: function() {
		// 	console.log('App Launch')
		// },
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		
		//////////////////////////
		globalData: {
		    // 全局设置状态栏和导航栏高度
		    statusBarH: 0,
		    customBarH: 0,
		},
		onLaunch: function() {
			
		   //  uni.getSystemInfo({
		   //      success: (e) => {
		   // //          // 获取手机状态栏高度
		   // //          let statusBar = e.statusBarHeight
		   // //          let customBar;
		            
		   // //          // #ifndef MP
		   // //          customBar = statusBar + (e.platform == 'android' ? 50 : 45)
		   // //          // #endif
		            
		   // //          // #ifdef MP-WEIXIN
		   // //          // 获取胶囊按钮的布局位置信息
		   // //          let menu = wx.getMenuButtonBoundingClientRect()
		   // //          // 导航栏高度 = 胶囊下距离 + 胶囊上距离 - 状态栏高度
		   // //          customBar = menu.bottom + menu.top - statusBar
		   // //          // #endif
		            
		   // //          // #ifdef MP-ALIPAY
		   // //          customBar = statusBar + e.titleBarHeight
		   // //          // #endif
		            
		   // //          // 注意：此方法不支持原生Nvue页面
		   // //          Vue.prototype.statusBarH = statusBar
		   // //          Vue.prototype.customBarH = customBar
		            
		   // //          // 支持nvue页面写法（兼容H5/小程序/APP/APP-Nvue）
		   // //          this.globalData.statusBarH = statusBar
		   // //          this.globalData.customBarH = customBar
					
					
					
					
					
					// // console.log(`胶囊下距离:`,menu.bottom)
					// // console.log(`胶囊上距离:`,menu.top)
					
		   //      }
		   //  })
		   
		   
		},
	}
	
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "tailwindcss/base";
	@import "tailwindcss/utilities";


	@import "@/uni_modules/uview-ui/index.scss";

	// page {
	// 	background-color: gray;
	// }



	* {
		// border: 1px solid red; 
	}

	// pc端内容的最大宽度
	$max-width: 600px;

	/*  #ifdef  H5  */

	// // 设置pc端两边颜色
	// html {
	//   background-color: #1E1E1E;
	//   display: flex;
	//   justify-content: center;
	//   align-items: center;
	//   background-color: #fff;
	// }

	// // 设置页面内容居中
	// body {
	//   max-width: $max-width;
	// }

	// // 设置页面标题居中
	// .uni-page-head {
	//   max-width: $max-width;
	//   margin: auto !important;
	// }

	
	/*  #endif  */
	
	// 解决app左边不靠边的问题
	body{
		padding: 0;
		margin: 0;
	}

	.cc {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.cy {
		display: flex;
		align-items: center;
	}

	.cx {
		display: flex;
		justify-content: center;
	}

	uni-page-head {
		display: none;
	}
	
	.max{
		
	}
</style>
