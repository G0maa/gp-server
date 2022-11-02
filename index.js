require('dotenv').config();
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

if (process.env.NODE_ENV) {
  const PORT = process.env.PORT;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`URL: http://localhost:${PORT}`);
    console.log(`Running environment: ${process.env.NODE_ENV}`);
  });
} else {
  module.exports = app;
}
