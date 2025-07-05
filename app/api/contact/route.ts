import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Configure your email transporter
    // IMPORTANT: Replace with your actual SMTP settings or email service details
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., 'smtp.sendgrid.net'
      port: parseInt(process.env.EMAIL_PORT || '587'), // e.g., 587
      secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // e.g., 'apikey' for SendGrid, or your SMTP username
        pass: process.env.EMAIL_PASS, // e.g., your SendGrid API key, or your SMTP password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SENDER_EMAIL, // Your verified sender email address (e.g., from your domain)
      to: process.env.RECIPIENT_EMAIL, // The email address where you want to receive notifications
      subject: `New Contact Form Submission from ${name}`,
      html: `
            <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f9fafb; padding: 32px; border-radius: 12px; max-width: 480px; margin: auto; border: 1px solid #e5e7eb;">
              <div style="text-align: center; margin-bottom: 24px;">
                <span style="font-size: 1.5rem; font-weight: 700; color: #0ea5e9;">Aniket.Dev</span>
                <div style="font-size: 1rem; color: #6b7280; margin-top: 4px;">Portfolio Contact Form</div>
              </div>
              <div style="margin-bottom: 16px;">
                <p style="margin: 0 0 8px 0;"><span style="font-weight: 600; color: #374151;">Name:</span> <span style="color: #111827;">${name}</span></p>
                <p style="margin: 0 0 8px 0;"><span style="font-weight: 600; color: #374151;">Email:</span> <span style="color: #111827;">${email}</span></p>
              </div>
              <div style="margin-bottom: 24px;">
                <p style="font-weight: 600; color: #374151; margin-bottom: 4px;">Message:</p>
                <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; color: #374151; font-size: 1rem;">
                  ${message}
                </div>
              </div>
              <div style="text-align: center; color: #6b7280; font-size: 0.95rem;">
                This message was sent from your website's contact form.<br/>
                <span style="color: #0ea5e9; font-weight: 500;">Aniket.Dev</span>
              </div>
            </div>
          `,
    };

    await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: email, // Send to the user who submitted the form
      subject: `Thank you for contacting us, ${name}!`,
      html: `
      <div style="font-family: 'Inter', Arial, sans-serif; background-color: #f9fafb; padding: 32px; border-radius: 12px; max-width: 480px; margin: auto; border: 1px solid #e5e7eb;">
        <div style="text-align: center; margin-bottom: 24px;">
        <span style="font-size: 1.5rem; font-weight: 700; color: #0ea5e9;">Aniket.Dev</span>
        <div style="font-size: 1rem; color: #6b7280; margin-top: 4px;">Thank You for Contacting</div>
        </div>
        <div style="margin-bottom: 20px;">
        <h2 style="font-size: 1.25rem; font-weight: 600; color: #0ea5e9; margin: 0 0 8px 0;">Dear ${name},</h2>
        <p style="color: #374151; margin: 0 0 12px 0;">
          Thank you for reaching out to us. We have received your message and will get back to you shortly.
        </p>
        </div>
        <div style="margin-bottom: 20px;">
        <p style="font-weight: 600; color: #374151; margin-bottom: 4px;">Your message:</p>
        <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; color: #374151; font-size: 1rem;">
          ${message}
        </div>
        </div>
        <div style="margin-bottom: 24px;">
        <p style="color: #374151; margin: 0;">
          If you have any urgent inquiries, please reply to this email.
        </p>
        </div>
        <div style="text-align: center; color: #6b7280; font-size: 0.95rem;">
        Best regards,<br/>
        <span style="color: #0ea5e9; font-weight: 500;">The Support Team</span>
        </div>
        <div style="margin-top: 24px; text-align: center; color: #9ca3af; font-size: 0.9em;">
        This is an automated message. Please do not reply directly to this email.<br/>
        <span style="color: #0ea5e9; font-weight: 500;">Aniket.Dev</span>
        </div>
      </div>
      `,
    });


    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to send email.', error: (error as Error).message }, { status: 500 });
  }
}


