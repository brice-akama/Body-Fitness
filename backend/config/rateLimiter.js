import rateLimit from 'express-rate-limit';

// Determine the environment
const isDevelopment = process.env.NODE_ENV !== 'production';

// Actual rate limiter for production
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again later.',
});

// Placeholder for development
const devLimiter = (req, res, next) => next();

// Export the appropriate middleware
export default isDevelopment ? devLimiter : globalLimiter;
