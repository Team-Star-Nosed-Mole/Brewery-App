const bcrypt = require("bcrypt");
/// Added the db requirement - will need to be updated when we put in correct folder
const db = require("./db.js");

const userController = {};

// temporary storage array for testing, before we connect to SQL database
const users = [];

userController.createUser = async (req, res, next) => {
  /*
//FOR ADDING NEW USER INTO USER TABLE IN DB
const { firstname, lastname, homestate, username, password } = req.body.newUser;
const queryString = `INSERT INTO users (firstname, lastname, homestate, username, password) VALUES (${firstname}, ${lastname}, ${homestate}, ${username}, ${password})`;
await db.query(queryString);
*/

  /*
//FOR CHECKING PASSWORD AGAINST PASSWORD IN USER TABLE IN DB
const userName = req.params.userName
const queryString = `SELECT password FROM users WHERE username=${userName}`
*/

  /*
//FOR GETTING ALL 'ALREADY USED' PASSWORDS FROM USER TABLE IN DB
const queryString = `SELECT username FROM users`
const alreadyUsed = await db.query(queryString);
*/

  try {
    if (!req.body.username || !req.body.password)
      return next("missing username or password in createUser");

    //use bcrypt to hash the password, salting it 10 times
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await {
      username: req.body.username,
      password: hashedPassword,
    };
    users.push(user);
    res.locals.users = await users;
    // const newUser = await pool.query("INSERT INTO user (username) VALUES (password) RETURNING *");
    return next();
  } catch (err) {
    console.log(err);
    res.redirect("/signup");
  }
};

userController.verifyLogin = async (req, res, next) => {
  // const user = db.query

  const user = users.find((user) => (user.username = req.body.username));
  if (user == null) return res.status(400).send("Cannot find user");
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      next();
    } else {
      res.send("Incorrect password");
    }
  } catch (err) {
    console.log(err);
  }
};
// setCookie - set a cookie with a random number
userController.setCookie = (req, res, next) => {
  // set cookie with a name, value (in this case a random number)
  // httpOnly prevents the client from editing cookie in the browser
  res.cookie("BrewCookie", req.body.username, { http: true });
  return next();
};

module.exports = userController;

// copy and paste to serve.js

// const userController = require("./userController")

// app.post('/newUser', userController.createUser, (req, res) => {
//     res.json(res.locals.users);
// })

// app.post('/login', userController.verifyLogin, userController.setCookie, (req, res) => {
//     console.log('login success!')
//     res.send('login success');
// }
