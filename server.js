const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const EmployeeRoute = require('./routes/employee');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("API is running on port 3000");
});

app.use('/api/employee', EmployeeRoute);

const url = 'mongodb://127.0.0.1:27017/testdb'; // Adjust the URL as needed
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(url, options)
  .then(() => {
    console.log("Connection to MongoDB successful");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = app;
