// const db = require("../models/user");
import db from "../models/user.js";

const getAll = async (req, res, next) => {
	try {
		let users = await db.getAllUsers();
		res.status(200).send(users);
	} catch (err) {
		next(err);
	}
};

const getOne = async (req, res, next) => {
	try {
		let user = await db.getUser(req.params.name);
		res.status(200).send(user);
	} catch (err) {
		next(err);
	}
};

const create = async (req, res, next) => {
	try {
		let { name, email, password } = req.body;
		let user = await db.addUser(name, email, password);
		res.status(201).send(user);
	} catch (err) {
		next(err);
	}
};

const update = async (req, res, next) => {
	try {
		let { email, password } = req.body;
		let user = await db.updateUser(req.params.name, email, password);
		res.status(200).send(user);
	} catch (err) {
		next(err);
	}
};

const remove = async (req, res, next) => {
	try {
		await db.deleteUser(req.params.name);
		res.status(204).send("user deleted");
	} catch (err) {
		next(err);
	}
};

export default { getAll, getOne, create, update, remove };
