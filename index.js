// index.js
const express = require('express');
const app = express();
const port = 3300;

// Indique à Express qu'on veut servir les fichiers
// statiques qui se trouvent dans le dossier "site"
app.use(express.statis(path.join(__dirname, 'site')));

// Route principale (page d'accueil)
app.get('/pouet', (req, res) => {
  res.send('<h1>hello js!</h1>');
});

// Exemple de route secondaire
app.get('/bonjour', (req, res) => {
  res.send('<p>Bonjour, visiteur !</p>');
});

// Démarrer le serveur sur le port 3000
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});

