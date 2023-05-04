//importing database
const userModel = require("../Models/mainModel")

//import any package used
const moment = require("moment")
let date = moment().format("DD MM YYYY, hh:mm:ss a");

//handles get request on /; redirects to homepage on views
async function handleGetRequest(req, res) {
    return res.render("homepage")
}

async function handlePostRequest(req, res) {
    //Fill the form on views/register or
    //send a post request on / with a json body
    /*
    {
    "username" : "ashutosh7i",
    "fullname" : "Aashutosh soni"
    }
    */

    //parsing the data from response
    let username = req.body.username;
    let fullName = req.body.fullName;

    //saving the response in the database
    await userModel.create({
        username: username,
        fullName: fullName,
        registered: date
    })

    res.send(`user ${fullName} with username ${username} added✅ on ${date}`)
}


//shows page users on /users endpoint, 
async function handleGetAllUsers(req, res) {
    const results = await userModel.find();
    console.log(results)

    //page page to render along with json data to render
    res.render("users", { results })
}

//handle the /register route, redirect to register page of views
async function handleRegisterNewUser(req, res) {
    res.render("register")
}

module.exports = { handleGetRequest, handlePostRequest, handleGetAllUsers, handleRegisterNewUser }