const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  console.log("Hi");
  res.send({ hi: "hi" });
});

router.post("/", async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).send("Missing URL");
  res.send({ hi: "hi" });
});

module.exports = router;
