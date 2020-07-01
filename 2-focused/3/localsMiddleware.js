import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "uploads/videos/" });
export const uploadVideo = multerVideo.single("videoFile");

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "Wetube";
  res.locals.user = {
    isAuthenticated: 1,
    id: 343555,
  };
  next();
};
