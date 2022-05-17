//Se conecta al servidor para interctuar con él.

import * as net from 'net';

const OPTIONS = {
    port: 7200,
    host: "localhost"
}

const ARGV = process.argv[2];

const CLIENT = net.createConnection(OPTIONS);

CLIENT.on('connect', () => {

    console.log(`Connection ready!`);
    console.log(ARGV);
    CLIENT.write(ARGV);
});

CLIENT.on('data', (data) => {

    console.log(data.toString());
    CLIENT.end();
});

CLIENT.on('end', () => {

    console.log('Disconnected from server');
});

CLIENT.on('error', error => {

    console.log(`Cannot establish connection to the server: ${error.message}`);
});