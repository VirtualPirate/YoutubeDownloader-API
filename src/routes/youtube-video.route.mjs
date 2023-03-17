import express from "express";
import {
  videoDetailsAll,
  videoDetails,
} from "../controllers/youtube-video.controller.mjs";

const YoutubeVideoRouter = express.Router();

YoutubeVideoRouter.get("/:url", videoDetailsAll);
YoutubeVideoRouter.get("/details/:url", videoDetails);

export default YoutubeVideoRouter;
