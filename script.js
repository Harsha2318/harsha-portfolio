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
        card.className = 'card reveal tilt';
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
        const glare = document.createElement('span');
        glare.className = 'glare';
        glare.setAttribute('aria-hidden','true');
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
        card.append(glare, h3, p, badges, actions);
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

// Enhanced 3D Tilt interactions with pastel glare
(function () {
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouch = 'ontouchstart' in window || (navigator.maxTouchPoints || 0) > 0;
  if (reduceMotion || isTouch) return;
  const maxTilt = 18; // increased degrees for more dramatic effect
  const lerp = 0.12; // smoother interpolation

  function ensureState(el) {
    if (el.__tilt) return;
    el.__tilt = { rx: 0, ry: 0, tx: 0, ty: 0, raf: null };
  }
  function animate(el) {
    const t = el.__tilt;
    function step() {
      t.rx += (t.tx - t.rx) * lerp;
      t.ry += (t.ty - t.ry) * lerp;
      el.style.transform = `perspective(1000px) rotateX(${t.rx.toFixed(2)}deg) rotateY(${t.ry.toFixed(2)}deg) translateZ(10px)`;
      if (Math.abs(t.tx - t.rx) > 0.01 || Math.abs(t.ty - t.ry) > 0.01) {
        t.raf = requestAnimationFrame(step);
      } else {
        t.raf = null;
      }
    }
    if (!t.raf) t.raf = requestAnimationFrame(step);
  }
  function onEnter(e) {
    const el = e.currentTarget; ensureState(el);
    el.style.willChange = 'transform';
    el.style.transition = 'box-shadow 0.3s ease';
  }
  function onMove(e) {
    const el = e.currentTarget; ensureState(el);
    const rect = el.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width; // 0..1
    const my = (e.clientY - rect.top) / rect.height; // 0..1
    const rx = (0.5 - my) * 2 * maxTilt; // -max..max
    const ry = (mx - 0.5) * 2 * maxTilt;
    el.__tilt.tx = rx;
    el.__tilt.ty = ry;
    el.style.setProperty('--mx', `${(mx * 100).toFixed(1)}%`);
    el.style.setProperty('--my', `${(my * 100).toFixed(1)}%`);
    animate(el);
  }
  function onLeave(e) {
    const el = e.currentTarget; ensureState(el);
    el.__tilt.tx = 0; el.__tilt.ty = 0;
    animate(el);
    setTimeout(() => { 
      el.style.willChange = ''; 
      el.style.transform = '';
    }, 200);
  }
  document.querySelectorAll('.tilt').forEach((el) => {
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
  });
})();

// 3D Animated pastel shapes background
(function () {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let shapes = [];
  let w = 0, h = 0;
  let time = 0;
  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  
  // Pastel colors palette
  const colors = [
    'rgba(167, 139, 250, 0.6)', // purple
    'rgba(244, 114, 182, 0.6)', // pink
    'rgba(96, 165, 250, 0.6)',  // blue
    'rgba(110, 231, 183, 0.6)', // mint
    'rgba(251, 191, 36, 0.6)',  // amber
    'rgba(252, 165, 165, 0.6)', // peach
  ];
  
  function resize() {
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = Math.floor(w * DPR);
    canvas.height = Math.floor(h * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    
    // Create 3D floating shapes
    const count = 15;
    shapes = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 0.5 + 0.5,
      size: Math.random() * 60 + 40,
      type: Math.floor(Math.random() * 3), // 0: circle, 1: square, 2: triangle
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02,
      floatOffset: Math.random() * Math.PI * 2,
    }));
  }
  
  function drawShape(shape, floatY) {
    ctx.save();
    const actualSize = shape.size * shape.z;
    ctx.translate(shape.x, shape.y + floatY);
    ctx.rotate(shape.rotation);
    ctx.globalAlpha = 0.4 + shape.z * 0.3;
    
    // Add shadow for depth
    ctx.shadowBlur = 20;
    ctx.shadowColor = shape.color;
    
    if (shape.type === 0) {
      // Circle
      ctx.beginPath();
      ctx.arc(0, 0, actualSize / 2, 0, Math.PI * 2);
      ctx.fillStyle = shape.color;
      ctx.fill();
    } else if (shape.type === 1) {
      // Rounded square
      const half = actualSize / 2;
      ctx.beginPath();
      ctx.roundRect(-half, -half, actualSize, actualSize, 10);
      ctx.fillStyle = shape.color;
      ctx.fill();
    } else {
      // Triangle
      const half = actualSize / 2;
      ctx.beginPath();
      ctx.moveTo(0, -half);
      ctx.lineTo(half, half);
      ctx.lineTo(-half, half);
      ctx.closePath();
      ctx.fillStyle = shape.color;
      ctx.fill();
    }
    
    ctx.restore();
  }
  
  function step() {
    time += 0.01;
    
    // Clear with gradient background
    const gradient = ctx.createRadialGradient(w * 0.5, h * 0.3, 0, w * 0.5, h * 0.3, Math.max(w, h) * 0.8);
    gradient.addColorStop(0, 'rgba(167, 139, 250, 0.05)');
    gradient.addColorStop(0.5, 'rgba(244, 114, 182, 0.03)');
    gradient.addColorStop(1, 'rgba(110, 231, 183, 0.02)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
    
    // Draw and update shapes
    for (const shape of shapes) {
      // Floating animation
      const floatY = Math.sin(time + shape.floatOffset) * 20;
      
      // Update position
      shape.x += shape.speedX * (1 + shape.z);
      shape.y += shape.speedY * (1 + shape.z);
      shape.rotation += shape.rotationSpeed;
      
      // Wrap around edges
      if (shape.x < -100) shape.x = w + 100;
      if (shape.x > w + 100) shape.x = -100;
      if (shape.y < -100) shape.y = h + 100;
      if (shape.y > h + 100) shape.y = -100;
      
      drawShape(shape, floatY);
    }
    
    // Draw connecting lines
    ctx.strokeStyle = 'rgba(167, 139, 250, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < shapes.length; i++) {
      for (let j = i + 1; j < shapes.length; j++) {
        const dx = shapes[i].x - shapes[j].x;
        const dy = shapes[i].y - shapes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          ctx.beginPath();
          ctx.moveTo(shapes[i].x, shapes[i].y);
          ctx.lineTo(shapes[j].x, shapes[j].y);
          ctx.globalAlpha = (1 - dist / 200) * 0.3;
          ctx.stroke();
        }
      }
    }
    
    requestAnimationFrame(step);
  }
  
  resize();
  step();
  window.addEventListener('resize', resize);
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