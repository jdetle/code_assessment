import Router from "nextjs-dynamic-routes";

const router = new Router();

router.add({
  name: "index",
  pattern: "/"
});
router.add({
  name: "words",
  pattern: "/words_list"
});

module.exports = router;
