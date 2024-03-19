const bookingsModel = require("./bookingModels");

const createBooking = async (req, res, next) => {
	let booking = req.body;
	try {
		let newBooking = await bookingsModel.create(booking);
		res.status(201).json({
			message: "booking added successfully",
			data: newBooking,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = {
	createBooking,
};
