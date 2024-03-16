const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./UsersModule/userRoutes");
const hotelsRoutes = require("./HotelsModule/hotelRoutes");
const roomRoutes = require("./RoomsModule/roomRoutes");
const adminRoutes = require("./AdminModule/adminRoutes");
const app = express();
const port = 3090;
app.listen(port, () => {
	console.log("listening on port 3090");
});
mongoose.connect(
	"mongodb+srv://Omar:KJmJyg9WirD5zUY1@inprogress.tycr07f.mongodb.net/Booking?retryWrites=true&w=majority&appName=InProgress"
);
app.use(
	cors({
		origint: "http://localhost:5173",
	})
);
app.use(express.json());
app.use("/user", userRoutes);
app.use("/hotels", hotelsRoutes);
app.use("/rooms", roomRoutes);
app.use("/admin", adminRoutes);
app.use("*", (req, res, next) => {
	res.status(404).json({ message: "Not Found" });
});
