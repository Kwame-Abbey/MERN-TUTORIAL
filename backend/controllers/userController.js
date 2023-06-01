//@desc Register new user
//@route POST /api/users
//@access Public

const registerUser = (req, res) => {


    res.status(200).json({msg: 'Register user'})
}

//@desc Authenticate user
//@route POST /api/users/login
//@access Public

const loginUser = (req, res) => {
    res.status(200).json({msg: 'Login user'})
}

//@desc Get user goals
//@route POST /api/users/me
//@access Private

const getUserGoals = (req, res) => {
    res.status(200).json({msg: 'Get user goal'})
}

export { registerUser, loginUser, getUserGoals }