var express = require('express')
var app = express()

app.use(express.static("public"))
app.get('/CADRE', (req, res)=>{

    res.status(200).sendFile("./index.html", {root: __dirname})
})

app.listen(3001, () =>{

    console.log("test")

})
