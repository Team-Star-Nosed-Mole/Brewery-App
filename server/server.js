const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../client/template.html"));
});

module.exports = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
