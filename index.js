require('dotenv').config();
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Backend desplegado correctamente!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
