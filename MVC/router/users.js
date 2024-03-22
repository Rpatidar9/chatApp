const express = require("express")
const router = express.Router();
const { verifyUserToken, CollectLastloginOfSit } = require("../../middleware/auth")
const UserController = require("../controller/users")

router.post("/", UserController.CreateUser)
router.post("/signIn", CollectLastloginOfSit, UserController.SignInUser)
router.get("/home", verifyUserToken, UserController.GetHome);

module.exports = router;