/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("dj_genres").del();
  await knex("dj_genres").insert([
    { id: 1, dj_id: 1, genre_id: 1 },
    { id: 2, dj_id: 2, genre_id: 3 },
    { id: 3, dj_id: 3, genre_id: 5 },
    { id: 4, dj_id: 4, genre_id: 2 },
    { id: 5, dj_id: 5, genre_id: 4 },
    { id: 6, dj_id: 1, genre_id: 6 },
    { id: 7, dj_id: 2, genre_id: 8 },
    { id: 8, dj_id: 3, genre_id: 10 },
    { id: 9, dj_id: 4, genre_id: 7 },
    { id: 10, dj_id: 5, genre_id: 9 },
    { id: 11, dj_id: 1, genre_id: 11 },
    { id: 12, dj_id: 1, genre_id: 4 },
    { id: 13, dj_id: 1, genre_id: 8 },
    { id: 14, dj_id: 2, genre_id: 5 },
    { id: 15, dj_id: 2, genre_id: 7 },
    { id: 16, dj_id: 2, genre_id: 9 },
    { id: 17, dj_id: 3, genre_id: 2 },
    { id: 18, dj_id: 3, genre_id: 4 },
    { id: 19, dj_id: 3, genre_id: 6 },
    { id: 20, dj_id: 4, genre_id: 1 },
    { id: 21, dj_id: 4, genre_id: 3 },
    { id: 22, dj_id: 4, genre_id: 10 },
    { id: 23, dj_id: 5, genre_id: 2 },
    { id: 24, dj_id: 5, genre_id: 6 },
    { id: 25, dj_id: 5, genre_id: 11 },
    { id: 26, dj_id: 6, genre_id: 2 },
    { id: 27, dj_id: 6, genre_id: 3 },
    { id: 28, dj_id: 6, genre_id: 4 },
    { id: 29, dj_id: 6, genre_id: 5 },
    { id: 30, dj_id: 6, genre_id: 6 },
    { id: 31, dj_id: 6, genre_id: 10 },
    { id: 32, dj_id: 6, genre_id: 11 },
  ]);
};
