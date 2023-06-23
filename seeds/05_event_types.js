/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("event_types").del();
  await knex("event_types").insert([
    { id: 1, event_type: "Wedding" },
    { id: 2, event_type: "Nightclub" },
    { id: 3, event_type: "Bar" },
    { id: 4, event_type: "Pub" },
    { id: 5, event_type: "Resturant" },
    { id: 6, event_type: "Store/Retail" },
    { id: 7, event_type: "Festival/Concert" },
    { id: 8, event_type: "Corporate" },
    { id: 9, event_type: "Birthday Party" },
    { id: 10, event_type: "House Party" },
    { id: 11, event_type: "Kids Party" },
  ]);
};
