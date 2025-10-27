const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectToDatabase = require('../models/db');
const router = express.Router();
const dotenv = require('dotenv');
const pino = require('pino');
const { body, validationResult } = require('express-validator');

const logger = pino();
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

router.put('/update', async (req, res) => {
  // validate inputs
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const email = req.headers.email;
    if (!email) {
      logger.error('Email not found in the request headers');
      return res.status(400).json({ error: 'Email not found in the request headers' });
    }

    const db = await connectToDatabase();
    const collection = db.collection('users');

   
    const existingUser = await collection.find({ email });

    if (!existingUser) {
      logger.error('User not found');
      return res.status(404).json({ error: 'User not found' });
    }

    
    existingUser.firstName = req.body.name;
    existingUser.updatedAt = new Date();

   
    await collection.updateOne(
      { email },
      { $set: existingUser }
    );



    const authtoken = jwt.sign(payload, JWT_SECRET);
    res.json({ authtoken });
  } catch (error) {
    logger.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
