let downloadResumeButton = document.getElementById("download-resume-btn");
let toggleAboutButton = document.getElementById("toggle-about-btn");
let moreAboutText = document.getElementById("more-about-text");
let contactForm = document.getElementById("contact-form");
let feedbackMessage = document.getElementById("form-feedback");

// Download the resume without navigating away from the portfolio.
if (downloadResumeButton) {
  downloadResumeButton.addEventListener("click", () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "Docs/resume.docx";
    downloadLink.download = "Nitish-Baidya-Resume.docx";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  });
}

// Toggle the extra About Me paragraph on the home page.
if (toggleAboutButton && moreAboutText) {
  toggleAboutButton.addEventListener("click", () => {
    const isHidden = moreAboutText.hasAttribute("hidden");

    if (isHidden) {
      moreAboutText.removeAttribute("hidden");
      toggleAboutButton.textContent = "Show Less";
    } else {
      moreAboutText.setAttribute("hidden", "");
      toggleAboutButton.textContent = "More About Me";
    }
  });
}