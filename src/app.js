const express = require('express');
const app = express();

app.get('/index', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 
