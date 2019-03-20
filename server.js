const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys").mongoURI;

const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');
const port = process.env.port || 5000;

mongoose
  .connect(db)
  .then(() => console.log("Connected successfully"))
  .catch(err => console.log(err));
  
app.listen(port, () => console.log(`Server is listening on port ${port}`));

app.get("/", (req, res) => {
  res.send("Hello Baby, How are you");
});

app.use('/api/users', users);
app.use('/api/posts',posts);
app.use('/api/profiles',profiles);
