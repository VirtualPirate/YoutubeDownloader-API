import getReelVideo from "../parsers/instagram-reel.parser.mjs";

export async function reelDownloadUrl(req, res) {
  const url = req.body.url;
  try {
    const directLink = await getReelVideo(url);
    res.status(200).json({ status: "SUCCESS", link: directLink });
  } catch (error) {
    res.status(500).json({ status: "FAILED" });
  }
}
