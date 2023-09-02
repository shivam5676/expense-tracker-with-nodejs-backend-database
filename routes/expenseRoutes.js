const express=require("express")
const router=express.Router();
const expenseController=require("../controller/expense")
router.post("/user/add-expense",expenseController.addController )
  router.get("/user/get-expense",expenseController.getcontroller);
  router.post("/user/delete-product/:id",expenseController.deleteController);
module.exports=router;