// Scroll button
const scrollToTopBtn = document.getElementById("btn-scroll-to-top");

scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.visibility = "visible";
  } else {
    scrollToTopBtn.style.visibility = "hidden";
  }
});

// Update the year
document.getElementById('current-year').textContent = new Date().getFullYear();
