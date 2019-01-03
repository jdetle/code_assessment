# Twitter Search API 
1. Setup a twitter account
2. Register an application on developer.twitter.com

## Relevant links
-----------------
https://developer.twitter.com/en/docs/basics/authentication/overview/oauth
4. https://api.twitter.com/1.1/search/tweets.json?q=${iot}&result_type=recent will give a list of tweets
    - API specified here: https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html



# Steps in computation
2. Fetch recent tweets containing IoT using twit in extended mode
3. Filter entities from tweets and replace those areas with whitespace such that we can utilize the indices provided effectively.
4. Aggregate word data for each tweet into global tweet count object (count, rts, favs, increment the tweet count for word, push url, push location, )
    i. Filter unimportant words
    ii. Add unique words to global dictionary
    iii. Maintain a list of all words added by current tweet
    iv. At end of tweet, add tweet-level data for all words that have been added 
5. Return word data

## Data schema to return after computation
    {
        top_words: words: [
            <an english word>: {
                count: number,
                retweetCount: number,
                favoriteCount: number,
                tweetsWithWord: number,
            }
        ]
    }
