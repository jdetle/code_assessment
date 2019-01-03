const Twit = require("twit");
const { STOP_WORDS, DROPPED_SYMBOLS, DROPPED_REGEXES } = require("./constants");

function fetchTweets() {
  const { CONSUMER_KEY, CONSUMER_SECRET } = process.env;
  const T = new Twit({
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
    app_only_auth: true,
    timeout_ms: 60 * 1000,
    strictSSL: true
  });
  return T.get("search/tweets", {
    q: "#IoT since:2011-07-11 exclude:replies exclude:retweets",
    lang: "en",
    tweet_mode: "extended",
    count: 100
  });
}

function aggregateMeaningfulInformation(tweets) {
  const words = {};
  tweets.forEach(tweet => {
    let addedWords = {};
    tweet.meaningfulWords.forEach(word => {
      addedWords[word] = true;
      if (words[word] != null) words[word].count++;
      else {
        words[word] = { count: 1 };
      }
    });
    Object.keys(addedWords).forEach(word => {
      if (words[word].retweetCount)
        words[word].retweetCount += tweet.retweet_count;
      else {
        words[word].retweetCount = tweet.retweet_count;
      }
      if (words[word].favoriteCount)
        words[word].favoriteCount += tweet.favorite_count;
      else {
        words[word].favoriteCount = tweet.favorite_count;
      }
      if (words[word].tweets) {
        words[word].tweets.push({
          fullText: tweet.full_text,
          id: tweet.id_str
        });
      } else {
        words[word].tweets = [
          {
            fullText: tweet.full_text,
            id: tweet.id_str
          }
        ];
      }
      if (words[word].tweetsWithWord) words[word].tweetsWithWord += 1;
      else {
        words[word].tweetsWithWord = 1;
      }
    });
  });
  const sortedWords = Object.entries(words).sort(
    (a, b) => b[1].count - a[1].count
  );
  const topWords = sortedWords.slice(0, 20);
  const data = {
    topWords: topWords,
    totalUniqueWords: sortedWords.length
  };
  return Promise.resolve(data);
}
function filterPunctuation(word) {
  if (word != null) word = word.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ");
  return word;
}
function replaceBetween(str, start, stop) {
  let diff = stop - start;
  let spaces = "";
  for (var i = 0; i < diff; i++) {
    spaces += " ";
  }
  return str.substring(0, start) + spaces + str.substring(stop);
}
function filterEntities(tweet) {
  const { hashtags, symbols, user_mentions, urls } = tweet.entities;
  let text = tweet.full_text;
  hashtags.forEach(
    hashtag =>
      (text = replaceBetween(text, hashtag.indices[0], hashtag.indices[1] + 1))
  );
  symbols.forEach(
    symbol =>
      (text = replaceBetween(text, symbol.indices[0], symbol.indices[1] + 1))
  );
  user_mentions.forEach(
    mention =>
      (text = replaceBetween(text, mention.indices[0], mention.indices[1] + 1))
  );
  urls.forEach(
    url => (text = replaceBetween(text, url.indices[0], url.indices[1] + 1))
  );
  return text;
}
function getMeaningfulWords(text) {
  const words = text.trim().split(/\s+/g);
  const numWords = words.length;
  const meaningfulWords = words
    .map(word => {
      word = word.toLowerCase();
      DROPPED_SYMBOLS.forEach(element => {
        if (word != null) word = word.match(element) != null ? null : word;
      });
      DROPPED_REGEXES.forEach(regex => {
        if (word != null) word = word.match(regex) != null ? null : word;
      });
      STOP_WORDS.forEach(stop_word => {
        if (word != null) word = word == stop_word ? null : word;
      });
      return filterPunctuation(word);
    })
    .filter(word => word != null && word != "" && word != "iot");
  return { meaningfulWords, numWords };
}
module.exports = (request, res) => {
  fetchTweets()
    .then(response => Promise.resolve(response.data.statuses))
    .then(tweets => {
      const tweetsWithMeaningfulWords = tweets.map(tweet => {
        const { meaningfulWords, numWords } = getMeaningfulWords(
          filterEntities(tweet)
        );
        tweet.meaningfulWords = meaningfulWords;
        tweet.numWords = numWords;
        tweet.ratioMeaninfulWords = meaningfulWords.length / numWords;
        return tweet;
      });
      return Promise.resolve(tweetsWithMeaningfulWords);
    })
    .then(aggregateMeaningfulInformation)
    .then(data => {
      res.end(JSON.stringify(data));
    });
};
