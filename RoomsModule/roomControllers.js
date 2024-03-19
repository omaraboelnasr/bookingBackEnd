const roomsModel = require("./roomModels");
const hotelModel = require("../HotelsModule/hotelModels");

const createRoom = async (req, res, next) => {
	let room = req.body;
	let hotelId = req.params.id;
	room.hotelId = hotelId;
	try {
		const hotelData = await hotelModel.findById(hotelId);
		if (!hotelData) {
			return res.status(404).json({ message: "hotel not found" });
		}
		let newRoom = await roomsModel.create(room);
		res.status(201).json({
			message: "room add successfully",
			data: newRoom,
		});
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const getAllRooms = async (req, res, next) => {
	let hotelId = req.params.id;
	try {
		const hotelData = await hotelModel.findById(hotelId);
		if (!hotelData) {
			return res.status(404).json({ message: "hotel not found" });
		}
		let allRooms = await roomsModel.find({ hotelId });
		res.status(201).json({ message: "there is all rooms", data: allRooms });
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const getRoom = async (req, res, next) => {
	let roomId = req.params.id;
	try {
		let room = await roomsModel.findById(roomId);
		res.status(201).json({ message: "thats is a room", data: room });
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const updateRoom = async (req, res, next) => {
	let body = req.body;
	let RoomId = req.params.id;
	try {
		let updatedRoom = await roomsModel.findByIdAndUpdate(RoomId, body, {
			new: true,
			runValidator: true,
		});
		res.status(200).json({
			message: "Room updated Successfully",
			data: updatedRoom,
		});
	} catch (err) {
		res.status(500).json(err.message);
	}
};

const deleteRoom = async (req, res, next) => {
	let roomId = req.params.roomID;
	try {
		let deletedRoom = await roomsModel.findByIdAndDelete(roomId);
		res.status(200).json({
			message: "Hotel deleted Successfully",
			data: deletedRoom,
		});
	} catch (err) {
		res.status(500).json(err.message);
	}
};

module.exports = { createRoom, getAllRooms, getRoom, updateRoom, deleteRoom };
