import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/claudinary.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import bannerRoutes from './routes/banner.js'
import newsletterRoutes from './routes/newsletter.js'
import globalLimiter from './config/rateLimiter.js'; 
import authRoutes from './routes/auth.js';
import multer from 'multer';
import contactRoutes from './routes/contactRoutes.js';
import generalSettingsRoutes from "./routes/generalSettingRoutes.js";
import accountSettingsRoutes from "./routes/accountSettingRoutes.js";
import securitySettingsRoutes from "./routes/securitySettingRoutes.js";
import appearanceSettingsRoutes from "./routes/apperanceSettingRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import Product from './models/Product.js';
import orderRoutes from './routes/orderRoutes.js';
import dashboardRoutes from "./routes/dasboard.js";
import seoRoutes from './routes/seoRoutes.js';











// Load environment variables
dotenv.config();

// App config
const app = express();
const port = process.env.PORT || 4000;

// Connect to the database
connectDB();
connectCloudinary();

// Middleware to parse JSON request body (must come before route definitions)
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Apply rate limiter globally
app.use(globalLimiter);


// Raw body for Stripe webhooks
app.use(
  '/webhook',
  express.raw({ type: 'application/json' })
);

// Enable CORS for specific frontend URL
const allowedOrigins = ['http://localhost:5176', 'http://localhost:5175'];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow request
    } else {
      callback(new Error('Not allowed by CORS')); // Block request
    }
  },
  credentials: true
}));

// Use the product routes for any product-related API calls
app.use('/api/products', productRoutes);
app.use('/', userRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/seo', seoRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/banner', bannerRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use("/api/settings/general", generalSettingsRoutes);
app.use("/api/settings/account", accountSettingsRoutes);
app.use("/api/settings/security", securitySettingsRoutes);
app.use("/api/settings/appearance", appearanceSettingsRoutes);
app.use("/api/reports", reportRoutes);


// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong!' });
});

// Set up multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Set the uploads folder as a static folder for serving uploaded files
app.use('/uploads', express.static('uploads'));

// Blog post schema
const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  image: String,
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ["Draft", "Published"], default: "Draft" },
});

const Blog = mongoose.model("Blog", blogSchema);

// Create a new blog post
app.post("/api/blogs", async (req, res) => {
  const { title, content, author, image, status } = req.body; // Include `image`
  const newBlog = new Blog({ title, content, author, image, status });
  try {
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all blog posts
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// **Get latest blog posts**
app.get("/api/blogs/latest", async (req, res) => {
  try {
    const latestBlogs = await Blog.find({ status: "Published" }) // Fetch only published blogs
      .sort({ date: -1 }) // Sort by newest first
      .limit(3); // Limit to the latest 3 blogs
    res.status(200).json(latestBlogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch latest blogs", error });
  }
});

// Get a blog post by ID
app.get("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;

  // Validate the ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid blog ID" });
  }

  try {
    const blog = await Blog.findById(id);
    if (blog) {
      res.json(blog);
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a blog post
app.put("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, author, status } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, author, status },
      { new: true }
    );
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a blog post
app.delete("/api/blogs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Blog.findByIdAndDelete(id);
    res.json({ message: "Blog post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Add a route for image upload
app.post("/api/upload", upload.single("image"), (req, res) => {
  try {
    res.status(200).json({ imagePath: `/uploads/${req.file.filename}` });
  } catch (error) {
    res.status(500).json({ message: "Failed to upload image", error });
  }
});


// Media Schema
const mediaSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  url: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

const Media = mongoose.model('Media', mediaSchema);
// Get all media
app.get("/api/media", async (req, res) => {
  try {
    const mediaList = await Media.find(); // Retrieve all media from the DB
    res.status(200).json({
      message: "Media fetched successfully",
      media: mediaList,
    });
  } catch (error) {
    console.error("Error fetching media:", error);
    res.status(500).json({ message: "Failed to fetch media", error });
  }
});

// Upload media
app.post("/api/media", upload.single("file"), async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    // Create media record in DB
    const newMedia = new Media({
      filename: file.originalname,
      url: `/uploads/${file.filename}`,
    });

    const savedMedia = await newMedia.save();
    
    // Success response with saved media details
    res.status(201).json({
      message: "File uploaded successfully",
      media: savedMedia,
    });
  } catch (error) {
    console.error("Error uploading media:", error);
    res.status(500).json({ message: "Failed to upload media", error });
  }
});

// Delete media
app.delete('/api/media/:id', async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid media ID' });
  }

  try {
    const media = await Media.findById(id);
    if (!media) {
      return res.status(404).json({ message: 'Media not found' });
    }

    const filePath = path.join('uploads', media.filename);

    // Delete the file from the server using fs.promises
    await fs.unlink(filePath);

    // Delete the media record from the database
    await Media.findByIdAndDelete(id);

    // Success response
    res.status(200).json({
      message: 'Media deleted successfully',
      mediaId: id,
    });
  } catch (error) {
    console.error('Error deleting media:', error);
    res.status(500).json({ message: 'Failed to delete media', error });
  }
});

app.get('/api/search', async (req, res) => {
  try {
    const query = req.query.q || '';  // Get the search query from the query parameters

    if (!query) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }

    // Search products by name and category (case-insensitive)
    const products = await Product.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },  // Case-insensitive search for name
        { category: { $regex: query, $options: 'i' } }  // Case-insensitive search for category
      ]
    });

    res.json({ results: products });  // Return the products as search results
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



// API endpoints
app.get('/', (req, res) => {
  res.send('API WORKING');
});


// Start server
app.listen(port, () => console.log(`Server started on port: ${port}`));
