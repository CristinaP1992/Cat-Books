const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
