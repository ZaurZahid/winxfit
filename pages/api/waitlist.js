import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      errors: { general: "Method not allowed" },
    });
  }

  const { fullname, email } = req.body;
  let errors = {};

  // Validation
  if (!fullname) errors.fullname = "Full name is required";
  if (!email) errors.email = "Email is required";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Waitlist Signup" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: "New Waitlist Signup",
      html: `
        <h2>New Waitlist User</h2>
        <p><strong>Name:</strong> ${fullname}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
      replyTo: email,
    });

    return res.status(200).json({
      successMessage: "You have been added to the waitlist!",
    });
  } catch (error) {
    console.error("Email error:", error);
    return res.status(500).json({
      errors: { general: "Failed to submit. Try again later." },
    });
  }
}
