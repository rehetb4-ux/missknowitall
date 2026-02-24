function calculateQuiz() {
    const form = new FormData(document.getElementById("quizForm"));
    let score = 0;
    let count = 0;

    for (let v of form.values()) {
        score += Number(v);
        count++;
    }

    // Check if they answered at least most questions
    if (count < 20) {
        alert("Please answer all questions for an accurate result.");
        return;
    }

    const resultDiv = document.getElementById("quizResult");
    let category = "";
    let color = "";

    if (score < 40) {
        category = "Healthy & Balanced 😊";
        color = "#22c55e"; // Green
    } else if (score < 70) {
        category = "Moderate Stress / Burnout Risk 😐";
        color = "#f97316"; // Orange
    } else {
        category = "High Distress - Urgent Self-Care Needed 😟";
        color = "#ef4444"; // Red
    }

    resultDiv.innerHTML = `
        <div class="card" style="background:${color}; color:white; width:100%; border:none;">
            <h2 style="margin:0;">Assessment Complete</h2>
            <p style="font-size:1.5rem; font-weight:800;">${category}</p>
            <p style="font-weight:normal;">Your Score: ${score}/100</p>
            <hr style="opacity:0.3">
            <p style="font-size:0.9rem;">Recommendation: ${score > 70 ? 'Please visit our Premium Support for a 1-on-1 talk.' : 'Continue using the wall to vent and stay mindful.'}</p>
        </div>
    `;
    
    // Smooth scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}
