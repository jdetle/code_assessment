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
  name: "about",
  pattern: "/about"
});
module.exports = router;
