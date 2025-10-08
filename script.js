// Set year
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

// 🔹 Auto detect file size
(async function() {
  const link = document.getElementById('downloadLink').href;
  try {
    const resp = await fetch(link, { method: 'HEAD' });
    const size = resp.headers.get('content-length');
    if (size) {
      const mb = (parseInt(size, 10) / (1024 * 1024)).toFixed(2);
      document.getElementById('filesize').textContent = `File size: ${mb} MB`;
    } else {
      document.getElementById('filesize').textContent = "File size: (unavailable)";
    }
  } catch {
    document.getElementById('filesize').textContent = "File size: (unavailable)";
  }
})();
