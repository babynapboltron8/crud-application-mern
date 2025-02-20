const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node API updated');
});

mongoose
  .connect(
    'mongodb+srv://admin:uLxzm4iAls0OUTQ5@crup-application.56yqo.mongodb.net/?retryWrites=true&w=majority&appName=crup-application'
  )
  .then(() => {
    console.log('Connected to the database!');
    app.listen(4000, () => {
      console.log('Server running on port 3000');
    });
  })
  .catch(() => {
    console.log('Connection failed!');
  });
