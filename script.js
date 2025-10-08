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
  document.getElementById('homeSection').style.display = "block";
}

// 🔹 Close all modals
function closeAllModals() {
  document.querySelectorAll('.modal').forEach(m => m.style.display = "none");
}

// 🔹 Mouse parallax effect
document.addEventListener("mousemove", (e) => {
  let moveX = (e.clientX / window.innerWidth - 0.5) * 5;
  let moveY = (e.clientY / window.innerHeight - 0.5) * 5;
  document.body.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// 🔹 Auto detect file size
(async function(){
  const link = document.getElementById('downloadLink').href;
  try {
    const resp = await fetch(link, { method:'HEAD' });
    const size = resp.headers.get('content-length');
    if (size) {
      const mb = (parseInt(size, 10) / (1024*1024)).toFixed(2);
      document.getElementById('filesize').textContent = `File size: ${mb} MB`;
    }
  } catch {
    document.getElementById('filesize').textContent = "File size: (unavailable)";
  }
})();
