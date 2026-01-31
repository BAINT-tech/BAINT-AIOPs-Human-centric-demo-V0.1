// WAITLIST EMAIL
document.getElementById("waitlistForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;

  window.location.href =
    `mailto:baintcomputer@gmail.com?subject=BAINT AIOPs Waitlist&body=Please add this email to the waitlist:%0A%0A${email}`;

  alert("Thanks for joining the waitlist!");
  this.reset();
});

// FEEDBACK / QUESTIONS
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const message = document.getElementById("message").value;

  window.location.href =
    `mailto:baintcomputer@gmail.com?subject=BAINT AIOPs Feedback / Question&body=${encodeURIComponent(message)}`;

  alert("Feedback sent. Thank you for helping shape BAINT.");
  this.reset();
});
