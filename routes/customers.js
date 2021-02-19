const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const SqlString = require("sqlstring");

const myConnection = mysql.createConnection({
  host: "interview-ezoic.cs6p5rczr2xv.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "ezinterview",
  password: "98DIM9yBhZh1",
  database: "Sales",
});

myConnection.connect();

router.get("/", function (req, res, next) {
  myConnection.query(
    "select * from customers",
    function (error, result, fields) {
      if (error) throw error;
      // res.json(result);
      res.send(JSON.stringify(result));
      // console.log(result);
    }
  );
});

router.get("/:customerNumber", function (req, res, next) {
  const { customerNumber } = req.params;
  const query = SqlString.format(
    "select * from customers where customerNumber = ?",
    [customerNumber]
  );
  myConnection.query(query, function (error, result, fields) {
    if (error) throw error;
    // res.json(result);
    res.send(JSON.stringify(result[0]));
    // console.log(result);
  });
});

router.post("/new", function (req, res, next) {
  const { customerName, firstName, lastName, phone, country } = req.body;

  const insertData = {
    customerName,
    contactFirstName: firstName,
    contactLastName: lastName,
    phone,
    country,
  };

  const insertQuery = SqlString.format(
    "INSERT INTO customers SET ?",
    insertData
  );
  myConnection.query(insertQuery, function (err, result) {
    if (err) throw err;
    res.send("Customer Successfully Inserted!");
  });
});

router.post("/:customerNumber/edit", function (req, res, next) {
  const { customerNumber } = req.params;
  const { customerName, firstName, lastName, phone, country } = req.body;

  const insertQuery = SqlString.format(
    "UPDATE customers SET customerName = ?, contactFirstName = ? , contactLastName = ?, phone = ?, country = ? WHERE customerNumber = ?",
    [customerName, firstName, lastName, phone, country, customerNumber]
  );
  myConnection.query(insertQuery, function (err, result) {
    if (err) throw err;
    res.send("Customer Successfully updated!");
  });
});

module.exports = router;
