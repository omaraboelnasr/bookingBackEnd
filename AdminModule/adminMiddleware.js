const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminAuthentication = (req, res, next) => {
	const token = req.headers.authorization;
	if (!token || !token.startsWith("Bearer ")) {
		return res.status(401).json({ message: "Please login" });
	}

	const splitToken = token.split(" ")[1];
	jwt.verify(splitToken, process.env.SECRET, (err, decoded) => {
		if (err) {
			console.log(err.message);
			return res.status(401).json({ message: "User can't access this" });
		}
		req.user = decoded;
		next();
	});
};

const adminAuthorization = (req, res, next) => {
	const { role } = req.user;

	if (role !== "admin") {
		return res
			.status(403)
			.json({ message: "Forbidden: user is not admin" });
	}
	next();
};

module.exports = { adminAuthentication, adminAuthorization };
