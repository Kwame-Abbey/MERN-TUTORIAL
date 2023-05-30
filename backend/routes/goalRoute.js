import express from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalcontroller.js";
const router = express.Router();

router.route("/").get(getGoals).post(setGoal);
router.route("/").put(updateGoal).delete(deleteGoal);

export default router;
