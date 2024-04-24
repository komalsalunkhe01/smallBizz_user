// shop-controller.js
const Shop = require('../schema/shop-schema');

// Controller function to get shop data by category
exports.getShopsByCategory = async (req, res) => {
    const category = req.params.category;
    try {
        const shops = await Shop.find({ category: category });
        res.json(shops);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
};
