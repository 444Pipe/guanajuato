/* ===== DATA ===== */
const P = 'statics/platos/';
const S = 'statics/sedes/';

const MENU = [
  { name:'Nachotes', cat:'compartir', tag:'Para compartir', price:'$32.000',
    desc:'Nachos cargados con carne, chorizo, maíz, queso y guacamole.',
    img:P+'SaveClip.App_650246199_18567873025010278_7187009439911010806_n.jpg' },
  { name:'Tacada', cat:'compartir', tag:'Para compartir', price:'$45.000', featured:true,
    desc:'Tabla para armar tus tacos a tu gusto. ¡Ideal para compartir!',
    img:P+'SaveClip.App_656282834_18570832528010278_579436529082602721_n.jpg' },
  { name:'Esquites', cat:'compartir', tag:'Antojito', price:'$14.000', featured:true,
    desc:'El clásico antojito mexicano de maíz, queso, limón y chile.',
    img:P+'SaveClip.App_649227326_18567872989010278_3614516681370008924_n.jpg' },
  { name:'Tacos de Canasta', cat:'tacos', tag:'Tacos', price:'$24.000',
    desc:'Cinco tacos de papa, chorizo, carne y chicharrón. ¡Perfectos para empezar!',
    img:P+'SaveClip.App_656282924_18570832549010278_758364555144000054_n.jpg' },
  { name:'Tacos de Lengua', cat:'tacos', tag:'Tacos', price:'$28.000',
    desc:'Suaves tacos de lengua con aguacate y salsas de la casa.',
    img:P+'SaveClip.App_655340405_18570832546010278_8759353466225816035_n.jpg' },
  { name:'Alambre Norteño', cat:'tacos', tag:'Fuerte', price:'$34.000',
    desc:'Carne, tocineta, piña y queso fundido. Servido con tortillas.',
    img:P+'SaveClip.App_650085909_18567873034010278_1170465064401081589_n.jpg' },
  { name:'Aguachile', cat:'especiales', tag:'Del mar', price:'$38.000', featured:true,
    desc:'Camarón fresco, pepino, aguacate y piña. Sabores frescos y del mar.',
    img:P+'SaveClip.App_650195197_18567873022010278_1124730146563258243_n.jpg' },
  { name:'Sopa de Tortilla', cat:'especiales', tag:'Especial', price:'$22.000',
    desc:'Caldo tradicional con tiras de tortilla, pollo, aguacate y queso.',
    img:P+'SaveClip.App_650241310_18567873004010278_114144046416051160_n.jpg' },
  { name:'Menú Infantil', cat:'especiales', tag:'Para peques', price:'$18.000',
    desc:'Nuestra hamburguesa mexicana, la preferida de los más pequeños.',
    img:P+'SaveClip.App_654867046_18570832537010278_7675435655870156395_n.jpg' },
  { name:'Churros con Helado', cat:'postres', tag:'Postre', price:'$16.000',
    desc:'Churros crujientes con helado y salsas dulces. ¡Todos los van a amar!',
    img:P+'SaveClip.App_655229128_18570832567010278_3299657541624088759_n.jpg' },
  { name:'Tarta de Coco', cat:'postres', tag:'Postre', price:'$15.000',
    desc:'Para tardear con algo dulce, acompañada de café cubano.',
    img:P+'SaveClip.App_651027555_18567873043010278_4808334977122541072_n.jpg' },
  { name:'Cantarito', cat:'bebidas', tag:'Cóctel', price:'$20.000',
    desc:'Un clásico mexicano que nunca falla. Tequila, cítricos y chile.',
    img:P+'SaveClip.App_656025914_18570832558010278_9016923115243676881_n.jpg' },
  { name:'Piña Colada', cat:'bebidas', tag:'Cóctel', price:'$19.000',
    desc:'Si tus favoritos son los cócteles tropicales, esta es la tuya.',
    img:P+'SaveClip.App_651039575_18567873052010278_1590873070363794556_n.jpg' },
];

