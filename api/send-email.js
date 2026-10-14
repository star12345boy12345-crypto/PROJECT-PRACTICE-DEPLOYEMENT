import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Set CORS headers so both local and remote callers can access
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { to, subject, html, text } = req.body;

  if (!to || !subject) {
    return res.status(400).json({ message: 'Recipient (to) and subject are required.' });
  }

  const user = (process.env.EMAIL_USER || '').trim();
  const rawPass = process.env.EMAIL_PASS || '';
  const pass = rawPass.replace(/\s+/g, '');

  if (!user || !pass) {
    return res.status(500).json({
      success: false,
      message: 'EMAIL_USER and EMAIL_PASS are not configured in Vercel Environment Variables.'
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass
      }
    });

    const info = await transporter.sendMail({
      from: `"Vidyora AI — Education For All" <${user}>`,
      to,
      subject,
      html: html || `<p>${text || subject}</p>`
    });

    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      dispatchedBy: 'Vidyora Vercel Email Serverless Bridge'
    });
  } catch (error) {
    console.error('Vercel Email Error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
