# MentorHub

**MentorHub** is a front-end web project developed using semantic HTML5, CSS3 (mobile-first approach), and vanilla JavaScript. It was created as a high school computer science certification project and is designed to match students seeking help with volunteer mentors offering free tutoring.

---

## 📁 Project Structure

```
MentorHub/
├── assets/                 # Images and favicon
├── css-files/              # Modular CSS stylesheets
│   ├── buttons.css         # Styling for social media buttons
│   ├── cards.css           # Styling for dynamic mentor cards
│   └── style.register.css  # Page-specific styles for register.html
├── data/
│   ├── data.js             # JSON-like array with mentors' data
│   └── dataFetcher.js      # JS logic to dynamically load cards from data.js
├── pages/
│   └── register.html       # Page for volunteers to sign up as mentors
├── index.html              # Main homepage displaying mentor cards
├── script.js               # Scroll-to-top logic & dynamic year
├── style.css               # Global styles (mobile-first)
└── README.md
```

---

## ⚙️ Technologies Used

- **HTML5 (semantic)** – Structured content for accessibility and clarity
- **CSS3** – Responsive design with custom properties, grid/flexbox layouts, and media queries
- **JavaScript (Vanilla)** – DOM manipulation, asynchronous data rendering, event handling
- **JSON (via data.js)** – Structured data for mentors
- **Git + GitHub Pages** – Version control and static deployment
- **Zcal Integration** – External calendar popup for scheduling sessions

---

## 🧠 Key Functionalities

### Dynamic Mentor Cards
Mentor cards are dynamically generated from `mentorsData` (data.js) using `dataFetcher.js`. Each card contains:
- Name
- Subject(s)
- Profile Image
- "Contact" button (triggers Zcal session link)

### Scroll-to-Top Button
Implemented in `script.js`, it becomes visible after scrolling down 300px, improves navigation.

### Dynamic Footer Year
Automatically updates the copyright.

### Accessibility & Performance
- ARIA attributes for screen readers
- `rel="noopener noreferrer"` for external links (security best practices)
- Assets loaded efficiently; JS scripts deferred

---

## 🧪 Local Development

You can test the app locally by cloning the repository:

```bash
git clone https://github.com/ale23yfm/MentorHub.git
cd MentorHub
open index.html  # or use Live Server in VS Code
```

---

## 📦 Deployment

The project is deployed using **GitHub Pages**:

- Commit and push changes to `main` branch
- Deployment is automatically served at:  
  [https://ale23yfm.github.io/MentorHub](https://ale23yfm.github.io/MentorHub)

---

## 🧩 Future Improvements

- AI-assisted mentor matching based on user preferences  
- "Meditation Class" feature: webinar-style group sessions  
- Backend integration for persistent mentor data  
- Admin dashboard for mentor validation and metrics

---
