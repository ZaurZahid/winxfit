import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      errors: { general: "Method not allowed" },
    });
  }

  const { fullname, email, message } = req.body;

  let errors = {};

  // Form validation
  if (!fullname) errors.fullname = "Full name is required";
  if (!email) errors.email = "Email is required";
  if (!message) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    // SMTP Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Sending email
    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "New Contact Form Message",
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({
      successMessage: "Your message has been successfully sent!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      errors: { general: "Failed to send email. Please try again later." },
    });
  }
}
