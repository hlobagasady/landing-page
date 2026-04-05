/* ============================
   LandingKu — main.js
   ============================ */

// ─── Navbar: Add shadow on scroll ───────────────────────────────────────────
(function initNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;

  const onScroll = () => {
    if (window.scrollY > 10) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load
})();


// ─── Smooth anchor scrolling for nav links ──────────────────────────────────
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = document.querySelector('nav')?.offsetHeight || 64;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 8;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });
})();


// ─── Scroll reveal: elements with class "reveal" ───────────────────────────
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // fire once only
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealEls.forEach(el => observer.observe(el));
})();


// ─── Auto-reveal all major sections on scroll ───────────────────────────────
(function initSectionReveal() {
  // Add reveal class to problem cards, offer cards, portfolio cards
  const selectors = [
    '.problem-card',
    '.offer-card',
    '.portfolio-card',
    '.flow-step',
  ];

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
  });

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  });
})();


// ─── WhatsApp number: set once globally ─────────────────────────────────────
// If you want to quickly update the WA number across the whole site,
// edit WA_NUMBER below and it will update all WA links automatically.
(function updateWALinks() {
  const WA_NUMBER = '6285718102378'; // <- Ganti nomor WA Anda di sini

  document.querySelectorAll('a[href^="https://wa.me/"]').forEach(link => {
    const url = new URL(link.href);
    const text = url.searchParams.get('text') || '';
    link.href = `https://wa.me/${WA_NUMBER}${text ? '?text=' + encodeURIComponent(decodeURIComponent(text)) : ''}`;
  });
})();


// ─── Active nav link highlight based on scroll position ─────────────────────
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  const highlight = () => {
    const scrollY = window.scrollY;
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('text-primary', 'font-semibold');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-primary', 'font-semibold');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlight, { passive: true });
})();
