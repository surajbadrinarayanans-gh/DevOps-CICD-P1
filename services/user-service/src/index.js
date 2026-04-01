const express = require('express');
const app = express();

app.get('/users', (req, res) => {
    res.json([
        { id: 1, name: "Suraj" },
        { id: 2, name: "DevOps Engineer" }
    ]);
});

app.listen(3000, () => {
    console.log("User Service running on port 3000");
});