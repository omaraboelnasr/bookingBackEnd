const express=require('express')
const router=express.Router()

const {register,getAllUsers,updateUserById,deleteUserById,login} = require("./userControllers")

router.route("/").post(register)
router.route("/:id").patch(updateUserById).delete(deleteUserById)
router.post("/login",login)

module.exports = router