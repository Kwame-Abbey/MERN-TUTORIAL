import asyncHandler from "express-async-handler";
import Goal from "../model/goalModel.js";

//@desc Get goals
//@route GET /api/goals
//@access Private

const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({})

  res.status(200).json(goals);
});

//@desc Set a goal
//@route SET /api/goals
//@access Private

const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error("Please add a text field.");
  }

  const { text } = req.body

  const goal = await Goal.create({
    text
  })

  res.status(200).json(goal);
});

//@desc Update a goal
//@route PUT /api/goals/:id
//@access Private

const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal) {
    res.status(400)
    throw new Error('No Goal Found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})

  res.status(200).json({ id: req.params.id});
});

//@desc Delete a goal
//@route DELETE /api/goals/:id
//@access Private

const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if(!goal) {
    res.status(400)
    throw new Error('No Goal Found')
  }

  const deletedGoal = await Goal.findByIdAndRemove(req.params.id)

  res.status(200).json({ msg: `Delete goal with id of ${req.params.id}` });
});

export { getGoals, setGoal, updateGoal, deleteGoal };
