const knex = require("knex")(require("../knexfile"));

const all = async (req, res) => {
  try {
    const events = await knex("events");
    // check if query param is provided and return as many events as requested
    if (req.query.num) {
      if (isNaN(req.query.num)) {
        return res.status(400).json({
          error: true,
          message: `${req.query.num} is not a valid number. Please provide a valid number`,
        });
      }
      const requestedNumEvents = events.slice(0, req.query.num);
      return res.status(200).json(requestedNumEvents);
    }
    // return all events if query param is not provided
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
    const event = await knex("events")
      .leftJoin("users", "users.id", "events.host_id")
      .leftJoin("event_types", "event_types.id", "events.event_type_id")
      .where({ "events.id": req.params.eventId })
      .select(
        "events.id",
        "events.cover_photo AS coverPhoto",
        "events.date_time AS dateTime",
        "events.details",
        "events.location",
        "events.title",
        "event_types.event_type AS type",
        "users.full_name AS organiser"
      )
      .first();
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: `Error finding event with the ID: ${req.params.eventId}`,
      detail: `${error.message}`,
    });
  }
};

const remove = async (req, res) => {
  // TODO add validation to check that the event exist
  try {
    const checkEvent = await knex("events")
      .where({ id: req.params.eventId })
      .first();

    if (req.user.id === checkEvent.host_id) {
      try {
        await knex("events").where({ id: req.params.eventId }).first().del();
      } catch (error) {
        res.status(500).json({
          error: true,
          message: `Error deleting event with ID: ${req.params.eventId}`,
          detail: `${error.message}`,
        });
      }
    } else {
      return res.status(403).json({
        error: true,
        message: `You are not authorised to carry out this action. Only the host can delete the event`,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      details: `${error.message}`,
    });
  }
};

module.exports = { all, single, remove };
