const puppeteer = require("puppeteer");
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const getNews = require("./helper");
const PORT = 3001

server.listen(PORT, () => {
  console.log("Server Started On Port : "+PORT);
});

app.get("/", (req, res) => {
  return res.send({
    msg: "Unofficial InShorts News API",
    endpoints: { 1: "/news/all", 2: "/news/category/category_name" },
  });
});

app.get("/news/all", (req, res) => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://inshorts.com/en/read", {
      waitUntil: "networkidle2",
    });

    res.status(200).send(await getNews.getAllNews(page));
    await browser.close();
  })();
});

app.get("/news/category/:category", async (req, res) => {
  const cat = req.params.category;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://inshorts.com/en/read/" + cat, {
    waitUntil: "networkidle2",
  });

  res.status(200).send(await getNews.getAllNews(page));
  await browser.close();
});
