const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'words',
    password: 'Sanjar2002#',
    port: 5432,
})

client.connect();

module.exports={
    client
}