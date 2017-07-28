const express = require('express');

const app = express();
const path = require('path');

// different routers for client/api
const clientRouter = express.Router();

// static files
app.use('/static', express.static('build'));

// index.html
clientRouter.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

app.use('/', clientRouter);

console.log('frontend server listening at port 3000');
app.listen(3000);
