const express = require('express');
const axios = require('axios');

const app = express();

app.get('/orders', async (req, res) => {
    try {
        const users = await axios.get('http://user-service:3000/users');

        res.json({
            orderId: 101,
            users: users.data
        });
    } catch (err) {
        res.status(500).send("Error communicating with user-service");
    }
});

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});
app.listen(3001, () => {
    console.log("Order Service running on port 3001");
});