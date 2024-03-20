const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
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
		userName: {
			type: String,
			//   unique: [true, "username have to be unique"], "removed because if we add another user without a username it will throw an error due to username = null"
			minLength: [5, "username have to be more than 5 char"],
		},
		password: {
			type: String,
			required: [true, "password is required"],
			minLength: 3,
		},
		firstName: {
			type: String,
			minLength: 3,
			maxLength: 15,
		},
		lastName: {
			type: String,
			minLength: 3,
			maxLength: 15,
		},
		phone: {
			type: Number,
			minLength: 11,
			maxLength: 11,
		},
		Gender: {
			type: String,
			enum: ["male", "female"],
		},
		dob: {
			type: String,
		},
		owner: {
			type: Boolean,
			default: false,
		},
		active: {
			type: Boolean,
			default: true,
			required: [true, "active is required"],
		},
	},
	{ timestamps: true, collection: "user" }
);

userSchema.pre("save", function (next) {
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(this.password, salt);
	this.password = hash;
	next();
});
const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
