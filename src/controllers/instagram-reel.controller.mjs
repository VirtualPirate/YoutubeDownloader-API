import { getReelInfo } from "../parsers/instagram-reel.parser.mjs";

export async function reelDownloadUrl(req, res) {
  const url = req.body.url;
  try {
    const reelInfo = await getReelInfo(url);
    res.status(200).json({ status: "SUCCESS", response: reelInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "FAILED", response: null });
  }
}
