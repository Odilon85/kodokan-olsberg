/* Scroll animations + misc interactions */
document.addEventListener('DOMContentLoaded', () => {
  // Scroll-reveal for cards
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.card, .team-card, .news-card, .sport-split, .form-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity .45s ease, transform .45s ease';
    io.observe(el);
  });

  // Navbar scroll tint
  const nav = document.querySelector('nav');
  if (nav) {
    const onScroll = () => {
      nav.style.borderBottomColor = window.scrollY > 60
        ? 'rgba(204,0,0,.25)'
        : 'var(--border)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Simple contact form handler
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('[type=submit]');
      btn.textContent = '✓ Nachricht gesendet';
      btn.disabled = true;
      btn.style.background = '#166534';
    });
  }

  // Membership form handler
  const appForm = document.getElementById('appForm');
  if (appForm) {
    appForm.addEventListener('submit', e => {
      e.preventDefault();
      appForm.innerHTML = `
        <div style="text-align:center;padding:2rem">
          <div style="font-size:3rem;margin-bottom:1rem">✓</div>
          <h3 style="font-size:1.4rem;margin-bottom:.5rem">Antrag eingegangen!</h3>
          <p style="color:var(--text-muted)">Wir melden uns in Kürze bei dir. Willkommen im Kodokan Olsberg!</p>
        </div>`;
    });
  }

  // Gallery lightbox
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img')?.src;
      if (!src) return;
      const overlay = document.createElement('div');
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.9);display:flex;align-items:center;justify-content:center;z-index:9999;cursor:pointer';
      const img = document.createElement('img');
      img.src = src;
      img.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px';
      overlay.appendChild(img);
      overlay.addEventListener('click', () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });
});
