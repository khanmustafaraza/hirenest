const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    // console.log(authorization)

    if (!authorization || !authorization.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided or invalid format.",
      });
    }

    const token = authorization.split(" ")[1];

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded)

    req.user = decoded;
    // console.log(req.user)
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token has expired. Please log in again.",
      });
    }

    return res.status(401).json({
      success: false,
      message: "Invalid token.",
      error: error.message,
    });
  }
};

module.exports = verifyToken;
