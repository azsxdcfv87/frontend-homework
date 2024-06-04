const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname));

io.on('connection', (socket) => {
    console.log('一位使用者連線了');
    
    socket.on('chat message', (msg, timestamp) => {
        io.emit('chat message', msg, timestamp);
    });

    socket.on('disconnect', () => {
        console.log('一位使用者離線了');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`使用 ${PORT} 連線中`);
});
