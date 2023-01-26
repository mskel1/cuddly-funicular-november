const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

let myName = 'Meghan';

app.get('/', async (req, res) => {
  //res.send('Hello World- is it November?')
  let result = await res.send(`<h3>Hi, ${ myName }</h3>`);

  console.log( myName);

})

app.get('/show', (req, res) => {
    //res.sendFile('index.html');
    res.sendFile('index.html' , { root : __dirname});
})

console.log("before app dot get to slash ejs", myName);

app.get('/ejs', (req,res) => {
    //ejs stuff goes here
    console.log("in /ejs before render:", myName);
    
    res.render('index', { myName: myName } ); //left one is ejs, right is node
    
    console.log("after res render /ejs", myName);
})

app.get('/name', (req,res) => {
  console.log("in get to slash name:", req.query.ejsFormName);    
})

console.log("after app dot get to slash ejs", myName);

console.log('in the node console');

app.listen(PORT, () => {
    console.log(`Server is running & listening on port ${ PORT }`)
  });
