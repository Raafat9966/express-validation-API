import express from "express";
import users from "../controllers/users.js";
import { userValidationRules, validate } from "../middleware/validator.js";
const router = express.Router();

router.get("/", users.getAll);
router.get("/:name", users.getOne);
router.post("/", userValidationRules(), validate, users.create);
router.put("/:name", users.update);
router.delete("/:name", users.remove);

export default router;
