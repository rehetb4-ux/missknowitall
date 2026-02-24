// --- FIX: Confession System ---
function postConfession() {
    const input = document.getElementById("confessionInput");
    const text = input.value.trim();
    if (!text) return alert("Please type your secret first.");

    const wall = document.getElementById("confessionWall");
    const newCard = document.createElement("div");
    newCard.className = "card wall";
    newCard.style.width = "100%";
    newCard.innerHTML = `<p style="font-style:italic;">"${text}"</p><small style="color:#64748b;">— Posted just now</small>`;
    
    wall.prepend(newCard);
    input.value = ""; // Clear input
}

// --- FIX: Quiz Result System ---
function calculateQuiz() {
    const form = new FormData(document.getElementById("quizForm"));
    let score = 0;
    let count = 0;
    for (let v of form.values()) {
        score += parseInt(v);
        count++;
    }

    if (count < 25) return alert("Please answer all 25 questions to get an accurate result.");

    const resultDiv = document.getElementById("result");
    let mood = score > 60 ? "High Stress 😟" : score > 30 ? "Moderate 😐" : "Balanced 😊";
    let color = score > 60 ? "#ef4444" : score > 30 ? "#f97316" : "#22c55e";

    resultDiv.innerHTML = `
        <div class="card" style="background:${color}; color:white; border:none; margin-top:30px; text-align:center;">
            <h2>Result: ${mood}</h2>
            <p>Your Score: ${score}/100</p>
            <p style="margin-top:10px; font-size:0.9rem; opacity:0.9;">We recommend talking to a peer counselor on our Premium page.</p>
        </div>
    `;
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}
