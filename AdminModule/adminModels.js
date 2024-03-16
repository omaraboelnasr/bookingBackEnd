const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const adminSchema = mongoose.Schema(
	{
		email: {
			type: String,
			required: [true, "email is required"],
			validate: {
				validator: function (v) {
					return /^[a-zA-Z]{3,20}\d*(@)(gmail|yahoo|outlook|hotmail)(.com)$/.test(
						v
					);
				},
				message: (props) => `${props.value} is not a valid Email!`,
			},
			unique: true,
		},
		password: {
			type: String,
			required: [true, "password is required"],
			minLength: 3,
		},
		userName: {
			type: String,
			unique: true,
			required: [true, "username is required"],
			minLength: [5, "username have to be more than 5 char"],
		},
		firstName: {
			type: String,
			minLength: 3,
			maxLength: 15,
			required: [true, "firstname is required"],
		},
		lastName: {
			type: String,
			minLength: 3,
			maxLength: 15,
			required: [true, "lastname is required"],
		},
	},
	{ timestamps: true, collection: "admin" }
);

adminSchema.pre("save", function (next) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(this.password, salt);
	this.password = hash;
	next();
});

const adminModel = mongoose.model("admin", adminSchema);

module.exports = adminModel;
