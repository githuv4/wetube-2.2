const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = videoContainer.querySelector("video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScrnBtn = document.getElementById("jsFullScreen");

function handleVolumeClick() {
  if (videoPlayer.muted) {
    videoPlayer.muted = false;
    volumeBtn.innerHTML = `<i class="fas fa-volume-up"></i>`;
  } else {
    videoPlayer.muted = true;
    volumeBtn.innerHTML = `<i class="fas fa-volume-mute"></i>`;
  }
}
function handlePlayClick() {
  if (videoPlayer.paused) {
    videoPlayer.play();
    playBtn.innerHTML = `<i class="fas fa-pause"></i>`;
  } else {
    videoPlayer.pause();
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
  }
}
function handleEnded() {
  playBtn.innerHTML = `<i class="fas fa-play"></i>`;
}

function exitFullScreen() {
  fullScrnBtn.innerHTML = `<i class="fas fa-expand"></i>`;
  fullScrnBtn.addEventListener("click", goFullScreen);
  document.webkitExitFullscreen();
}

function goFullScreen() {
  fullScrnBtn.innerHTML = `<i class="fas fa-compress"></i>`;
  // videoContainer.webkitRequsetFullscreen();

  if (videoContainer.requestFullscreen) {
    videoContainer.requestFullscreen();
  } else if (videoContainer.mozRequestFullScreen) {
    videoContainer.mozRequestFullScreen();
  } else if (videoContainer.webkitRequestFullScreen) {
    videoContainer.webkitRequestFullScreen();
  } else if (videoContainer.msRequestFullscreen) {
    videoContainer.msRequestFullscreen();
  }

  console.log("scrn");
  fullScrnBtn.removeEventListener("click", goFullScreen);
  fullScrnBtn.addEventListener("click", exitFullScreen);
}

function init() {
  playBtn.addEventListener("click", handlePlayClick);
  volumeBtn.addEventListener("click", handleVolumeClick);
  videoPlayer.addEventListener("ended", handleEnded);
  fullScrnBtn.addEventListener("click", goFullScreen);
}

if (videoContainer) {
  init();
}
