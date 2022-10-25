import express from "express";
import { bmiResult, bmiReport } from "./functions/bmi.js";
import result from "./functions/result.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");

let name;
let age;
let weight;
let height;
let bmiCalc;
let bmiFinal;
let backgroundColor;

app.get(`/`, (req, res) => {
  res.sendFile(process.cwd() + `/view/home.html`);
});
app.post(`/information`, (req, res) => {
  res.sendFile(process.cwd() + `/view/information.html`);
  name = req.body.firstName;
  age = req.body.age;
  console.log(name, age);
});
app.post(`/result`, (req, res) => {
  weight = req.body.weight;
  height = req.body.height;
  bmiCalc = bmiResult(weight, height);
  bmiFinal = bmiReport(bmiCalc, age);
  backgroundColor = result(age);
  res.render(process.cwd() + `/view/result.ejs`, {
    name: name,
    age: age,
    bmiCalc: bmiCalc,
    bmiFinal: bmiFinal,
    backgroundColor: backgroundColor,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
