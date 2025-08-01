const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });


// Debug .env
console.log("EMAIL_USER:", process.env.EMAIL_USER || "undefined");
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "[HIDDEN]" : "undefined");
console.log("PORT:", process.env.PORT || 5000);

// Fallback credentials (remove in production)
const EMAIL_USER = process.env.EMAIL_USER || "olateju202@gmail.com";
const EMAIL_PASS = process.env.EMAIL_PASS || "awfi cywb fldo qlsy";

const app = express();
const port = process.env.PORT || 5000;

// Validate credentials
if (!EMAIL_USER || !EMAIL_PASS) {
  console.error("Error: EMAIL_USER or EMAIL_PASS not set");
  process.exit(1);
}

// Middleware
app.use(cors({
  origin: ["http://localhost:5173"], // Update for deployed frontend
  methods: ["POST"],
  credentials: true,
}));
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.status(200).json({ message: "MamaHub API is running!" });
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate request
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields: name, email, message" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    debug: true, // Log SMTP traffic
    logger: true,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${EMAIL_USER}>`,
    to: EMAIL_USER,
    replyTo: email,
    subject: `MamaHub Contact Form - From ${name}`,
    html: `
      <h3>New Contact Message</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email sending failed:", error.message, error.stack);
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});