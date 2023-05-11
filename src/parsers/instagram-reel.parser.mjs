import * as cheerio from "cheerio";
import puppeteer from "puppeteer";

async function getHTML(url) {
  // Launch a headless browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to a URL
  await page.goto(url);

  // Wait for the video tag to appear
  await page.waitForSelector("video");

  // Get the HTML content
  const html = await page.content();

  // Close the browser
  await browser.close();

  // Return the HTML content
  // console.log(html);
  return html;
}

const getReelVideo = async (url) => {
  const html = await getHTML(url);

  // calls cheerio to process the html received
  const $ = cheerio.load(html);

  // searches the html for the videoString
  const videoString = $("video").attr("src");

  // returns the videoString
  return videoString;
};

export default getReelVideo;
