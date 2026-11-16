/* Rindhali Thoddoo — shared site script */
document.documentElement.classList.add('js');
(function(){
  /* ===== EDIT YOUR CONTACT DETAILS HERE ===== */
  var CONTACT = {
    whatsapp: '9607980388',            // country code, no + or spaces
    phone:    '+960 798 0388',         // shown on the page
    email:    '[reservations@rindhali.com]', // booking requests are sent here
    instagram:'[HANDLE]',              // e.g. rindhalithoddoo
    facebook: '[PAGE]'                 // e.g. rindhalithoddoo
  };
  var real = function(v){ return v.indexOf('[') < 0; };
  var LINKS = {
    whatsapp: 'https://wa.me/' + CONTACT.whatsapp,
    instagram:'https://instagram.com/' + CONTACT.instagram,
    facebook: 'https://facebook.com/' + CONTACT.facebook,
    email:    'mailto:' + CONTACT.email,
    phone:    'tel:' + CONTACT.phone.replace(/[^+\d]/g,'')
  };
  document.querySelectorAll('[data-link]').forEach(function(a){ a.href = LINKS[a.dataset.link]; });
  document.querySelectorAll('[data-text]').forEach(function(el){ el.textContent = CONTACT[el.dataset.text]; });
  /* hide any contact detail that is still a [placeholder] so guests never see it */
  ['email','instagram','facebook','phone','whatsapp'].forEach(function(k){
    if (real(CONTACT[k])) return;
    document.querySelectorAll('[data-link="' + k + '"],[data-text="' + k + '"]').forEach(function(el){
      var row = el.closest('.clist li') || el;
      row.hidden = true; row.style.display = 'none';
    });
  });
  var T = function(s){ return window.RT_T ? window.RT_T(s) : s; };
  var esc = function(s){ return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];}); };
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function(s,r){ return (r||document).querySelector(s); };
  var $$ = function(s,r){ return [].slice.call((r||document).querySelectorAll(s)); };

  /* ----- photos (used by gallery + lightbox) ----- */
  var P = function(n){ return 'assets/p' + (n<10?'0':'') + n + '.jpg'; };
  var PHOTOS = [
    [1,'Dinner for two at Rindhali','dining'],[2,'Deluxe room with sitting area','rooms'],[3,'Walk-in rain shower','bath'],
    [4,'Restaurant and dining hall','dining'],[5,'Private balcony with seating','rooms'],[6,'Rindhali Thoddoo by day','exterior'],
    [7,'King bedroom','rooms'],[8,'Modern marble bathroom','bath'],[9,'Thoddoo beach','island'],
    [10,'Guest lounge','dining'],[11,'Facade and balconies','exterior'],[12,'Bright double room','rooms'],
    [13,'Front entrance','exterior'],[14,'Twin room opening to the balcony','rooms'],[15,'Honeymoon turndown','rooms'],
    [16,'Family room, twin beds','rooms'],[17,'Turndown with towel art','rooms'],[18,'Balcony seating','rooms'],
    [19,'Family room for four','rooms'],[20,'Twin beds and flat-screen TV','rooms'],[21,'Family room with balcony','rooms'],
    [22,'Spacious family room','rooms'],[23,'Family room with TV','rooms'],[24,'Deluxe double with TV','rooms'],
    [25,'Deluxe double room','rooms'],[26,'Rindhali lit up at night','exterior'],[27,'Three floors of balconies','exterior'],
    [28,'King room ready for arrival','rooms'],[29,'Rindhali from the street','exterior'],[30,'Sandbank day trip','island']
  ].map(function(p){ return {src:P(p[0]), cap:p[1], cat:p[2]}; });

  /* ----- guest testimonials: genuine reviews from Booking.com, Instagram and Facebook -----
     Fields: score, title, text, name, flag, country, traveller, stay, source, translated-from */
  var REVIEWS = [
    {s:10, t:'Brand new hotel. Beautiful island with warm people around.', q:'I would like to thank the owner of the hotel, because your hospitality and willingness to help are completely amazing. You made our island experience perfect. The guesthouse is very new, the room is big and perfect with a huge balcony, the service is great and the food is delicious. This is the best hotel I found on the island. Highly recommended.', n:'Alexdra', f:'🇷🇺', c:'Russia', who:'Couple', stay:'Deluxe Double · April 2026', src:'Booking.com'},
    {s:10, t:'Highly recommended new hotel!', q:'We were among the first guests, and it shows right away: everything is brand new, spotlessly clean and fresh. The location is excellent, a quiet and peaceful area yet a short walk to beautiful Sunrise Beach. The staff are outstanding, friendly, attentive and ready to fulfil any request quickly and with a smile. Modern, clean, comfortable. We’ll definitely come back!', n:'Instagram guest', f:'', c:'', who:'Among the first guests', stay:'', src:'Instagram'},
    {s:10, t:'A customer-oriented team and a fresh, new hotel', q:'Super customer service, and the hotel is new and fresh. I like the Maldivian breakfast. The staff are very friendly, helped us wash clothes and gave us bicycles for free. Good cleaning every day.', n:'Anna', f:'🇷🇺', c:'Russia', who:'Group of friends', stay:'Deluxe Family Room · 13 nights', src:'Booking.com'},
    {s:10, t:'Absolutely wonderful', q:'Our stay at Rindhali Thoddoo was absolutely wonderful. Their hospitality made such a big difference to our trip, always going out of their way to ensure we…', n:'Facebook guest', f:'', c:'', who:'', stay:'', src:'Facebook'},
    {s:10, t:'Organised to a high standard from day one', q:'We stayed at this hotel and were very pleased. It opened only recently, but everything is already organised to a high standard. The staff are very polite, friendly and always ready to help. The rooms are lovely, bright and clean, with housekeeping every day, and it is handy that you can exchange money for local currency at the hotel.', n:'Volodymyr', f:'🇺🇦', c:'Ukraine', who:'Group of friends', stay:'Deluxe Family Room · 5 nights', src:'Booking.com', tr:'Ukrainian'},
    {s:10, t:'Only positive impressions: a cosy room and attentive staff', q:'Friendly and attentive staff, always ready to help and answer questions. The room was clean and cosy; I felt at home. A convenient location close to the sights, transport, shops and the sea. Good breakfast, lunch and dinner with plenty of variety and fresh produce.', n:'Anna', f:'🇷🇺', c:'Russia', who:'Couple', stay:'Deluxe Double · 7 nights', src:'Booking.com', tr:'Russian'},
    {s:10, t:'Loved everything', q:'We came at the end of July; not our first time on Thoddoo. The hotel is new and spotless. We took three meals a day: tasty food and very generous portions. The staff are top level, and the location is excellent.', n:'Olga', f:'🇷🇺', c:'Russia', who:'Solo traveller', stay:'Deluxe Double · 7 nights', src:'Booking.com', tr:'Russian'},
    {s:10, t:'Nice and comfortable', q:'Staff are very good and very friendly, always helpful. The hotel is very clean and the room is very comfortable. Management is always very good.', n:'Mohamed', f:'🇲🇻', c:'Maldives', who:'Solo traveller', stay:'', src:'Booking.com'},
    {s:10, t:'Exceptional', q:'We stayed nine days at this hotel. The staff are welcoming and very caring. The beds are comfortable, and everything is clean and tidy.', n:'Yulia', f:'🇷🇺', c:'Russia', who:'Family', stay:'Deluxe Double · 8 nights', src:'Booking.com', tr:'Russian'},
    {s:9, t:'Excellent', q:'Excellent location. The hotel is new; everything is clean and new.', n:'Olga', f:'🇷🇺', c:'Russia', who:'Couple', stay:'Deluxe Double · 8 nights', src:'Booking.com', tr:'Russian'}
  ];
  /* ----- header ----- */
  var hdr = $('.site-h'), burger = $('.burger');
  var onScroll = function(){ hdr.classList.toggle('scrolled', scrollY > 10); };
  addEventListener('scroll', onScroll, {passive:true}); onScroll();
  if (burger) burger.addEventListener('click', function(){ var o = !hdr.classList.contains('open'); hdr.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); });
  $$('.nav a').forEach(function(a){ a.addEventListener('click', function(){ hdr.classList.remove('open'); }); });
  var page = document.body.dataset.page;
  $$('.nav a[data-p]').forEach(function(a){ if (a.dataset.p === page) { a.classList.add('on'); a.setAttribute('aria-current','page'); } });

  /* ----- Maldives time in the ticker ----- */
  var clock = $('#mvt');
  var tick = function(){ if (!clock) return; try { clock.textContent = new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',timeZone:'Indian/Maldives'}) + ' MVT'; } catch(e){} };
  tick(); setInterval(tick, 30000);
  $$('[data-year]').forEach(function(el){ el.textContent = new Date().getFullYear(); });

  /* ----- reveal ----- */
  var rvs = $$('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function(es){ es.forEach(function(e){ if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); }, {rootMargin:'0px 0px -8% 0px', threshold:.05});
    rvs.forEach(function(el){ io.observe(el); });
  } else rvs.forEach(function(el){ el.classList.add('in'); });

  /* ----- hero slider + USP rotation ----- */
  var slides = $$('.slide'), dots = $('.dots'), usp = $('.usp-rot span');
  if (slides.length) {
    var cur = 0, timer;
    dots.innerHTML = slides.map(function(s,i){ return '<button type="button" aria-label="Show slide '+(i+1)+'"></button>'; }).join('');
    var db = $$('button', dots);
    var go = function(i){
      slides[cur].classList.remove('on'); db[cur].classList.remove('on');
      cur = (i + slides.length) % slides.length;
      slides[cur].classList.add('on'); void db[cur].offsetWidth; db[cur].classList.add('on');
      if (usp) { usp.classList.add('out'); setTimeout(function(){ usp.textContent = slides[cur].dataset.usp; usp.classList.remove('out'); }, 350); }
      clearTimeout(timer); if (!reduce) timer = setTimeout(function next(){ if (window.RT_heroPaused || document.hidden) { timer = setTimeout(next, 1000); return; } go(cur+1); }, 6000);
    };
    db.forEach(function(b,i){ b.addEventListener('click', function(){ go(i); }); });
    slides[0].classList.remove('on'); cur = 0; slides[0].classList.add('on'); db[0].classList.add('on');
    if (usp) usp.textContent = slides[0].dataset.usp;
    if (!reduce) timer = setTimeout(function next(){ if (window.RT_heroPaused || document.hidden) { timer = setTimeout(next, 1000); return; } go(1); }, 6000);
  }

  /* ----- booking bar → contact page ----- */
  var today = new Date().toISOString().slice(0,10);
  $$('input[type=date]').forEach(function(el){ el.min = today; });
  var pair = function(a,b){ if (a && b) a.addEventListener('change', function(){ b.min = a.value || today; if (b.value && b.value <= a.value) b.value = ''; }); };
  pair($('#bIn'), $('#bOut')); pair($('#fIn'), $('#fOut'));
  var bbar = $('#bookBar');
  if (bbar) bbar.addEventListener('submit', function(e){
    e.preventDefault();
    var q = new URLSearchParams({ in: $('#bIn').value, out: $('#bOut').value, room: $('#bRoom').value });
    location.href = 'contact.html?' + q.toString() + '#book';
  });

  /* ----- testimonials slider ----- */
  var track = $('#tmTrack');
  if (track) {
    var SRC = {'Booking.com':'B','Instagram':'IG','Facebook':'f'};
    track.innerHTML = REVIEWS.map(function(r, i){
      var meta = [r.c, r.who].filter(Boolean).join(' · ');
      return '<figure class="tm" role="group" aria-roledescription="slide" aria-label="Review ' + (i+1) + ' of ' + REVIEWS.length + '">' +
        '<div class="tm-top"><span class="tm-q" aria-hidden="true">“</span><span class="tm-src"><i>' + SRC[r.src] + '</i>' + esc(r.src) + '</span></div>' +
        '<div class="tm-score"><span class="stars" aria-hidden="true">★★★★★</span><b>' + r.s + '</b><small>/10</small></div>' +
        '<h3>' + esc(r.t) + '</h3>' +
        '<blockquote>' + esc(r.q) + '</blockquote>' +
        '<button type="button" class="tm-more" hidden>Read more</button>' +
        '<figcaption><span class="av" aria-hidden="true">' + esc(r.n.charAt(0)) + '</span><span class="who"><b>' + esc(r.n) + '</b>' + (meta ? '<span>' + esc(meta) + '</span>' : '') + (r.stay ? '<span class="stay">' + esc(r.stay) + '</span>' : '') + '</span>' + (r.tr ? '<span class="tr">Translated from ' + esc(r.tr) + '</span>' : '') + '</figcaption></figure>';
    }).join('');
    var cards = $$('.tm', track);
    /* show "Read more" only when the text is clamped */
    var checkMore = function(){ cards.forEach(function(card){ var bq = $('blockquote', card), b = $('.tm-more', card); if (card.classList.contains('open')) return; b.hidden = bq.scrollHeight <= bq.clientHeight + 2; }); };
    cards.forEach(function(card){ $('.tm-more', card).addEventListener('click', function(){ var o = card.classList.toggle('open'); this.textContent = T(o ? 'Show less' : 'Read more'); }); });
    document.addEventListener('langchange', function(){ cards.forEach(function(card){ $('.tm-more', card).textContent = T(card.classList.contains('open') ? 'Show less' : 'Read more'); }); });
    /* dots + counter */
    var dotsBox = $('#tmDots'), count = $('#tmCount');
    var perView = function(){ var w = cards[0].offsetWidth + 22; return Math.max(1, Math.round(track.clientWidth / w)); };
    var pages = function(){ return Math.max(1, cards.length - perView() + 1); };
    var current = function(){ var w = cards[0].offsetWidth + 22; return Math.min(pages()-1, Math.round(track.scrollLeft / w)); };
    var buildDots = function(){ if (!dotsBox) return; var n = pages(); dotsBox.innerHTML = Array.apply(null, {length:n}).map(function(_, i){ return '<button type="button" aria-label="Go to review ' + (i+1) + '"></button>'; }).join(''); $$('button', dotsBox).forEach(function(b, i){ b.addEventListener('click', function(){ goTo(i); restart(); }); }); sync(); };
    var target = null;
    var sync = function(){ var i = target != null ? target : current(); if (dotsBox) $$('button', dotsBox).forEach(function(b, j){ b.classList.toggle('on', j === i); b.setAttribute('aria-current', j === i); }); if (count) count.textContent = String(i+1).padStart(2,'0') + ' / ' + String(pages()).padStart(2,'0'); };
    var goTo = function(i){ var n = pages(); i = (i + n) % n; target = i; sync(); track.scrollTo({left: i * (cards[0].offsetWidth + 22), behavior: reduce ? 'auto' : 'smooth'}); clearTimeout(goTo.t); goTo.t = setTimeout(function(){ target = null; }, 900); };
    var pos = function(){ return target != null ? target : current(); };
    var pv = $('#tmPrev'), nx = $('#tmNext');
    if (pv) pv.addEventListener('click', function(){ goTo(pos()-1); restart(); });
    if (nx) nx.addEventListener('click', function(){ goTo(pos()+1); restart(); });
    var st; track.addEventListener('scroll', function(){ clearTimeout(st); st = setTimeout(sync, 60); }, {passive:true});
    /* autoplay, paused on hover, focus or touch */
    var auto = null, paused = false;
    var restart = function(){ clearInterval(auto); if (!reduce) auto = setInterval(function(){ if (!paused && !window.RT_tmPaused && !document.hidden) goTo(pos()+1); }, 5500); };
    var wrap = track.closest('.tm-wrap') || track;
    wrap.addEventListener('mouseenter', function(){ paused = true; }); wrap.addEventListener('mouseleave', function(){ paused = false; });
    wrap.addEventListener('focusin', function(){ paused = true; }); wrap.addEventListener('focusout', function(){ paused = false; });
    wrap.addEventListener('touchstart', function(){ paused = true; restart(); setTimeout(function(){ paused = false; }, 8000); }, {passive:true});
    /* drag with the mouse */
    var down = false, sx = 0, sl = 0, moved = false;
    track.addEventListener('pointerdown', function(e){ if (e.pointerType !== 'mouse' || e.target.closest('button')) return; down = true; moved = false; sx = e.clientX; sl = track.scrollLeft; track.classList.add('drag'); });
    addEventListener('pointermove', function(e){ if (!down) return; var dx = e.clientX - sx; if (Math.abs(dx) > 4) moved = true; track.scrollLeft = sl - dx; });
    addEventListener('pointerup', function(){ if (!down) return; down = false; track.classList.remove('drag'); if (moved) { var w = cards[0].offsetWidth + 22; goTo(Math.round(track.scrollLeft / w)); restart(); } });
    track.addEventListener('keydown', function(e){ if (e.key === 'ArrowRight') { goTo(pos()+1); restart(); } if (e.key === 'ArrowLeft') { goTo(pos()-1); restart(); } });
    var rt; addEventListener('resize', function(){ clearTimeout(rt); rt = setTimeout(function(){ buildDots(); checkMore(); }, 150); });
    buildDots(); checkMore(); restart();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(checkMore);
  }
  /* ----- lightbox ----- */
  var lb = document.createElement('div');
  lb.className = 'lb'; lb.hidden = true; lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true'); lb.setAttribute('aria-label','Photo viewer');
  lb.innerHTML = '<figure><img alt=""><figcaption></figcaption></figure><button class="x" type="button" aria-label="Close">✕</button><button class="pv" type="button" aria-label="Previous photo">‹</button><button class="nx" type="button" aria-label="Next photo">›</button>';
  document.body.appendChild(lb);
  var set = [], idx = 0, last = null;
  var show = function(i){ idx = (i + set.length) % set.length; var it = set[idx]; $('img', lb).src = it.src; $('img', lb).alt = it.cap; $('figcaption', lb).textContent = it.cap + '  ·  ' + (idx+1) + ' / ' + set.length; };
  var open = function(items, i){ set = items; last = document.activeElement; show(i); lb.hidden = false; document.body.style.overflow = 'hidden'; $('.x', lb).focus(); };
  var close = function(){ lb.hidden = true; document.body.style.overflow = ''; if (last) last.focus(); };
  $('.x', lb).addEventListener('click', close);
  $('.pv', lb).addEventListener('click', function(){ show(idx-1); });
  $('.nx', lb).addEventListener('click', function(){ show(idx+1); });
  lb.addEventListener('click', function(e){ if (e.target === lb) close(); });
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') { if (!lb.hidden) close(); hdr.classList.remove('open'); }
    if (lb.hidden) return;
    if (e.key === 'ArrowLeft') show(idx-1); if (e.key === 'ArrowRight') show(idx+1);
  });
  /* any element group with data-lb="name" containing buttons with <img> */
  $$('[data-lb]').forEach(function(g){
    var btns = $$('button', g);
    var items = btns.map(function(b){ var im = $('img', b); return {src: im.getAttribute('src'), cap: im.alt}; });
    btns.forEach(function(b,i){ b.addEventListener('click', function(){ open(items, i); }); });
  });

  /* ----- gallery page ----- */
  var gal = $('#gal');
  if (gal) {
    var render = function(cat){
      var list = PHOTOS.filter(function(p){ return cat === 'all' || p.cat === cat; });
      gal.innerHTML = list.map(function(p,i){ return '<button type="button" data-i="'+i+'"><img loading="lazy" src="'+p.src+'" alt="'+esc(p.cap)+'"><span>'+esc(p.cap)+'</span></button>'; }).join('');
      $$('button', gal).forEach(function(b,i){ b.addEventListener('click', function(){ open(list, i); }); });
    };
    $$('.filters button').forEach(function(b){ b.addEventListener('click', function(){
      $$('.filters button').forEach(function(x){ x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
      render(b.dataset.cat);
    }); });
    render('all');
  }

  /* ----- booking form (contact page) ----- */
  var form = $('#bookForm');
  if (form) {
    var q = new URLSearchParams(location.search);
    if (q.get('in')) $('#fIn').value = q.get('in');
    if (q.get('out')) { $('#fOut').min = q.get('in') || today; $('#fOut').value = q.get('out'); }
    if (q.get('room')) $('#fRoom').value = q.get('room');

    /* country list */
    var COUNTRIES = 'Afghanistan|Albania|Algeria|Andorra|Angola|Antigua and Barbuda|Argentina|Armenia|Australia|Austria|Azerbaijan|Bahamas|Bahrain|Bangladesh|Barbados|Belarus|Belgium|Belize|Benin|Bhutan|Bolivia|Bosnia and Herzegovina|Botswana|Brazil|Brunei|Bulgaria|Burkina Faso|Burundi|Cabo Verde|Cambodia|Cameroon|Canada|Central African Republic|Chad|Chile|China|Colombia|Comoros|Congo|Costa Rica|Côte d’Ivoire|Croatia|Cuba|Cyprus|Czechia|Democratic Republic of the Congo|Denmark|Djibouti|Dominica|Dominican Republic|Ecuador|Egypt|El Salvador|Equatorial Guinea|Eritrea|Estonia|Eswatini|Ethiopia|Fiji|Finland|France|Gabon|Gambia|Georgia|Germany|Ghana|Greece|Grenada|Guatemala|Guinea|Guinea-Bissau|Guyana|Haiti|Honduras|Hong Kong|Hungary|Iceland|India|Indonesia|Iran|Iraq|Ireland|Israel|Italy|Jamaica|Japan|Jordan|Kazakhstan|Kenya|Kiribati|Kosovo|Kuwait|Kyrgyzstan|Laos|Latvia|Lebanon|Lesotho|Liberia|Libya|Liechtenstein|Lithuania|Luxembourg|Macau|Madagascar|Malawi|Malaysia|Maldives|Mali|Malta|Marshall Islands|Mauritania|Mauritius|Mexico|Micronesia|Moldova|Monaco|Mongolia|Montenegro|Morocco|Mozambique|Myanmar|Namibia|Nauru|Nepal|Netherlands|New Zealand|Nicaragua|Niger|Nigeria|North Korea|North Macedonia|Norway|Oman|Pakistan|Palau|Palestine|Panama|Papua New Guinea|Paraguay|Peru|Philippines|Poland|Portugal|Qatar|Romania|Russia|Rwanda|Saint Kitts and Nevis|Saint Lucia|Saint Vincent and the Grenadines|Samoa|San Marino|São Tomé and Príncipe|Saudi Arabia|Senegal|Serbia|Seychelles|Sierra Leone|Singapore|Slovakia|Slovenia|Solomon Islands|Somalia|South Africa|South Korea|South Sudan|Spain|Sri Lanka|Sudan|Suriname|Sweden|Switzerland|Syria|Taiwan|Tajikistan|Tanzania|Thailand|Timor-Leste|Togo|Tonga|Trinidad and Tobago|Tunisia|Türkiye|Turkmenistan|Tuvalu|Uganda|Ukraine|United Arab Emirates|United Kingdom|United States|Uruguay|Uzbekistan|Vanuatu|Vatican City|Venezuela|Vietnam|Yemen|Zambia|Zimbabwe'.split('|');
    var cSel = $('#fCountry');
    if (cSel) COUNTRIES.forEach(function(c){ var o = document.createElement('option'); o.value = c; o.textContent = c; cSel.appendChild(o); });

    /* children: one age box per child */
    var kidsSel = $('#fKids'), agesBox = $('#agesBox'), agesGrid = $('#agesGrid');
    var ageOpts = function(){ var h = '<option value="">–</option><option value="under 1">' + esc(T('Under 1')) + '</option>'; for (var a = 1; a <= 17; a++) h += '<option value="' + a + '">' + a + '</option>'; return h; };
    var buildAges = function(){
      var n = +kidsSel.value, prev = $$('select', agesGrid).map(function(s){ return s.value; });
      agesBox.hidden = n === 0;
      var h = '';
      for (var i = 0; i < n; i++) h += '<label><span>' + esc(T('Child')) + ' ' + (i+1) + '</span><select name="age' + (i+1) + '" required>' + ageOpts() + '</select></label>';
      agesGrid.innerHTML = h;
      $$('select', agesGrid).forEach(function(s, i){ if (prev[i]) s.value = prev[i]; });
    };
    if (kidsSel) { kidsSel.addEventListener('change', buildAges); buildAges(); document.addEventListener('langchange', buildAges); }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      var f = form, out = $('#sent'), btn = $('#sendBtn');
      var kids = +f.kids.value, ages = $$('select', agesGrid).map(function(s){ return s.value === 'under 1' ? 'under 1' : s.value; });
      var guests = f.adults.value + ' adult(s)' + (kids ? ', ' + kids + ' child(ren) aged ' + ages.join(', ') : '');
      var data = { Room: f.room.value, Guests: guests, 'Check-in': f.cin.value, 'Check-out': f.cout.value, Name: f.who.value, Country: f.country.value, Email: f.email.value, Phone: f.phone.value, Message: f.msg.value, Language: (window.RT_lang ? window.RT_lang() : 'en').toUpperCase() };
      var lines = Object.keys(data).filter(function(k){ return data[k]; }).map(function(k){ return k + ': ' + data[k]; }).join('\n');
      var msg = 'Hello Rindhali Thoddoo! I would like to book:\n' + lines;
      var mail = 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent('Booking request: ' + data.Room + ', ' + data['Check-in']) + '&body=' + encodeURIComponent(msg);
      var choices = '<div class="row">' + (real(CONTACT.email) ? '<a class="btn btn-light" href="'+mail+'">'+T('Send by email')+'</a>' : '') + '<a class="btn btn-wa" href="'+LINKS.whatsapp+'?text='+encodeURIComponent(msg)+'" target="_blank" rel="noopener">'+T('Send on WhatsApp')+'</a></div>';
      var fallback = function(){ out.innerHTML = T('Your request is ready. Choose how to send it:') + choices; out.hidden = false; btn.disabled = false; btn.textContent = T('Send booking request'); };
      if (!real(CONTACT.email) || !window.fetch) { fallback(); return; }
      btn.disabled = true; btn.textContent = T('Sending…');
      data._subject = 'New booking request: ' + data.Room + ' (' + data['Check-in'] + ' to ' + data['Check-out'] + ')';
      data._replyto = data.Email; data._template = 'table'; data._captcha = 'false';
      fetch('https://formsubmit.co/ajax/' + encodeURIComponent(CONTACT.email), {method:'POST', headers:{'Content-Type':'application/json','Accept':'application/json'}, body: JSON.stringify(data)})
        .then(function(r){ return r.json(); })
        .then(function(j){ if (String(j.success) !== 'true') throw 0; out.innerHTML = T('Thank you') + ', ' + esc(data.Name) + '! ' + T('Your request has been sent. We will reply by email or WhatsApp within a few hours.'); out.hidden = false; f.reset(); buildAges(); btn.disabled = false; btn.textContent = T('Send booking request'); })
        .catch(fallback);
    });
  }

  /* ----- scroll progress line ----- */
  var prog = $('.progress i');
  if (prog) { var pr = function(){ var h = document.documentElement.scrollHeight - innerHeight; prog.style.transform = 'scaleX(' + (h > 0 ? Math.min(1, scrollY / h) : 0) + ')'; }; addEventListener('scroll', pr, {passive:true}); pr(); }

  /* ----- gentle parallax on hero / page headers ----- */
  var px = $$('.slides, .phero > img');
  if (px.length && !reduce) {
    var ticking = false;
    addEventListener('scroll', function(){ if (ticking) return; ticking = true; requestAnimationFrame(function(){ var y = Math.min(scrollY, innerHeight); px.forEach(function(el){ el.style.transform = 'translate3d(0,' + (y * 0.28).toFixed(1) + 'px,0)'; }); ticking = false; }); }, {passive:true});
  }

  /* ----- pause / play controls for moving content ----- */
  var pauseBtn = function(label){ var b = document.createElement('button'); b.type = 'button'; b.className = 'pp'; b.setAttribute('aria-pressed','false'); b.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path class="i-pause" d="M2 1h3v10H2zM7 1h3v10H7z" fill="currentColor"/><path class="i-play" d="M2 1l9 5-9 5z" fill="currentColor"/></svg><span>' + T('Pause') + '</span>'; b.setAttribute('aria-label', label); return b; };
  var heroDots = $('.dots');
  if (heroDots && slides.length) {
    var hp = pauseBtn('Pause slideshow'); heroDots.parentNode.insertBefore(hp, heroDots.nextSibling);
    hp.addEventListener('click', function(){ var p = hp.getAttribute('aria-pressed') !== 'true'; hp.setAttribute('aria-pressed', p); $('span', hp).textContent = T(p ? 'Play' : 'Pause'); document.body.classList.toggle('hero-paused', p); window.RT_heroPaused = p; });
  }
  var tmFoot = $('.tm-foot');
  if (tmFoot) {
    var tp = pauseBtn('Pause reviews'); tmFoot.appendChild(tp);
    tp.addEventListener('click', function(){ var p = tp.getAttribute('aria-pressed') !== 'true'; tp.setAttribute('aria-pressed', p); $('span', tp).textContent = T(p ? 'Play' : 'Pause'); window.RT_tmPaused = p; });
  }
  document.addEventListener('langchange', function(){ $$('.pp').forEach(function(b){ $('span', b).textContent = T(b.getAttribute('aria-pressed') === 'true' ? 'Play' : 'Pause'); }); });

  /* ----- live weather on Thoddoo (Open-Meteo, no key needed) ----- */
  var wx = $('#wx');
  if (wx && window.fetch) {
    var WX = {0:'Clear sky',1:'Mostly clear',2:'Partly cloudy',3:'Cloudy',45:'Hazy',48:'Hazy',51:'Light drizzle',53:'Drizzle',55:'Drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',80:'Showers',81:'Showers',82:'Heavy showers',95:'Thunderstorm',96:'Thunderstorm',99:'Thunderstorm'};
    fetch('https://api.open-meteo.com/v1/forecast?latitude=4.44&longitude=72.96&current=temperature_2m,weather_code&timezone=Indian%2FMaldives')
      .then(function(r){ return r.json(); })
      .then(function(j){ var c = j && j.current; if (!c) return; var draw = function(){ wx.innerHTML = esc(T('Thoddoo now')) + ' <b>' + Math.round(c.temperature_2m) + '°C</b> · ' + esc(T(WX[c.weather_code] || 'Tropical')); }; draw(); wx.hidden = false; document.addEventListener('langchange', draw); })
      .catch(function(){});
  }

  /* ----- optional aerial photo of Thoddoo (assets/thoddoo-aerial.jpg) ----- */
  $$('img[data-optional]').forEach(function(img){
    var fb = function(){ if (img.dataset.fallback && img.getAttribute('src') !== img.dataset.fallback) img.src = img.dataset.fallback; };
    img.addEventListener('error', fb);
    if (img.complete && img.naturalWidth === 0) fb();
  });

  /* ----- languages ----- */
  if (window.RT_startLang) window.RT_startLang();
})();
