const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Render" });
});
const port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0.", () => {
  console.log("Server running on port " +port);
});
