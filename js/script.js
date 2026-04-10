// Get elements
let downloadBtn = document.getElementById("download-resume-btn");
let toggleBtn = document.getElementById("toggle-about-btn");
let aboutText = document.getElementById("more-about-text");

// Download resume
if (downloadBtn) {
  downloadBtn.onclick = function () {
    window.location.href = "Docs/resume.docx";
  };
}

// Toggle About Me text
if (toggleBtn && aboutText) {
  toggleBtn.onclick = function () {
    if (aboutText.style.display === "none") {
      aboutText.style.display = "block";
      toggleBtn.innerText = "Show Less";
    } else {
      aboutText.style.display = "none";
      toggleBtn.innerText = "More About Me";
    }
  };
}