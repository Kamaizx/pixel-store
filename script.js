// =========================================
// PIXEL STORE — SOCIAL LANDING PAGE
// =========================================

// Automatically update the footer year.
document.getElementById("year").textContent = new Date().getFullYear();

// Add a small visual feedback when a social link is clicked.
document.querySelectorAll(".social-card, .action-btn").forEach((link) => {
  link.addEventListener("click", () => {
    link.style.transform = "scale(0.985)";

    setTimeout(() => {
      link.style.transform = "";
    }, 130);
  });
});
