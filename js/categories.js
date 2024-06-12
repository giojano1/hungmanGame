const goBack2 = document.getElementById("goBack2");
goBack2.addEventListener("click", () => {
  window.location.href = "../index.html";
});

let categorie = "";

function redirect(cat) {
  categorie = cat;
  localStorage.setItem("cat", categorie);
  window.location.href = "game.html";
}
const movieBtn = document.getElementById("movie");
const tvShowBtn = document.getElementById("tvShow");
const countriesBtn = document.getElementById("countries");
const cityBtn = document.getElementById("city");
const animalsBtn = document.getElementById("animals");
const sportsBtn = document.getElementById("sports");

movieBtn.addEventListener("click", () => {
  redirect("Movies");
});
tvShowBtn.addEventListener("click", () => {
  redirect("TV Shows");
});
countriesBtn.addEventListener("click", () => {
  redirect("Countries");
});
cityBtn.addEventListener("click", () => {
  redirect("Capital Cities");
});
animalsBtn.addEventListener("click", () => {
  redirect("Animals");
});
sportsBtn.addEventListener("click", () => {
  redirect("Sports");
});
