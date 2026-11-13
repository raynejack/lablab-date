
function startAdventure() {
  const card = document.querySelector(".intro-card");

  card.style.transition = "all .5s ease";
  card.style.opacity = "0";
  card.style.transform = "scale(.8) rotate(5deg)";

  setTimeout(() => {
    card.innerHTML = `
      <h1>Yay! ♡</h1>
      <p class="handwriting">
        Our adventure is about to begin...
      </p>
    `;
    card.style.opacity = "1";
    card.style.transform = "scale(1)";
  }, 500);
}
