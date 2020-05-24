const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const app = express();

app.listen(5000, () => console.log('App is working on port 5000'));
