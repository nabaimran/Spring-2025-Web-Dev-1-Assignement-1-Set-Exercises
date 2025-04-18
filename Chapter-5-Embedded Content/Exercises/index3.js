document.addEventListener("DOMContentLoaded", () => {
    const samples = document.querySelectorAll(".sample");
    const audioPlayer = document.getElementById("audioPlayer");

    samples.forEach(sample => {
        sample.addEventListener("click", () => {
            const soundSrc = sample.getAttribute("data-audio");
            if (soundSrc) {
                audioPlayer.src = soundSrc;
                audioPlayer.play();
            }
        });
    });

    // Optional: Reset when audio ends
    audioPlayer.addEventListener("ended", () => {
        audioPlayer.currentTime = 0;
    });
});