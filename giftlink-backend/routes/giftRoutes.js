const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const connectToDatabase = require('../models/db'); // Adjust the path as necessary

// GET /api/gifts
router.get('/api/gifts', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('gifts');
        const gifts = await collection.find({}).toArray();
        res.json(gifts);
    } catch (error) {
        console.error("Error retrieving gifts:", error);
        res.status(500).json({ error: "Failed to retrieve gifts" });
    }
});

// GET /api/gifts/:id
router.get('/api/gifts/:id', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB and store connection to db constant
        const db = await connectToDatabase();

        // Task 2: Use the collection() method to retrieve the gift collection
        const collection = db.collection('gifts');

        // Task 3: Find a specific gift by ID
        const id = req.params.id;
        const gift = await collection.findOne({ _id: new ObjectId(id) });

        if (gift) {
            res.json(gift);
        } else {
            res.status(404).json({ error: "Gift not found" });
        }
    } catch (error) {
        console.error("Error retrieving gift:", error);
        res.status(500).json({ error: "Failed to retrieve gift" });
    }
});

module.exports = router;
