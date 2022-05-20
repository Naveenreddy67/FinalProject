const mysqlcon = require('../../connection');

//create table products

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS Register( 
        FirstName varchar(225) primary key, 
        LastName varchar(225), 
        Email varchar(225),
        dob varchar(12)
        )`;
    mysqlcon.query(sql);
  }


  module.exports = {create};
  