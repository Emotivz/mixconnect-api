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
      profile_image:
        "https://mixconnectapi.emotivz.co.uk/profile-images/djsmithy.jpg",
      location: "London",
      price: 100,
      bio: "I am an open format dj and enjoy play any genre. I am up for all types of events and have a lot of experience djing at different types of events",
    },
    {
      id: 2,
      user_id: 4,
      dj_name: "DJ Groove",
      profile_image:
        "https://mixconnectapi.emotivz.co.uk/profile-images/djgrove.jpg",
      location: "New York",
      price: 120,
      bio: "Bringing the groove to your party! I specialize in funk, disco, and house music. Let's get the dance floor pumping!",
    },
    {
      id: 3,
      user_id: 6,
      dj_name: "DJ BeatMaster",
      profile_image:
        "https://mixconnectapi.emotivz.co.uk/profile-images/djbeatmaster.jpg",
      location: "Los Angeles",
      price: 150,
      bio: "Master of beats and rhythms. From hip-hop to EDM, I'll make sure your event is filled with energy and excitement!",
    },
    {
      id: 4,
      user_id: 8,
      dj_name: "DJ Serenity",
      profile_image:
        "https://mixconnectapi.emotivz.co.uk/profile-images/djserenity.jpg",
      location: "Miami",
      price: 90,
      bio: "Creating a serene atmosphere with smooth and chill vibes. Perfect for lounges, cocktail parties, and relaxation events.",
    },
    {
      id: 5,
      user_id: 10,
      dj_name: "DJ Rhythmic",
      profile_image:
        "https://mixconnectapi.emotivz.co.uk/profile-images/djrhythmic.jpg",
      location: "Berlin",
      price: 200,
      bio: "Bringing the rhythm to the heart of the city! With a diverse range of electronic beats, I'll make your night unforgettable.",
    },
    {
      id: 6,
      user_id: 11,
      dj_name: "Emotivz",
      profile_image:
        "https://mixconnectapi.emotivz.co.uk/profile-images/emotivz.jpg",
      location: "London",
      price: 130,
      bio: `
Emotivz is a DJ and music producer based in London, UK. Initially a DJ, Emotivz started producing his own music, and he progressively developed a more personal and one-of-a-kind sound, combining different influences and bringing many new ideas to life. He has a life-long passion for quality music, and the fact that he is fluent in different genres and styles makes his productions all the more exciting and dynamic. His DJ sets are just as vibrant and direct as his music productions, as Emotivz takes big detours, crossing genre boundaries and exploring new ideas with his one-of-a-kind musical style and his natural ability to combine different vibes into something that’s quite pleasant and engaging for a very diverse audience. His aim is indeed to take the listeners along for a wild ride, a true musical journey that will cause waves of euphoria and feel-good vibes through and through! As his artist moniker might suggest, Emotivz knows that music is all about emotion, and he looks forward to sharing it with the audience.
 
 Find out more about Emotivz and his work as a DJ and producer alike.
 
 https://www.instagram.com/emotivz/
 
 https://www.soundcloud.com/emotivz`,
    },
  ]);
};
