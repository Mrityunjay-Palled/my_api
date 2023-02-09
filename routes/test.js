const router = require("express").Router();

router.get("/sample_test", (req, res) => {
  res.send("sample_test success");
});

module.exports = router;
