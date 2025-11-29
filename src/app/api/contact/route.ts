import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { prisma } from "@/lib/prisma";

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Email template function
function generateEmailTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
  source?: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #001F3F 0%, #003366 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #D4AF37; margin: 0; font-size: 28px; font-weight: 700;">DAMANI NEXUS</h1>
              <p style="color: #ffffff; margin: 10px 0 0; font-size: 14px; letter-spacing: 2px;">TECHNOLOGY SOLUTIONS</p>
            </td>
          </tr>
          
          <!-- Title -->
          <tr>
            <td style="padding: 30px 30px 20px; text-align: center; border-bottom: 2px solid #D4AF37;">
              <h2 style="color: #001F3F; margin: 0; font-size: 22px;">New Contact Form Submission</h2>
              <p style="color: #666; margin: 10px 0 0; font-size: 14px;">Received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} at ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <!-- Name -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #D4AF37; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Full Name</span>
                    <p style="color: #001F3F; margin: 5px 0 0; font-size: 16px; font-weight: 500;">${data.name}</p>
                  </td>
                </tr>
                
                <!-- Email -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #D4AF37; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email Address</span>
                    <p style="color: #001F3F; margin: 5px 0 0; font-size: 16px;"><a href="mailto:${data.email}" style="color: #001F3F; text-decoration: none;">${data.email}</a></p>
                  </td>
                </tr>
                
                ${data.phone ? `
                <!-- Phone -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #D4AF37; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone Number</span>
                    <p style="color: #001F3F; margin: 5px 0 0; font-size: 16px;"><a href="tel:${data.phone}" style="color: #001F3F; text-decoration: none;">${data.phone}</a></p>
                  </td>
                </tr>
                ` : ''}
                
                ${data.company ? `
                <!-- Company -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #D4AF37; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</span>
                    <p style="color: #001F3F; margin: 5px 0 0; font-size: 16px;">${data.company}</p>
                  </td>
                </tr>
                ` : ''}
                
                ${data.service ? `
                <!-- Service -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="color: #D4AF37; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Service Interested In</span>
                    <p style="color: #001F3F; margin: 5px 0 0; font-size: 16px;">${data.service}</p>
                  </td>
                </tr>
                ` : ''}
                
                <!-- Message -->
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="color: #D4AF37; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</span>
                    <p style="color: #333; margin: 10px 0 0; font-size: 15px; line-height: 1.6; background-color: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #D4AF37;">${data.message.replace(/\n/g, '<br>')}</p>
                  </td>
                </tr>
              </table>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; margin-top: 25px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${data.email}?subject=Re: Your inquiry to Damani Nexus" style="display: inline-block; background: linear-gradient(135deg, #D4AF37 0%, #B8962E 100%); color: #001F3F; text-decoration: none; padding: 14px 35px; border-radius: 8px; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">Reply to ${data.name.split(' ')[0]}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Source Badge -->
          ${data.source ? `
          <tr>
            <td style="padding: 0 30px 20px; text-align: center;">
              <span style="display: inline-block; background-color: #001F3F; color: #D4AF37; padding: 6px 16px; border-radius: 20px; font-size: 12px; font-weight: 500;">Source: ${data.source}</span>
            </td>
          </tr>
          ` : ''}
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #001F3F; padding: 25px 30px; text-align: center;">
              <p style="color: #D4AF37; margin: 0 0 10px; font-size: 14px; font-weight: 600;">Damani Nexus Limited</p>
              <p style="color: #ffffff; margin: 0; font-size: 12px; opacity: 0.8;">Innovative Technology Solutions</p>
              <p style="color: #ffffff; margin: 15px 0 0; font-size: 11px; opacity: 0.6;">This is an automated notification from your website contact form.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message, source } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Save to database
    const consultation = await prisma.consultation.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        service: service || null,
        message,
        source: source || "Website Contact Form",
      },
    });

    // Send email notification
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Contact: ${name} - ${service || "General Inquiry"}`,
      html: generateEmailTemplate({ name, email, phone, company, service, message, source }),
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully", id: consultation.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

