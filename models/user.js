// const mongoose = require("mongoose");
import mongoose from "mongoose";

const schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		index: true,
		unique: true,
		sparse: true,
	},
	password: {
		type: String,
		required: true,
	},
});

const User = mongoose.connection.model("users", schema);

const addUser = async (name, email, password) => {
	const user = new User({
		name,
		email,
		password,
	});
	return await user.save();
};

const getAllUsers = async () => await User.find();

const getUser = async (name) => await User.findOne({ name });

const updateUser = async (name, email, password) => {
	return await User.findOneAndUpdate(
		{ name },
		{
			email,
			password,
		},
		{ new: true }
	);
};

const deleteUser = async (name) => await User.deleteOne({ name });

export default {
	addUser,
	getAllUsers,
	getUser,
	updateUser,
	deleteUser,
};
