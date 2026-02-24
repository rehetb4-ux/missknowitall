// 🌙 Dark Mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// 🗣️ CONFESSIONS — SAVE + DISPLAY
function postConfession() {
  const text = document.getElementById("confessionInput").value;
  if (!text) return alert("Write something first.");

  let confessions = JSON.parse(localStorage.getItem("confessions")) || [];
  confessions.push(text);
  localStorage.setItem("confessions", JSON.stringify(confessions));

  document.getElementById("confessionInput").value = "";
  displayConfessions();
}

function displayConfessions() {
  const container = document.getElementById("confessionList");
  if (!container) return;

  container.innerHTML = "";
  const confessions = JSON.parse(localStorage.getItem("confessions")) || [];

  confessions.forEach(c => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerText = c;
    container.appendChild(div);
  });
}

// 🧪 QUIZ — SUBMIT + RESULT
function calculateResult() {
  let score = 0;
  const inputs = document.querySelectorAll("#quizForm input:checked, #quizForm input[type=range]");

  inputs.forEach(input => {
    score += Number(input.value);
  });

  let result =
    score <= 8
      ? "🟢 Low stress — you seem to be coping okay."
      : score <= 14
      ? "🟡 Moderate stress — regular check-ins could help."
      : "🔴 High stress — extra support and rest are important.";

  document.getElementById("result").innerText = result;
}

// Load confessions automatically
window.onload = displayConfessions;
