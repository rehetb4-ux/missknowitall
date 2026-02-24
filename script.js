function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function postConfession() {
    const input = document.getElementById("confessionInput");
    if (!input.value.trim()) return;

    const wall = document.getElementById("confessionWall");
    const card = document.createElement("div");
    card.className = "card";
    card.style.width = "100%";
    card.innerHTML = `<p style="font-size:1.2rem; font-style:italic;">"${input.value}"</p>`;
    
    wall.prepend(card);
    input.value = "";
}

function calculateQuiz() {
    const form = new FormData(document.getElementById("quizForm"));
    let score = 0;
    for (let v of form.values()) score += Number(v);

    const resultDiv = document.getElementById("quizResult");
    resultDiv.innerHTML = `<div class="card" style="background:var(--blue); color:white; width:100%;">Your Score: ${score}. Status: ${score > 8 ? 'High Stress' : 'Doing Well'}</div>`;
}
