import express from "express";
import { reelDownloadUrl } from "../controllers/instagram-reel.controller.mjs";

const InstagramReelRouter = express.Router();

InstagramReelRouter.post("/", reelDownloadUrl);

export default InstagramReelRouter;
