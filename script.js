// --- DARK MODE LOGIC ---
function toggleDarkMode() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
}

// Load preferences on all pages
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark");
  
  // If we are on the confession page, load previous ones
  if (document.getElementById("confessionWall")) loadConfessions();
});

// --- QUIZ LOGIC ---
function calculateResult() {
  let score = 0;
  const form = document.getElementById("quizForm");
  const data = new FormData(form);
  
  for (let value of data.values()) score += Number(value);

  const resultDisplay = document.getElementById("result");
  if (score === 0) {
    resultDisplay.innerText = "Please answer the questions first!";
  } else if (score <= 5) {
    resultDisplay.innerText = "Result: Low Stress. You're handling things well!";
  } else if (score <= 10) {
    resultDisplay.innerText = "Result: Moderate Stress. Time for a mental health break.";
  } else {
    resultDisplay.innerText = "Result: High Stress. Please reach out to our resources.";
  }
}

// --- CONFESSION LOGIC ---
function postConfession() {
  const input = document.getElementById("confessionInput");
  const wall = document.getElementById("confessionWall");
  
  if (!input.value.trim()) return alert("Write something first!");

  const text = input.value;
  displayConfession(text);

  // Save to browser memory
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(text);
  localStorage.setItem("posts", JSON.stringify(posts));

  input.value = ""; // Clear input
}

function displayConfession(text) {
  const wall = document.getElementById("confessionWall");
  const card = document.createElement("div");
  card.className = "card";
  card.style.width = "100%";
  card.style.marginBottom = "15px";
  card.innerText = `“${text}”`;
  wall.prepend(card);
}

function loadConfessions() {
  let posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.forEach(t => displayConfession(t));
}
