const mysqlcon = require('../../connection');

//create table products

function create() {
    let sql = `CREATE TABLE IF NOT EXISTS products(
        product_id int(10) primary key,
        img varchar(22),
        product_name varchar(66), 
        price int(10)
        )`;
    mysqlcon.query(sql);
  }

//update initial products

function add() {
    mysqlcon.query('select * from products', function (err, result) {
        if(result.length === 0){ 
            let sqlrun = `insert into products values
            (1, "images/acer.jpg", 'Acer', 800), 
            (2, "images/dell.jpg", 'Dell', 1600),
            (3, "images/HP.jpeg", "HP", 1299),
            (4, "images/macbook.jpg", "MacBook Pro", 6000)
            `;
            mysqlcon.query(sqlrun, (err, result) => {
                if(err) throw err;
            });
}
});
}  


  module.exports = {create, add};