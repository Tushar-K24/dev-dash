import gplay from "google-play-scraper";

var reviews;
const fetch_reviews = async () => {
  reviews = await gplay.reviews({
    appId: "com.rockstargames.gtavc",
    sort: gplay.sort.NEWEST,
    num: 5,
  });
  console.log(reviews.data);
};

const fetch_appData = async () => {
  const app = await gplay.app({ appId: "com.rockstargames.gtavc" });
  console.log(app);
};

fetch_reviews();
// fetch_appData();
