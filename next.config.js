const withTs = require("@zeit/next-typescript");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");
const { ANALYZE } = process.env;

module.exports = withTs(
  withBundleAnalyzer({
    analyzeServer: ["server", "all"].includes(ANALYZE),
    analyzeBrowser: ["browser", "all"].includes(ANALYZE)
  })
);
