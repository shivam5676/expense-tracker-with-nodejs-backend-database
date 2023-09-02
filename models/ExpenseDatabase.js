const Sequelize = require("sequelize");
const sequelize = require("../util/dataBase");
const Expense = sequelize.define("expenseData", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  expense: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  day: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});
module.exports=Expense
