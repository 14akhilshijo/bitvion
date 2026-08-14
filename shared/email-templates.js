const esc = (value) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const row = (label, value) => `
  <tr>
    <td style="padding:8px 0;color:#8aa0b5;font-size:13px;width:180px;vertical-align:top;">${esc(label)}</td>
    <td style="padding:8px 0;color:#ffffff;font-size:14px;vertical-align:top;">${esc(value || '—')}</td>
  </tr>`

export const buildRecruitmentEmailHtml = ({ applicationId, data, submittedAt }) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#00040f;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#00040f;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;background:#030912;border:1px solid rgba(92,225,230,0.18);border-radius:16px;overflow:hidden;">
        <tr><td style="padding:28px 32px;background:linear-gradient(135deg,#00131f,#030912);border-bottom:1px solid rgba(92,225,230,0.15);">
          <div style="font-size:12px;letter-spacing:0.28em;color:#5ce1e6;text-transform:uppercase;">Bitvion Technologies</div>
          <div style="font-size:28px;font-weight:700;color:#ffffff;margin-top:8px;">BITVION<br>TECHNOLOGIES</div>
          <div style="font-size:14px;color:#9db0c3;margin-top:10px;">Engineering intelligent technology for a connected future.</div>
        </td></tr>
        <tr><td style="padding:32px;">
          <div style="font-size:12px;letter-spacing:0.22em;color:#5ce1e6;text-transform:uppercase;margin-bottom:8px;">New Job Application</div>
          <h1 style="margin:0 0 20px;font-size:24px;color:#ffffff;">Application Received</h1>
          <div style="padding:14px 16px;border-radius:10px;background:rgba(92,225,230,0.08);border:1px solid rgba(92,225,230,0.18);margin-bottom:24px;">
            <div style="font-size:12px;color:#8aa0b5;text-transform:uppercase;letter-spacing:0.14em;">Application ID</div>
            <div style="font-size:18px;color:#5ce1e6;font-weight:700;margin-top:4px;">${esc(applicationId)}</div>
          </div>
          <h2 style="font-size:14px;color:#5ce1e6;letter-spacing:0.16em;text-transform:uppercase;margin:24px 0 12px;">Candidate Information</h2>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            ${row('Name', data.name)}
            ${row('Age', data.age)}
            ${row('Gender', data.gender)}
            ${row('Email', data.email)}
            ${row('Phone', data.phone)}
            ${row('Current Location', data.currentLocation)}
          </table>
          <h2 style="font-size:14px;color:#5ce1e6;letter-spacing:0.16em;text-transform:uppercase;margin:24px 0 12px;">Application</h2>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            ${row('Position', data.position)}
            ${row('Employment', data.employmentType)}
            ${row('Preferred Location', data.preferredLocation)}
          </table>
          <h2 style="font-size:14px;color:#5ce1e6;letter-spacing:0.16em;text-transform:uppercase;margin:24px 0 12px;">Education</h2>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            ${row('Qualification', data.qualification)}
            ${row('College', data.college)}
            ${row('Graduation', data.graduationYear)}
          </table>
          <h2 style="font-size:14px;color:#5ce1e6;letter-spacing:0.16em;text-transform:uppercase;margin:24px 0 12px;">Professional</h2>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            ${row('Experience', data.experience)}
            ${row('Current / Previous Role', data.currentRole)}
            ${row('Skills', data.skills)}
            ${row('Notice Period', data.noticePeriod)}
          </table>
          <h2 style="font-size:14px;color:#5ce1e6;letter-spacing:0.16em;text-transform:uppercase;margin:24px 0 12px;">Links</h2>
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
            ${row('LinkedIn', data.linkedin)}
            ${row('GitHub', data.github)}
            ${row('Portfolio', data.portfolio)}
          </table>
          <h2 style="font-size:14px;color:#5ce1e6;letter-spacing:0.16em;text-transform:uppercase;margin:24px 0 12px;">Candidate Message</h2>
          <div style="padding:16px;border-radius:10px;background:#00040f;border:1px solid rgba(255,255,255,0.08);color:#d7e2ee;font-size:14px;line-height:1.6;white-space:pre-wrap;">${esc(data.message || '—')}</div>
          <p style="margin:24px 0 0;color:#8aa0b5;font-size:13px;">Submitted: ${esc(submittedAt)}</p>
        </td></tr>
        <tr><td style="padding:24px 32px;border-top:1px solid rgba(255,255,255,0.08);background:#00040f;">
          <div style="font-size:12px;letter-spacing:0.18em;color:#ffffff;text-transform:uppercase;">Bitvion Technologies</div>
          <div style="font-size:13px;color:#8aa0b5;margin-top:8px;line-height:1.6;">Engineering intelligent software, AI solutions and digital products.<br>info@bitvion.in · https://bitvion.in</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

