//importing express and express router
const express = require('express')
const router = express.Router();

//importing controller functions for handling
const {
    //any function exported from controller
    handleGetRequest,
    handlePostRequest,
    handleGetAllUsers,
    handleRegisterNewUser
} = require("../Controllers/mainController")


//routing to specific controller functions
router.get("/", handleGetRequest)               //to show homepage
router.post("/", handlePostRequest)             //user registration using form and POST
router.get("/users", handleGetAllUsers)         //show all registered uses
router.get("/register", handleRegisterNewUser)  //registration form 

//exporting router
module.exports = router;