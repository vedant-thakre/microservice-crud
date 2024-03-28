import express from "express";
import { createTask, deleteTask, getAllTask, getTaskById, updateTask } from "../controllers/taskController.js";

const router = express.Router();

router.get("/create", createTask);
router.get("/task/:id", getTaskById);
router.get("/alltask", getAllTask);
router.get("/update/:id", updateTask);
router.get("/delete/:id", deleteTask);


export default router;
