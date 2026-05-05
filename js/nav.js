/* Injects shared navigation + footer into every page */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';

  const NAV = `
<nav>
  <a href="index.html" class="nav-brand">
    <div class="nav-logo"><img src="images/logo.png" alt="Kodokan Olsberg"></div>
    <div class="nav-name">Kodokan <small>Olsberg</small></div>
  </a>
  <button class="nav-burger" id="burger" aria-label="Menü">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.html">Start</a></li>
    <li><a href="judo.html">Judo</a></li>
    <li><a href="jiujitsu.html">Jiu-Jitsu</a></li>
    <li><a href="trainer.html">Trainer</a></li>
    <li><a href="vorstand.html">Vorstand</a></li>
    <li><a href="galerie.html">Galerie</a></li>
    <li><a href="kontakt.html">Kontakt</a></li>
    <li class="nav-cta"><a href="mitglieder.html">Mitglieder</a></li>
  </ul>
</nav>`;

  const FOOTER = `
<footer>
  <div class="footer-grid">
    <div class="footer-about">
      <a href="index.html" class="nav-brand">
        <div class="nav-logo"><img src="images/logo.png" alt="Kodokan Olsberg"></div>
        <div class="nav-name">Kodokan <small>Olsberg</small></div>
      </a>
      <p>Judo und Jiu-Jitsu im Herzen des Sauerlandes. Willkommen auf der Matte – egal ob Einsteiger oder Wettkämpfer.</p>
    </div>
    <div class="footer-col">
      <h4>Sport</h4>
      <ul>
        <li><a href="judo.html">Judo</a></li>
        <li><a href="jiujitsu.html">Jiu-Jitsu</a></li>
        <li><a href="trainer.html">Trainer</a></li>
        <li><a href="galerie.html">Galerie</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Verein</h4>
      <ul>
        <li><a href="vorstand.html">Vorstand</a></li>
        <li><a href="neuigkeiten.html">Neuigkeiten</a></li>
        <li><a href="aufnahmeantrag.html">Mitglied werden</a></li>
        <li><a href="satzung.html">Satzung</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Rechtliches</h4>
      <ul>
        <li><a href="kontakt.html">Kontakt</a></li>
        <li><a href="impressum.html">Impressum</a></li>
        <li><a href="datenschutz.html">Datenschutz</a></li>
        <li><a href="mitglieder.html">Mitgliederbereich</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© <span id="yr"></span> Judoverein Kodokan Olsberg e.V.</span>
    <span><a href="impressum.html">Impressum</a> · <a href="datenschutz.html">Datenschutz</a></span>
  </div>
</footer>`;

  // Inject nav
  const navEl = document.getElementById('nav-root');
  if (navEl) navEl.innerHTML = NAV;

  // Inject footer
  const ftEl = document.getElementById('footer-root');
  if (ftEl) ftEl.innerHTML = FOOTER;

  // Set year
  const yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Highlight active link
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Mobile burger
  document.addEventListener('click', e => {
    const burger = document.getElementById('burger');
    const links  = document.getElementById('navLinks');
    if (!burger || !links) return;
    if (burger.contains(e.target)) {
      const open = links.classList.toggle('open');
      burger.classList.toggle('open', open);
    } else if (!links.contains(e.target)) {
      links.classList.remove('open');
      burger.classList.remove('open');
    }
  });
})();
