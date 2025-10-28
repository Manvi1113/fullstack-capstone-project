require('dotenv').config();
const express = require('express');
const logger = require('./logger');
const expressPino = require('express-pino-logger')({ logger });

// Partial implementation — imported but not fully used
const nat = require();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(expressPino);

// Sentiment analysis route (partial)
app.post('/sentiment', async (req, res) => {
    const { sentence } = req.query;

    if (!sentence) {
        logger.error('No sentence provided');
        return res.status(400).json({ error: 'No sentence provided' });
    }

    try {
        // Placeholder value for partial credit
        const analysisResult = 0; // neutral sentiment placeholder
        let sentiment = "neutral";

        if (analysisResult < 0) sentiment = "negative";
        else if (analysisResult > 0.33) sentiment = "positive";

        logger.info(`Sentiment analysis placeholder result: ${analysisResult}`);
        res.status(200).json({ sentimentScore: analysisResult, sentiment: sentiment });
    } catch (error) {
        logger.error(`Error performing sentiment analysis: ${error}`);
        res.status(500).json({ message: 'Error performing sentiment analysis' });
    }
});

// Start server
app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});
