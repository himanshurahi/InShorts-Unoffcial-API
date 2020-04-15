const getAllNews = async (page) => {
  return (news = await page.evaluate(() => {
    let tmp = [];
    // let id = document
    //   .querySelectorAll("script")[25]
    //   .innerHTML.slice(25)
    //   .split(";")[0]
    //   .split('"')[0];

    document.querySelectorAll(".news-card").forEach((data) => {
      tmp.push({
        news_image: data
          .querySelectorAll(".news-card .news-card-image[style]")[0]
          .getAttribute("style")
          .split("'")[1],
        news_title: data.querySelector(".news-card-title > a > span").innerText,
        news_link:
          "https://inshorts.com/" +
          data.querySelector(".news-card-title > a").getAttribute("href"),
        author_name: data.querySelector(".news-card-author-time > span")
          .innerText,
        news_date: data.querySelector(".news-card-author-time").childNodes[7]
          .innerText,
        body: data.querySelector(".news-card-content > div").innerText,
        read_more_link:
          data.querySelector(".source") &&
          data.querySelector(".source").getAttribute("href"),
      });
    });
    return {
      news: tmp,
    };
  }));
};

module.exports = {
  getAllNews: getAllNews,
};
