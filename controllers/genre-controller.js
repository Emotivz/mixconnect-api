const knex = require("knex")(require("../knexfile"));

//get all genres
const all = async (_req, res) => {
  try {
    const genres = await knex("genres");
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Error retrieving genres`,
      details: `${error.message}`,
    });
  }
};

module.exports = { all };
