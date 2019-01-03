const { STOP_WORDS, DROPPED_SYMBOLS, DROPPED_REGEXES } = require("./constants");
const { filterPunctuation, replaceBetween, fetchTweets } = require("./utils");

function aggregateMeaningfulInformation(tweets) {
  /**
   * Increments the aggregated count for every time the word occurs in that tweet.
   * For each tweet, adds the tweet-level data to each unique word that appears.
   *
   * @param tweets : Array<Object> - Twitter Statuses Response, the 100 tweets returned by API
   * with attached meaningful word list.
   * @return { topWords, totalUniqueWords } : - Top 20 words and total number of unique words.
   */
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

function filterEntities(tweet) {
  /**
   * Return tweet full_text without hashtags, symsbols, user mentions or urls, as they cannot be pertinent words.
   * @param tweet : <Object> - Twitter Status Response item, one of 100 tweets returned by API
   * @return text : string - Filtered text containing whitespace where entities once were.
   */
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
  /**
   * Drop insignificant words by filtering out common stopwords and symbols.
   *
   * @param text : string - Entity-filtered tweet containing potential stop words, symbols, and unique words.
   * @return { meaningfulWords, numWords } - Non-stop words, and the total number of words in the tweet.
   */
  const words = text.trim().split(/\s+/g);
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

  const numWords = meaningfulWords.length;
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
        tweet.ratioUniqueWords = meaningfulWords / numWords;
        return tweet;
      });
      return Promise.resolve(tweetsWithMeaningfulWords);
    })
    .then(aggregateMeaningfulInformation)
    .then(data => {
      res.end(JSON.stringify(data));
    });
};
