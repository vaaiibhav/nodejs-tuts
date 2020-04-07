
const express = require('express')
var bodyParser = require('body-parser')

const app = express()
const port = 3000
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })



app.get('/', (req, res) => res.send('Hello World!'))

app.get('/users',(requ,resp) =>
{
    

})
app.post('/login',urlencodedParser,(req,res) =>{
    var reqobj = {};
    reqobj = req.body;
    console.log(reqobj);
    res.send("Data Received Sucessfully");


})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))