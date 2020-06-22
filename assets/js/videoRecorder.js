const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn");
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;

const startRecording = () => {
  console.log(stream);
};

const getVideo = async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: { width: 1280, height: 720 },
    });
    videoPreview.srcObject = stream;
    videoPreview.play();
    recordBtn.innerHTML = "Stop recording";
    streamObject = stream;
    startRecording();
  } catch (error) {
    recordBtn.innerHTML = "😐 Can't record";
  } finally {
    const startRecording = () => {};

    recordBtn.removeEventListener("click", getVideo);
  }
};

function init() {
  const startRecording = () => {};

  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}
