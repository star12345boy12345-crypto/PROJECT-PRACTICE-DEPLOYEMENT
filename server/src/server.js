require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');
const { autoSeedIfEmpty } = require('./seed/seed');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const conn = await connectDB();
    if (conn) {
      await autoSeedIfEmpty();
    }

    app.listen(PORT, () => {
      console.log(`======================================================`);
      console.log(`🚀 Vidyora AI Backend running at http://localhost:${PORT}`);
      console.log(`🌐 Health Check: http://localhost:${PORT}/api/health`);
      console.log(`🏆 NEXTECH 2.0 | Team AgniX`);
      console.log(`======================================================`);
    });
  } catch (error) {
    console.error('Failed to start Vidyora AI server:', error);
    process.exit(1);
  }
};

startServer();
