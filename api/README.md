# Twitter Search API 
1. Setup a twitter account
2. Register an application on developer.twitter.com
3. Write code to generate a bearer token : https://developer.twitter.com/en/docs/basics/authentication/overview/oauth
    - Need to save consumer key and secret via now secrets
    - This bearer token is used to authorize a request thats made to the search api following the correct format
4. https://api.twitter.com/1.1/search/tweets.json?q=${iot}&result_type=recent will give a list of tweets
    - API specified here: https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html
5. Keys to care about:
    statuses
        .created_at
        .id
        .user.name
        .url
        .coordinates
        .place
        .retweet_count
        .favorite_count

# Steps in computatio
1. Ensure that an appropriate access token exists, fetch if invalid
2. Fetch recent tweets containing IoT
3. Filter for english language tweets
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
                retweet_count: number,
                favorite_count: number,
                tweets_with_word: number,
                urls: Array<string>,
                places: Array<string>,
            }
        ]
    }
