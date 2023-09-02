const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./util/dataBase");

const expenseRoutes = require("./routes/expenseRoutes");
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));

app.use(expenseRoutes);

sequelize
  .sync()
  .then((res) => {
    console.log(res);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
