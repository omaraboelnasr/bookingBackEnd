const jwt = require("jsonwebtoken");
require("dotenv").config();

const checkUserIdInToken = (req, res, next) => {
	const token = req.headers.authorization;

	if (!token || !token.startsWith("Bearer ")) {
		console.log("Bearer");
		return res.status(401).json({ message: "Unauthorized Bearer" });
	}

	const splitToken = token.split(" ")[1];

	jwt.verify(splitToken, process.env.SECRET, (err, decoded) => {
		if (err) {
			console.log(err.message);
			return res.status(401).json({ message: "Unauthorized middle" });
		}

		const userInToken = decoded.id;
		const userInParams = req.params.id;

		if (userInToken !== userInParams) {
			return res
				.status(401)
				.json({ message: "Forbidden it's not the same user" });
		}

		next();
	});
};

module.exports = { checkUserIdInToken };
