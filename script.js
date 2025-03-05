// Adaugă scriptul Calendly dacă nu există deja
if (
  !document.querySelector(
    'script[src="https://assets.calendly.com/assets/external/widget.js"]'
  )
) {
  let script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.type = "text/javascript";
  script.async = true;
  document.head.appendChild(script);
}

// Așteaptă încărcarea completă a paginii
document.addEventListener("DOMContentLoaded", function () {
  let contactButtons = document.querySelectorAll(".card .button");

  contactButtons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Oprește comportamentul default al linkului

      // Inițializează widgetul Calendly cu linkul corect
      Calendly.initPopupWidget({
        url: "https://calendly.com/voluntariat-meditatii/30min",
      });
    });
  });
});

// Funcționalitatea pentru butonul de scroll
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
