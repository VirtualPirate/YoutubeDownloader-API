import axios from "axios";
import * as cheerio from "cheerio";

export async function getReelInfo(url) {
  // Get the raw HTML
  const rawHTML = (
    await axios.get(url, {
      maxRedirects: 0,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36",
      },
    })
  ).data;

  // calls cheerio to process the html received
  const $ = cheerio.load(rawHTML);

  // Extracts the Utf-8 encoded json object from HTML
  const rawInfo = JSON.parse(
    $('script[type="application/ld+json"]').text().toString("utf-8")
  );

  // Refines the rawInfo extracted
  const refineInfo = {
    author: {
      id: rawInfo?.author?.identifier?.value,
      image: rawInfo?.author?.image,
      name: rawInfo?.author?.name,
    },

    video: {
      likesCount: rawInfo?.interactionStatistic?.find((item) => {
        return item.interactionType.includes("LikeAction");
      }).userInteractionCount,

      commentCount: rawInfo?.interactionStatistic?.find((item) => {
        return item.interactionType.includes("CommentAction");
      }).userInteractionCount,

      ...rawInfo?.video[0],
    },
  };

  return refineInfo;
}
