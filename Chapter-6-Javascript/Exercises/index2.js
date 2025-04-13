// RGB Color Guessing Game - JavaScript File

let rgbDisplay = document.getElementById("rgbDisplay");
let optionsContainer = document.getElementById("options");
let resultText = document.getElementById("result");
let livesText = document.getElementById("lives");
let scoreText = document.getElementById("score");
let restartBtn = document.getElementById("restartBtn");

let correctColor = "";
let lives = 3;
let score = 0;

// Utility function to generate random RGB
function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

// Create a new game round
function generateGame() {
    resultText.textContent = "";
    optionsContainer.innerHTML = "";
    
    const correct = generateRandomColor();
    correctColor = correct;
    rgbDisplay.textContent = correct;

    let colors = [correct];
    while (colors.length < 3) {
        let newColor = generateRandomColor();
        if (!colors.includes(newColor)) {
            colors.push(newColor);
        }
    }

    colors = shuffle(colors);

    colors.forEach(color => {
        const box = document.createElement("div");
        box.className = "color-box";
        box.style.backgroundColor = color;
        box.onclick = () => checkAnswer(color);
        optionsContainer.appendChild(box);
    });
}

// Shuffle an array
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Check if user clicked the correct color
function checkAnswer(color) {
    if (color === correctColor) {
        resultText.textContent = "Correct! 🎉";
        score++;
    } else {
        resultText.textContent = "Wrong! 😢";
        lives--;
    }

    updateStats();

    if (lives > 0) {
        setTimeout(generateGame, 1000);
    } else {
        resultText.textContent = `Game Over! Final Score: ${score}`;
        optionsContainer.innerHTML = "";
    }
}

// Update the score and lives display
function updateStats() {
    livesText.textContent = lives;
    scoreText.textContent = score;
}

// Restart the game
restartBtn.addEventListener("click", () => {
    lives = 3;
    score = 0;
    updateStats();
    generateGame();
});

// Start the game
window.onload = generateGame;
