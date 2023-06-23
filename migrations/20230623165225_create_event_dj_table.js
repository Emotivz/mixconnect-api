/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("event_dj", (table) => {
    table.increments("id").primary();
    table
      .integer("event_id")
      .unsigned()
      .references("events.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("dj_id")
      .unsigned()
      .references("djs.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("event_dj");
};
