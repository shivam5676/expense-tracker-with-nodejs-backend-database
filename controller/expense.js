const expense = require("../models/ExpenseDatabase");

exports.addController = async (req, res, next) => {
  try {
    const expenseData = req.body;
    console.log("expensedata", req.user);

    const expenseAdded = await expense.create({
      expense: req.body.expense,
      category: req.body.category,
      day: req.body.day,
      expenseUserId: req.user.id,
    });
    res.status(200).json({ data: expenseAdded });
  } catch (err) {
    console.log(err);
  }
};
exports.getcontroller = async (req, res, next) => {
  try {
    const expenseList = await expense.findAll();
    res.status(200).json({ data: expenseList });
  } catch (err) {
    console.log(err);
  }
};
exports.deleteController = async (req, res, next) => {
  try {
    const prodid = req.params.id;
    const itemFound = await expense.findByPk(prodid);
    itemFound.destroy();
    res.status(200).json({ message: "data deleted successfully" });
  } catch (err) {
    console.log(err);
  }
};
