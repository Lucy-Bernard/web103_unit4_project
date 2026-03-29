import express from "express";
import * as CustomItemsController from "../controllers/customItems.js";

const router = express.Router();

router.get("/", CustomItemsController.getCustomItems);
router.get("/:itemId", CustomItemsController.getCustomItemById);
router.post("/", CustomItemsController.createCustomItem);
router.patch("/:itemId", CustomItemsController.updateCustomItem);
router.delete("/:itemId", CustomItemsController.deleteCustomItem);

export default router;
