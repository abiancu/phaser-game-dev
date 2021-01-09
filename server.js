const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;

// const pahserFile = app.use(express.static(path.join(__dirname, )));

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
  res.render('index');
});

// app.use(pahserFile);

app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
