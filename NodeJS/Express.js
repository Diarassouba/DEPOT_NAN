const express = require('express') // Utilisation du module express

const app = express()  // Creation de l'extense


// LA fonction sera exécuter lorsque l'utilisateur une requete
app.get('/NODESJS', (req,res)=>
{
   res.status(200).sendFile("./HTML/index.html", { root : __dirname})  // LA reponse envoyeé au  client
})

// CReation du serveur
app.listen(3001, ()=>
{
    console.log("En attente des requêtes au port 3001")
})

console.log('Erreur lors de la création du serveur')
