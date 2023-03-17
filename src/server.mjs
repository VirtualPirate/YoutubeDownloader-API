import express from "express";
import cors from "cors";

import YoutubeVideoRouter from "./routes/youtube-video.route.mjs";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/youtube-video", YoutubeVideoRouter);

app.listen(PORT, () => {
  console.log(`Listening on PORT : ${PORT} ....`);
});
