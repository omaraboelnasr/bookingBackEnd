const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkUserIdInToken = (req, res, next) => {
	const token = req.headers.authorization;
	if (!token || !token.startsWith("Bearer ")) {
		return res.status(401).json({ message: "Unauthorized Bearer" });
	}
	const splitToken = token.split(" ")[1];

	jwt.verify(splitToken, process.env.SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: "Unauthorized user" });
		}
		req.userId = decoded.id;
		next();
	});
};

module.exports = { checkUserIdInToken };
