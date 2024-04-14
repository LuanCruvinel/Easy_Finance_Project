const express = require('express');
const app = express();
const transactionRoutes = require('./routes/transactionRoutes');

app.use('/api/transactions', transactionRoutes);


