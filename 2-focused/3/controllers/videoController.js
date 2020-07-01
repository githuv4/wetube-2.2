import routes from "../routes";
import Video from "../models/Video";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home(b3)", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home(b3)", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("Upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    file: { path },
    body: { title, description },
  } = req;
  // console.log(path, videoFile, title, description);
  // To Do : Upload and Save video
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  const video = await Video.findById(id);
  console.log(video);
  // console.log(video.fileUrl);
  res.render("videoDetail", { pageTitle: "Video Detail", video });
};

export const editVideo = async (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.send("Delete Video");
