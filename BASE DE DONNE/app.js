const mysql = require('mysql')
let express = require('express')
let app = express()



app.listen(3000)

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/',(req, res) =>
{
    res.render('inscription')
})
app.get('/connexion',(req, res) =>
{
    res.render('connexion')
})

app.get('/acceuil',(req, res) =>
{
    res.render('index')
})





const db = mysql.createConnection({

    host: "localhost",
    user: "root",
    password: "123456789"
  });
  db.connect(function(err) {
    if (err) throw err;
    console.log("Connecté à la base de données MySQL!");
  });