/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("events").del();
  await knex("events").insert([
    {
      id: 1,
      host_id: 1,
      event_type_id: 1,
      title: "Wedding Party",
      date_time: "2023-06-30 13:00:00",
      location: "Sandon Manor, Hertfordshire",
      cover_photo: "http://localhost:8080/event-images/weddingparty.svg",
    },
  ]);
};
