const express = require("express")
const router = express.Router();
const { verifyUserToken, CollectLastloginOfSit } = require("../../middleware/auth")
const UserController = require("../controller/users")
console.log("home page");
router.post("/", async function (req, res) {
    console.log("home page function");
    return res.status(200).json({ message: "well come at home" })
})
module.exports = router 