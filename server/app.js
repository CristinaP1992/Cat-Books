const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log('Server is running...');
});

module.exports = app;
