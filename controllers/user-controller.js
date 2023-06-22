const knex = require("knex")(require("../knexfile"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register user and add to DB
const register = async (req, res) => {
  const { full_name, email, password, is_dj } = req.body;

  if (!full_name || !email || !password) {
    return res.status(400).json({
      error: true,
      message: "Please enter all the required fields",
    });
  }

  const hashedPassword = bcrypt.hashSync(password);

  const newUser = {
    full_name,
    email,
    password: hashedPassword,
    is_dj,
  };

  try {
    // check if email address already exist
    const userFound = await knex("users")
      .select("email")
      .where("email", email)
      .first();
    if (userFound) {
      return res.status(409).json({
        error: true,
        message: "Email address already exist. Please login",
      });
    }
    const response = await knex("users").insert(newUser);
    res.status(201).json({
      message: "Registered successfully",
      user_id: response[0],
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Unable to register`,
      details: `${error.message}`,
    });
  }
};

// login user and generate JWT
const login = async (req, res) => {
  const { email, password } = req.body;

  //check if fields are filled
  if (!email || !password) {
    return res.status(400).json({
      message: "Please enter the required fields",
    });
  }

  // search database for account
  const user = await knex("users").where({ email }).first();
  // validate the user
  if (!user) {
    return res.status(400).json({ message: "Invalid email" });
  }

  // validate password
  const isPasswordCorrect = bcrypt.compareSync(password, user.password);
  if (!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid password" });
  }

  // Generate a token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_KEY,
    { expiresIn: "24h" }
  );

  res.status(200).json({ token });
};

const current = async (req, res) => {
  const user = await knex("users")
    .select("full_name", "is_dj")
    .where({ id: req.user.id })
    .first();
  res.status(200).json(user);
};
module.exports = { register, login, current };