export const buildCandidateEmailHtml = ({ applicationId, data }) => `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#00040f;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#00040f;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="640" cellspacing="0" cellpadding="0" style="max-width:640px;background:#030912;border:1px solid rgba(92,225,230,0.18);border-radius:16px;overflow:hidden;">
        <tr><td style="padding:28px 32px;background:linear-gradient(135deg,#00131f,#030912);border-bottom:1px solid rgba(92,225,230,0.15);">
          <div style="font-size:12px;letter-spacing:0.28em;color:#5ce1e6;text-transform:uppercase;">Bitvion Technologies</div>
          <div style="font-size:28px;font-weight:700;color:#ffffff;margin-top:8px;">APPLICATION RECEIVED</div>
        </td></tr>
        <tr><td style="padding:32px;color:#d7e2ee;font-size:15px;line-height:1.7;">
          <p style="margin:0 0 16px;color:#ffffff;">Hello ${esc(data.name)},</p>
          <p style="margin:0 0 16px;">Thank you for applying to Bitvion Technologies.</p>
          <p style="margin:0 0 16px;">We have successfully received your application for:</p>
          <p style="margin:0 0 20px;color:#5ce1e6;font-weight:700;">${esc(data.position)}</p>
          <div style="padding:14px 16px;border-radius:10px;background:rgba(92,225,230,0.08);border:1px solid rgba(92,225,230,0.18);margin-bottom:24px;">
            <div style="font-size:12px;color:#8aa0b5;text-transform:uppercase;letter-spacing:0.14em;">Application Reference</div>
            <div style="font-size:18px;color:#5ce1e6;font-weight:700;margin-top:4px;">${esc(applicationId)}</div>
          </div>
          <p style="margin:0 0 16px;">Your application and CV have been received successfully. Our team will review the information submitted.</p>
          <p style="margin:0;">Regards,<br><strong style="color:#ffffff;">Bitvion Technologies</strong><br>info@bitvion.in<br>https://bitvion.in</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

export const buildRecruitmentEmailText = ({ applicationId, data, submittedAt }) =>
  [
    'NEW JOB APPLICATION',
    `Application ID: ${applicationId}`,
    '',
    `Name: ${data.name}`,
    `Age: ${data.age}`,
    `Gender: ${data.gender}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Current Location: ${data.currentLocation}`,
    '',
    `Position: ${data.position}`,
    `Employment: ${data.employmentType}`,
    `Preferred Location: ${data.preferredLocation}`,
    '',
    `Qualification: ${data.qualification}`,
    `College: ${data.college}`,
    `Graduation: ${data.graduationYear}`,
    '',
    `Experience: ${data.experience}`,
    `Current Role: ${data.currentRole}`,
    `Skills: ${data.skills}`,
    `Notice Period: ${data.noticePeriod}`,
    '',
    `LinkedIn: ${data.linkedin}`,
    `GitHub: ${data.github}`,
    `Portfolio: ${data.portfolio}`,
    '',
    `Message: ${data.message}`,
    '',
    `Submitted: ${submittedAt}`,
  ].join('\n')
