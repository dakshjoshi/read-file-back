const express = require("express");
const cors = require("cors");
const App = express();
const fs = require("fs");
const path = require("path");
const PORT = process.env.PORT || 6969;
//MIDDLE WARE
App.use(cors());

App.get("/", function (req, res) {
  res.json([
    {
      user: "Mr. Water Lyf",
      forte: "Swimming",
    },
    {
      user: "Mr. Walk Alot",
      forte: "Walking",
    },
    {
      user: "Mr. Runtster",
      forte: "Running",
    },
    {
      user: "Mr. Dee Znuts",
      forte: "Football",
    },
    {
      user: "Mr. No Stamina",
      forte: "Jogging",
    },
  ]);
});
let directory = "SampleDir";
// let files = fs.readdirSync(directory, { withFileTypes: true });
// console.log(files);

//Buffer.from(directory);

//QUESTION : What is buffer ?
App.get("/folder", (req, res) => {
  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(files);
      res.send(
        files.map((file) => {
          return {
            fileName: file.name,
            isFolder: file.isDirectory(),
            fileType: path.extname(file.name),
          };
        })
      );
      //What is isSocket() ?
    }
  });
});

// App.get("/files", (req, res) => {
//   res.send(files);
// });
App.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
