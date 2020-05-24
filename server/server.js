const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Post = require('./Models/Posts')
const User = require('./Models/Users')

const app = express();

mongoose.connect(
  'mongodb+srv://user:test1945@cluster0-306uy.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.listen(5000, () => console.log('App is working on port 5000'));
