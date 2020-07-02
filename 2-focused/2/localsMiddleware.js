import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "/2-focused/2/uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.routes = routes;
  res.locals.siteName = "WeTube";
  // res.locals.user = req.user;
  res.locals.user = {
    isAthenticated: true,
    id: 4432,
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile");
