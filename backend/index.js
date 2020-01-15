const express = require('express');

const app = express();

// Métodos HTTP Get, Post, Delete, Put

// Tipos de parâmetros: 
// Query params:
// Route params:
// Body:

app.get('/', (request, response) => {
    return response.json({ message: 'Hello Omnistack 10'});
});
app.listen(3333);
