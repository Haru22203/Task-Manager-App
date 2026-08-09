
import { Router } from "express";
import * as taskController from "../controllers/controller.js";

const router = Router();

router.get("/", taskController.getTasks);
router.post("/", taskController.newTask);
router.put("/:id", taskController.updateTask);
router.patch("/:id/toggle", taskController.toggleTask);
router.patch("/:id/active", taskController.toggleActive);
router.delete("/:id", taskController.delTask)

export default router;