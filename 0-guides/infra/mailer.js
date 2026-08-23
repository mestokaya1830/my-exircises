import nodeMailer from 'nodemailer'

const transporter = nodeMailer.createTransport({
  host: "smtp-mail.outlook.com",
  auth: {
    user:'mesto1830@outlook.com',
    pass: 'MK1972mk11130113'
  }
})


export default transporter


//in workers or in controller
await transporter.sendMail({
    from: `"Repair Shop" <${process.env.SMTP_FROM}>`,
    to: customerEmail,
    subject: 'Your device is ready for pickup!',
    html: `
      <p>Hi ${customerName},</p>
      <p>Good news — your device (Repair #${repairId}) is ready for pickup.</p>
      <p>Please visit us at your convenience to collect it.</p>
    `,
  });
