<script>
export default {
	onLaunch: function () {
		console.log('App Launch')
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	}
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

// // pc端内容的最大宽度
// $max-width: 600px;

// /*  #ifdef  H5  */

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


// /*  #endif  */

.cc{
	display: flex;
	justify-content: center;
	align-items: center;
}

.cy{
	display: flex;
	align-items: center;
}

.cx{
	display: flex;
	justify-content: center;
}



</style>