// Entry point fallback if Root Directory was not configured on hosting platform (e.g., Render)
const path = require('path');
require(path.join(__dirname, '..', 'server', 'src', 'server.js'));
