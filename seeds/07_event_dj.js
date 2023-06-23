/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("event_dj").del();
  await knex("event_dj").insert([
    { id: 1, event_id: 4, dj_id: 1 },
    { id: 2, event_id: 4, dj_id: 2 },
    { id: 3, event_id: 4, dj_id: 3 },
    { id: 3, event_id: 3, dj_id: 1 },
    { id: 4, event_id: 3, dj_id: 2 },
    { id: 5, event_id: 2, dj_id: 3 },
    { id: 6, event_id: 2, dj_id: 4 },
    { id: 7, event_id: 1, dj_id: 1 },
    { id: 8, event_id: 1, dj_id: 2 },
    { id: 9, event_id: 1, dj_id: 4 },
    { id: 10, event_id: 5, dj_id: 2 },
    { id: 11, event_id: 5, dj_id: 3 },
    { id: 12, event_id: 6, dj_id: 1 },
    { id: 13, event_id: 6, dj_id: 5 },
    { id: 14, event_id: 7, dj_id: 3 },
    { id: 15, event_id: 7, dj_id: 1 },
    { id: 16, event_id: 7, dj_id: 2 },
  ]);
};
