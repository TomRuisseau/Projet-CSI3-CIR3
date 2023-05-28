const express = require('express');
const app = express();
const port = 5000;
var cors = require('cors')
const mysql = require('mysql');


app.use(express.json()); //Used to parse JSON bodies
app.use(cors()) //Prevent CORS errors


//connect to database
const pool = mysql.createPool({
  host: '89.116.147.1',
  port: '3306',
  user: 'u495496740_Moi',
  password: 'N0v/EGU:',
  database: 'u495496740_Propro',
})


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/login/student", (req, res) => {
  console.log(req.body.code);
  res.send("student code received!");
});

app.post("/login/teacher", (req, res) => {
  //todo : use the real table

  pool.getConnection(function (err, connection) {

    connection.query("SELECT * FROM LoginTest WHERE email = '" + req.body.email + "' AND mot_de_passe = '" + req.body.password + "'", function (err, result, fields) {
      if (err) throw err;
      //test if email and password match
      res.send(result.length > 0 ? "1" : "0");
    });

  });
});

app.post("/register/teacher", (req, res) => {
  //todo : use the real table

  pool.getConnection(function (err, connection) {

    connection.query("SELECT * FROM LoginTest WHERE email = '" + req.body.email + "'", function (err, result, fields) {
      if (err) throw err;
      //test if email already used
      if (result.length > 0) {
        res.send("1");
      }
      else {
        //insert new user
        connection.query("INSERT INTO LoginTest(email, mot_de_passe) VALUES ('" + req.body.email + "', '" + req.body.password + "')", function (err, result, fields) {
          if (err) throw err;
          res.send("0");
        });
      }
    });

  });

});


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
