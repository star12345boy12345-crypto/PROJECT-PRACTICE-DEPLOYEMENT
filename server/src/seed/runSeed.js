require('dotenv').config();
const connectDB = require('../config/db');
const { autoSeedIfEmpty } = require('./seed');

const run = async () => {
  const conn = await connectDB();
  if (conn) {
    await autoSeedIfEmpty();
    // Also run curriculum seeder
    require('./seedCurriculumRunner');
  }
};

run();
