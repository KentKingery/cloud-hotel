const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = 3000;

app.get('/api/roomtypes', (req, res) => {
    res.status(200).send('list of room types');
    console.log('GET /api/roomtypes');
});

app.get('/api/roomtypes/:id', (req, res) => {
    var id = req.params.id;
    res.status(200).send(`room type ${id}`);
    console.log(`GET /api/roomtypes/${id}`);
});

app.post('/api/roomtypes', (req, res) => {
    res.status(200).send('update room types');
    console.log('POST /api/roomtypes');
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
});