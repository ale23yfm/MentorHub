// Cards
function displayCards(data) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = ""; 

  data.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Volunteer's image
    const image = document.createElement("img");
    image.classList.add("img-card");
    image.src = item.image;
    image.alt = item.name;
    card.appendChild(image);

    // Volunteer's name
    const name = document.createElement("h2");
    name.textContent = item.name;
    card.appendChild(name);

    // Subjects
    item.subjects.forEach((subject) => {
      const subjectElement = document.createElement("h3");
      subjectElement.textContent = subject;
      card.appendChild(subjectElement);
    });

    // Contact Button
    const button = document.createElement("a");
    button.classList.add("button");
    button.textContent = "Contactează";
    button.href = "#";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      window.open(
        "https://zcal.co/mentorhub/120min", 
        "popupWindow", 
        "width=600,height=600,left=100,top=100"
      );
    });
    card.appendChild(button);

    container.appendChild(card);
  });

  console.log("Cardurile au fost generate. Reatașăm evenimentele pe butoane...");
}

// Funcția de încărcare a datelor
async function fetchData() {
  try {
    console.log("Încărcăm datele...");
    await displayCards(mentorsData); 
  } catch (error) {
    console.error("Eroare la încărcarea datelor:", error);
    document.getElementById("cardContainer").innerHTML = `<p style="color: red;">Nu s-au putut încărca datele.</p>`;
  }
}

fetchData();