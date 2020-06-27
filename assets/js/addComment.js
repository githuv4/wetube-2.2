import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");

const sendComment = (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: { data },
  });
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
}

if (addCommentForm) {
  init();
}
