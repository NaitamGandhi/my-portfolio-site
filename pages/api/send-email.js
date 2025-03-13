// pages/api/send-email.js
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validation for required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields: name, email, or message" });
    }

    // Validation for email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    try {
      await sendgrid.send({
        to: process.env.EMAIL_RECEIVER,      // Your email to receive the message
        from: process.env.EMAIL_SENDER,      // Verified sender email in SendGrid
        replyTo: email,                      // User’s email from the form submission
        subject: `New Contact Form Naitam's portfolio website from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
      });
      return res.status(200).json({ success: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:",  error.response?.body || error);
      return res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
