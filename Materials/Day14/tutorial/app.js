import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/view/index.html");
});
app.get("/blog", (req, res) => {
  res.sendFile(process.cwd() + "/view/blog.html");
});
app.get("/about", (req, res) => {
  res.sendFile(process.cwd() + "/view/about.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(process.cwd() + "/view/contact.html");
});
app.post("/submit", (req, res) => {
  switch (req.body.gender) {
    case "male":
      res.send(
        `Hello ${req.body.firstName} ${req.body.lastName}! You are a male`
      );
      break;
    case "female":
      res.send(
        `Hello ${req.body.firstName} ${req.body.lastName}! You are a female`
      );
      break;
    default:
      res.send(
        `Hello ${req.body.firstName} ${req.body.lastName}! Are you a non binary?`
      );
      break;
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
