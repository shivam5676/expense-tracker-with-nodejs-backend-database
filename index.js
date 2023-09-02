const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./util/dataBase");
const User = require("./models/user");
const expense = require("./models/ExpenseDatabase");
const expenseRoutes = require("./routes/expenseRoutes");
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;

      next();
    })
    .catch((err) => {
      console.log(err);
    });
});
app.use(expenseRoutes);


expense.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(expense);
sequelize
  .sync()
  .then((res) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "shivam singh", email: "shivam@Gmail.com" });
    }
    return user;
  })
  .then((user) => {
    app.listen(3000);
    return user;
  })
  .catch((err) => {
    console.log(err);
  });
