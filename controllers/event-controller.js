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

const single = async (req, res) => {
  try {
    const event = await knex("events").where({ id: req.params.eventId });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Error finding event with the ID: ${req.params.eventId}`,
      detail: `${error.message}`,
    });
  }
};

module.exports = { all, single };
