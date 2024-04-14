const getAllTransactions = (req, res) => {
    res.json([{ id: 1, userId: 1, amount: 100, date: new Date(), category: 'Food' }]);
};

module.exports = {
    getAllTransactions,
};