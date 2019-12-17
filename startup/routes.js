const express = require("express");
const resumes = require("../routes/resumes");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/resumes", resumes);
  app.use(error);
};
