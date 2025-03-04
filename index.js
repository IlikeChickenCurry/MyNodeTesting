// index.js
const express = require('express');
const app = express();
const port = 3300;

// Route principale (page d'accueil)
app.get('/', (req, res) => {
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

