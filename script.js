document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const thankYouMsg = document.getElementById("thankYouMsg");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
    form.style.display = "none";
    thankYouMsg.style.display = "block";
  });
})