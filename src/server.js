const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Docker Test App');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
