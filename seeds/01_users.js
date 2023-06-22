const bcrypt = require("bcryptjs");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      full_name: "John Doe",
      email: "johndoe@example.com",
      password: bcrypt.hashSync("12345678"),
      is_dj: false,
    },
    {
      id: 2,
      full_name: "Jane Smith",
      email: "janesmith@example.com",
      password: bcrypt.hashSync("abcdefgh"),
      is_dj: true,
    },
    {
      id: 3,
      full_name: "Michael Johnson",
      email: "michaeljohnson@example.com",
      password: bcrypt.hashSync("qwerty123"),
      is_dj: false,
    },
    {
      id: 4,
      full_name: "Emily Brown",
      email: "emilybrown@example.com",
      password: bcrypt.hashSync("password123"),
      is_dj: true,
    },
    {
      id: 5,
      full_name: "David Wilson",
      email: "davidwilson@example.com",
      password: bcrypt.hashSync("securepass"),
      is_dj: false,
    },
    {
      id: 6,
      full_name: "Sarah Davis",
      email: "sarahdavis@example.com",
      password: bcrypt.hashSync("pass123"),
      is_dj: true,
    },
    {
      id: 7,
      full_name: "Matthew Taylor",
      email: "matthewtaylor@example.com",
      password: bcrypt.hashSync("letmein"),
      is_dj: false,
    },
    {
      id: 8,
      full_name: "Olivia Miller",
      email: "oliviamiller@example.com",
      password: bcrypt.hashSync("password1234"),
      is_dj: true,
    },
    {
      id: 9,
      full_name: "Daniel Anderson",
      email: "danielanderson@example.com",
      password: bcrypt.hashSync("testpass"),
      is_dj: false,
    },
    {
      id: 10,
      full_name: "Ava Thomas",
      email: "avathomas@example.com",
      password: bcrypt.hashSync("98765432"),
      is_dj: true,
    },
  ]);
};
