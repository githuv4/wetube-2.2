import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";
import { uploadVideo } from "../localsMiddleware";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.editVideo, editVideo);

videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
