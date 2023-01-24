const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World- is it November?')
})

console.log('in the node console');

app.listen(PORT, () => {
    console.log(`Server is running & listening on port ${ PORT }`)
  });
