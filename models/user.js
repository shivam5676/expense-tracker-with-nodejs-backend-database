const sequelize=require("../util/dataBase")
const Sequelize=require("sequelize")

const user=sequelize.define("expense-user",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
       
    }
})
module.exports=user