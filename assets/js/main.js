(function () {
  "use strict";
  var C = window.CONTENT;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var ph = function (t) { return '<p class="ph">[ADD: ' + esc(t) + ']</p>'; };
  var head = function (stage, title, sub) {
    return '<div class="s-head rv"><p class="eyebrow"><span class="stage">' + stage + '</span></p><h2>' + title + '</h2>' + (sub ? '<p>' + sub + '</p>' : '') + '</div>';
  };

  /* ---------- hero (static HTML updated from content) ---------- */
  $("#hero-eyebrow").textContent = C.hero.eyebrow;
  $("#hero-intro").textContent = C.hero.intro;
  var hl = $("#hero-headline");
  hl.innerHTML = C.hero.headline.split(" ").map(function (w, i) {
    return '<span class="w"><span style="animation-delay:' + (150 + i * 80) + 'ms">' + esc(w) + '</span></span>';
  }).join(" ");
  if (C.hero.showStatus) { var st = $("#status"); st.hidden = false; st.lastElementChild.textContent = C.hero.status; }
  $("#headshot").innerHTML = C.headshot
    ? '<img src="' + esc(C.headshot) + '" alt="Portrait of George Harutyunyan" width="400" height="500">'
    : '<span class="big-mono" aria-hidden="true">GH</span>' + ph("headshot.jpg");
  $$(".cv-link").forEach(function (a) { a.href = C.cv; });
  $$(".li-link").forEach(function (a) { a.href = C.linkedin; });
  $("#footer-text").textContent = C.footer;

  /* ---------- sections ---------- */
  var html = "";
  var mq = C.marquee.map(function (m) { return "<span>" + esc(m) + "</span>"; }).join("");
  html += '<section class="proof" aria-label="Key numbers"><div class="wrap"><div class="stats">' +
    C.proof.map(function (p, i) {
      var final = p.prefix + p.value.toFixed(p.decimals) + p.suffix;
      return '<div class="stat rv" style="--d:' + i * 70 + 'ms"><div class="num" data-count="' + p.value + '" data-dec="' + p.decimals + '" data-pre="' + esc(p.prefix) + '" data-suf="' + esc(p.suffix) + '" aria-label="' + esc(final) + '">' + esc(final) + '</div><p class="l">' + esc(p.label) + '</p>' + (p.sub ? '<p class="sub">' + esc(p.sub) + '</p>' : '') + '</div>';
    }).join("") + '</div><div class="prow rv">' + C.proofRow.map(function (r) { return "<span>" + esc(r) + "</span>"; }).join("") + '</div></div></section>' +
    '<div class="marquee" aria-label="Companies: ' + esc(C.marquee.join(", ")) + '"><div class="track" aria-hidden="true">' + mq + mq + '</div></div>';

  var A = C.about;
  html += '<section class="s" id="about"><div class="wrap">' + head("02 Discovery", "Who I am and how I sell.") +
    '<div class="about-grid"><div><p class="story rv">' + esc(A.story) + '</p><div class="kv rv"><div><h3>Industries</h3><div class="chips">' +
    A.industries.map(function (x) { return '<span class="chip">' + esc(x) + '</span>'; }).join("") + '</div></div><div><h3>Markets</h3><div class="chips">' +
    A.markets.map(function (x) { return '<span class="chip">' + esc(x) + '</span>'; }).join("") + '</div></div></div></div><div><h3 class="sub-h rv">How I sell</h3><ol class="how">' +
    A.howISell.map(function (h, i) { return '<li class="rv" style="--d:' + i * 70 + 'ms"><span class="n">0' + (i + 1) + '</span><p><strong>' + esc(h[0]) + ':</strong> ' + esc(h[1]) + '</p></li>'; }).join("") +
    '</ol><h3 class="sub-h rv" style="margin-top:36px">What sets me apart</h3><div class="apart">' +
    A.apart.map(function (a, i) { return '<div class="card rv" style="--d:' + i * 70 + 'ms"><h3>' + esc(a[0]) + '</h3><p>' + esc(a[1]) + '</p></div>'; }).join("") +
    '</div></div></div></div></section>';

  var max = 180;
  html += '<section class="s" id="results"><div class="wrap">' + head("03 Proof", "Quota beaten in every AE role.") + '<div class="bento">' +
    '<div class="card chart rv"><h3 class="sub-h">Quota attainment per AE role</h3><div class="bars" role="list">' +
    C.quotaChart.map(function (q) {
      return '<div class="bar" role="listitem"><span>' + esc(q.role) + '</span><div class="bar-track" aria-hidden="true"><div class="bar-fill" data-w="' + (q.value / max * 100) + '"></div><span class="hundred" style="left:' + (100 / max * 100) + '%"></span></div><b>' + esc(q.label) + '</b></div>';
    }).join("") + '</div><p class="legend">Dashed line = 100% of quota</p></div>' +
    C.results.map(function (r, i) { return '<div class="card rv ' + (r.size || "") + '" style="--d:' + (i % 4) * 70 + 'ms"><div class="big">' + esc(r.big) + '</div><p class="t">' + esc(r.text) + '</p></div>'; }).join("") +
    '</div></div></section>';

  html += '<section class="s" id="experience"><div class="wrap">' + head("04 Track record", "Experience.", "Newest first.") + '<div class="tl"><div class="tl-line" aria-hidden="true"><span id="tl-fill"></span></div>' +
    C.experience.map(function (e) {
      return '<article class="card role rv"><div class="role-top"><h3>' + esc(e.role) + ' <span class="co">· ' + esc(e.company) + '</span></h3><span class="dates">' + esc(e.dates) + '</span></div><p class="note">' + esc(e.note) + '</p><p class="meta"><span>' + esc(e.meta) + '</span><span>' + esc(e.quota) + '</span></p><ul>' +
        e.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + '</ul><div class="tags">' + e.tags.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join("") + '</div></article>';
    }).join("") + '</div></div></section>';

  html += '<section class="s" id="cases"><div class="wrap">' + head("05 Deal stories", "Case studies.", "Click a card to see the challenge, what I did and the result.") + '<div class="cases">' +
    C.cases.map(function (c, i) {
      return '<article class="card case rv" style="--d:' + (i % 2) * 70 + 'ms"><button class="head" aria-expanded="false" aria-controls="case-' + i + '"><span><span class="ctag">' + esc(c.tag) + '</span><h3>' + esc(c.title) + '</h3></span><span class="plus" aria-hidden="true">+</span></button><div class="body" id="case-' + i + '"><div><dl class="steps"><div><dt>Challenge</dt><dd>' + esc(c.challenge) + '</dd></div><div><dt>What I did</dt><dd>' + esc(c.did) + '</dd></div><div class="res"><dt>Result</dt><dd>' + esc(c.result) + '</dd></div></dl>' + ph("one deal story or lesson") + '</div></div></article>';
    }).join("") + '</div>' +
    (C.testimonial ? '<figure class="card testi rv"><blockquote class="story">"' + esc(C.testimonial.quote) + '"</blockquote><figcaption class="note">' + esc(C.testimonial.name) + ', ' + esc(C.testimonial.title) + '</figcaption></figure>'
      : '<div class="testi rv">' + ph("recommendation quote from LinkedIn + name + title") + '</div>') + '</div></section>';

  html += '<section class="s" id="skills"><div class="wrap">' + head("06 Toolkit", "Skills and sales stack.") + '<div class="sk">' +
    C.skills.map(function (g, i) { return '<div class="card rv" style="--d:' + i * 70 + 'ms"><h3>' + esc(g[0]) + '</h3><div class="chips">' + g[1].map(function (s) { return '<span class="chip">' + esc(s) + '</span>'; }).join("") + '</div></div>'; }).join("") +
    '</div><div class="stack rv"><h3 class="sub-h">Sales stack</h3>' + C.stack.map(function (s) { return '<span class="pill">' + esc(s) + '</span>'; }).join("") + '</div>' +
    '<div class="edu" style="margin-top:80px"><div class="rv"><h3>Education</h3><ul>' + C.education.map(function (e) { return '<li><strong>' + esc(e[0]) + '</strong><span>' + esc(e[1]) + '</span></li>'; }).join("") +
    '</ul></div><div class="rv" style="--d:70ms"><h3>Certifications</h3><ul>' + C.certifications.map(function (e) { return '<li><strong>' + esc(e[0]) + '</strong><span>' + esc(e[1]) + '</span></li>'; }).join("") +
    '</ul></div><div class="rv" style="--d:140ms"><h3>Languages</h3><ul>' + C.languages.map(function (e) { return '<li><strong>' + esc(e[0]) + '</strong><span>' + esc(e[1]) + '</span></li>'; }).join("") + '</ul></div></div></div></section>';

  var parts = C.contact.headline.split("? ");
  var h2 = parts.length > 1 ? esc(parts[0]) + "? <em>" + esc(parts[1]) + "</em>" : esc(C.contact.headline);
  html += '<section class="contact" id="contact"><div class="wrap"><p class="eyebrow rv" style="justify-content:center"><span class="stage">07 Close</span></p><h2 class="rv">' + h2 + '</h2><p class="l rv">' + esc(C.contact.line) + '</p><div class="cta rv"><span class="email-group"><a class="btn btn-primary magnetic" href="mailto:' + esc(C.email) + '">Email me</a><button class="btn btn-primary copy" id="copy" aria-label="Copy email address"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button></span><a class="btn btn-ghost" href="' + esc(C.linkedin) + '" target="_blank" rel="noopener">LinkedIn</a><a class="btn btn-ghost" href="' + esc(C.cv) + '" download>Download CV</a></div><p class="addr rv"><a href="mailto:' + esc(C.email) + '">' + esc(C.email) + '</a></p></div></section>';

  $("#app").innerHTML = html;

  /* ---------- theme ---------- */
  var root = document.documentElement, tb = $("#theme");
  function setTheme(t, save) {
    root.dataset.theme = t;
    tb.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    $('meta[name="theme-color"]').content = t === "dark" ? "#0B0B0C" : "#FAFAF7";
    if (save) { try { localStorage.setItem("theme", t); } catch (e) {} }
  }
  setTheme(root.dataset.theme === "dark" ? "dark" : "light");
  tb.addEventListener("click", function () { setTheme(root.dataset.theme === "dark" ? "light" : "dark", true); });

  /* ---------- mobile menu ---------- */
  var bg = $("#burger"), menu = $("#menu");
  bg.addEventListener("click", function () { var o = menu.classList.toggle("open"); bg.setAttribute("aria-expanded", o); bg.setAttribute("aria-label", o ? "Close menu" : "Open menu"); });
  $$("#menu a").forEach(function (a) { a.addEventListener("click", function () { menu.classList.remove("open"); bg.setAttribute("aria-expanded", "false"); }); });

  /* ---------- copy email ---------- */
  var toast = $("#toast"), tt;
  $("#copy").addEventListener("click", function () {
    var done = function () { toast.textContent = "Copied " + C.email; toast.classList.add("show"); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove("show"); }, 2000); };
    if (navigator.clipboard) navigator.clipboard.writeText(C.email).then(done, done);
    else { var t = document.createElement("textarea"); t.value = C.email; document.body.appendChild(t); t.select(); try { document.execCommand("copy"); } catch (e) {} t.remove(); done(); }
  });

  /* ---------- case accordions ---------- */
  $$(".case .head").forEach(function (b) {
    b.addEventListener("click", function () { var c = b.closest(".case"); var o = c.classList.toggle("open"); b.setAttribute("aria-expanded", o); });
  });

  /* ---------- scroll: nav, progress, timeline, active link ---------- */
  var nav = $("#nav"), prog = $("#progress"), tl = $(".tl"), tlf = $("#tl-fill"), ticking = false;
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 10);
    prog.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
    if (!reduce) { var r = tl.getBoundingClientRect(); var p = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height)); tlf.style.transform = "scaleY(" + p + ")"; }
    ticking = false;
  }
  addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  var links = $$("#menu a");
  var so = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (a) { a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id); }); });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach(function (s) { so.observe(s); });

  /* ---------- reveal + count-up + bars ---------- */
  function count(el) {
    var to = +el.dataset.count, dec = +el.dataset.dec, pre = el.dataset.pre, suf = el.dataset.suf, t0 = null, dur = 1600;
    function f(t) { if (!t0) t0 = t; var p = Math.min(1, (t - t0) / dur); var e = 1 - Math.pow(1 - p, 3); el.textContent = pre + (to * e).toFixed(dec) + suf; if (p < 1) requestAnimationFrame(f); }
    requestAnimationFrame(f);
  }
  if (reduce || !("IntersectionObserver" in window)) {
    $$(".rv").forEach(function (e) { e.classList.add("in"); });
    $$(".bar-fill").forEach(function (b) { b.style.width = b.dataset.w + "%"; });
  } else {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target; el.classList.add("in"); io.unobserve(el);
        var n = el.querySelector("[data-count]"); if (n) count(n);
        $$(".bar-fill", el).forEach(function (b, i) { setTimeout(function () { b.style.width = b.dataset.w + "%"; }, i * 120); });
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".rv").forEach(function (e) { io.observe(e); });
  }

  /* ---------- hover effects (desktop only) ---------- */
  if (fine && !reduce) {
    document.addEventListener("pointermove", function (ev) {
      var c = ev.target.closest && ev.target.closest(".card"); if (!c) return;
      var r = c.getBoundingClientRect(); c.style.setProperty("--mx", ev.clientX - r.left + "px"); c.style.setProperty("--my", ev.clientY - r.top + "px");
    });
    $$(".magnetic").forEach(function (b) {
      b.addEventListener("pointermove", function (ev) { var r = b.getBoundingClientRect(); b.style.transform = "translate(" + (ev.clientX - r.left - r.width / 2) * 0.18 + "px," + (ev.clientY - r.top - r.height / 2) * 0.25 + "px)"; });
      b.addEventListener("pointerleave", function () { b.style.transform = ""; });
    });
  }

  /* ---------- dot grid ---------- */
  var cv = $("#dots"), ctx = cv.getContext("2d"), W, H, dpr = Math.min(2, devicePixelRatio || 1), off = 0, running = true;
  function size() { var r = cv.getBoundingClientRect(); W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw(); }
  function draw() {
    ctx.clearRect(0, 0, W, H); ctx.fillStyle = getComputedStyle(root).getPropertyValue("--dot");
    var g = 28, o = off % g;
    for (var x = -g + o; x < W + g; x += g) for (var y = -g + o * 0.5; y < H + g; y += g) {
      var s = 1 + 0.6 * Math.sin((x + y) * 0.01 + off * 0.02);
      ctx.beginPath(); ctx.arc(x, y, s, 0, 6.283); ctx.fill();
    }
  }
  function loop() { if (running) { off += 0.15; draw(); } requestAnimationFrame(loop); }
  addEventListener("resize", size); size();
  new MutationObserver(draw).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  if (!reduce) {
    new IntersectionObserver(function (e) { running = e[0].isIntersecting; }).observe(cv);
    requestAnimationFrame(loop);
  }
})();
