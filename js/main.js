const downloadResumeButton = document.getElementById("download-resume-btn");

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
