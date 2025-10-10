// 🔹 Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// 🔹 Modals
function openModal(id) {
  closeAllModals();
  document.getElementById(id).style.display = "flex";
  document.getElementById('homeSection').style.display = "none";
}

function goHome() {
  closeAllModals();
  document.getElementById('homeSection').style.display = "flex";
}

function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.style.display = "none");
}

// 🔹 Music Control
window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  const toggleBtn = document.getElementById("musicToggle");
  let isPlaying = true;

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

// 🔹 Falling Coin & Hat Animation
const fallingContainer = document.getElementById('fallingContainer');
const items = ['Images/Coin.png', 'Images/Hat.png', 'Images/Scroll.png'];

function createFallingItem() {
  const img = document.createElement('img');
  img.src = items[Math.floor(Math.random() * items.length)];
  img.classList.add('falling-item');

  const size = Math.random() * 30 + 30; // 30px to 60px
  img.style.width = `${size}px`;

  img.style.left = `${Math.random() * 100}vw`;
  img.style.animationDuration = `${Math.random() * 5 + 6}s`; // 6–11s fall time
  img.style.animationDelay = `${Math.random() * 3}s`;

  fallingContainer.appendChild(img);

  // Remove after animation ends to save memory
  setTimeout(() => {
    img.remove();
  }, 12000);
}

// Create falling items continuously
setInterval(createFallingItem, 700);

