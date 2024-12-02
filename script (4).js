// DOM Elements
const pads = document.querySelectorAll(".drum-pad");
const display = document.getElementById("display");

// Play sound and update display
function playSound(event) {
  const key = event.type === "keydown" ? event.key.toUpperCase() : event.target.innerText;
  const audio = document.getElementById(key);

  if (audio) {
    const pad = audio.parentElement;
    const soundName = pad.id;
    audio.currentTime = 0; // Rewind audio
    audio.play();
    display.innerText = soundName;

    // Add active class for visual feedback
    pad.classList.add("active");
    setTimeout(() => pad.classList.remove("active"), 150);
  }
}

// Event listeners
pads.forEach((pad) => {
  pad.addEventListener("click", playSound);
});
document.addEventListener("keydown", playSound);
