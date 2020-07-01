import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const increaseNumber = () => {
  conmmentNumber.innerHTML = parseInt(commentNumber.innerHTML) + 1;
};

const addComment = (comment) => {
  const li = document.createElement("li");
  document.getElementById("jsAddComment");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async (comment) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/comment`,
    method: "POST",
    data: { comment },
  });
  console.log(response.url);
  if (response.status === 200) {
    addCommentForm(comment);
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  console.log(comment);
  sendComment(comment);
  commentInput.value = "";
};

function init() {
  addCommentForm.addEventListener("submit", handleSubmit);
  //   console.log(window.location.href);
}

if (addCommentForm) {
  console.log("form exists");
  init();
} else {
  console.log("no form");
}
