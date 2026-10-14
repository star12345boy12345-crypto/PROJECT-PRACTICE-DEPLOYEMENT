const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'vidyora_hackathon_nextech_secret_key_2026';

const requireAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authentication required. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    let decoded;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch {
      return res.status(401).json({ message: 'Invalid or expired token.' });
    }

    const user = await User.findById(decoded.id).select('-password');
    if (!user) {
      // In demo mode if user was registered in session or memory
      if (decoded.email === 'demo.student@vidyora.ai') {
        req.user = {
          _id: decoded.id,
          name: decoded.name || 'Omm Pritam (Demo Student)',
          email: 'demo.student@vidyora.ai',
          classLevel: 'Class 8',
          schoolName: 'Govt. High School, Balasore',
          parentName: 'Ramesh Jena',
          parentEmail: 'ramesh.jena.parent@example.com',
          preferredLanguage: 'or',
          role: 'student'
        };
        return next();
      }
      return res.status(401).json({ message: 'User not found.' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Auth middleware error:', error);
    res.status(500).json({ message: 'Internal server authorization error.' });
  }
};

const signToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
};

module.exports = {
  requireAuth,
  signToken,
};
