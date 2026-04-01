const express = require('express');
const client = require('prom-client');

const app = express();

// collect default metrics
client.collectDefaultMetrics();

// custom metric
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total HTTP requests',
});

// middleware
app.use((req, res, next) => {
    httpRequestCounter.inc();
    next();
});

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "Suraj" },
        { id: 2, name: "DevOps Engineer" }
    ]);
});

// 🔥 METRICS ENDPOINT
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(3000, () => {
    console.log("User Service running on port 3000");
});