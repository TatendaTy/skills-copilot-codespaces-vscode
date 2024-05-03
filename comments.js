// Create web server and listen to port 3000
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments.json');

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ comments });
});

app.post('/', (req, res) => {
  const { comment } = req.body;
  comments.push(comment);
  res.json({ comment });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