/* Cada sede apunta a su carta de Genially */
const CARTAS = {
  primavera: { label:'CC Primavera Urbana', sub:'y La Octava', url:'https://view.genially.com/61d3142c4917b90d6cac6225' },
  viva:      { label:'CC Viva', sub:'food court', url:'https://view.genially.com/6145f806a8a5b40d9dbc3504' },
};

const SEDES = [
  { name:'CC Primavera Urbana', carta:'primavera', reserva:'primavera',
    place:'C.C. Primavera Urbana', hours:'Todos los días · 12:00 m – 10:00 pm',
    img:S+'SaveClip.App_610882844_18548859271010278_5635090669440350077_n.jpg',
    map:'https://www.google.com/maps/search/?api=1&query=Guanajuato+Restaurante+CC+Primavera+Urbana+Villavicencio' },
  { name:'La Octava', carta:'primavera', reserva:'octava',
    place:'Calle 15 #37F-38, Local 7', hours:'Lun–Sáb 12 m–10 pm · Dom 12 m–9 pm',
    img:S+'SaveClip.App_610885035_18548859262010278_505591686490966492_n.jpg',
    map:'https://www.google.com/maps/search/?api=1&query=Guanajuato+Restaurante+Calle+15+37F-38+Villavicencio' },
  { name:'CC Viva', carta:'viva',
    place:'C.C. Viva · zona de comidas', hours:'Todos los días · 11:00 am – 9:00 pm',
    img:S+'SaveClip.App_611677153_18548859259010278_6624572115084318275_n.jpg',
    map:'https://www.google.com/maps/search/?api=1&query=Guanajuato+Restaurante+CC+Viva+Villavicencio' },
];

const WA = 'https://wa.me/573053701859?text=';

