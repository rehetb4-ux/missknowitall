// Toggle between light and dark themes
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Calculate Mental Health Quiz results
function calculateResult() {
  let score = 0;
  const form = document.getElementById("quizForm");
  const data = new FormData(form);
  
  // Sum up all selected values
  for (let v of data.values()) {
    score += Number(v);
  }

  const resultArea = document.getElementById("result");
  
  if (score === 0) {
    resultArea.innerText = "Please answer at least one question.";
    return;
  }

  let finalResult = "";
  if (score <= 6) finalResult = "Status: Low Stress 😊 - Keep doing what you're doing!";
  else if (score <= 10) finalResult = "Status: Moderate Stress 😐 - Try to schedule a break today.";
  else finalResult = "Status: High Stress 😟 - Please reach out to our resources or a friend.";

  resultArea.innerText = finalResult;
  resultArea.style.color = "var(--blue)";
}

// Post a confession live to the page
function postConfession() {
  const input = document.getElementById("confessionInput");
  const wall = document.getElementById("confessionWall");

  if (input.value.trim() === "") {
    alert("Please write a confession before posting!");
    return;
  }

  const newPost = document.createElement("div");
  newPost.className = "card";
  newPost.style.width = "100%";
  newPost.style.marginBottom = "15px";
  newPost.innerText = `“${input.value}”`;

  wall.prepend(newPost); // Adds the newest post to the top
  input.value = ""; // Clears the text area
}
