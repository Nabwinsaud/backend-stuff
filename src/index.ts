// import { Queries, Query } from "@tsoa/runtime";
import express from "express";
import url from "url";
console.log(url);
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Fulls stack");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
