const knex = require("knex")(require("../knexfile"));

const all = async (_req, res) => {
  try {
    const events = await knex("events");
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Error retrieving events`,
      details: `${error.message}`,
    });
  }
};

module.exports = { all };
