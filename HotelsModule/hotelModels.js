const mongoose = require("mongoose");
const HotelSchema = mongoose.Schema(
	{
		owner: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "users",
		},
		hotelName: {
			type: String,
			required: [true, "hotel name is required"],
		},
		hotelName_ar: {
			type: String,
			required: [true, "hotel name is required"],
		},
		hotelDescription: {
			type: String,
			required: [true, "hotel description is required"],
		},
		hotelDescription_ar: {
			type: String,
			required: [true, "hotel description is required in arabic"],
		},
		hotelSubDescription: {
			type: String,
			required: [true, "hotel subdescription is required"],
			minLength: 15,
		},
		hotelSubDescription_ar: {
			type: String,
			required: [true, "hotel subdescription is required in arabic"],

			minLength: 15,
		},

		hotelMainImage: {
			type: String,
			required: [true, "hotel image is required"],
		},

		hotelCity: {
			type: String,
			required: [true, "hotel city is required"],
			enum: ["cairo", "hurghada", "alexandria", "sharmelsheikh", "dahab"],
		},

		hotelCity_ar: {
			type: String,
			required: [true, "hotel city is required in arabic"],

			enum: ["القاهره", "الغردقه", "الاسكندريه", "شرم الشيخ", "دهب"],
		},

		hotelAddress: {
			type: String,
			required: [true, "hotel address is required"],
		},
		hotelAddress_ar: {
			type: String,
			required: [true, "hotel address is required"],
		},

		distanceFromCenter: {
			type: Number,
			required: [true, "distance from center is required"],
		},
		hotelType: {
			type: String,
			required: [true, "type is required"],
			enum: ["hotel", "apartment", "resort", "villa"],
		},
		distanceFromCenter_ar: {
			type: Number,
		},
		hotelRating: {
			type: Number,
			required: [true, "rating is required"],
			enum: [1, 2, 3, 4, 5],
		},
		approved: {
			type: Boolean,
			default: true,
		},
		review: {
			type: String,
		},
	},
	{ collcetion: "hotles" }
);
const hotelsModel = mongoose.model("hotels", HotelSchema);

module.exports = hotelsModel;
