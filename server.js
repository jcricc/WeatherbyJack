const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory

app.get('/weather', async (req, res) => {
    const apiUrl = 'https://api.tomorrow.io/v4/timelines';
    const params = new URLSearchParams({
        location: '42.3478,-71.0466',
        fields: 'temperature,windSpeed,cloudCover',
        apikey: 'Xxv61ltvR2nW4ljsrMXUNQRJ3nV7lSVS', // Replace with your API key
        // Add other API parameters here as needed
    });

    try {
        const response = await fetch(`${apiUrl}?${params}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
