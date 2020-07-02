import express from "express";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import routes from "./routes";
import { localsMiddleware } from "./localsMiddleware";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/2-focused/2/uploads", express.static("/2-focused/2/uploads"));
// app.use("/1-main/static", express.static("1-main/static"));
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
