//Recibe las señales que prvienen de los clientes.

import * as net from 'net';

const SERVER = net.createServer();

SERVER.on('connection', (socket) => {

    console.log(socket);

    socket.setEncoding('utf-8');

    socket.on('data', (data) => {

        console.log(`Message ${data} received`);
        socket.write(`Message ${data} received`);
    });

    socket.on('error', (error) => {

        console.log(error.message);
    });
});

SERVER.listen(7200, () => {

    console.log(`Server connected on port 7200}`);
});

