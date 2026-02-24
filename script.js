function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function calculateResult() {
  let score = 0;
  const data = new FormData(document.getElementById("quizForm"));
  for (let v of data.values()) score += Number(v);

  let result = score <= 6
    ? "Low stress"
    : score <= 10
    ? "Moderate stress"
    : "High stress";

  document.getElementById("result").innerText = result;
}