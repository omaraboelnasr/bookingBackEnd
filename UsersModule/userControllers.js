const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const userModel = require("./userModels");
require('dotenv').config()


const register = async (req, res, next) => {
    let body = req.body;
    try {
        const {email} = req.body
        const checkUserExist = await userModel.findOne({email:email})
        if (checkUserExist) return res.status(404).json({message : "email is already used"})
        let newUser = await userModel.create(body)
        res.status(201).json({ message: "User Saved Successfully", data: newUser });

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const getAllUsers = async (req, res, next) => {
    await userModel.find().then((users) => {
        res.status(200).json({ data: users })
    }).catch((err) => {
        res.status(500).json({ message: err.message })
    })
}

const updateUserById = async (req, res, next) => {
    let body = req.body;
    let { id } = req.params
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, body, { new: true, runValidator: true })
        res.status(200).json({ message: "User updated Successfully", data: updatedUser });
    } catch (err) {
        res.status(400).json(err)
    }
}

const deleteUserById = async (req, res, next) => {
    let { id } = req.params
    try {
        const deletedUser = await userModel.findByIdAndDelete(id)
        res.status(200).json({ message: "User deleted Successfully", data: deletedUser });
    } catch (err) {
        res.status(400).json(err)
    }
}

const login = async function (req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "you must provide valid email and password" })
    }
    let user = await userModel.findOne({ email })
    if (!user) {
        return res.status(401).json({ message: "invalid email or password" })
    }
    let isvalid = await bcrypt.compare(password, user.password)
    if (!isvalid) {
        return res.status(401).json({ message: "invalid email or password" })
    }
    let token = jwt.sign({
        email: user.email,
        id: user._id,
        owner: user.owner
    }, process.env.SECRET, { expiresIn: "4h" });

    res.status(200).json({ token: token })

}
module.exports = { register, getAllUsers, updateUserById, deleteUserById, login }