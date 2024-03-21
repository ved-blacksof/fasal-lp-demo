async function sendEmail() {
  const apiKey =
    "00B5DC7665B08D246C2A21D4BF2AD55A00594A1C1C79E53872B458673294032D792690F634DCB492EBE81B437AB55898";
  const fromEmail = "ved.blacksof@gmail.com";
  const toEmail = "ved.blacksof@gmail.com";
  const subject = "enquiry";
  const body = "This is a test email sent from Astro.js with  Email.";
  const templateID = "";
  try {
    const response = await fetch("https://api.elasticemail.com/v2/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        apiKey: apiKey,
        subject: subject,
        from: fromEmail,
        to: toEmail,
        bodyText: body,
      }),
    });

    if (response.ok) {
      // console.log("Email sent successfully");
    } else {
      console.error("Failed to send email:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
