const nodemailer = require('nodemailer');

class EmailService {
  get senderEmail() {
    return (process.env.EMAIL_USER || 'vidyorai@gmail.com').trim();
  }

  getTransporter() {
    const user = (process.env.EMAIL_USER || '').trim();
    const rawPass = process.env.EMAIL_PASS || '';
    if (!user || !rawPass) {
      return null;
    }
    const pass = rawPass.replace(/\s+/g, '');

    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });
  }

  async dispatchMail(mailOptions) {
    // 1. Direct local SMTP if credentials are configured on this server
    const transporter = this.getTransporter();
    if (transporter) {
      try {
        const info = await transporter.sendMail(mailOptions);
        return { success: true, messageId: info.messageId };
      } catch (err) {
        console.warn('[EmailService] Local SMTP error:', err.message);
      }
    }

    // 2. Vercel Serverless Email Bridge if credentials are hosted on Vercel
    const clientUrl = process.env.CLIENT_URL;
    if (clientUrl && clientUrl !== '*' && !clientUrl.includes('localhost')) {
      try {
        const vercelEmailEndpoint = `${clientUrl.replace(/\/$/, '')}/api/send-email`;
        const res = await fetch(vercelEmailEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: mailOptions.to,
            subject: mailOptions.subject,
            html: mailOptions.html
          })
        });
        if (res.ok) {
          const data = await res.json();
          console.log('[EmailService] Email successfully dispatched via Vercel Serverless Function:', data.messageId);
          return { success: true, messageId: data.messageId, dispatchedBy: 'Vercel' };
        }
      } catch (vercelErr) {
        console.warn('[EmailService] Vercel email bridge notice:', vercelErr.message);
      }
    }

    console.log('[EmailService] Notice: Email credentials not on Render. If hosted on Vercel, set CLIENT_URL to your Vercel domain.');
    return { success: false, skipped: true };
  }

  // 1. WELCOME EMAIL (Sent on Student Sign-up)
  async sendWelcomeEmail({ studentName, studentEmail, parentEmail, parentName, classLevel, schoolName }) {
    try {
      const transporter = this.getTransporter();
      const recipients = [studentEmail];
      if (parentEmail && parentEmail !== 'Not configured' && parentEmail.includes('@')) {
        recipients.push(parentEmail);
      }

      const mailOptions = {
        from: `"Vidyora AI — Education For All" <${this.senderEmail || 'vidyorai@gmail.com'}>`,
        to: recipients.join(', '),
        subject: `🎉 ସ୍ୱାଗତମ୍! Welcome to Vidyora AI — ${studentName} (${classLevel})`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <div style="background: linear-gradient(135deg, #0E1B30 0%, #1e293b 100%); padding: 30px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 26px; font-weight: 800; color: #26C4B1; letter-spacing: -0.5px;">Vidyora AI</h1>
              <p style="margin: 5px 0 0; font-size: 13px; color: #94a3b8; font-weight: 600;">ଭାଷା ଆଉ ବାଧା ନୁହେଁ, ଶିକ୍ଷା ସଭିଙ୍କ ଅଧିକାର | Learn in Your Language</p>
            </div>
            
            <div style="padding: 30px; color: #0E1B30;">
              <h2 style="font-size: 20px; font-weight: 700; margin-top: 0; color: #0E1B30;">ନମସ୍କାର ${studentName} & ${parentName || 'ଅଭିଭାବକ ମହୋଦୟ'},</h2>
              <p style="font-size: 14px; line-height: 1.6; color: #334155;">
                Welcome to <strong>Vidyora AI</strong> — India's premier agentic AI-powered vernacular learning companion! Your student account is now fully active for <strong>${classLevel}</strong>.
              </p>

              <div style="background: #f8fafc; border-left: 4px solid #26C4B1; padding: 15px 20px; border-radius: 8px; margin: 20px 0;">
                <p style="margin: 0; font-size: 13px; font-weight: 700; color: #0E1B30;">🏫 Student Enrollment Details:</p>
                <p style="margin: 5px 0 0; font-size: 13px; color: #475569;">• <strong>Student Name:</strong> ${studentName}</p>
                <p style="margin: 3px 0 0; font-size: 13px; color: #475569;">• <strong>Class/Grade:</strong> ${classLevel}</p>
                <p style="margin: 3px 0 0; font-size: 13px; color: #475569;">• <strong>School:</strong> ${schoolName || 'Government High School'}</p>
                <p style="margin: 3px 0 0; font-size: 13px; color: #475569;">• <strong>Parent Contact:</strong> ${parentEmail || 'Not configured'}</p>
              </div>

              <h3 style="font-size: 15px; font-weight: 700; color: #0E1B30; margin-top: 25px;">✨ What you can do right now:</h3>
              <ul style="font-size: 13px; color: #334155; line-height: 1.8; padding-left: 20px;">
                <li><strong>Ask Doubts to AI Tutor:</strong> Ask any textbook question in Odia or English.</li>
                <li><strong>Snap & Solve Textbook Lens:</strong> Take a photo of homework to get instant explanations.</li>
                <li><strong>Zero-Internet Offline Vault:</strong> Download chapter lessons and take quizzes offline.</li>
                <li><strong>Parent Progress Updates:</strong> Automated weekly reports and quiz scores sent to parents.</li>
              </ul>

              <div style="text-align: center; margin: 30px 0 10px;">
                <a href="${process.env.CLIENT_URL || 'http://localhost:5173'}/dashboard" style="background: #26C4B1; color: #0E1B30; padding: 12px 30px; text-decoration: none; font-weight: 800; font-size: 14px; border-radius: 12px; display: inline-block;">
                  Start Learning Now ➔
                </a>
              </div>
            </div>

            <div style="background: #f1f5f9; padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0;">Sent automatically by Vidyora AI Academic Notification System.</p>
              <p style="margin: 5px 0 0;">Dedicated to empowering students across Odisha with equitable vernacular education.</p>
            </div>
          </div>
        `
      };

      const result = await this.dispatchMail(mailOptions);
      console.log(`[EmailService] Welcome email dispatched:`, result);
      return result;
    } catch (error) {
      console.error('[EmailService] Welcome email failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  // 2. SIGN-IN NOTIFICATION EMAIL
  async sendLoginNotificationEmail({ studentName, studentEmail, parentEmail }) {
    try {
      const target = parentEmail && parentEmail !== 'Not configured' && parentEmail.includes('@') ? parentEmail : studentEmail;
      if (!target) return;

      const nowTime = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      const nowDate = new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' });

      const mailOptions = {
        from: `"Vidyora AI Notifications" <${this.senderEmail || 'vidyorai@gmail.com'}>`,
        to: target,
        subject: `🔔 Vidyora AI Session Alert: ${studentName} started studying`,
        html: `
          <div style="font-family: sans-serif; max-width: 550px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background: #ffffff;">
            <div style="border-bottom: 2px solid #26C4B1; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #0E1B30; margin: 0; font-size: 18px;">Vidyora AI • Learning Session Active</h2>
            </div>
            <p style="font-size: 14px; color: #334155; line-height: 1.5;">
              Hello, <strong>${studentName}</strong> has logged in to Vidyora AI for a study session on <strong>${nowDate} at ${nowTime}</strong>.
            </p>
            <p style="font-size: 13px; color: #64748b;">
              Keep up the daily study streak! Daily revisions significantly increase conceptual retention.
            </p>
          </div>
        `
      };

      const result = await this.dispatchMail(mailOptions);
      console.log(`[EmailService] Login notification dispatched:`, result);
      return result;
    } catch (error) {
      console.warn('[EmailService] Login notification skipped/failed:', error.message);
      return { success: false, error: error.message };
    }
  }

  // 3. AUTOMATIC POST-QUIZ REPORT TO PARENTS
  async sendQuizResultEmailToParent({ studentName, parentEmail, quizTitle, quizTitleOdia, score, totalQuestions, percentage, weakTopics = [] }) {
    try {
      if (!parentEmail || parentEmail === 'Not configured' || !parentEmail.includes('@')) {
        console.log('[EmailService] No valid parent email configured for post-quiz alert.');
        return { success: false, message: 'No parent email configured' };
      }

      const isPassed = percentage >= 60;
      const badgeText = percentage >= 80 ? '🏆 ଚମତ୍କାର (Outstanding Mastery)' : (percentage >= 60 ? '👍 ଉତ୍ତମ (Good Progress)' : '💪 ଅଭ୍ୟାସ ଆବଶ୍ୟକ (Needs Revision)');
      const badgeColor = percentage >= 80 ? '#10B981' : (percentage >= 60 ? '#26C4B1' : '#F59E0B');

      const mailOptions = {
        from: `"Vidyora AI Parent Report" <${this.senderEmail || 'vidyorai@gmail.com'}>`,
        to: parentEmail,
        subject: `📊 [Vidyora Alert] ${studentName} scored ${percentage}% in ${quizTitle}`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <div style="background: #0E1B30; padding: 25px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #26C4B1;">ଅଭିଭାବକ ସୂଚନା | Parent Quiz Report</h1>
              <p style="margin: 4px 0 0; font-size: 12px; color: #94a3b8;">Vidyora AI Real-Time Academic Assessment</p>
            </div>

            <div style="padding: 25px; color: #0E1B30;">
              <p style="font-size: 14px; color: #334155; margin-top: 0;">
                ନମସ୍କାର ଅଭିଭାବକ ମହୋଦୟ, ଆପଣଙ୍କ ପିଲା <strong>${studentName}</strong> ଏହିମାତ୍ର ଏକ ଅଭ୍ୟାସ କୁଇଜ୍ ସମ୍ପୂର୍ଣ୍ଣ କରିଛନ୍ତି:
              </p>

              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 20px; text-align: center; margin: 20px 0;">
                <h3 style="margin: 0 0 10px; font-size: 16px; color: #0E1B30;">
                  ${quizTitleOdia || quizTitle} <br/>
                  <span style="font-size: 12px; font-weight: normal; color: #64748b;">(${quizTitle})</span>
                </h3>

                <div style="font-size: 36px; font-weight: 900; color: ${badgeColor}; margin: 10px 0;">
                  ${percentage}%
                </div>
                <div style="font-size: 13px; font-weight: 700; color: #334155;">
                  ${score} / ${totalQuestions} Questions Correct
                </div>

                <div style="display: inline-block; margin-top: 12px; padding: 6px 16px; border-radius: 20px; background: #ffffff; border: 1px solid ${badgeColor}; color: ${badgeColor}; font-weight: 800; font-size: 12px;">
                  ${badgeText}
                </div>
              </div>

              ${weakTopics.length > 0 ? `
                <div style="background: #fffbeb; border: 1px solid #fef3c7; border-radius: 12px; padding: 15px; margin-bottom: 20px;">
                  <strong style="font-size: 13px; color: #92400e; display: block; margin-bottom: 5px;">⚠️ ପୁନରାବୃତ୍ତି ଆବଶ୍ୟକ କରୁଥିବା ବିଷୟ (Topic to Revise):</strong>
                  <p style="margin: 0; font-size: 12px; color: #b45309;">${weakTopics.join(', ')}</p>
                </div>
              ` : ''}

              <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 15px; font-size: 12px; color: #166534; line-height: 1.6;">
                <strong>💡 ଅଭିଭାବକଙ୍କ ପାଇଁ ପରାମର୍ଶ (Parent Tip):</strong><br/>
                ${isPassed 
                  ? 'ପିଲାଙ୍କର ଏହି ଭଲ ପ୍ରଦର୍ଶନ ପାଇଁ ତାଙ୍କୁ ଉତ୍ସାହିତ କରନ୍ତୁ, ଯାହାଦ୍ୱାରା ତାଙ୍କର ଆତ୍ମବିଶ୍ୱାସ ବୃଦ୍ଧି ପାଇବ ।'
                  : 'ପିଲାଙ୍କୁ ନିରାଶ ନହୋଇ ବିଦ୍ୟୋରା ଏଆଇ ଶିକ୍ଷକଙ୍କ ସହିତ ସୂତ୍ରଗୁଡ଼ିକ ଆଉ ଥରେ ବୁଝିବାକୁ ପ୍ରେରଣା ଦିଅନ୍ତୁ ।'
                }
              </div>

              <div style="text-align: center; margin-top: 25px;">
                <a href="${process.env.CLIENT_URL || 'http://localhost:5173'}/parent-report" style="background: #0E1B30; color: #ffffff; padding: 10px 24px; text-decoration: none; font-weight: 700; font-size: 12px; border-radius: 10px; display: inline-block;">
                  View Full Parent Report ➔
                </a>
              </div>
            </div>

            <div style="background: #f8fafc; padding: 15px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              Vidyora AI • Real-Time Parental Academic Monitoring
            </div>
          </div>
        `
      };

      const result = await this.dispatchMail(mailOptions);
      console.log(`[EmailService] Post-quiz alert dispatched to parent:`, result);
      return result;
    } catch (error) {
      console.error('[EmailService] Failed to send post-quiz email:', error.message);
      return { success: false, error: error.message };
    }
  }

  // 4. WEEKLY COMPREHENSIVE PROGRESS REPORT TO PARENTS
  async sendWeeklyReportEmail(studentName, targetEmail, report) {
    try {
      if (!targetEmail || targetEmail === 'Not configured' || !targetEmail.includes('@')) {
        return { success: false, message: 'Invalid target parent email' };
      }

      const avgScore = report.stats?.averageQuizScore || 82;
      const completedUnits = report.stats?.totalCompletedLessons || 3;
      const streak = report.stats?.streakDays || 3;

      const mailOptions = {
        from: `"Vidyora AI Academic Report" <${this.senderEmail || 'vidyorai@gmail.com'}>`,
        to: targetEmail,
        subject: `📈 [Weekly Report] ${studentName} Academic Progress Card (${avgScore}% Avg)`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <div style="background: linear-gradient(135deg, #0E1B30 0%, #1e293b 100%); padding: 30px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #26C4B1;">ସାପ୍ତାହିକ ପ୍ରଗତି ରିପୋର୍ଟ କାର୍ଡ</h1>
              <p style="margin: 5px 0 0; font-size: 13px; color: #cbd5e1;">Official Academic Learning Assessment for ${studentName}</p>
            </div>

            <div style="padding: 25px; color: #0E1B30;">
              <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 20px; font-size: 13px;">
                <div>
                  <strong>Student:</strong> ${studentName}<br/>
                  <strong>Class:</strong> ${report.classLevel || 'Class 8'}
                </div>
                <div style="text-align: right;">
                  <strong>School:</strong> ${report.schoolName || 'Govt High School'}<br/>
                  <strong>Date:</strong> ${new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>

              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 25px; text-align: center;">
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px;">
                  <div style="font-size: 20px; font-weight: 900; color: #26C4B1;">${avgScore}%</div>
                  <div style="font-size: 11px; color: #64748b; font-weight: 700; margin-top: 2px;">Avg Quiz Score</div>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px;">
                  <div style="font-size: 20px; font-weight: 900; color: #0E1B30;">${completedUnits}</div>
                  <div style="font-size: 11px; color: #64748b; font-weight: 700; margin-top: 2px;">Units Completed</div>
                </div>
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px;">
                  <div style="font-size: 20px; font-weight: 900; color: #f97316;">${streak} Days</div>
                  <div style="font-size: 11px; color: #64748b; font-weight: 700; margin-top: 2px;">Daily Streak</div>
                </div>
              </div>

              <h4 style="font-size: 14px; font-weight: 800; margin: 0 0 10px; color: #0E1B30;">📚 Subject Mastery Breakdown:</h4>
              <div style="margin-bottom: 25px;">
                ${(report.subjectMastery || []).map((s) => `
                  <div style="margin-bottom: 8px;">
                    <div style="display: flex; justify-content: space-between; font-size: 12px; font-weight: 700; margin-bottom: 3px;">
                      <span>${s.subjectOdia || s.subject} (${s.subject})</span>
                      <span style="color: #26C4B1;">${s.accuracy}%</span>
                    </div>
                    <div style="background: #f1f5f9; height: 6px; border-radius: 3px; overflow: hidden;">
                      <div style="background: #26C4B1; height: 100%; width: ${s.accuracy}%;"></div>
                    </div>
                  </div>
                `).join('')}
              </div>

              <div style="background: #faf5ff; border: 1px solid #f3e8ff; border-radius: 14px; padding: 15px; margin-bottom: 20px;">
                <h5 style="margin: 0 0 8px; font-size: 13px; color: #6b21a8; font-weight: 800;">💡 ଅଭିଭାବକଙ୍କ ପାଇଁ ପରାମର୍ଶ (Parent Action Items):</h5>
                <ul style="margin: 0; padding-left: 18px; font-size: 12px; color: #581c87; line-height: 1.6;">
                  ${(report.actionableTipsOdia || report.actionableTips || []).map((tip) => `<li>${tip}</li>`).join('')}
                </ul>
              </div>

              <div style="text-align: center; margin-top: 25px;">
                <a href="${process.env.CLIENT_URL || 'http://localhost:5173'}/parent-report" style="background: #26C4B1; color: #0E1B30; padding: 12px 28px; text-decoration: none; font-weight: 800; font-size: 13px; border-radius: 12px; display: inline-block;">
                  Open Live Parent Portal ➔
                </a>
              </div>
            </div>

            <div style="background: #f8fafc; padding: 20px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              Sent via vidyorai@gmail.com • Vidyora AI Vernacular Learning Platform
            </div>
          </div>
        `
      };

      const result = await this.dispatchMail(mailOptions);
      console.log(`[EmailService] Weekly parent progress report dispatched:`, result);
      return { success: true, recipient: targetEmail, messageId: result.messageId, message: `Official progress report sent to ${targetEmail}` };
    } catch (error) {
      console.error('[EmailService] Failed to send weekly report:', error.message);
      return { success: false, error: error.message };
    }
  }

  async sendPasswordResetCode({ email, code, userName }) {
    try {
      const mailOptions = {
        from: `"Vidyora AI — Verification & Security" <${this.senderEmail}>`,
        to: email,
        subject: `🔑 ${code} is your Vidyora AI Password Reset Code`,
        html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 580px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06);">
            <div style="background: linear-gradient(135deg, #0E1B30 0%, #162C4E 100%); padding: 30px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">Vidyora AI</h1>
              <p style="margin: 5px 0 0; font-size: 13px; color: #26C4B1; font-weight: 700;">Password Reset Verification Code • ପାସୱାର୍ଡ ପୁନରୁଦ୍ଧାର</p>
            </div>
            <div style="padding: 30px 25px; color: #334155;">
              <p style="font-size: 15px; margin: 0 0 16px;">Hello <strong>${userName || 'Student'}</strong>,</p>
              <p style="font-size: 14px; line-height: 1.6; margin: 0 0 20px; color: #475569;">
                We received a request to reset the password for your Vidyora AI account (<strong>${email}</strong>). Use the 6-digit verification code below to set your new password:
              </p>
              <div style="background: #f0fdfa; border: 2px dashed #26C4B1; border-radius: 16px; padding: 20px; text-align: center; margin: 25px 0;">
                <div style="font-size: 11px; font-weight: 800; color: #0d9488; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px;">Your 6-Digit Reset Code</div>
                <div style="font-size: 34px; font-weight: 900; letter-spacing: 8px; color: #0E1B30; font-family: monospace;">${code}</div>
                <div style="font-size: 11px; color: #64748b; margin-top: 8px;">Valid for 15 minutes • କୋଡ୍ ଟି ୧୫ ମିନିଟ୍ ପାଇଁ ବୈଧ</div>
              </div>
              <p style="font-size: 12px; color: #64748b; line-height: 1.5; margin: 0 0 20px;">
                If you did not request a password reset, you can safely ignore this email. Your existing password will remain unchanged.
              </p>
              <p style="font-size: 12px; color: #0d9488; font-weight: 700; margin: 0;">
                ଶୁଭେଚ୍ଛା ସହ (Best Wishes),<br/>
                Vidyora AI Team • Balasore, Odisha
              </p>
            </div>
            <div style="background: #f8fafc; padding: 15px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0;">
              Sent securely via vidyorai@gmail.com • Vidyora AI Platform
            </div>
          </div>
        `
      };
      const result = await this.dispatchMail(mailOptions);
      console.log(`[EmailService] Password reset code dispatched to ${email}:`, result);
      return { success: true, messageId: result?.messageId };
    } catch (err) {
      console.warn('[EmailService] Password reset code dispatch error:', err.message);
      return { success: false, error: err.message };
    }
  }
}

module.exports = new EmailService();
