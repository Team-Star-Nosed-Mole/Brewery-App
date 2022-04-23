const express = require("express");
const app = express();
const path = require("path");

const userController = require("./userController")

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../client/template.html"));
});

app.post('/newUser', userController.createUser,  (req, res) => {
  res.json(res.locals.users);
})

app.post('/login', userController.verifyLogin, userController.setCookie, (req, res) => {
  console.log('login success!')
  res.send('login success');
})

module.exports = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
