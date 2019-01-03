# Meshify IOT Assessment

## Project Design Goals
-------------------
- User shows up on splash page that explains that they will see a summary of the hottest words in IOT
- When the user hits the splash page, the serverless api gets a request such that the user gets an experience that feels instantaneous
- When you decided to see the list of hot words, you can hover over each item in the list, and then you get taken to a specific route to show pertinent data for that list
- The pertinent data shows a set of interesting automatable facts
    - [x] tweets that had that word
    - [x] accumulated number of favorites from tweets that had word
    - [x] accumulated number of retweets from tweets that had word
    - [x] frequency of occurence in tweets
    - [x] ratio out of total number of unique words
    - [ ] buzz factor (likelihood that given the occurence of this word another hot word occurs in the tweet that had that word in it)
    - [ ] definition of the word if its not a proper noun
    - [ ] synonyms if its not a proper noun
    - [ ] etymology if its not a proper noun
    - [ ] if it is a proper noun, provide a link to searching that word on twitter


## Project Tool Choices
--------------------
- [x] Near Perfect Lighthouse scores 
- [x] SSR and Routing with next.js
- [x] CSS-in-JS with Styled Components
- [x] Static typing with TypeScript
- [x] Serverless backend with Zeit's `now` (going to try this out for the first time)
- [ ] Any data vizualization will be done with Semiotic (semiotic doesn't support ssr)

## General Design Concept
------------------------
The Spotify Year Wrapped Up app is impressively in its minimalism, its effective use of color and animation. It does a lot of visualization and I would love to draw from it.

## Running locally
-----------------
0. In a terminal, run `git clone git@github.com:jdetle/code_assessment` && run `npm i`
1. In one terminal run `npm run api`
2. You should see that the `api/aggregateV2` lambda is up and running.
3. In a separate terminal run `npm run dev`
4. Your next.js app should be running on `localhost:3000`

## Deploying
------------
1. Install the now cli with `npm i -g now` 
2. Add the appropriate twitter consumer_key with `now secret add consumer_key CONSUMER_KEY_HERE`
3. Add the appropriate twitter consumer secret with `now secret add consumer_secret CONSUMER_SECRET_HERE`
4. Then run `now`

Alternatively, push to master and the now github integration should continuously deploy
