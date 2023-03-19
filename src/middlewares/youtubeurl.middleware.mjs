export function handleUrl(req, res, next) {
  if (req.method === "POST") {
    req.url_ = req.body.url;
    return next();
  } else if (req.method === "GET") {
    req.url_ = req.query.url;
    return next();
  }

  res.send({
    status: "FAILED",
    message: "Please provide a youtube link in the url param",
  });
}
