require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from ');
});
const port = process.env.PORT || 6000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  