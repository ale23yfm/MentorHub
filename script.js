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
  script.onload = function () {
    console.log("Calendly script loaded successfully.");
  };
  document.head.appendChild(script);
} else {
  console.log("Calendly script already exists.");
}

// Funcția pentru atașarea eventului pe butoane
function setupContactButtons() {
  console.log("Verificăm și atașăm evenimentele pe butoane...");

  let contactButtons = document.querySelectorAll(".card .button");
  if (contactButtons.length === 0) {
    console.log("Nu s-au găsit butoane pentru contact.");
    return;
  }

  contactButtons.forEach((button) => {
    button.removeEventListener("click", handleCalendlyClick); // Evităm dublarea evenimentelor
    button.addEventListener("click", handleCalendlyClick);
  });
}

// Funcția care deschide Calendly
function handleCalendlyClick(event) {
  event.preventDefault();
  console.log("Buton apăsat! Verificăm Calendly...");

  if (typeof Calendly !== "undefined") {
    console.log("Calendly este definit, încercăm să deschidem popup-ul...");
    Calendly.initPopupWidget({
      url: "https://calendly.com/voluntariat-meditatii/30min"
    });
    console.log("Calendly.initPopupWidget a fost apelat!");
  } else {
    console.error("Eroare: Calendly nu este încărcat!");
  }
}


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
