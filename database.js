const mysql=require('mysql2');
const pool =mysql.createPool({
    host:'localhost',
    user:'root',
    database:'mod',
    pass:'Ameymin12345'
});

module.export=pool.promise();
