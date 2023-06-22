const knex = require("knex")(require("../knexfile"));

const register = async (req, res) => {
  const { user_id, dj_name, profile_image, location, price, bio } = req.body;

  if (!user_id || !dj_name || !location || !price) {
    return res.status(400).json({
      error: true,
      message: "Please enter all the required fields",
    });
  }

  const newDj = {
    user_id,
    dj_name,
    profile_image:
      req.protocol +
      "://" +
      req.get("host") +
      "/profile-images/" +
      req.file.filename,
    location,
    price,
    bio,
  };

  try {
    const userFound = await knex("djs")
      .select("user_id")
      .where("user_id", user_id)
      .first();
    if (userFound) {
      return res.status(409).json({
        error: true,
        message: `user with id: ${user_id} already has a DJ profile. Users can only have one profile`,
      });
    }
    const response = await knex("djs").insert(newDj);
    res.status(201).json({
      message: "Registered successfully",
      dj_id: response[0],
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Unable to register`,
      details: `${error.message}`,
    });
  }
};
module.exports = { register };
