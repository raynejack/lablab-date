
function startAdventure() {
  const card = document.querySelector(".intro-card");

  card.style.transition = "all .5s ease";
  card.style.opacity = "0";
  card.style.transform = "scale(.8) rotate(5deg)";

  setTimeout(() => {
    card.innerHTML = `
      <div class="letter-scene">

        <p class="tiny-label">A SPECIAL DELIVERY ♡</p>

        <div class="envelope">💌</div>

        <h1>Hey, Lablab!</h1>

        <p class="handwriting">
          Good morning hehe ☀️
        </p>

        <p class="letter-message">
          I have something special
          prepared for us...
        </p>

        <p class="letter-message">
          A little adventure,
          just you and me. ♡
        </p>

        <button class="start-button"
          onclick="openLetter()">
          OPEN LETTER →
        </button>

      </div>
    `;

    card.style.transform = "scale(1) rotate(-1deg)";
    card.style.opacity = "1";

  }, 500);
}


function openLetter() {
  const card = document.querySelector(".intro-card");

  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";

  setTimeout(() => {
    card.innerHTML = `
      <div class="letter-scene">

        <p class="tiny-label">A MESSAGE FROM YOUR FAVORITE PERSON</p>

        <h1>Dear Lablab,</h1>

        <p class="letter-message">
          I was thinking...
        </p>

        <p class="letter-message">
          What if we make another
          little memory together?
        </p>

        <div class="envelope">⚡</div>

        <h2>Ready for our next adventure?</h2>

        <button class="start-button"
          onclick="showInvitation()">
          LET'S GO! →
        </button>

      </div>
    `;

    card.style.transition = "all .5s ease";
    card.style.transform = "scale(1) rotate(1deg)";
    card.style.opacity = "1";

  }, 500);
}


function showInvitation() {
  const card = document.querySelector(".intro-card");

  card.style.opacity = "0";

  setTimeout(() => {
    card.innerHTML = `
      <div class="letter-scene">

        <p class="tiny-label">NEW QUEST UNLOCKED ⚡</p>

        <div class="envelope">🎒</div>

        <h1>It's a date!</h1>

        <p class="handwriting">
          November 29, 2026
        </p>

        <p class="letter-message">
          Destination: Antipolo
        </p>

        <p class="letter-message">
          Occasion: Our 1st Monthsary ♡
        </p>

        <h2>Will you go on an adventure with me?</h2>

        <button class="start-button"
          onclick="acceptQuest()">
          I CHOOSE YOU! ♡
        </button>

      </div>
    `;

    card.style.opacity = "1";
    card.style.transform = "scale(1) rotate(-1deg)";

  }, 500);
}


function acceptQuest() {
  const card = document.querySelector(".intro-card");

  card.innerHTML = `
    <div class="letter-scene">

      <div class="envelope">💗</div>

      <h1>QUEST ACCEPTED!</h1>

      <p class="handwriting">
        YAYYYYY, Lablab!
      </p>

      <p class="letter-message">
        Our first monthsary adventure awaits.
      </p>

      <h2>See you on November 29! ♡</h2>

      <p class="handwriting">
        Good morning hehe ☀️
      </p>

    </div>
  `;

  card.animate([
    { transform: "scale(.9) rotate(-3deg)" },
    { transform: "scale(1.05) rotate(2deg)" },
    { transform: "scale(1) rotate(-1deg)" }
  ], {
    duration: 700,
    easing: "ease-out"
  });
}
