// Funcția pentru a afișa cardurile
function displayCards(data) {
    const container = document.getElementById('cardContainer');
    container.innerHTML = ''; // Șterge orice conținut anterior

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        // Creare imagine
        const image = document.createElement('img');
        image.classList.add('img-card');
        image.src = item.image;
        image.alt = item.name;
        card.appendChild(image);

        // Creare nume mentor
        const name = document.createElement('h2');
        name.textContent = item.name;
        card.appendChild(name);

        // Creare subiecte
        item.subjects.forEach(subject => {
            const subjectElement = document.createElement('h3');
            subjectElement.textContent = subject;
            card.appendChild(subjectElement);
        });

        // Creare buton de contact
        const button = document.createElement('a');
        button.classList.add('button');
        button.textContent = 'Contactează';
        button.href = "#"; // Poți adăuga aici un link personalizat
        card.appendChild(button);

        container.appendChild(card);
    });
}


// Funcția pentru a încărca datele din JSON
// async function fetchData() {
//     try {
//         const response = await fetch('./data/data.json'); // calea corectă
//         if (!response.ok) {
//             throw new Error('Eroare la încărcarea datelor.');
//         }
//         const data = await response.json();
//         console.log('Datele încărcate:', data);
//         displayCards(data); // Apelează funcția pentru a afișa cardurile
//     } catch (error) {
//         console.error('Eroare:', error);
//         document.getElementById('cardContainer').innerHTML = `<p style="color: red;">Nu s-au putut încărca datele.</p>`;
//     }
// }

// Apelează funcția pentru a încărca datele
// fetchData();

async function fetchData() {
    console.log('AICI', mentorsData);
    try {
        // Așteaptă să obții datele (presupunând că aceasta poate fi o operațiune asincronă)
        // Dacă `mentorsData` este deja disponibilă și nu este o operațiune asincronă, nu ai nevoie de `await`
        await displayCards(mentorsData); // Presupunând că displayCards este o funcție asincronă

    } catch (error) {
        console.error('Eroare:', error);
        document.getElementById('cardContainer').innerHTML = `<p style="color: red;">Nu s-au putut încărca datele.</p>`;
    }   
}

fetchData();
