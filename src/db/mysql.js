const mysql = require('mysql2');
const config = require('../config');

const dbconfig = {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
};

let connection;

const handleConnection = () => {
    connection = mysql.createConnection(dbconfig);

    connection.connect((err) => {
        if (err) {
            console.error('[db error]', err);
            setTimeout(handleConnection, 2000);
        } else {
            console.log('DB Connected!');
        }
    });

    connection.on('error', (err) => {
        console.error('[db error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleConnection();
        } else {
            throw err;
        }
    });
};

handleConnection();

module.exports = connection;