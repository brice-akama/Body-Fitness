// backend/utils/verifyToken.js

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  // Mock token validation (you can replace this with a real JWT verification)
  if (token === 'valid_token') { // Simulated check
    next();
  } else {
    res.status(401).json({ message: 'Invalid token' });
  }
};
