const express = require('express');
const app = express();

app.use(express.json()); // Middleware para parsing JSON.

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});