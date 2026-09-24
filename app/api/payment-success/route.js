import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { payment_id, order_id, user, ticketId } = await req.json();

    // 1. Configure Nodemailer (Requires SMTP_USER and SMTP_PASS in .env.local)
    // If not provided, it will gracefully exit without crashing the app.
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("Email skipped: SMTP_USER and SMTP_PASS are not configured in .env.local");
      return NextResponse.json({ success: true, emailSent: false, message: "Payment verified but email not configured" });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 2. Generate QR Code URL using a free public API (safe for emails)
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(ticketId + '|' + user.name + '|' + user.email)}`;

    // 3. Create the HTML Email Template
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        
        <!-- Header -->
        <div style="background-color: #006fff; padding: 30px; text-align: center;">
          <img src="cid:digitalghurulogo" alt="Digital Ghuru" style="max-height: 80px; margin-bottom: 10px;" />
          <p style="color: #fedc32; margin: 5px 0 0 0; font-size: 16px; font-weight: bold;">AI Career Transformation Academy</p>
        </div>

        <!-- Body -->
        <div style="padding: 40px 30px; background-color: #ffffff;">
          <h2 style="color: #0f172a; margin-top: 0;">Thank you, ${user.name}!</h2>
          <p style="color: #475569; font-size: 16px; line-height: 1.6;">
            Your payment for the Digital Marketing AI Tools Workshop was successful. 
            We are thrilled to have you join us!
          </p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 30px 0; border: 1px dashed #cbd5e1;">
            <p style="margin: 0 0 10px 0; color: #64748b; font-size: 14px; text-transform: uppercase; font-weight: bold;">Your Ticket ID</p>
            <p style="margin: 0; color: #ff5c00; font-size: 32px; font-weight: 900; letter-spacing: 2px;">#${ticketId}</p>
          </div>

          <!-- QR Code Section -->
          <div style="text-align: center; margin-top: 40px;">
            <p style="color: #0f172a; font-weight: bold; margin-bottom: 15px;">Scan at Entry:</p>
            <img src="${qrCodeUrl}" alt="Your Ticket QR Code" style="width: 200px; height: 200px; border-radius: 8px; border: 10px solid white; box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 12px; color: #64748b;">
          <p style="margin: 0;">Payment ID: ${payment_id}</p>
          <p style="margin: 5px 0 0 0;">If you have any questions, please contact us at support@digitalghuru.in</p>
        </div>
      </div>
    `;

    // 4. Send the email
    await transporter.sendMail({
      from: `"Digital Ghuru" <${process.env.SMTP_USER}>`,
      to: user.email,
      subject: "🎟️ Your Workshop Ticket - Digital Ghuru",
      html: htmlTemplate,
      attachments: [
        {
          filename: 'logo.png',
          path: process.cwd() + '/public/assets/logo-for-logins.png',
          cid: 'digitalghurulogo' // same cid value as in the html img src
        }
      ]
    });

    return NextResponse.json({ success: true, emailSent: true });

  } catch (error) {
    console.error('Payment success webhook error:', error);
    return NextResponse.json({ error: 'Failed to process email' }, { status: 500 });
  }
}
