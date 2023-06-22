/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("djs").del();
  await knex("djs").insert([
    {
      id: 1,
      user_id: 2,
      dj_name: "DJ Smithy",
      profile_image: "fakepath/image1.jpg",
      location: "London",
      price: 100,
      bio: "I am an open format dj and enjoy play any genre. I am up for all types of events and have a lot of experience djing at different types of events",
    },
    {
      id: 2,
      user_id: 4,
      dj_name: "DJ Groove",
      profile_image: "fakepath/image2.jpg",
      location: "New York",
      price: 120,
      bio: "Bringing the groove to your party! I specialize in funk, disco, and house music. Let's get the dance floor pumping!",
    },
    {
      id: 3,
      user_id: 6,
      dj_name: "DJ BeatMaster",
      profile_image: "fakepath/image3.jpg",
      location: "Los Angeles",
      price: 150,
      bio: "Master of beats and rhythms. From hip-hop to EDM, I'll make sure your event is filled with energy and excitement!",
    },
    {
      id: 4,
      user_id: 8,
      dj_name: "DJ Serenity",
      profile_image: "fakepath/image4.jpg",
      location: "Miami",
      price: 90,
      bio: "Creating a serene atmosphere with smooth and chill vibes. Perfect for lounges, cocktail parties, and relaxation events.",
    },
    {
      id: 5,
      user_id: 10,
      dj_name: "DJ Rhythmic",
      profile_image: "fakepath/image5.jpg",
      location: "Berlin",
      price: 200,
      bio: "Bringing the rhythm to the heart of the city! With a diverse range of electronic beats, I'll make your night unforgettable.",
    },
  ]);
};
