import express from 'express';
import axios from 'axios';
import client from './client.js';

const app = express();
const PORT = 3000;

app.get('/data', async (req, res) => {
    try {

        // Check if data exists in Redis
        const cachedData = await client.get('externalData');
        if (cachedData) {
            return res.json(JSON.parse(cachedData));
        } 

        // Fetch data from external API
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        const data = response.data;

        // Store data in Redis with an expiration time of 1 hour (3600 seconds = 1 hour)
        await client.setEx('externalData', 3600, JSON.stringify(data));
        res.json(data);

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});