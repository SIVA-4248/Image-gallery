
// script.js
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".image-item img").forEach(image => {
    image.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImage.src = image.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

