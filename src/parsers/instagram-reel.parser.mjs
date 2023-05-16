import axios from "axios";
import * as cheerio from "cheerio";

export async function getReelInfo(url) {
  // Get the raw HTML
  const rawHTML = (await axios.get(url)).data;

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
