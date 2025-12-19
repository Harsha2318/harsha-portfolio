// Smooth scroll for in-page anchors
(function () {
  const links = document.querySelectorAll('a[href^="#"]');
  for (const link of links) {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
})();

// Theme toggle (dark/light)
(function () {
  const btn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'light') document.body.classList.add('light');
  btn?.addEventListener('click', () => {
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });
})();

// Footer year
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();

console.log('Portfolio loaded successfully');

// Scroll-reveal animations
(function () {
  const elements = document.querySelectorAll('.reveal');
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    for (const el of elements) el.classList.add('is-visible');
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { root: null, threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
  for (const el of elements) observer.observe(el);
})();

// Render projects from JSON
(function () {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  fetch('assets/projects.json')
    .then((r) => r.json())
    .then((projects) => {
      const frag = document.createDocumentFragment();
      projects.forEach((proj, i) => {
        const card = document.createElement('article');
        card.className = 'card reveal';
        card.style.setProperty('--delay', `${0.3 + i * 0.05}s`);
        const h3 = document.createElement('h3');
        h3.textContent = proj.title;
        const p = document.createElement('p');
        p.textContent = proj.description;
        const badges = document.createElement('div');
        badges.className = 'badges';
        (proj.badges || []).forEach((b) => {
          const span = document.createElement('span');
          span.className = 'badge';
          span.innerHTML = `${b.icon ? `<span class="icon">${b.icon}</span>` : ''}${b.label}`;
          badges.appendChild(span);
        });
        const actions = document.createElement('div');
        actions.className = 'card-actions';
        (proj.links || []).forEach((l) => {
          const a = document.createElement('a');
          a.className = 'btn small';
          a.href = l.url;
          a.target = '_blank';
          a.rel = 'noopener';
          a.textContent = l.label;
          actions.appendChild(a);
        });
        card.append(h3, p, badges, actions);
        frag.appendChild(card);
      });
      grid.appendChild(frag);
      // Re-run reveal observer for newly added cards
      const newlyAdded = grid.querySelectorAll('.reveal');
      const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduceMotion) {
        newlyAdded.forEach((el) => el.classList.add('is-visible'));
      } else {
        const observer = new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          }
        }, { threshold: 0.1 });
        newlyAdded.forEach((el) => observer.observe(el));
      }
    })
    .catch((err) => {
      console.warn('Projects JSON load failed:', err);
    });
})();

// Scrollspy: highlight active nav link
(function () {
  const sections = document.querySelectorAll('main .section');
  const links = document.querySelectorAll('.nav-links a');
  const linkMap = new Map();
  links.forEach((a) => linkMap.set(a.getAttribute('href'), a));
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = `#${entry.target.id}`;
      const link = linkMap.get(id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { root: null, threshold: 0.6 });
  sections.forEach((sec) => spy.observe(sec));
})();