const adminModel = require("./adminModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
	let body = req.body;
	try {
		let newAdmin = await adminModel.create(body);
		res.status(201).json({
			message: "Admin Saved Successfully",
			data: newAdmin,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const login = async (req, res) => {
	let { userName, password } = req.body;
	try {
		if (!userName || !password) {
			return res
				.status(403)
				.json({ message: "Provide valid credentials" });
		}
		let admin = await adminModel.findOne({
			userName: userName,
		});
		if (!admin) {
			return res.status(403).json({ message: "Invalid Credentials" });
		}
		let isValid = bcrypt.compare(password, admin.password);
		if (!isValid) {
			return res.status(403).json({ message: "Invalid Credentials" });
		}
		let token = jwt.sign(
			{
				user: admin.userName,
				id: admin._id,
				role: "admin",
			},
			process.env.SECRET,
			{ expiresIn: "4h" }
		);
		res.set("Authorization", `Bearer ${token}`);
		res.status(200).json({
			token: token,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = { register, login };
