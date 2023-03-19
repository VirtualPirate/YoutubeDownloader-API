import express from "express";
import {
  videoDetailsAll,
  videoDetails,
} from "../controllers/youtube-video.controller.mjs";
import { handleUrl } from "../middlewares/youtubeurl.middleware.mjs";

const YoutubeVideoRouter = express.Router();

YoutubeVideoRouter.use(handleUrl);

YoutubeVideoRouter.get("/", videoDetailsAll);
YoutubeVideoRouter.get("/details/", videoDetails);

YoutubeVideoRouter.post("/", videoDetailsAll);
YoutubeVideoRouter.post("/details/", videoDetails);

// YoutubeVideoRouter.post("/")

export default YoutubeVideoRouter;
