const knex = require("knex")(require("../knexfile"));

const single = async (req, res) => {
  try {
    const profile = await knex("users")
      .select("id", "full_name", "is_dj", "email")
      .where({ id: req.user.id })
      .first();

    if (profile.is_dj) {
      const fullDjProfile = await knex("djs")
        .leftJoin("users", "users.id", "djs.user_id")
        .leftJoin("dj_genres", "dj_genres.dj_id", "djs.id")
        .leftJoin("genres", "genres.id", "dj_genres.genre_id")
        .where({ user_id: profile.id })
        .select(
          "djs.id",
          "djs.user_id",
          "dj_name",
          "profile_image",
          "location",
          "price",
          "bio",
          "users.full_name",
          "users.is_dj",
          "users.email",
          knex.raw("JSON_ARRAYAGG( genres.genre ) AS genres")
        )
        .first();
      return res.status(200).json(fullDjProfile);
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Error retrieving profile with user id: ${req.user.id}`,
      details: `${error.message}`,
    });
  }
};

const editSingle = async (req, res) => {
  const userDetails = {
    full_name: req.body.full_name,
    email: req.body.email,
  };

  const djDetails = {
    dj_name: req.body.dj_name,
    profile_image: req.body.profile_image,
    location: req.body.location,
    price: req.body.price,
    bio: req.body.bio,
  };

  try {
    await knex("djs").update(djDetails).where({ user_id: req.user.id });
    await knex("users").update(userDetails).where({ id: req.user.id });
    const updatedDj = await knex("djs").where({ user_id: req.user.id });
    const updatedUser = await knex("users").where({ id: req.user.id });

    const updatedProfile = Object.assign(updatedUser, updatedDj);

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Error editing profile with user id: ${req.user.id}`,
      details: `${error.message}`,
    });
  }
};

const djProfile = async (req, res) => {
  try {
    const requestedProfile = await knex("djs")
      .leftJoin("users", "users.id", "djs.user_id")
      .leftJoin("dj_genres", "dj_genres.dj_id", "djs.id")
      .leftJoin("genres", "genres.id", "dj_genres.genre_id")
      .select(
        "djs.id",
        "djs.user_id",
        "dj_name",
        "profile_image",
        "location",
        "price",
        "bio",
        "users.is_dj",
        "users.email",
        knex.raw("JSON_ARRAYAGG( genres.genre ) AS genres")
      )
      .where({ "djs.id": req.params.djId })
      .first();
    res.status(200).json(requestedProfile);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Error fetching profile of DJ with ID: ${req.params.djId}`,
      details: `${error.message}`,
    });
  }
};

module.exports = { single, editSingle, djProfile };
