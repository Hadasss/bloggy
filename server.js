const app = require("./backend/app");

app.get("/", (req, res) => {
  console.log("Hello World!");
});

app.listen(3000);
