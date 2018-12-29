# Meshify IOT Assessment

## Project Design Goals
-------------------
- User shows up on splash page that explains that they will see a summary of the hottest words in IOT
- When the user hits the splash page, the serverless api gets a request such that the user gets an experience that feels instantaneous
- When you decided to see the list of hot words, you can hover over each item in the list, and then you get taken to a specific route to show pertinent data for that list
- The pertinent data shows a carousel of interesting automatable facts
    - buzz factor (likelihood that given the occurence of this word another hot word occurs in the tweet that had that word in it)
    - tweets that had that word
    - a let me google that for you link
    - definition of the word if its not a proper noun
    - synonyms if its not a proper noun
    - etymology if its not a proper noun
    - frequency of occurence in tweets
    - if it is a proper noun, provide a link to searching that word on twitter


## Project Tool Choices
--------------------
- Near Perfect Lighthouse scores 
- Components Built with Test Backed Development with Jest (going to try out react-testing-library for the first time)
- SSR and Routing with next.js
- CSS-in-JS with Styled Components
- Static typing with TypeScript
- Any data vizualization will be done with Semiotic 
- Serverless backend with Zeit's `now` (going to try this out for the first time)

## General Design Concept
------------------------
The Spotify Year Wrapped Up app is impressively in its minimalism, its effective use of color and animation. It does a lot of visualization and I would love to draw from it.

## Running locally
-----------------
1. In one terminal run `npm i -g now-lambda-runner` then run `now-lambda`
2. You should see that the `api/aggregateIot` lambda is up and running.
3. In a separate terminal run `npm run dev`
4. Your next app should be running on `localhost:3000`

## Deploying
------------
1. Install the now cli with `npm i -g now` 
2. Add the appropriate twitter consumer_key with `now secret add consumer_key CONSUMER_KEY_HERE`
3. Add the appropriate twitter consumer secret with `now secret add consumer_secret CONSUMER_SECRET_HERE`
4. Then run `now`

Alternatively, push to master and the now github integration will continuously deploy
