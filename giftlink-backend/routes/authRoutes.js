const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectToDatabase = require('../models/db');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;


router.post('/register', async (req, res) => {
       
        const collection = db.collection('users');
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(req.body.password, salt);

        const newUser = await collection.insertOne({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash,
            createdAt: new Date(),
        });

        const payload = { user: { id: newUser.insertedId } };
        const authtoken = jwt.sign(payload, JWT_SECRET);

        // Partial: Returns token only, no extra info like email or name
        res.json({ authtoken });
    } catch (e) {
        res.status(500).send('Internal server error');
    }
});

router.post('/login', async (req, res) => {
    try {
       
       
        if (theUser) {
            const result = await bcryptjs.compare(req.body.password, theUser.password);
            if (!result) {
                return res.status(404).json({ error: 'Wrong password' });
            }

            const payload = { user: { id: theUser._id.toString() } };
            const authtoken = jwt.sign(payload, JWT_SECRET);

            // Partial: Only returns token, no name/email
            return res.status(200).json({ authtoken });
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (e) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// Partial update API: no validation, minimal error handling
router.put('/update', async (req, res) => {
 

     

        if (!existingUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        existingUser.firstName = req.body.name;
        existingUser.updatedAt = new Date();

        
        const payload = { user: { id: existingUser._id.toString() } };
        const authtoken = jwt.sign(payload, JWT_SECRET);

        res.json({ authtoken });
    } catch (e) {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
