//utils.js

//
function play_mp3(mp3_src='https://cdn.jsdelivr.net/gh/gaojianstyle/g-cdn-world-0@main/g/static/mp3/1.mp3',over_time=300) {
	// const innerAudioContext = uni.createInnerAudioContext();
	// innerAudioContext.autoplay = true;
	
	// // #ifdef APP-PLUS || H5
	// innerAudioContext.src = '../static/g/1.mp3';
	// // #endif
	// // #ifdef MP 
	// innerAudioContext.src = 'https://cdn.jsdelivr.net/gh/gaojianstyle/g-cdn-world-0@main/g/static/mp3/1.mp3';
	// // #endif
	
	// innerAudioContext.onPlay(() => {
	// });
	// innerAudioContext.onError((res) => {
	// });
	// setTimeout(() => {
	// 	innerAudioContext.destroy() // 音效一般为1s，2s后销毁实例
	// }, over_time)
	
	
	
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	// innerAudioContext.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
	// #ifdef APP-PLUS || H5
	innerAudioContext.src = '../static/g/mp3/1.mp3';
	// #endif
	// #ifdef MP 
	innerAudioContext.src = 'https://cdn.jsdelivr.net/gh/gaojianstyle/g-cdn-world-0@main/g/static/mp3/1.mp3';
	// #endif
	
	
	
	// innerAudioContext.src = 'https://cdn.jsdelivr.net/gh/gaojianstyle/g-cdn-world-0@main/g/static/mp3/1.mp3';
	innerAudioContext.src = mp3_src;
	
	innerAudioContext.onPlay(() => {
	  // console.log('开始播放');
	});
	innerAudioContext.onError((res) => {
	  // console.log(res.errMsg);
	  // console.log(res.errCode);
	});
	
}

module.exports = {
	play_mp3,
}
