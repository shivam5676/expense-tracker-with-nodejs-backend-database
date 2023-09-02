const Sequelize = require("sequelize");
const sequelize = new Sequelize("expense-database", "root", "(@Shivam", {
  dialect: "mysql",
  host: "localhost",
});
module.exports = sequelize;
