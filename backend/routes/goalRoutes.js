const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

// GET & POST with chaining
router.route("/").get(protect, getGoals).post(protect, setGoal);
// UPDATE & DELETE with chaining
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

module.exports = router;
