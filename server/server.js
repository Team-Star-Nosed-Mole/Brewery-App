const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
