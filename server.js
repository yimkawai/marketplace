const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/products', productRoutes);

// MongoDB connection
connectDB();

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

