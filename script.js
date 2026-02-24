function postConfession() {
    const input = document.getElementById("confessionInput");
    const wall = document.getElementById("confessionWall");

    if (!input || !input.value.trim()) {
        alert("Please write something first!");
        return;
    }

    // Create the new vent card
    const newVent = document.createElement("div");
    newVent.className = "card";
    newVent.innerHTML = `
        <p style="font-style:italic;">"${input.value}"</p>
        <small style="color: #94a3b8; display: block; margin-top: 10px;">— Posted just now</small>
    `;

    // Add to top of wall
    wall.prepend(newVent);

    // Clear the input
    input.value = "";
}

// Function for the Quiz
function calculateQuiz() {
    const form = document.getElementById("quizForm");
    const resultArea = document.getElementById("quizResult");
    
    // Get all checked inputs
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    
    if (answers.length < 25) {
        alert(`You've only answered ${answers.length}/25 questions. Please finish the quiz!`);
        return;
    }

    let score = 0;
    answers.forEach(input => {
        score += parseInt(input.value);
    });

    let message = "";
    let color = "";

    if (score > 70) {
        message = "High Stress: We recommend reaching out to a peer counselor.";
        color = "#ef4444";
    } else if (score > 40) {
        message = "Moderate Stress: Try taking some time for yourself this weekend.";
        color = "#f97316";
    } else {
        message = "You're doing great! Keep maintaining your mental balance.";
        color = "#22c55e";
    }

    resultArea.innerHTML = `
        <div class="card" style="background: ${color}; color: white; border: none;">
            <h3>Result: ${score}/100</h3>
            <p>${message}</p>
        </div>
    `;
    resultArea.scrollIntoView({ behavior: 'smooth' });
}
