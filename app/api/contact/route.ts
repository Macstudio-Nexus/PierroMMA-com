import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse the incoming form data
    const body = await request.json();
    const { name, email, message, checkbox } = body;

    // Validate required fields
    if (!name || !email || !message || !checkbox) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <noreply@pierromma.com>",
      to: ["info@pierromma.com", "craigsampson15@gmail.com"], // Change this after verifying your domain
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interested in:</strong> ${checkbox}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr />
        <p><small>Reply to: ${email}</small></p>
      `,
    });

    // Check if Resend returned an error
    if (error) {
      console.error("Resend API error:", error);

      // Handle specific Resend errors
      if (error.name === "validation_error") {
        return NextResponse.json(
          { error: "Email configuration error. Please contact support." },
          { status: 403 }
        );
      }

      return NextResponse.json(
        { error: error.message || "Failed to send email" },
        { status: 500 }
      );
    }

    // Success - email was sent
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
