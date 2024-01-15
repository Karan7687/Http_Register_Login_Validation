const express = require("express");
const fs = require("fs");

const x = express();

x.use(express.json());

x.post("/register", (req, res) => {
  console.log(req.body.Emp_Id);
  console.log(req.body.Emp_Name);
  console.log(req.body.Emp_Sal);

  let data = JSON.stringify(req.body);

  fs.writeFile("Database.json", data, (error) => {
    console.log(" Successfully inserted Data !");
  });

  res.send("<h2>Listening Register Page</h2>");
});

x.get("/login", (req, res) => {
  let data = fs.readFile("Database.json", "utf-8", (error, data) => {
    let y = JSON.parse(data);

    if (req.body.Emp_Name == y.Emp_Name && req.body.Emp_Id == y.Emp_Id) {
      console.log(" Successfully logged in");
    } else {
      console.log("Invalid Credentials");
    }
  });
});

x.put("/updateId", (req, res) => {
  let data3 = fs.readFile("Database.json", "utf-8", (error, data3) => {
    let y = JSON.parse(data3);

    let obj1 = {
      Emp_Name: y.Emp_Name,
      Emp_Id: req.body.Emp_Id,
      Emp_Sal: y.Emp_Sal
    };

    let strObj = JSON.stringify(obj1);

    fs.writeFile("Database.json", strObj, (error) => {
      console.log(" Id Updated successfully");
    });
  });

  res.send("<h2>Listening Login Page</h2>");
});

x.all("*", (req, res) => {
  res.send("<h2> Invalid Request</h2>");
});

module.exports = x;
