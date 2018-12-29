# General Design Concept
The Spotify Year Wrapped Up app is impressively in its minimalism, its effective use of color and animation. It does a lot of visualization and I would love to draw from it.

# Running locally
1. In one terminal run `npm i -g now-lambda-runner` then run `now-lambda`
2. You should see that the `api/aggregateIot` lambda is up and running.
3. In a separate terminal run `npm run dev`
4. Your next app should be running on `localhost:3000`

# Deploying
1. Install the now cli with `npm i -g now-cli` 
2. Add the appropriate twitter consumer_key with `now secret add consumer_key CONSUMER_KEY_HERE`
3. Add the appropriate twitter consumer secret with `now secret add consumer_secret CONSUMER_SECRET_HERE`
4. Then run `now`

Alternatively, push to master and the now github integration will continuously deploy
