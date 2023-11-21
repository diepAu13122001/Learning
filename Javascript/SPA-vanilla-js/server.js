// -------- Start server --------------------------------
const express = require("express");
const path = require("path");

const webapp = express();

webapp.use(
  "/static",
  express.static(path.resolve(__dirname, "frontend", "static"))
);

webapp.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

webapp.listen(process.env.PORT || 3000, () => {
  console.log("Server running...");
});

