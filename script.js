 /* ── NAV scroll ── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── Hamburger ── */
  function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'fixed';
    nav.style.top = '60px'; nav.style.right = '1.5rem';
    nav.style.background = 'rgba(26,23,20,.96)';
    nav.style.padding = '1.5rem 2rem';
    nav.style.gap = '1.2rem';
  }

  /* ── MENU DATA ── */
  const platos = [
    { cat: 'entrada', nombre: 'Causa Limeña', desc: 'Capas de papa amarilla, atún y mayonesa, con un toque de limón y ají amarillo.', precio: 'S/. 28', badge: 'Favorito', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80' },
    { cat: 'entrada', nombre: 'Ceviche Clásico', desc: 'Pescado fresco marinado en leche de tigre, acompañado de choclo y camote.', precio: 'S/. 38', badge: 'Estrella', img: 'https://images.unsplash.com/photo-1535400255456-984ebb64767d?w=600&q=80' },
    { cat: 'entrada', nombre: 'Anticuchos', desc: 'Brochetas de corazón de res a la brasa con salsa de maní y ají panca.', precio: 'S/. 32', badge: '', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80' },
    { cat: 'principal', nombre: 'Lomo Saltado', desc: 'Tierno lomo de res salteado con cebolla, tomate, sillao y papas fritas.', precio: 'S/. 55', badge: 'Top', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
    { cat: 'principal', nombre: 'Arroz con Leche', desc: 'Pollo a la brasa con chimichurri, papas doradas y ensalada criolla.', precio: 'S/. 48', badge: '', img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80' },
    { cat: 'principal', nombre: 'Chaufa Especial', desc: 'Arroz frito al wok con pollo, mariscos, huevo y sillao peruano.', precio: 'S/. 42', badge: '', img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80' },
    { cat: 'postre', nombre: 'Suspiro Limeño', desc: 'Crema de manjar blanco con merengue de oporto y canela al gusto.', precio: 'S/. 18', badge: 'Clásico', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80' },
    { cat: 'postre', nombre: 'Picarones', desc: 'Buñuelos de zapallo y camote con miel de chancaca y anís.', precio: 'S/. 16', badge: '', img: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80' },
    { cat: 'bebida', nombre: 'Pisco Sour', desc: 'El cóctel bandera del Perú: pisco, limón, jarabe, clara de huevo y angostura.', precio: 'S/. 22', badge: 'Imperdible', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80' },
    { cat: 'bebida', nombre: 'Chicha Morada', desc: 'Bebida artesanal de maíz morado con piña, membrillo, canela y clavo.', precio: 'S/. 12', badge: '', img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600&q=80' },
  ];

  function renderMenu(cat) {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';
    platos.forEach(p => {
      if (cat !== 'todo' && p.cat !== cat) return;
      const card = document.createElement('div');
      card.className = 'menu-card visible reveal';
      card.innerHTML = `
        <img class="menu-card-img" src="${p.img}" alt="${p.nombre}" loading="lazy"/>
        <div class="menu-card-body">
          <div class="menu-card-cat">${p.cat}</div>
          <div class="menu-card-name">${p.nombre}</div>
          <div class="menu-card-desc">${p.desc}</div>
          <div class="menu-card-footer">
            <span class="menu-price">${p.precio}</span>
            ${p.badge ? `<span class="menu-badge">${p.badge}</span>` : ''}
          </div>
        </div>`;
      grid.appendChild(card);
    });
    observeReveal();
  }

  function filterMenu(cat) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    renderMenu(cat);
  }

  /* ── TESTIMONIOS ── */
  const testimonios = [
    { text: 'El mejor ceviche que he probado en toda Lima. Fresco, picante y con una leche de tigre que te deja sin palabras. ¡Ya somos clientes de por vida!', author: 'María Quispe', role: 'Cliente frecuente', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', stars: 5 },
    { text: 'La atención fue excepcional. El ambiente es cálido y el lomo saltado llegó perfectamente sazonado. Definitivamente el mejor restaurante del barrio.', author: 'Carlos Mendoza', role: 'Empresario, Miraflores', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', stars: 5 },
    { text: 'Celebramos el cumpleaños de mi mamá aquí y fue mágico. Los anticuchos y el suspiro limeño de postre: perfección pura. ¡Gracias por el recuerdo!', author: 'Sofía Vargas', role: 'Food blogger', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', stars: 5 },
    { text: 'Vine de visita a Lima y un amigo me recomendó este lugar. No me arrepiento nada. El pisco sour y el chaufa especial fueron absolutamente increíbles.', author: 'Andrés Torres', role: 'Viajero, Bogotá', avatar: 'https://randomuser.me/api/portraits/men/56.jpg', stars: 5 },
  ];

  let currentSlide = 0;
  function renderTestimonios() {
    const slider = document.getElementById('testimoniosSlider');
    const dots = document.getElementById('sliderDots');
    slider.innerHTML = '';
    dots.innerHTML = '';
    testimonios.forEach((t, i) => {
      const div = document.createElement('div');
      div.className = 'testimonio' + (i === 0 ? ' active' : '');
      div.innerHTML = `
        <div class="testimonio-quote">"</div>
        <p class="testimonio-text">${t.text}</p>
        <div class="testimonio-author">
          <img class="testimonio-avatar" src="${t.avatar}" alt="${t.author}"/>
          <div class="stars">${'★'.repeat(t.stars)}</div>
          <span class="testimonio-name">${t.author}</span>
          <span class="testimonio-role">${t.role}</span>
        </div>`;
      slider.appendChild(div);
      const dot = document.createElement('button');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.onclick = () => goToSlide(i);
      dots.appendChild(dot);
    });
  }

  function goToSlide(n) {
    const slides = document.querySelectorAll('.testimonio');
    const dots = document.querySelectorAll('.dot');
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  setInterval(() => goToSlide((currentSlide + 1) % testimonios.length), 5000);

  /* ── SCROLL REVEAL ── */
  function observeReveal() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  }

  /* ── INIT ── */
  renderMenu('todo');
  renderTestimonios();
  observeReveal();