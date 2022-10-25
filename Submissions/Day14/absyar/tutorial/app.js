import express from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + `/view/index.html`);
});

app.get("/blog", (req, res) => {
  res.sendFile(process.cwd() + `/view/blog.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(process.cwd() + `/view/about.html`);
});
app.get("/contact", (req, res) => {
  res.sendFile(process.cwd() + `/view/contact.html`);
});
app.post("/submit", (req, res) => {
  let gender = req.body.gender;
  let lowerCaseGender = gender.toLowerCase();
  switch (lowerCaseGender) {
    case "male":
      res.send(`You're a male`);
      break;
    case "female":
      res.send(`You're a female`);
      break;
    default:
      res.send(`Are you a binary?`);
      break;
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// import { copyFile } from "node:fs/promises";
// // import myAge from "./myFunction/myAge.js";
// // if export function use
// import { myAge, mySPMYear } from "./myFunction/myAge.js";

// // try {
// //   await copyFile("index.html", "copy-index.html");
// //   console.log("index.html was copied to copy-index.html");
// // } catch {
// //   console.log("The file could not be copied");
// // }

// console.log(myAge(1993));
// console.log(mySPMYear(1993));
// console.log(`node js app is running`);

// app.get(`/blog`, (req, res) => {
//   res.send(
//     `<!DOCTYPE html>
//         <html lang="en">
//           <head>
//             <meta charset="UTF-8" />
//             <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//             <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//             <title>nodemon Blog</title>
//           </head>
//           <body>
//             <h2>Hello blog</h2>
//           </body>
//         </html>
//         `
//   );
// });
