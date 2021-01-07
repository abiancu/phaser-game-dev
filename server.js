const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  err ? console.log(err) : res.send('index');
});

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
