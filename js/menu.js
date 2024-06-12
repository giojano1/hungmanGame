const playBtn = document.getElementById("playBtn");
const tutorialBtn = document.getElementById("tutorialBtn");
playBtn.addEventListener("click", () => {
  window.location.href = "pages/categories.html";
});
tutorialBtn.addEventListener("click", () => {
  window.location.href = "pages/tutorial.html";
});
