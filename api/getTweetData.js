/*
require("es6-promise").polyfill();
const fetch = require("isomorphic-fetch");
const enc = require("urlencode");

function getFreshAccessToken() {
  let CONSUMER_KEY;
  let CONSUMER_SECRET;
  try {
    CONSUMER_KEY = process.env.CONSUMER_KEY;
    CONSUMER_SECRET = process.env.CONSUMER_SECRET;
  } catch (e) {
    console.warn(e);
  }
  let b64Token = new Buffer(`${enc(CONSUMER_KEY)}:${enc(CONSUMER_SECRET)}`).toString("base64");

  fetch(`https://api.twitter.com/oauth2/token?grant_type=client_credentials`, {
    method: "POST",
    Host: "api.twitter.com",
    Authorization: `Basic ${b64Token}`,
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  })
    .then(res => res.json())
    .then(json => console.log(json));
}
function fetchIoTTweets() {
  let iot = enc("#IoT");
  let accessToken = new Buffer.from(process.env.ACCESS_TOKEN).toString("base64");
  fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${iot}&result_type=recent`, {
    Authorization: `Bearer ${accessToken}`
  })
    .then(res => {
      if (res.status >= 400) {
        console.log(res);
        throw new Error("something went wrong", res);
      } else {
        return res.json();
      }
    })
    .then(json => {
      console.log(json);
    })
    .catch(e => console.error("Something when wrong", e));
}
fetchIoTTweets();
getIotTweetData();
*/
