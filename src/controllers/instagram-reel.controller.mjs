export async function reelDownloadUrl(req, res) {
  const url = req.body.url;

  res
    .status(200)
    .json({ status: "SUCCESS", messege: "This API is working now" });
}
