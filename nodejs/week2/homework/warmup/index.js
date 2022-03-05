const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/add", (req, res) => {
  const firstNumber = Number(req.query.a);
  const secondNumber = Number(req.query.b);
  const result = firstNumber + secondNumber;

  res.send("Result =" + " " + result);
});
app.get("/multiply/:firstNumber1/:secondNumber1", (req, res) => {
  const firstNumber1 = Number(req.params.firstNumber1);
  const secondNumber1 = Number(req.params.secondNumber1);
  const result1 = firstNumber1 * secondNumber1;

  res.send("Result =" + " " + result1);
});
app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
