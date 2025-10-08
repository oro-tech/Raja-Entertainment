// 🔹 Set footer year
document.getElementById('year').textContent = new Date().getFullYear();

// 🔹 Open modal
function openModal(id) {
  closeAllModals();
  document.getElementById(id).style.display = "flex";
  document.getElementById('homeSection').style.display = "none";
}

// 🔹 Go Home (close modals)
function goHome() {
  closeAllModals();
  document.getElementById('homeSection').style.display = "flex";
}

// 🔹 Close all modals
function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.style.display = "none");
}

// 🔹 Background Music Autoplay
window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  const toggleBtn = document.getElementById("musicToggle");
  let isPlaying = true;

  // Try to play music
  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      console.log("Autoplay blocked — waiting for user interaction.");
      document.body.addEventListener("click", () => {
        music.play();
        isPlaying = true;
        toggleBtn.textContent = "🔊";
      }, { once: true });
    });
  }

  // Toggle button
  toggleBtn.addEventListener("click", () => {
    if (isPlaying) {
      music.pause();
      toggleBtn.textContent = "🔇";
    } else {
      music.play();
      toggleBtn.textContent = "🔊";
    }
    isPlaying = !isPlaying;
  });
});
