
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Admin credentials (email and hashed password)
const ADMIN_EMAIL = 'briceakama7@gmail.com';  // Admin email
const ADMIN_PASSWORD = 'EyohMer300';  // Admin password (plaintext)

// Admin credentials will be securely hashed for comparison
const ADMIN_PASSWORD_HASH = bcrypt.hashSync(ADMIN_PASSWORD, 10); // Hash the admin password

// Admin Login
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;  // Expecting email and password from frontend

    // Check if the email matches the predefined admin email
    if (email !== ADMIN_EMAIL) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Validate the password using bcrypt (compare with hashed password)
    const isPasswordValid = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT for admin
    const token = jwt.sign({ role: 'admin', email: ADMIN_EMAIL }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send response with token
    res.status(200).json({ token, message: 'Admin logged in successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error });
  }
};


