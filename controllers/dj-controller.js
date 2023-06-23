const knex = require("knex")(require("../knexfile"));

const register = async (req, res) => {
  const { user_id, dj_name, location, price, bio } = req.body;

  if (!user_id || !dj_name || !location || !price) {
    return res.status(400).json({
      error: true,
      message: "Please enter all the required fields",
    });
  }

  let newDj = {
    user_id,
    dj_name,
    profile_image:
      "http://localhost:8080/profile-images/placeholder-profile.jpg",
    location,
    price,
    bio,
  };

  if (req.file) {
    newDj = {
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
  }

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

const single = async (req, res) => {
  try {
    const dj = await knex("djs").where({ user_id: req.params.userId });
    if (dj.length === 0) {
      return res.status(404).json({
        error: true,
        message: `DJ with the user ID: ${req.params.userId} is not found`,
      });
    }
    res.status(200).json(dj[0]);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Error getting DJ with the user ID: ${req.params.userId}`,
      detail: `${error.message}`,
    });
  }
};

module.exports = { register, single };
