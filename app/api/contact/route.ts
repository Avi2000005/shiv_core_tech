import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, service, message } = body;

    // Validate required fields
    if (!fullName || !email || !service || !message) {
      return NextResponse.json(
        { error: "Required fields (FullName, Email, Service, Message) are missing." },
        { status: 400 }
      );
    }

    // SMTP Configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser || "no-reply@shivcoretech.com";

    // Handle missing SMTP credentials gracefully by logging to console
    if (!smtpUser || !smtpPass || !smtpHost) {
      console.warn("--------------------------------------------------");
      console.warn("⚠️ SMTP Credentials are not fully configured in environment variables.");
      console.warn("Logging Contact Inquiry Form Submission details:");
      console.warn(`Full Name:    ${fullName}`);
      console.warn(`Email:        ${email}`);
      console.warn(`Phone:        ${phone || "None"}`);
      console.warn(`Service:      ${service}`);
      console.warn(`Message:      ${message}`);
      console.warn("--------------------------------------------------");

      return NextResponse.json({
        success: true,
        message: "Inquiry simulated successfully (SMTP credentials missing; logged to server console).",
        simulated: true,
      });
    }

    // Configure Nodemailer SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort || "587"),
      secure: smtpPort === "465", // Use SSL for port 465, else STARTTLS
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Build email templates
    const mailOptions = {
      from: `Shiv Core Tech Contact <${smtpFrom}>`,
      to: "info@shivcoretech.com",
      subject: `New Contact Inquiry: ${service} - ${fullName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; background-color: #0b0f19; border: 1px solid #1e293b; border-radius: 12px; color: #f8fafc;">
          
          <div style="text-align: center; margin-bottom: 25px; border-bottom: 1px solid #1e293b; padding-bottom: 20px;">
            <h1 style="color: #00c0ff; font-size: 24px; margin: 0; font-weight: 700; letter-spacing: 0.5px;">SHIV CORE TECH</h1>
            <p style="color: #94a3b8; font-size: 14px; margin: 5px 0 0 0;">New Inquiry Form Submission</p>
          </div>

          <div style="margin-bottom: 25px;">
            <h2 style="color: #f8fafc; font-size: 18px; font-weight: 600; margin-bottom: 15px;">Inquiry Details</h2>
            
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #1e293b;">
                <td style="padding: 10px 0; color: #94a3b8; font-weight: 500; width: 140px;">Selected Service:</td>
                <td style="padding: 10px 0; color: #00c0ff; font-weight: 600;">${service}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1e293b;">
                <td style="padding: 10px 0; color: #94a3b8; font-weight: 500;">Prospect Name:</td>
                <td style="padding: 10px 0; color: #f8fafc; font-weight: 600;">${fullName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #1e293b;">
                <td style="padding: 10px 0; color: #94a3b8; font-weight: 500;">Email Address:</td>
                <td style="padding: 10px 0; color: #f8fafc;"><a href="mailto:${email}" style="color: #00c0ff; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #1e293b;">
                <td style="padding: 10px 0; color: #94a3b8; font-weight: 500;">Phone Number:</td>
                <td style="padding: 10px 0; color: #f8fafc;">${phone || "Not Provided"}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #111827; border: 1px solid #1e293b; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="color: #00c0ff; font-size: 15px; font-weight: 600; margin-top: 0; margin-bottom: 10px;">Message / Requirements</h3>
            <p style="color: #cbd5e1; font-size: 13.5px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <div style="text-align: center; border-top: 1px solid #1e293b; padding-top: 20px; font-size: 11px; color: #64748b;">
            This submission was captured and delivered securely by the Shiv Core Tech Platform.
          </div>
          
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Contact inquiry submitted and email sent successfully.",
    });

  } catch (error: any) {
    console.error("Error sending contact form email:", error);
    return NextResponse.json(
      { error: error.message || "An error occurred during submission handling." },
      { status: 500 }
    );
  }
}
