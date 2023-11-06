import express from "express";
import FarmerController from "../controllers/farmer.controller";

const router = express.Router();



router.post("/create", FarmerController.createFarmer);
router.post("/createName", FarmerController.createFarmer);
router.get("/getall", FarmerController.getFarmer);
router.get("/get/:id", FarmerController.getFarmer);
router.put("/update/:id", FarmerController.updateFarmer);
router.delete("/delete/:id", FarmerController.deleteFarmer);
router.delete("/deleteall", FarmerController.deleteAllFarmer);


export default router;
