new Vue({
    el: '#nav',
    data: {
      isScrolled: false
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        // 获取页面滚动的垂直距离
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
        // 根据需要修改阈值来确定何时添加/移除滚动样式
        if (scrollTop > 100) {
          this.isScrolled = true;
        } else {
          this.isScrolled = false;
        }
      }
    }
  });
  
// var video = document.getElementById("my-video");
// var info = document.getElementById("video-info");

// video.addEventListener("mouseover", function() {
//   video.pause();
//   info.style.opacity = "0";
// });

// video.addEventListener("mouseout", function() {
//   video.play();
//   info.style.opacity = "1";
// });


//   //视频播放
//   //鼠标移进去
//   function videoPlayback(){
//     //获取视频标签
//     var video = document.getElementById('video');
//     //给视频标签添加缓存播放---video标签属性。
//     video.setAttribute("autoplay","autoplay")
//     //给视频标签添加循环播放---video标签属性。
//     video.setAttribute("loop","loop")
//     //播放视频
//     video.play();
// }

// //鼠标离开
// function videoStopped(){
//     //获取视频标签
//     var oDiv = document.getElementById('video');
//     //停止播放
//     video.pause();
// }


// 将NodeList转换为数组的方法
const videoContainers = Array.from(document.querySelectorAll('.video-container'));

videoContainers.forEach((container) => {
  const video = container.querySelector('video');
  const text = container.querySelector('.video-text');
  let playingVideo = null;

  container.addEventListener('mouseover', () => {
    if (playingVideo !== null && playingVideo !== video) {
      playingVideo.pause();
      playingVideo.currentTime = 0;
      playingVideo.parentElement.querySelector('.video-text').style.display = 'block';
    }

    video.play();
    text.style.display = 'none';
    playingVideo = video;
  });

  container.addEventListener('mouseout', () => {
    video.pause();
    video.currentTime = 0;
    text.style.display = 'block';
    playingVideo = null;
  });
});
