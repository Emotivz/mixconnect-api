/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("events", (table) => {
    table.increments("id").primary();
    table
      .integer("host_id")
      .unsigned()
      .references("users.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.integer("event_type_id").unsigned().references("event_types.id");
    table.string("title").notNullable();
    table.datetime("date_time").notNullable();
    table.string("location").notNullable();
    table.string("cover_photo ").nullable();
    table.string("details").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("events");
};
