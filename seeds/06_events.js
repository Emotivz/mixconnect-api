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
      cover_photo:
        "https://mixconnectapi.emotivz.co.uk/event-images/weddingparty.svg",
      details:
        "Attention wedding DJs! We're celebrating the union of two souls and need a talented DJ who can create a magical atmosphere. If you can play romantic tunes, engage the crowd, and keep the dance floor alive, join us for this special occasion!",
    },
    {
      id: 2,
      host_id: 1,
      event_type_id: 2,
      title: "PLAYAZ: LONDON",
      date_time: "2023-07-09 20:00:00",
      location: "XOYO, London",
      cover_photo: "https://mixconnectapi.emotivz.co.uk/event-images/club.jpg",
      details:
        "Looking for a last minute DJ for one of the best nights at our club. Please only apply if you have previous experience at top clubs",
    },
    {
      id: 3,
      host_id: 4,
      event_type_id: 11,
      title: "Kids Party",
      date_time: "2023-09-10 14:00:00",
      location: "Local Park, Canterbury",
      cover_photo:
        "https://mixconnectapi.emotivz.co.uk/event-images/kidsparty.svg",
      details:
        "Calling all DJs who specialize in entertaining kids! We're hosting a fun-filled party for children and need someone who can play age-appropriate music, lead games, and keep the little ones entertained.",
    },
    {
      id: 4,
      host_id: 2,
      event_type_id: 7,
      title: "International Gala Music Festival",
      date_time: "2023-07-22 17:30:00",
      location: "City Concert Hall, Whitehall",
      cover_photo:
        "https://mixconnectapi.emotivz.co.uk/event-images/musicfest.svg",
      details:
        "Attention classical music DJs! We're organizing an international gala music festival and seek DJs who specialize in classical genres. Showcase your talent and captivate the audience with your carefully curated sets.",
    },
    {
      id: 5,
      host_id: 8,
      event_type_id: 3,
      title: "An Evening of Smooth Jazz",
      date_time: "2023-09-28 19:30:00",
      location: "The Jazz Lounge",
      cover_photo: "https://mixconnectapi.emotivz.co.uk/event-images/jazz.jpeg",
      details:
        "Smooth jazz aficionados, we're hosting an evening dedicated to the genre. If you have an extensive collection of smooth jazz tracks and can create a relaxed ambiance, join us for this intimate gathering.",
    },
    {
      id: 6,
      host_id: 5,
      event_type_id: 3,
      title: "Summer Beach Party",
      date_time: "2023-08-15 15:00:00",
      location: "Sandy Beach Resort, Miami",
      cover_photo:
        "https://mixconnectapi.emotivz.co.uk/event-images/beachparty.jpg",
      details:
        "DJs who can set the perfect summer vibe, we want you! Join us at our beach party and create a playlist that will make everyone dance under the sun. Bring your best tropical beats!",
    },
    {
      id: 7,
      host_id: 6,
      event_type_id: 2,
      title: "Midnight Masquerade Ball",
      date_time: "2023-10-31 22:00:00",
      location: "Grand Ballroom",
      cover_photo:
        "https://mixconnectapi.emotivz.co.uk/event-images/masquerade_ball.jpg",
      details:
        "We're hosting a grand midnight masquerade ball and require a DJ who can match the elegance and mystique of the event. If you can mix enchanting music and create an unforgettable atmosphere, this is the opportunity for you!",
    },
  ]);
};
