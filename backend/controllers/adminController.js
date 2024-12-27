import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Store the admin password hash securely (hashed password for "yourStrongPassword")
const ADMIN_PASSWORD_HASH = bcrypt.hashSync('EyohMer300', 10); 

export const adminLogin = (req, res) => {
  const { username, password } = req.body;

  // Check if the username is 'admin'
  if (username !== 'admin') {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Validate the password
  const isPasswordValid = bcrypt.compareSync(password, ADMIN_PASSWORD_HASH);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a token
  const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
