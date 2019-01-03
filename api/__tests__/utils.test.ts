import { replaceBetween } from "../utils";

describe("Preprocessing steps", () => {
  test("Replace between returns string of same length", () => {
    let tweet_text = `#RedHat in collaboration with @Eurotechfan and @Cloudera, wins the 2019  @IoTBreakthrough award for #IoT Alliance of the Year! @RedHatPartners  htt
    ps://t.co/pi9rzXXRpJ`;
    let start = 0;
    let stop = 7;
    let newTweet = replaceBetween(tweet_text, start, stop);
    expect(tweet_text.length).toEqual(newTweet.length);
  });
});
