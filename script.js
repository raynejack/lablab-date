
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

        <p class="letter-message">
          I have something special prepared for us...
        </p>

        <p class="letter-message">
          A little adventure, just you and me. ♡
        </p>

        <button class="start-button" onclick="openLetter()">
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

        <p class="letter-message">I was thinking...</p>

        <p class="letter-message">
          What if we make another little memory together?
        </p>

        <div class="envelope">⚡</div>

        <h2>Ready for our next adventure?</h2>

        <button class="start-button" onclick="showInvitation()">
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

        <p class="handwriting">November 29, 2026</p>

        <p class="letter-message">
          Destination: Antipolo, Rizal
        </p>

        <p class="letter-message">
          Occasion: Our 1st Monthsary ♡
        </p>

        <p class="letter-message">
          A whole day of food, nature, art, and memories.
        </p>

        <h2>Will you go on an adventure with me?</h2>

        <button class="start-button" onclick="acceptQuest()">
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

  card.style.opacity = "0";

  setTimeout(() => {
    card.innerHTML = `
      <div class="letter-scene quest-log">

        <p class="tiny-label">POKÉMON TRAINER ADVENTURE GUIDE ⚡</p>

        <div class="envelope">🎮</div>

        <h1>QUEST ACCEPTED!</h1>

        <p class="handwriting">
          YAYYYYY, Lablab!
        </p>

        <p class="letter-message">
          Our first monthsary adventure awaits!
        </p>

        <div class="quest-date">
          <span>📅</span>
          <strong>NOVEMBER 29, 2026</strong>
          <small>SUNDAY · ANTIPOLO, RIZAL</small>
        </div>

        <h2>YOUR QUEST LOG</h2>

        <div class="quest-item">
          <span class="quest-icon">🚏</span>
          <div>
            <strong>01 — THE MEET-UP</strong>
            <p>Meet your favorite travel partner at PITX.</p>
            <small>Mission: Pick-up + breakfast date</small>
          </div>
        </div>

        <div class="quest-item">
          <span class="quest-icon">🚌</span>
          <div>
            <strong>02 — THE JOURNEY</strong>
            <p>Travel together from PITX to Antipolo.</p>
            <small>Mission: Let the adventure begin!</small>
          </div>
        </div>

        <div class="quest-item">
          <span class="quest-icon">🌿</span>
          <div>
            <strong>03 — NATURE QUEST</strong>
            <p>Antipolo Hinulugang Taktak</p>
            <small>Entrance: FREE</small>
            <small>Explore, relax, and take photos together.</small>
          </div>
        </div>

        <div class="quest-item">
          <span class="quest-icon">🍰</span>
          <div>
            <strong>04 — ENERGY RESTORE</strong>
            <p>Lunch / Light Snack</p>
            <small>Recharge before the next destination.</small>
          </div>
        </div>

        <div class="quest-item">
          <span class="quest-icon">🎨</span>
          <div>
            <strong>05 — ART EXPLORER</strong>
            <p>Pintô Art Museum</p>
            <small>Student admission: ₱150 each (with valid ID)</small>
            <small>Opening hours: 10:00 AM – 6:00 PM</small>
            <small>Discover art, gardens, and beautiful spaces.</small>
          </div>
        </div>

        <div class="quest-item">
          <span class="quest-icon">🏡</span>
          <div>
            <strong>06 — THE JOURNEY HOME</strong>
            <p>Travel back home safely.</p>
            <small>Target arrival: 8:00–10:00 PM</small>
          </div>
        </div>

     
<div class="final-message">

  <h2>OUR FIRST MONTHSARY ♡</h2>

  <p>Little moments, favorite memories, and us.</p>

  <div class="photo-gallery">

    <div class="polaroid photo-one">
      <img src="us-photo-1.jpg" alt="Our first memory">
      <p>Memory no. 01 ♡</p>
    </div>

    <div class="polaroid photo-two">
      <img src="us-photo-2.jpg" alt="Our second memory">
      <p>Memory no. 02 ♡</p>
    </div>

    <div class="polaroid photo-three">
      <img src="us-photo-3.jpg" alt="Our third memory">
      <p>Memory no. 03 ♡</p>
    </div>

  </div>

  <h2>OUR PARTNER POKÉMON</h2>

  <p>Different partners, one adventure. ♡</p>

  <div class="pokemon-gallery">

    <div class="pokemon-card">
      <img src="gardevoir.png" alt="Gardevoir">
      <h3>GARDEVOIR</h3>
      <p>His Pokémon Partner</p>
      <small>PSYCHIC / FAIRY</small>
    </div>

    <div class="pokemon-card">
      <img src="oshawott.png" alt="Oshawott">
      <h3>OSHAWOTT</h3>
      <p>Your Pokémon Partner</p>
      <small>WATER TYPE</small>
    </div>

  </div>

  <h2>See you on November 29, Lablab! ♡</h2>

</div>

    `;

    card.style.transition = "all .5s ease";
    card.style.transform = "scale(1) rotate(-1deg)";
    card.style.opacity = "1";

    card.animate([
      { transform: "scale(.9) rotate(-3deg)" },
      { transform: "scale(1.03) rotate(2deg)" },
      { transform: "scale(1) rotate(-1deg)" }
    ], {
      duration: 700,
      easing: "ease-out"
    });
  }, 500);
}
