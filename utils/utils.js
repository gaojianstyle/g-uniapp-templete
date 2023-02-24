//utils.js

/**
 * 
 */
function play_mp3(mp3_src='../static/g/1.mp3',over_time=300) {
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	innerAudioContext.src = '../static/g/1.mp3';
	innerAudioContext.src = 'https://cdn.jsdelivr.net/gh/gaojianstyle/g-cdn-world-0@main/g/static/mp3/1.mp3';
	innerAudioContext.onPlay(() => {
	});
	innerAudioContext.onError((res) => {
	});
	setTimeout(() => {
		innerAudioContext.destroy() // 音效一般为1s，2s后销毁实例
	}, over_time)
}



module.exports = {
	play_mp3,
}
