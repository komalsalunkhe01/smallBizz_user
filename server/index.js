// // index.js
// const express = require('express');
// const mongoose = require('mongoose');
// const connectDB = require('./database/db');
// const shopRoute = require('./router/shop-route');

// const app = express();

// // Connect to MongoDB
// connectDB();

// // Define a middleware to parse JSON requests
// app.use(express.json());

// // Define routes
// app.use('/shops', shopRoute);

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors

const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://ayushgurav6:Ayush123@smallbizz.rwgr6tg.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
});

// Define schema for shop collection
const shopSchema = new mongoose.Schema({
    name: String,
    category: String,
    // Add more fields as per your data structure
});

// Define model for shop collection
const Shop = mongoose.model('User', shopSchema);

// Fetch all data from shop collection
const fetchShops = async () => {
    try {
        const shops = await Shop.find({});
        console.log("All Shops:", shops);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Call fetchShops to fetch data
fetchShops();

// Define a route to display all shops
app.get('/users', async (req, res) => {
    try {
        const shops = await Shop.find({});
        res.json(shops);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Define a route to display shops by category
app.get('/users/:category', async (req, res) => {
    const category = req.params.category;
    try {
        const shops = await Shop.find({ category: category });
        res.json(shops);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
