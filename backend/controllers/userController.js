import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//@desc Register new user
//@route POST /api/users
//@access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//@desc Authenticate user
//@route POST /api/users/login
//@access Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && bcrypt.compare(password, user.password)) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    });
  } else {
    res.status(400)
    throw new Error('Invalid email or password')
  }
});

//@desc Get user goals
//@route POST /api/users/me
//@access Private

const getUserGoals = asyncHandler(async (req, res) => {
  const { _id, name, email} = await User.findById(req.user.id)

  res.status(200).json({
    _id: _id,
    name,
    email
  })
});

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

export { registerUser, loginUser, getUserGoals };
