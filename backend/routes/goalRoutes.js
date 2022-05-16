const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");
// GET & POST with chaining
router.route("/").get(getGoals).post(setGoal);
// UPDATE & DELETE with chaining
router.route("/:id").delete(deleteGoal).put(updateGoal);

module.exports = router;
