const express = require('express');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/hello-world', (req, res) => {
  res.send('Hello World!');
});

app.post('/post-data', function (req, res) {
  console.log(req.body);
  res.json({ ...req.body, data: 'extra data' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
