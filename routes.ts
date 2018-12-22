const Router = require("nextjs-dynamic-routes");

const router = new Router();

router.add({
  name: "index",
  pattern: "/"
});
router.add({
  name: "words",
  pattern: "/words_list"
});
router.add({
  name: "word",
  pattern: "/words_list/:word"
});

module.exports = router;
