# Meshify IOT Assessment


Project Design Goals
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


Project Tool Choices
--------------------
- Near Perfect Lighthouse scores 
- Components Built with Test Backed Development with Jest (going to try out react-testing-library for the first time)
- SSR and Routing with next.js
- CSS-in-JS with Styled Components
- Static typing with TypeScript
- Any data vizualization will be done with Semiotic 
- Serverless backend with Zeit's `now` (going to try this out for the first time)

Design Inspiration
------------------
- Spotify's Year in Review 