/* ===== RENDER MENU (solo destacados) ===== */
const grid = document.getElementById('menuGrid');
function renderMenu(){
  grid.innerHTML = '';
  MENU.filter(m => m.featured).forEach(m=>{
    const i = MENU.indexOf(m);
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div class="card__img">
        <span class="card__tag">${m.tag}</span>
        <img src="${m.img}" alt="${m.name}" loading="lazy">
      </div>
      <div class="card__body">
        <h3>${m.name}</h3>
        <p>${m.desc}</p>
        <div class="card__foot">
          <span class="card__price">${m.price}</span>
          <button class="card__order" data-order-add="${i}">Agregar al pedido <svg class="ic ic--stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button>
        </div>
      </div>`;
    grid.appendChild(el);
  });
  observeCards();
}

/* ===== RENDER SEDES ===== */
const sedesGrid = document.getElementById('sedesGrid');
SEDES.forEach(s=>{
  const el = document.createElement('article');
  el.className = 'sede';
  el.innerHTML = `
    <img src="${s.img}" alt="${s.name}" loading="lazy">
    <div class="sede__overlay">
      <span class="sede__pin"><svg class="ic ic--stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> ${s.place}</span>
      <h3>${s.name}</h3>
      <p class="sede__hours"><svg class="ic ic--stroke" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg> ${s.hours}</p>
      <div class="sede__btns">
        ${s.reserva ? `<button class="sede__btn sede__btn--reserva" data-reserva="${s.reserva}">Reservar</button>` : ''}
        <a class="sede__btn sede__btn--carta" href="${CARTAS[s.carta].url}" target="_blank" rel="noopener">Ver carta</a>
        <a class="sede__btn" href="${s.map}" target="_blank" rel="noopener">Cómo llegar →</a>
      </div>
    </div>`;
  sedesGrid.appendChild(el);
});


/* ===== SCROLL REVEAL ===== */
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
},{threshold:.12, rootMargin:'0px 0px -60px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

function observeCards(){
  document.querySelectorAll('.card:not(.in),.sede:not(.in)').forEach((el,i)=>{
    el.style.transitionDelay = (i % 4 * 0.07) + 's';
    io.observe(el);
  });
}

/* ===== NAV ===== */
const nav = document.getElementById('nav');
addEventListener('scroll', ()=> nav.classList.toggle('scrolled', scrollY > 60));

const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', ()=> navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navLinks.classList.remove('open')));

/* ===== EFECTOS DE SCROLL (parallax + progreso) ===== */
const heroBg = document.getElementById('heroBg');
const heroContent = document.querySelector('.hero__content');
const progress = document.getElementById('scrollProgress');
let ticking = false;

function onScroll(){
  const y = scrollY, vh = innerHeight;

  // barra de progreso
  if(progress){
    const max = document.documentElement.scrollHeight - vh;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
  }

  // parallax del fondo + fade/parallax del contenido del hero
  if(y < vh){
    if(heroBg) heroBg.style.transform = `scale(1.1) translateY(${y * 0.18}px)`;
    if(heroContent){
      heroContent.style.transform = `translateY(${y * 0.25}px)`;
      heroContent.style.opacity = Math.max(0, 1 - y / vh * 1.15);
    }
  }
  ticking = false;
}

addEventListener('scroll', ()=>{
  if(!ticking){ requestAnimationFrame(onScroll); ticking = true; }
}, {passive:true});
onScroll();

/* ===== DOMICILIOS (estilo Rappi) ===== */
const ORDER = (() => {
  const cart = {};            // índice de MENU -> cantidad
  let step = 'menu';          // 'menu' | 'checkout'
  let activeCat = 'all';

  const CATS = [
    { k:'all',         label:'Todo' },
    { k:'compartir',   label:'Para compartir' },
    { k:'tacos',       label:'Tacos' },
    { k:'especiales',  label:'Especiales' },
    { k:'postres',     label:'Postres' },
    { k:'bebidas',     label:'Bebidas' },
  ];

  const price = s => Number(String(s).replace(/[^\d]/g, ''));
  const fmt   = n => '$' + n.toLocaleString('es-CO');
  const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
  const total = () => Object.entries(cart).reduce((a, [i, q]) => a + price(MENU[i].price) * q, 0);

  /* ---- construir el modal ---- */
  const root = document.createElement('div');
  root.className = 'order';
  root.id = 'order';
  root.innerHTML = `
    <div class="order__backdrop" data-close></div>
    <div class="order__panel" role="dialog" aria-modal="true" aria-label="Pedido a domicilio">
      <header class="order__head">
        <div>
          <h3>Pide a domicilio</h3>
          <p class="order__sede"><svg class="ic ic--stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> Solo sede La Octava · Calle 15 #37F-38, Local 7</p>
        </div>
        <button class="order__close" data-close aria-label="Cerrar">✕</button>
      </header>
      <div class="order__view" id="orderMenu">
        <div class="order__tabs" id="orderTabs"></div>
        <div class="order__scroll" id="orderList"></div>
      </div>
      <div class="order__view" id="orderCo" hidden>
        <div class="order__scroll" id="orderCoBody"></div>
      </div>
      <footer class="order__bar"><button class="order__cta" id="orderCta"></button></footer>
    </div>`;
  document.body.appendChild(root);

  const $ = id => root.querySelector('#' + id);
  const tabsEl = $('orderTabs'), listEl = $('orderList'),
        coBody = $('orderCoBody'), cta = $('orderCta'),
        menuView = $('orderMenu'), coView = $('orderCo');

  /* ---- tabs de categorías ---- */
  tabsEl.innerHTML = CATS.map(c =>
    `<button data-cat="${c.k}">${c.label}</button>`).join('');

  function stepper(i, q) {
    return `<div class="ostep">
      <button data-dec="${i}" aria-label="Quitar uno">−</button>
      <span>${q}</span>
      <button data-inc="${i}" aria-label="Agregar uno">+</button>
    </div>`;
  }

  /* ---- render lista de productos ---- */
  function renderList() {
    tabsEl.querySelectorAll('button').forEach(b =>
      b.classList.toggle('active', b.dataset.cat === activeCat));
    listEl.innerHTML = MENU
      .map((m, i) => ({ m, i }))
      .filter(({ m }) => activeCat === 'all' || m.cat === activeCat)
      .map(({ m, i }) => {
        const q = cart[i] || 0;
        return `<div class="oitem">
          <img src="${m.img}" alt="${m.name}" loading="lazy">
          <div class="oitem__info">
            <h4>${m.name}</h4>
            <p>${m.desc}</p>
            <span class="oitem__price">${m.price}</span>
          </div>
          <div class="oitem__act">
            ${q > 0 ? stepper(i, q) : `<button class="oadd" data-inc="${i}">Agregar</button>`}
          </div>
        </div>`;
      }).join('');
  }

  function cartLinesHTML() {
    return Object.entries(cart).map(([i, q]) => `
      <div class="co__line">
        ${stepper(i, q)}
        <span class="nm">${MENU[i].name}</span>
        <span class="pr">${fmt(price(MENU[i].price) * q)}</span>
      </div>`).join('');
  }

  /* actualiza solo las líneas y el total (sin tocar el formulario) */
  function updateCoLines() {
    const lines = root.querySelector('#coLines');
    const tot = root.querySelector('#coTotal');
    if (lines) lines.innerHTML = cartLinesHTML();
    if (tot) tot.textContent = fmt(total());
  }

  /* ---- render carrito + formulario (estructura completa) ---- */
  function renderCheckout() {
    coBody.innerHTML = `
      <button class="co__back" data-back>← Volver al menú</button>
      <h3 class="co__h">Tu pedido</h3>
      <div id="coLines">${cartLinesHTML()}</div>
      <div class="co__total"><span>Subtotal</span><span id="coTotal">${fmt(total())}</span></div>
      <p class="co__note">El valor del domicilio se confirma por WhatsApp según tu ubicación. 🛵</p>

      <form class="co__form" id="coForm" novalidate>
        <h3 class="co__h">Datos de entrega</h3>
        <label for="coName">Nombre completo *</label>
        <input id="coName" type="text" autocomplete="name" placeholder="Tu nombre">
        <label for="coTel">Teléfono / Celular *</label>
        <input id="coTel" type="tel" autocomplete="tel" placeholder="3xx xxx xxxx">
        <label for="coDir">Dirección *</label>
        <input id="coDir" type="text" placeholder="Calle, carrera, # casa/apto">
        <label for="coBarrio">Barrio / Punto de referencia</label>
        <input id="coBarrio" type="text" placeholder="Ej: Barrio La Esperanza, frente al parque">
        <label for="coPago">Método de pago</label>
        <select id="coPago">
          <option>Efectivo</option>
          <option>Nequi</option>
          <option>Daviplata</option>
          <option>Transferencia / Bancolombia</option>
        </select>
        <label for="coCambio">Si pagas en efectivo, ¿con cuánto pagas?</label>
        <input id="coCambio" type="text" placeholder="Ej: $100.000 (opcional)">
        <label for="coNotas">Notas adicionales</label>
        <textarea id="coNotas" placeholder="Sin cebolla, salsa extra, etc."></textarea>
      </form>`;
  }

  /* ---- barra inferior ---- */
  function renderBar() {
    if (step === 'menu') {
      const empty = count() === 0;
      cta.disabled = empty;
      cta.innerHTML = empty
        ? 'Agrega productos a tu pedido'
        : `<span>Ver mi pedido<span class="count">${count()}</span></span><span>${fmt(total())}</span>`;
    } else {
      cta.disabled = count() === 0;
      cta.innerHTML = `<span>Enviar pedido por WhatsApp</span><span>${fmt(total())}</span>`;
    }
  }

  /* refresca sin reconstruir el formulario */
  function refresh() {
    renderList();
    if (step === 'checkout') updateCoLines();
    renderBar();
  }

  function showStep() {
    menuView.hidden = step !== 'menu';
    coView.hidden   = step !== 'checkout';
    renderList();
    if (step === 'checkout') renderCheckout();
    renderBar();
  }

  /* ---- acciones del carrito ---- */
  function inc(i) { cart[i] = (cart[i] || 0) + 1; refresh(); }
  function dec(i) {
    if (cart[i]) { cart[i]--; if (cart[i] <= 0) delete cart[i]; }
    if (step === 'checkout' && count() === 0) { step = 'menu'; showStep(); return; }
    refresh();
  }

  /* ---- enviar a WhatsApp ---- */
  function send() {
    if (count() === 0) return;
    const v = id => (root.querySelector('#' + id) || {}).value || '';
    const name = root.querySelector('#coName');
    const tel  = root.querySelector('#coTel');
    const dir  = root.querySelector('#coDir');

    let ok = true;
    [name, tel, dir].forEach(f => {
      const bad = !f.value.trim();
      f.classList.toggle('err', bad);
      if (bad) ok = false;
    });
    if (!ok) { (name.value ? (tel.value ? dir : tel) : name).focus(); return; }

    const pago = v('coPago'), cambio = v('coCambio').trim(),
          barrio = v('coBarrio').trim(), notas = v('coNotas').trim();

    let msg = `🌮 *NUEVO PEDIDO – Guanajuato* 🌮\n`;
    msg += `📍 Sede La Octava (Calle 15 #37F-38, Local 7)\n\n`;
    msg += `*🛒 Mi pedido:*\n`;
    Object.entries(cart).forEach(([i, q]) => {
      msg += `• ${q}x ${MENU[i].name} — ${fmt(price(MENU[i].price) * q)}\n`;
    });
    msg += `\n*Subtotal: ${fmt(total())}*\n`;
    msg += `_El valor del domicilio se confirma según mi ubicación._\n\n`;
    msg += `👤 *Datos de entrega*\n`;
    msg += `Nombre: ${name.value.trim()}\n`;
    msg += `Teléfono: ${tel.value.trim()}\n`;
    msg += `Dirección: ${dir.value.trim()}\n`;
    if (barrio) msg += `Barrio/Referencia: ${barrio}\n`;
    msg += `Pago: ${pago}`;
    if (pago === 'Efectivo' && cambio) msg += ` (paga con ${cambio})`;
    msg += `\n`;
    if (notas) msg += `Notas: ${notas}\n`;

    window.open(WA + encodeURIComponent(msg), '_blank', 'noopener');
  }

  /* ---- delegación de eventos ---- */
  root.addEventListener('click', e => {
    if (e.target.closest('[data-close]')) return close();
    const back = e.target.closest('[data-back]');
    if (back) { step = 'menu'; showStep(); return; }
    const tab = e.target.closest('[data-cat]');
    if (tab) { activeCat = tab.dataset.cat; renderList(); return; }
    const incEl = e.target.closest('[data-inc]');
    if (incEl) return inc(incEl.dataset.inc);
    const decEl = e.target.closest('[data-dec]');
    if (decEl) return dec(decEl.dataset.dec);
    if (e.target.closest('#orderCta')) {
      if (step === 'menu') { if (count() > 0) { step = 'checkout'; showStep(); } }
      else send();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && root.classList.contains('open')) close();
  });

  function open() {
    step = 'menu';
    showStep();
    root.classList.add('open');
    document.body.classList.add('no-scroll');
  }
  function close() {
    root.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  showStep();
  return { open, addAndOpen(i) { inc(i); open(); } };
})();

/* ---- abrir el pedido desde los botones de la página ---- */
document.querySelectorAll('[data-order]').forEach(el =>
  el.addEventListener('click', e => { e.preventDefault(); ORDER.open(); }));

/* ---- "Agregar al pedido" en las tarjetas del menú ---- */
grid.addEventListener('click', e => {
  const btn = e.target.closest('[data-order-add]');
  if (btn) ORDER.addAndOpen(btn.dataset.orderAdd);
});

/* ===== RESERVAS DE MESA ===== */
const RESERVA = (() => {
  const SEDES_R = [
    { key:'octava',    name:'La Octava',           tel:'573053701859' },
    { key:'primavera', name:'CC Primavera Urbana', tel:'573013614500' },
  ];

  // franjas horarias 12:30 pm – 9:00 pm cada 30 min
  const HORAS = [];
  for (let m = 12 * 60 + 30; m <= 21 * 60; m += 30) {
    const h = Math.floor(m / 60), mm = m % 60;
    const ampm = h >= 12 ? 'pm' : 'am';
    const h12 = ((h + 11) % 12) + 1;
    HORAS.push(`${h12}:${mm === 0 ? '00' : mm} ${ampm}`);
  }

  const OCASIONES = ['Solo a comer', 'Cumpleaños', 'Aniversario', 'Cita romántica',
    'Reunión familiar', 'Reunión de trabajo', 'Celebración / evento', 'Otra'];
  const DECOS = ['No, gracias', 'Sí — globos', 'Sí — torta o postre',
    'Sí — ambientación especial', 'Sí — cuéntanos los detalles'];

  const root = document.createElement('div');
  root.className = 'order';
  root.id = 'reserva';
  root.innerHTML = `
    <div class="order__backdrop" data-rclose></div>
    <div class="order__panel" role="dialog" aria-modal="true" aria-label="Reservar mesa">
      <header class="order__head">
        <div>
          <h3>Reserva tu mesa</h3>
          <p class="order__sede"><svg class="ic ic--stroke" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> Horario de atención · 12:30 – 9:30 pm</p>
        </div>
        <button class="order__close" data-rclose aria-label="Cerrar">✕</button>
      </header>
      <div class="order__scroll">
        <form class="co__form" id="reservaForm" novalidate>
          <label for="rSede">¿En qué sede? *</label>
          <select id="rSede">
            <option value="">Elige una sede…</option>
            ${SEDES_R.map(s => `<option value="${s.key}">${s.name}</option>`).join('')}
          </select>
          <div class="co__row">
            <div>
              <label for="rFecha">Fecha *</label>
              <input id="rFecha" type="date">
            </div>
            <div>
              <label for="rHora">Hora *</label>
              <select id="rHora"><option value="">--</option>${HORAS.map(h => `<option>${h}</option>`).join('')}</select>
            </div>
          </div>
          <label for="rPers">¿Cuántas personas? *</label>
          <input id="rPers" type="number" min="1" max="60" inputmode="numeric" placeholder="Ej: 4">
          <label for="rOcasion">¿Para qué ocasión es?</label>
          <select id="rOcasion">${OCASIONES.map(o => `<option>${o}</option>`).join('')}</select>
          <label for="rDeco">¿Necesitas decoración?</label>
          <select id="rDeco">${DECOS.map(d => `<option>${d}</option>`).join('')}</select>
          <label for="rDetalle">Detalles de la ocasión / decoración</label>
          <textarea id="rDetalle" placeholder="Ej: cumpleaños de mi mamá, globos dorados, letrero de feliz cumpleaños…"></textarea>
          <label for="rNombre">Nombre completo *</label>
          <input id="rNombre" type="text" autocomplete="name" placeholder="Tu nombre">
          <label for="rTel">Teléfono / Celular *</label>
          <input id="rTel" type="tel" autocomplete="tel" placeholder="3xx xxx xxxx">
          <label for="rNotas">Notas adicionales</label>
          <textarea id="rNotas" placeholder="Mesa cerca a la ventana, silla para bebé, etc."></textarea>
        </form>
      </div>
      <footer class="order__bar">
        <button class="order__cta" id="rCta"><span>Reservar por WhatsApp</span></button>
      </footer>
    </div>`;
  document.body.appendChild(root);

  const q = id => root.querySelector('#' + id);

  // la fecha no puede ser anterior a hoy
  const fechaEl = q('rFecha');
  const hoy = new Date();
  hoy.setMinutes(hoy.getMinutes() - hoy.getTimezoneOffset());
  fechaEl.min = hoy.toISOString().split('T')[0];

  function send() {
    const sede = q('rSede'), f = q('rFecha'), h = q('rHora'),
          pers = q('rPers'), nombre = q('rNombre'), tel = q('rTel');

    let ok = true, first = null;
    [sede, f, h, pers, nombre, tel].forEach(el => {
      const bad = !el.value.trim();
      el.classList.toggle('err', bad);
      if (bad) { ok = false; if (!first) first = el; }
    });
    if (!ok) { first.focus(); return; }

    const sObj = SEDES_R.find(s => s.key === sede.value);
    const ocasion = q('rOcasion').value, deco = q('rDeco').value,
          detalle = q('rDetalle').value.trim(), notas = q('rNotas').value.trim();

    let msg = `🗓️ *NUEVA RESERVA – Guanajuato* 🗓️\n`;
    msg += `📍 Sede: ${sObj.name}\n\n`;
    msg += `📅 Fecha: ${f.value}\n`;
    msg += `🕐 Hora: ${h.value}\n`;
    msg += `👥 Personas: ${pers.value}\n`;
    msg += `🎉 Ocasión: ${ocasion}\n`;
    msg += `🎈 Decoración: ${deco}\n`;
    if (detalle) msg += `📝 Detalles: ${detalle}\n`;
    msg += `\n👤 A nombre de: ${nombre.value.trim()}\n`;
    msg += `📞 Teléfono: ${tel.value.trim()}\n`;
    if (notas) msg += `Notas: ${notas}\n`;

    window.open(`https://wa.me/${sObj.tel}?text=` + encodeURIComponent(msg), '_blank', 'noopener');
  }

  root.addEventListener('click', e => {
    if (e.target.closest('[data-rclose]')) return close();
    if (e.target.closest('#rCta')) send();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && root.classList.contains('open')) close();
  });

  function open(sedeKey) {
    if (sedeKey) q('rSede').value = sedeKey;
    root.classList.add('open');
    document.body.classList.add('no-scroll');
  }
  function close() {
    root.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
  return { open };
})();

/* ---- abrir reservas desde los botones de la página ---- */
document.querySelectorAll('[data-reserva]').forEach(el =>
  el.addEventListener('click', e => { e.preventDefault(); RESERVA.open(el.dataset.reserva || ''); }));

/* ===== VIDEO NOSOTROS · SONIDO ===== */
const aboutVideo = document.getElementById('aboutVideo');
const aboutSound = document.getElementById('aboutSound');
if (aboutVideo && aboutSound) {
  const IC_MUTED = `<svg class="ic ic--stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m17 9 5 6M22 9l-5 6"/></svg>`;
  const IC_ON    = `<svg class="ic ic--stroke" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14"/></svg>`;

  const paint = () => {
    aboutSound.innerHTML = aboutVideo.muted ? IC_MUTED : IC_ON;
    aboutSound.setAttribute('aria-label', aboutVideo.muted ? 'Activar sonido' : 'Silenciar');
  };
  paint();

  aboutSound.addEventListener('click', () => {
    aboutVideo.muted = !aboutVideo.muted;
    if (!aboutVideo.muted) { aboutVideo.volume = 1; aboutVideo.play().catch(() => {}); }
    paint();
  });
}

/* ===== INIT ===== */
renderMenu();
