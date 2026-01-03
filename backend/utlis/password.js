const bcrypt = require("bcryptjs");

/**
 * Hash a plain-text password
 * @param {string} password - The user's plain text password
 * @returns {Promise<string>} - The hashed password
 */
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10); // generate salt (10 rounds = good balance)
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error.message);
    throw new Error("Password hashing failed");
  }
};

/**
 * Compare a plain-text password with a hashed one
 * @param {string} password - The user's plain text password
 * @param {string} hash - The stored hashed password
 * @returns {Promise<boolean>} - True if matched, false otherwise
 */
const comparePassword = async (password, hash) => {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.error("Error comparing password:", error.message);
    throw new Error("Password comparison failed");
  }
};

module.exports = { hashPassword, comparePassword };
