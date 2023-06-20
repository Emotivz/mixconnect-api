/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("dj_genres", (table) => {
    table.increments("id").primary();
    table
      .integer("dj_id")
      .unsigned()
      .references("djs.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("genre_id")
      .unsigned()
      .references("genres.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("dj_genres");
};
