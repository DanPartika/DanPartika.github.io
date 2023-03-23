//https://www.emailjs.com/
//https://www.youtube.com/watch?v=dgcYOm8n8ME&ab_channel=CodewithVoran
function sendEmail() {
  // Get the form fields
  const senderEmail = document.getElementById("sender-email").value;
  const recipientEmail = document.getElementById("recipient-email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Send the email using EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    sender_email: senderEmail,
    recipient_email: recipientEmail,
    subject: subject,
    message: message,
  }).then((response) => {
    console.log("SUCCESS!", response.status, response.text);
    alert("Email sent successfully!");
  }, (error) => {
    console.log("FAILED...", error);
    alert("Email failed to send. Please try again later.");
  });
}