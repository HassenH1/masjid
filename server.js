const express = require("express");
const fetch = require("node-fetch");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "build")));

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

app.get("/test", async (req, res) => {
  console.log("hitt here to server");
  try {
    const resp = await fetch(process.env.API_URL, {
      method: "GET",
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    });
    const data = await resp.json();
    console.log(JSON.stringify(data, null, 2), "<=-=-=-=-what is this");
    res.json(data);
  } catch (e) {
    res.json(e);
  }
});

// app.get("/test", (req, res) => {
//   try {
//     const resp = await fetch(process.env.API_URL, {
//       method: "GET",
//       headers: {
//         "x-api-key": process.env.API_KEY,
//       },
//     });
//     const data = await resp.json();
//     console.log(JSON.stringify(data, null, 2), "<=-=-=-=-what is this test");
//     res.send(data);
//   } catch (e) {
//     res.json(e);
//   }
// });

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
