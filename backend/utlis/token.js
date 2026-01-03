const jwt = require("jsonwebtoken");

/**
 * Generate a JWT token
 * @param {Object} payload - The data to embed inside the token (e.g., user id)
 * @returns {string} JWT token
 */
const generateToken = (payload) => {
  try {
    if (!process.env.SECRET_KEY) {
      throw new Error("SECRET_KEY is not defined in environment variables");
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: "7d", // Token valid for 7 days
      algorithm: "HS256", // Explicit algorithm for consistency
    });

    return token;
  } catch (error) {
    console.error(`❌ Error while creating token: ${error.message}`);
    throw new Error("Token generation failed");
  }
};

module.exports = generateToken;
