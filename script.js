


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }


// Add event listener for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission template_k5nz1yj service_9d0yzhk

  // Collect form data
  const fromName = document.getElementById("from_name").value;
  const fromEmail = document.getElementById("from_email").value;
  const message = document.getElementById("message").value;

  // Use EmailJS to send the email
  emailjs
    .send("service_9d0yzhk", "template_k5nz1yj", {
      from_name: fromName,
      from_email: fromEmail,
      message: message,
    })
    .then(
      function(response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset(); // Reset the form
      },
      function(error) {
        alert("Failed to send message. Please try again.");
      }
    );
});
