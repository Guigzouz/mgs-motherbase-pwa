import { jwtDecode } from "jwt-decode";

/**
 * Decodes a JWT and returns the payload.
 * @param {string} token - The JWT string.
 * @returns {object|null} - The decoded payload or null if invalid.
 */

export const decodeJwt = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Failed to decode JWT:", error);
    return null;
  }
};
