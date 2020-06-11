const videoContainer = document.getElementById(jsVideoPlayer);
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById(jsPlayButton);

function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.paused();
  }
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
}

if (videoContainer) {
  console.log("ok");
  init();
} else {
  console.log("error");
}
