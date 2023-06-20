/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("genres").del();
  await knex("genres").insert([
    { id: 1, genre: "80's" },
    { id: 2, genre: "90's" },
    { id: 3, genre: "00's" },
    { id: 4, genre: "R&B" },
    { id: 5, genre: "Hip Hop" },
    { id: 6, genre: "Reggae" },
    { id: 7, genre: "Disco" },
    { id: 8, genre: "Rock" },
    { id: 9, genre: "Techno" },
    { id: 10, genre: "House" },
    { id: 11, genre: "Top 40" },
  ]);
};
