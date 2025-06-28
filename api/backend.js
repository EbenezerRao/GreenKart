// api/backend.js

const { createServer } = require('http');
const app = require('../backend/index'); // Adjust path if needed

module.exports = (req, res) => {
    const server = createServer(app);
    server.emit('request', req, res);
};

module.exports = app; 