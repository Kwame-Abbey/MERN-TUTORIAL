import asyncHandler from "express-async-handler";

//@desc Get goals
//@route GET /api/goals
//@access Private

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: "Get goals" });
});

//@desc Set a goal
//@route SET /api/goals
//@access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field.");
  }

  res.status(200).json({ msg: "Set goal" });
});

//@desc Update a goal
//@route PUT /api/goals/:id
//@access Private

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Update goal with id of ${req.params.id}` });
});

//@desc Delete a goal
//@route DELETE /api/goals/:id
//@access Private

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ msg: `Delete goal with id of ${req.params.id}` });
});

export { getGoals, setGoal, updateGoal, deleteGoal };
