const express = require("express");
const http = require("http");
const path = require("path");
let app = express();
app.use(express.static(path.join(__dirname, "build")));

// Server static assets if in production
if (true) {
  // Set static folder
  app.use(express.static("build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
} else {
  app.get("*", (req, res) => {
    res.send("Running....");
  });
}

const port = process.env.PORT || "8080";
app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
