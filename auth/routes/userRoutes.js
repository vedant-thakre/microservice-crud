import express from 'express';
import { Authcheck, deleteUserById, getAllUsers, getUser, loginUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", Authcheck, getUser);
router.get("/all", Authcheck, getAllUsers);
router.delete("/delete/:id", Authcheck, deleteUserById);

export default router;