const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // check if there is auth header
  if (!req.headers.authorization) {
    console.log(req.headers.authorization);
    return res.status(401).json({ message: "Please login" });
  }

  // remove Bearer from token
  const authToken = req.headers.authorization.split(" ")[1];

  try {
    const verifiedToken = jwt.verify(authToken, process.env.JWT_KEY);

    // add verified token to request object
    req.user = verifiedToken;

    // proceed to endpoint/next middleware
    next();
  } catch (error) {
    res.status(401).json({
      error: true,
      message: "Invalid auth token",
    });
  }
};
