import {
  getInfo,
  getVideoDetails,
  getVideoLinks,
  getAudioLinks,
} from "../youtube-video-info.mjs";

const FAIL_NO_URL = {
  status: "FAILED",
  message: "Please provide a youtube link in the url param",
};

// This controller function sends all the details regarding a youtube video
export async function videoDetailsAll(req, res) {
  const url = req.params.url;

  if (url) {
    // If the request contain a request url
    try {
      const info = await getInfo(url);

      const response = {
        ...(await getVideoDetails(info)),
        videos: await getVideoLinks(info),
        audios: await getAudioLinks(info),
        status: "SUCCESS",
      };

      console.log("[ Requested '/youtube-video' ]: ", url);
      res.send(response);
    } catch (error) {
      res.send({ status: "FAILED", message: error.message });
    }
  } else {
    res.send(FAIL_NO_URL);
  }
}

/*
    This controller function sends only the details of video
*/
export async function videoDetails(req, res) {
  const url = req.params.url;

  if (url) {
    // If the request contain a request url
    try {
      const info = await getInfo(url);

      const response = {
        ...(await getVideoDetails(info)),
        status: "SUCCESS",
      };

      console.log("[ Requested '/youtube-video/details' ]: ", url);

      res.send(response);
    } catch (error) {
      res.send({ status: "FAILED", message: error.message });
    }
  } else {
    res.send(FAIL_NO_URL);
  }
}

/*
    This controller function send download information of diffrent formats
    of the same video
*/

export async function mediaVideoDetails(req, res) {
  const url = req.params.url;

  if (url) {
    // If the request contain a request url
    const info = await getInfo(url);

    const response = {
      videos: await getVideoLinks(info),
      status: "SUCCESS",
    };

    console.log(response);

    res.send(response);
  } else {
    res.send(FAIL_NO_URL);
  }
}

/*

    This controller function sends all the details
    of audio formats of the youtube video

*/
export async function mediaAudioDetailsOnly(req, res) {
  const url = req.params.url;

  if (url) {
    // If the request contain a request url
    const info = await getInfo(url);

    const response = {
      audios: await getAudioLinks(info),
      status: "SUCCESS",
    };

    console.log(response);

    res.send(response);
  } else {
    res.send(FAIL_NO_URL);
  }
}
