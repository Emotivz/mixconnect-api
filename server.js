require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;
const profileRouter = require("./routes/profile-routes");
const genreRouter = require("./routes/genre-routes");
const userRouter = require("./routes/user-routes");
const djRouter = require("./routes/dj-routes");
const eventRouter = require("./routes/event-routes");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/api/profile", profileRouter);
app.use("/api/genres", genreRouter);
app.use("/api/users", userRouter);
app.use("/api/djs", djRouter);
app.use("/api/events", eventRouter);

app.listen(PORT, () => {
  console.log(`Server starts on http://localhost:${PORT}`);
});
