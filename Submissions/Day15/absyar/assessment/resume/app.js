import express from "express";
import { personalData, socialData } from "./data/form-input.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");

let name;
let age;
let email;
let personalInfo;
let education;
let github;
let twitter;
let linkedin;
let body;

app.get(`/`, (req, res) => {
  res.render(`pages/index`, { personalData, socialData });
});

app.post(`/resume`, (req, res) => {
  body = req.body;
  name = body.name;
  age = body.age;
  email = body.email;
  personalInfo = body.personalInfo;
  education = body.education;
  github = body.github;
  twitter = body.twitter;
  linkedin = body.linkedin;
  console.log(body);
  res.render("pages/resume", {
    name,
    age,
    email,
    personalInfo,
    education,
    github,
    twitter,
    linkedin,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
