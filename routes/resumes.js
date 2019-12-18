const express = require("express");
const router = express.Router();
const ResumeParser = require("simple-resume-parser");

router.get("/", async (req, res) => {
  console.log("Hi");
  res.send({ hi: "hi" });
});

router.post("/", async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).send("Missing URL");
    const resume = new ResumeParser(url);
    const parsed = await resume.parseToJSON();
    res.send(parsed);
  } catch (err) {
    console.log("ERRRORRRRR");
    res.statusCode(500).send({ err });
  }
});

module.exports = router;
