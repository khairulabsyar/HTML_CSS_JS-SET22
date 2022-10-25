const express = require("express");
const bodyParser = require("body-parser");
const formData = require("./data/form-input");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => {
  res.render("pages/index");
});

app.post("/form", (req, res) => {
  const language = req.body.language;
  language === "English"
    ? res.render("pages/form-eng", {
        data: formData.eng,
      })
    : res.render("pages/form-bm", {
        data: formData.bm,
      });
});

app.post("/resume", (req, res) => {
  console.log(req.body);
  const data = {
    fullName: req.body.fullName,
    currentPosition: req.body.currentPosition,
    selfDescription: req.body.selfDescription,
    experience: Array.isArray(req.body.year)
      ? req.body.year.map((item, index) => ({
          year: item,
          position: req.body.position[index],
          placeOfWork: req.body.placeOfWork[index],
          description: req.body.description[index],
        }))
      : [
          {
            year: req.body.year,
            position: req.body.position,
            placeOfWork: req.body.placeOfWork,
            description: req.body.description,
          },
        ],
  };
  if (typeof data === "object" && !Array.isArray(data) && data !== null) {
    res.render("pages/resume", { data });
  } else {
    res.redirect("/");
  }
});

app.all("*", (req, res) => {
  res.redirect("/");
});

// opening the port
app.listen(3000, () => {
  console.log("server started on port 3000");
});
