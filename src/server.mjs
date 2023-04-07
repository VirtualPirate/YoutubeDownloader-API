import express from "express";
import cors from "cors";
// import https from "https";
// import fs from "fs";

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

// app.get("/download/:filename", function (req, res) {
//   const filename = req.params.filename;
//   const fileUrl =
//     "https://rr5---sn-n4v7sns7.googlevideo.com/videoplayback?expire=1679577722&ei=Gv4bZMDQLMuIkgbRpI_ADA&ip=52.53.226.139&id=o-APi_WgJTmHbQ9Xy8FIJxrx4aSQI4bcWyndAbuFk0aVsS&itag=22&source=youtube&requiressl=yes&mh=yd&mm=31%2C29&mn=sn-n4v7sns7%2Csn-o097znsr&ms=au%2Crdu&mv=m&mvi=5&pl=17&initcwndbps=916250&vprv=1&mime=video%2Fmp4&ns=TiBj1hVJjtPxlce3kRBEX7sL&cnr=14&ratebypass=yes&dur=506.264&lmt=1658833633640510&mt=1679555815&fvip=1&fexp=24007246&beids=24512778&c=WEB&txp=5532434&n=CTU5DaiVBFrGJA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgJuroBBlEuKtsS1rcA1nUfb8IvlhnN7fVRGDJWo9dAQYCIEeUw1-RlcMAVNAQU7TSIjJhoBj-AtyKUu-qFR6g87gy&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgeCJthz1c_vsKUdAqZJnFrKgktdGdAySsnBJRWUWhJnsCIAlTBdMLBeREhyrHXHGDxrdOiXMG-wegfn2Vt7-nlQYW";

//   const file = fs.createWriteStream("file.mp4");

//   const request = https.get(fileUrl, function (response) {
//     res.setHeader("Content-Disposition", "attachment; filename=" + filename);
//     res.setHeader("Content-Type", "video/mp4");

//     response.pipe(res);

//     // after download completed close filestream
//     file.on("finish", () => {
//       file.close();
//       console.log("Download Completed");
//     });
//   });

//   request.on("error", function (err) {
//     console.log(err);
//     res.sendStatus(500);
//   });
// });

app.listen(PORT, () => {
  console.log(`Listening on PORT : ${PORT} ....`);
});
