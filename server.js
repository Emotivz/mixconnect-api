require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5050;
const profileRouter = require("./routes/profile-routes");
const genreRouter = require("./routes/genre-routes");
const userRouter = require("./routes/user-routes");

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));

// Routes
app.use("/api/profile", profileRouter);
app.use("/api/genres", genreRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server starts on http://localhost:${PORT}`);
});
