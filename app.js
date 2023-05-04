const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Jared Martinez!');
});

app.get('/name', (req, res) => {
  res.send('My name is Jared Martinez.');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});