const bcrypt = require('bcryptjs');
const User = require('../models/User');
const LearningProgress = require('../models/LearningProgress');
const { signToken } = require('../middleware/auth');
const emailService = require('../services/emailService');

exports.register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      classLevel = 'Class 8',
      schoolName = 'Government High School',
      parentName,
      parentEmail,
      preferredLanguage = 'or',
    } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required fields.' });
    }

    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(400).json({ message: 'An account with this email already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let normLang = (preferredLanguage || 'or').toLowerCase().trim();
    if (normLang === 'odia') normLang = 'or';
    if (normLang === 'english') normLang = 'en';

    const user = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      classLevel,
      schoolName,
      parentName,
      parentEmail,
      preferredLanguage: normLang,
    });
    await user.save();

    // Initialize learning progress for new student
    const progress = new LearningProgress({
      user: user._id,
      streakDays: 1,
      activeMinutes: 10,
    });
    await progress.save();

    // Send welcome email to student and parent via vidyorai@gmail.com
    emailService.sendWelcomeEmail({
      studentName: user.name,
      studentEmail: user.email,
      parentEmail: user.parentEmail,
      parentName: user.parentName,
      classLevel: user.classLevel,
      schoolName: user.schoolName,
    }).catch((err) => console.warn('Background welcome email error:', err.message));

    const token = signToken(user);
    res.status(201).json({
      message: 'Student registered successfully',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        classLevel: user.classLevel,
        schoolName: user.schoolName,
        parentName: user.parentName,
        parentEmail: user.parentEmail,
        preferredLanguage: user.preferredLanguage,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error during registration.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password.' });
    }

    // Demo student fallback bypass for quick hackathon review
    if (email === 'demo.student@vidyora.ai' && password === 'vidyora123') {
      let demoUser = await User.findOne({ email });
      if (!demoUser) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash('vidyora123', salt);
        demoUser = new User({
          name: 'Omm Pritam (Demo Student)',
          email: 'demo.student@vidyora.ai',
          password: hashedPassword,
          classLevel: 'Class 8',
          schoolName: 'Govt. High School, Balasore',
          parentName: 'Ramesh Jena',
          parentEmail: 'ramesh.jena.parent@example.com',
          preferredLanguage: 'or',
        });
        await demoUser.save();

        const progress = new LearningProgress({
          user: demoUser._id,
          streakDays: 4,
          activeMinutes: 145,
          averageScore: 78,
          totalQuizzesTaken: 5,
        });
        await progress.save();
      }

      const token = signToken(demoUser);
      return res.json({
        message: 'Logged in as Demo Student',
        token,
        user: {
          _id: demoUser._id,
          name: demoUser.name,
          email: demoUser.email,
          classLevel: demoUser.classLevel,
          schoolName: demoUser.schoolName,
          parentName: demoUser.parentName,
          parentEmail: demoUser.parentEmail,
          preferredLanguage: demoUser.preferredLanguage,
          role: demoUser.role,
        },
      });
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    // Send login notification to parent/student via vidyorai@gmail.com
    emailService.sendLoginNotificationEmail({
      studentName: user.name,
      studentEmail: user.email,
      parentEmail: user.parentEmail,
    }).catch((err) => console.warn('Background login notification error:', err.message));

    const token = signToken(user);
    res.json({
      message: 'Login successful',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        classLevel: user.classLevel,
        schoolName: user.schoolName,
        parentName: user.parentName,
        parentEmail: user.parentEmail,
        preferredLanguage: user.preferredLanguage,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
};

exports.getMe = async (req, res) => {
  res.json({ user: req.user });
};

exports.updateProfile = async (req, res) => {
  try {
    const { name, classLevel, schoolName, parentName, parentEmail, preferredLanguage } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (name) user.name = name;
    if (classLevel) user.classLevel = classLevel;
    if (schoolName) user.schoolName = schoolName;
    if (parentName) user.parentName = parentName;
    if (parentEmail) user.parentEmail = parentEmail;
    if (preferredLanguage) user.preferredLanguage = preferredLanguage;

    await user.save();
    res.json({ message: 'Profile updated successfully', user });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update profile' });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !email.trim()) {
      return res.status(400).json({ message: 'Email address is required.' });
    }

    const cleanEmail = email.toLowerCase().trim();
    const user = await User.findOne({ email: cleanEmail });
    if (!user) {
      return res.status(404).json({ message: 'No registered student account found with this email.' });
    }

    // Generate secure 6-digit numeric verification code
    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    user.resetPasswordCode = resetCode;
    user.resetPasswordExpires = expiresAt;
    await user.save();

    // Dispatch official email asynchronously
    emailService.sendPasswordResetCode({
      email: user.email,
      code: resetCode,
      userName: user.name,
    }).catch((err) => console.warn('[AuthController] Background reset email dispatch notice:', err.message));

    return res.json({
      success: true,
      message: `A 6-digit verification code has been sent to ${cleanEmail}. Please check your inbox.`,
      email: cleanEmail,
      devCodeHint: process.env.NODE_ENV !== 'production' ? resetCode : undefined,
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return res.status(500).json({ message: 'Failed to process password reset request.' });
  }
};

exports.verifyResetCode = async (req, res) => {
  try {
    const { email, code } = req.body;
    if (!email || !code) {
      return res.status(400).json({ message: 'Email and verification code are required.' });
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanCode = code.toString().trim();

    const user = await User.findOne({
      email: cleanEmail,
      resetPasswordCode: cleanCode,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired verification code. Please request a new code.' });
    }

    return res.json({
      success: true,
      message: 'Code verified successfully. You may now enter your new password.',
    });
  } catch (error) {
    console.error('Verify reset code error:', error);
    return res.status(500).json({ message: 'Failed to verify reset code.' });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;
    if (!email || !code || !newPassword) {
      return res.status(400).json({ message: 'Email, verification code, and new password are required.' });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
    }

    const cleanEmail = email.toLowerCase().trim();
    const cleanCode = code.toString().trim();

    const user = await User.findOne({
      email: cleanEmail,
      resetPasswordCode: cleanCode,
      resetPasswordExpires: { $gt: new Date() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid or expired verification code. Please request a new code.' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    user.resetPasswordCode = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    // Auto-login: Sign JWT token and return user session so user immediately accesses their account!
    const token = signToken(user);

    return res.json({
      success: true,
      message: 'Password reset successful! You are now logged into Vidyora AI.',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        classLevel: user.classLevel,
        schoolName: user.schoolName,
        parentName: user.parentName,
        parentEmail: user.parentEmail,
        preferredLanguage: user.preferredLanguage,
        role: user.role,
      },
    });
  } catch (error) {
    console.error('Reset password error:', error);
    return res.status(500).json({ message: 'Failed to reset password.' });
  }
};
