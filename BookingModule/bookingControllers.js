const bookingsModel = require("./bookingModels");

const createBooking = async (req, res, next) => {
	let booking = req.body;
	console.log(booking);
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

const getAllBookings = async (req, res, next) => {
	try {
		let bookings = await bookingsModel.find().populate({
			path: "user room",
			populate: {
				path: "hotelId",
				select: "hotelName",
				strictPopulate: false,
			},
		});
		res.status(201).json({
			message: "there is all bookings",
			data: bookings,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

const getBookingsForUser = async (req, res, next) => {
	const { id } = req.params;
	try {
		let bookings = await bookingsModel.find({ user: id }).populate({
			path: "user room",
			populate: {
				path: "hotelId",
				select: "hotelName",
				strictPopulate: false,
			},
		});
		console.log(bookings);
		res.status(201).json({
			message: "there is all bookings",
			data: bookings,
		});
	} catch (err) {
		res.status(500).json({ message: err.message });
	}
};

module.exports = {
	createBooking,
	getAllBookings,
	getBookingsForUser,
};
