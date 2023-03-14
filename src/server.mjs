import express from "express";
import cors from "cors";

import {
  getInfo,
  getVideoDetails,
  getVideoLinks,
  getAudioLinks,
} from "./youtube-video-info.mjs";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.get("/youtube-video", async (req, res) => {
  const url = req.query.url;

  if (url) {
    // If the request contain a request url
    const info = await getInfo(url);

    const response = {
      ...(await getVideoDetails(info)),
      videos: await getVideoLinks(info),
      audios: await getAudioLinks(info),
      status: "SUCCESS",
    };

    console.log(response);

    res.send(response);
  } else {
    res.send({
      status: "FAILED",
      message: "Please provide a youtube link in the url param",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT : ${PORT} ....`);
});
