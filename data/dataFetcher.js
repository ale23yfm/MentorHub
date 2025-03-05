// Funcția pentru a afișa cardurile
function displayCards(data) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = ""; // Șterge orice conținut anterior

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Creare imagine
    const image = document.createElement("img");
    image.classList.add("img-card");
    image.src = item.image;
    image.alt = item.name;
    card.appendChild(image);

    // Creare nume mentor
    const name = document.createElement("h2");
    name.textContent = item.name;
    card.appendChild(name);

    // Creare subiecte
    item.subjects.forEach((subject) => {
      const subjectElement = document.createElement("h3");
      subjectElement.textContent = subject;
      card.appendChild(subjectElement);
    });

    // Creare buton de contact
    const button = document.createElement("a");
    button.classList.add("button");
    button.textContent = "Contactează";
    button.href = "#";
    card.appendChild(button);

    container.appendChild(card);
  });

  console.log(
    "Cardurile au fost generate. Reatașăm evenimentele pe butoane..."
  );
  setupContactButtons(); // Asigură-te că butoanele au evenimentele atașate
}

// Funcția de încărcare a datelor
async function fetchData() {
  try {
    console.log("Încărcăm datele...");
    await displayCards(mentorsData); // Dacă mentorsData este definit
  } catch (error) {
    console.error("Eroare la încărcarea datelor:", error);
    document.getElementById(
      "cardContainer"
    ).innerHTML = `<p style="color: red;">Nu s-au putut încărca datele.</p>`;
  }
}

fetchData();
