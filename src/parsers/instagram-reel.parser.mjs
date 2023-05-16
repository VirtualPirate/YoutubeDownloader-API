import axios from "axios";
import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

import fs from "fs";

// Launch a headless browser instance
const browser = await puppeteer.launch({ headless: "new" });

async function getHTML(url) {
  // Create a new page
  const page = await browser.newPage();

  // Navigate to a URL
  await page.goto(url);

  // Wait for the video tag to appear
  await page.waitForSelector("video");

  // Get the HTML content
  const html = await page.content();

  // Close the browser
  await page.close();
  // await browser.close();

  // Return the HTML content
  // console.log(html);
  return html;
}

const getReelVideo = async (url) => {
  const html = await getHTML(url);

  // calls cheerio to process the html received
  const $ = cheerio.load(html);

  // searches the html for the videoString
  const videoDirectLink = $("video").attr("src");
  const description = $('meta[property="og:description"]').attr("content");
  const title = $('meta[property="og:title"]').attr("content");
  const image = $('meta[property="og:image"]').attr("content");

  // returns the videoString
  return {
    link: videoDirectLink,
    description,
    title,
    thumbnail: image,
  };
};

export async function closeBrowser() {
  await browser.close();
}

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

export default getReelVideo;
