// 🌙 Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* ---------------- CONFESSIONS ---------------- */

function postConfession() {
  const input = document.getElementById("confessionInput");
  if (!input || input.value.trim() === "") {
    alert("Please write something first.");
    return;
  }

  let confessions = JSON.parse(localStorage.getItem("confessions")) || [];
  confessions.unshift(input.value.trim());

  localStorage.setItem("confessions", JSON.stringify(confessions));
  input.value = "";
  displayConfessions();
}

function displayConfessions() {
  const list = document.getElementById("confessionList");
  if (!list) return;

  list.innerHTML = "";
  const confessions = JSON.parse(localStorage.getItem("confessions")) || [];

  confessions.forEach(text => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerText = text;
    list.appendChild(card);
  });
}

/* ---------------- QUIZ ---------------- */

function submitQuiz() {
  let score = 0;
  const checked = document.querySelectorAll("#quizForm input:checked");
  const ranges = document.querySelectorAll("#quizForm input[type='range']");

  checked.forEach(i => score += Number(i.value));
  ranges.forEach(r => score += Number(r.value));

  localStorage.setItem("quizScore", score);

  let result = "";
  let stress = "";

  if (score <= 15) {
    result = "🟢 Low emotional stress";
    stress = "Low";
  } else if (score <= 25) {
    result = "🟡 Moderate emotional stress";
    stress = "Moderate";
  } else {
    result = "🔴 High emotional stress";
    stress = "High";
  }

  localStorage.setItem("stressLevel", stress);
  document.getElementById("result").innerText = result;
}

/* ---------------- DASHBOARD ---------------- */

function loadDashboard() {
  const stress = localStorage.getItem("stressLevel") || "Not taken";
  const moodBox = document.getElementById("stressBox");

  if (moodBox) {
    moodBox.innerText = "🧠 Stress Level: " + stress;
  }
}

/* ---------------- ANALYTICS ---------------- */

function loadAnalytics() {
  const confessions = JSON.parse(localStorage.getItem("confessions")) || [];
  const score = localStorage.getItem("quizScore");

  const box = document.getElementById("analyticsBox");
  if (!box) return;

  box.innerHTML = `
    <h3>Platform Snapshot</h3>
    <p>🗣️ Total Confessions: ${confessions.length}</p>
    <p>🧪 Quiz Taken: ${score ? "Yes" : "No"}</p>
    <p>📊 Avg Stress: ${localStorage.getItem("stressLevel") || "N/A"}</p>
  `;
}

window.onload = () => {
  displayConfessions();
  loadDashboard();
  loadAnalytics();
};
