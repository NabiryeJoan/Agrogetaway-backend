import express from "express";
import UserController from "../controllers/user.controller";

const router = express.Router();



router.post("/create", UserController.createUser);
router.post("/createName", UserController.createUser);
router.get("/getall", UserController.getUser);
router.get("/get/:id", UserController.getUser);
router.put("/update/:id", UserController.updateUser);
router.delete("/delete/:id", UserController.deleteUser);
router.delete("/deleteall", UserController.deleteAllUser);


export default router;
