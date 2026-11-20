(() => {
const C = window.CONFIG || {}, X = window.CONTENT;
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGSAP = !!window.gsap && !!window.ScrollTrigger;
const coarse = matchMedia('(pointer: coarse)').matches;
const store = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
let L = store.get('lang') || ((navigator.language || '').startsWith('ar') ? 'ar' : 'en');
let F = 'all', active = -1, formState = {}, step = 0, lenis = null;
if (reduced) document.documentElement.classList.add('reduced');
if (hasGSAP) gsap.registerPlugin(ScrollTrigger);
const t = k => (X.t[L][k] || '').replace(/NAME/g, C.name || '');
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const waDigits = String(C.whatsapp || '').replace(/\D/g, '');

/* ---------- render text ---------- */
function render() {
  document.documentElement.lang = L; document.documentElement.dir = L === 'ar' ? 'rtl' : 'ltr';
  document.title = `${C.name && C.name !== 'YOUR NAME' ? C.name + ' · ' : ''}${t('title')}`;
  $$('[data-k]').forEach(el => el.innerHTML = t(el.dataset.k));
  $('#hudName').textContent = C.name || 'Portfolio';
  $('#lang').textContent = L === 'en' ? 'العربية' : 'English';
  $('#forList').innerHTML = X.forList[L].map(r => `<li><b>${r[0]}</b><span>${r[1]}</span></li>`).join('');
  $('#filters').innerHTML = X.filters.map(f => `<button role="tab" type="button" data-f="${f}" aria-selected="${f === F}">${X.t[L]['f_' + f]}</button>`).join('');
  $$('#filters button').forEach(b => b.onclick = () => { F = b.dataset.f; render(); buildTrack(); });
  $('#ratecard').innerHTML = X.services[L].map(s => `<li><h3>${s.n}</h3><p>${s.d}</p>${s.p ? `<span class="price">${s.p}</span>` : ''}</li>`).join('');
  $('#styleList').innerHTML = X.styles.map((s, i) => `<li><button type="button" data-s="${i}" aria-pressed="false"><b>${String(i + 1).padStart(2, '0')}</b><span>${s[L][0]}</span></button></li>`).join('');
  $$('#styleList button').forEach(b => { const go = () => setStyle(+b.dataset.s); b.onclick = go; b.onmouseenter = () => { if (!coarse) go(); }; b.onfocus = go; });
  setStyle(curStyle, true);
  $('#edgeList').innerHTML = X.edge[L].map((e, i) => `<li><span class="mtc">0${i + 1}</span><h3>${e[0]}</h3><p>${e[1]}</p></li>`).join('');
  $('#benefits').innerHTML = X.benefits[L].map(x => `<li>${x}</li>`).join('');
  $('#tiers').innerHTML = X.tiers[L].map((p, i) => `<div class="tier${p.anchor ? ' anchor' : ''}${p.rec ? ' is-rec' : ''}">${p.rec ? `<span class="badge">${t('rec')}</span>` : ''}<h3>${p.n}</h3><div class="tprice">${p.p}</div>${p.sep ? `<p class="tsep">${p.sep}</p>` : ''}<p class="tfor">${p.f}</p><ul>${p.i.map(x => `<li>${x}</li>`).join('')}</ul>${p.why ? `<p class="twhy">${p.why}</p>` : ''}<a class="btn" href="#brief" data-pk="${i}">${t('pickTier')}</a></div>`).join('');
  $$('#tiers [data-pk]').forEach(a => a.addEventListener('click', () => { formState.pkg = +a.dataset.pk; if (step >= steps().length) step = 0; renderStep(); }));
  $('#fairList').innerHTML = X.fair[L].map(x => `<li>${x}</li>`).join('');
  $('#stackList').innerHTML = X.stack[L].map(g => `<li><b>${g[0]}</b>${g[1].map(x => `<span>${x}</span>`).join('')}</li>`).join('');
  $('#markers').innerHTML = X.process[L].map((p, i) => `<li><span class="mtc">${['00:00:00:00', '00:00:48:00', '00:01:12:00', '00:02:00:00'][i]}</span><h3>${p[0]}</h3><p>${p[1]}</p></li>`).join('');
  $('#faqList').innerHTML = X.faq[L].map(q => `<details><summary>${q[0]}</summary><p>${q[1]}</p></details>`).join('');
  if ($('#lfFacts') && X.lfFacts) $('#lfFacts').innerHTML = X.lfFacts[L].map(f => `<li>${f}</li>`).join('');
  if ($('#proofList') && X.proof) $('#proofList').innerHTML = X.proof[L].map(p => `<figure class="pcard"><a href="media/${p.img}" target="_blank" rel="noopener" aria-label="${esc(t('prOpen'))}"><img src="media/${p.img}" alt="" loading="lazy"></a><blockquote>${p.q}</blockquote><figcaption>${p.who}</figcaption></figure>`).join('');
  renderContacts(); renderStep();
  $('#footText').textContent = t('foot');
}

/* ---------- styles switcher ---------- */
let curStyle = 0, styleSeen = false;
function setStyle(i, quiet) {
  const s = X.styles[i]; if (!s) return; curStyle = i;
  $$('#styleList button').forEach((b, j) => b.setAttribute('aria-pressed', j === i));
  const v = $('#styleVid');
  if (!v.src.endsWith(`media/${s.k}.mp4`)) { v.poster = `media/${s.k}.jpg`; v.src = `media/${s.k}.mp4`; if (styleSeen) v.play().catch(() => {}); }
  $('#styleCap').textContent = s[L][1];
  if (!quiet && hasGSAP && !reduced) gsap.fromTo(v, { opacity: .35, scale: .97 }, { opacity: 1, scale: 1, duration: .5, ease: 'power3.out', overwrite: 'auto' });
}
new IntersectionObserver(es => es.forEach(e => { const v = $('#styleVid'); styleSeen = e.isIntersecting; if (e.isIntersecting) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause(); }), { threshold: .25 }).observe($('.style-monitor'));

/* ---------- contacts from config ---------- */
function waLink(text) { return waDigits ? `https://wa.me/${waDigits}?text=${encodeURIComponent(text)}` : ''; }
function contactList(hello) {
  const ar = L === 'ar';
  return [
    ['wa', 'WhatsApp', waLink(hello)],
    ['call', t('call'), waDigits ? `tel:+${waDigits}` : ''],
    ['mail', ar ? 'إيميل' : 'Email', C.email ? `mailto:${C.email}` : ''],
    ['ig', 'Instagram', C.instagram], ['tt', 'TikTok', C.tiktok], ['yt', 'YouTube', C.youtube],
    ['in', 'LinkedIn', C.linkedin], ['be', 'Behance', C.behance], ['x', 'X', C.x],
    ['cal', ar ? 'احجز مكالمة' : 'Book a call', C.calendly]
  ].filter(l => l[2]);
}
function contactBtn(l, cls) {
  const ext = /^https?:/.test(l[2]);
  const ICON = { wa: 'whatsapp', call: 'ui-phone', mail: 'ui-mail', ig: 'instagram', tt: 'tiktok', yt: 'youtube', in: 'linkedin', be: 'behance', x: 'x', cal: 'ui-calendar-days' };
  return `<a class="${cls} ch ch--${l[0]}" href="${esc(l[2])}"${ext ? ' target="_blank" rel="noopener"' : ''}><img class="ch-ic" src="media/icons/${ICON[l[0]]}.svg" alt="" width="22" height="22">${l[1]}</a>`;
}
function renderContacts() {
  const links = contactList(t('waHello'));
  $('#direct').innerHTML = links.length ? `<p class="direct-h">${t('contactH')}</p><div class="ch-row">${links.map(l => contactBtn(l, 'btn btn-ghost btn-sm')).join('')}</div>` : '';
  const hc = $('#heroContacts'); if (hc) hc.innerHTML = links.map(l => contactBtn(l, 'ch-mini')).join('');
  $('#footLinks').innerHTML = links.map(l => contactBtn(l, 'ch-mini')).join('');
}

/* ---------- work timeline ---------- */
const track = $('#track');
let showAll = false;
function allItems() { return X.work.filter(w => F === 'all' || w.c === F); }
function items() { const all = allItems(); return (F === 'all' && !showAll) ? all.slice(0, X.shown || 10) : all; }
function renderMore() {
  const b = $('#moreWork'); if (!b) return;
  const extra = allItems().length - (X.shown || 10);
  b.hidden = F !== 'all' || extra <= 0;
  b.textContent = showAll ? t('lessWork') : `${t('moreWork')} (+${extra})`;
  b.setAttribute('aria-expanded', String(showAll));
}
function buildTrack() {
  track.innerHTML = items().map((w, i) => `<div class="clipcard" data-i="${i}" data-c="${w.c}" tabindex="0" role="button" aria-label="${esc(w[L][0])}"><video src="media/${w.k}.mp4" poster="media/${w.k}.jpg" muted loop playsinline preload="none"></video><div class="bar">${w.k.toUpperCase()}.mp4${w.live ? `<b class="bar-live">${w.live.s}</b>` : ''}</div></div>`).join('');
  $$('.clipcard', track).forEach(c => {
    c.onclick = () => openLB(items()[+c.dataset.i]);
    c.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLB(items()[+c.dataset.i]); } };
    c.onmouseenter = () => cursorPlay(true); c.onmouseleave = () => cursorPlay(false);
  });
  active = -1; setActive(0);
  renderMore();
  if (hasGSAP) setupScroll();
}
function setActive(i) {
  const list = items(); if (!list.length) return;
  i = Math.max(0, Math.min(list.length - 1, i)); if (i === active) return; active = i;
  $$('.clipcard', track).forEach((c, j) => { const v = $('video', c); c.classList.toggle('on', j === i); if (j === i) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause(); });
  const w = list[i];
  $('#nowTag').textContent = `${X.t[L]['f_' + w.c]}  ${String(i + 1).padStart(2, '0')}/${String(list.length).padStart(2, '0')}`;
  $('#nowTitle').textContent = w[L][0]; $('#nowDesc').textContent = w[L][1];
  $('#nowOpen').onclick = () => openLB(w);
  const lv = $('#nowLive'); if (lv) { if (w.live) { lv.hidden = false; lv.href = w.live.u; lv.textContent = w.live[L]; } else lv.hidden = true; }
}
let st;
function setupScroll() {
  if (st) { st.kill(); st = null; gsap.set(track, { x: 0 }); }
  if (matchMedia('(max-width:600px)').matches) {   // mobile: native swipe
    track.onscroll = () => { const cards = $$('.clipcard', track); const mid = track.scrollLeft + track.clientWidth / 2; let best = 0, d = 1e9; cards.forEach((c, i) => { const cm = c.offsetLeft + c.offsetWidth / 2; if (Math.abs(cm - mid) < d) { d = Math.abs(cm - mid); best = i; } }); setActive(best); };
    return;
  }
  track.onscroll = null;
  const n = items().length, cards = $$('.clipcard', track);
  const stepPx = () => cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : 282;
  st = ScrollTrigger.create({
    trigger: '#workPin', pin: '#workPin', start: 'top top+=60', end: () => `+=${Math.max(1, n - 1) * stepPx()}`, scrub: reduced ? true : 0.6,
    animation: gsap.fromTo(track, { x: 0 }, { x: () => -(n - 1) * stepPx(), ease: 'none' }),
    onUpdate: s => setActive(Math.round(s.progress * (n - 1))), invalidateOnRefresh: true
  });
  ScrollTrigger.refresh();
}

/* ---------- lightbox ---------- */
let lastFocus = null;
function openLB(w) { lastFocus = document.activeElement; const v = $('#lbv'); v.src = `media/${w.k}.mp4`; v.muted = false; v.play().catch(() => {}); $('#lbFull').href = w.full || '#'; $('#lbFull').hidden = !w.full; $('#lb').classList.add('on'); $('#lbX').focus(); if (lenis) lenis.stop(); }
function closeLB() { $('#lbv').pause(); $('#lb').classList.remove('on'); if (lenis) lenis.start(); if (lastFocus) lastFocus.focus(); }
$('#lbX').onclick = closeLB; $('#lb').onclick = e => { if (e.target.id === 'lb') closeLB(); };
addEventListener('keydown', e => { if (e.key === 'Escape' && $('#lb').classList.contains('on')) closeLB(); });

/* ---------- brief form ---------- */
const FS = () => X.form[L];
const steps = () => FS().steps;
const curFields = () => (steps()[step] || { fields: [] }).fields;
function fieldById(id) { for (const s of steps()) for (const f of s.fields) if (f.id === id) return f; return null; }
function visible(f) { return !f.show || Object.entries(f.show).every(([k, v]) => formState[k] === v); }
function defaultReply() { return waDigits ? 0 : (C.email ? 1 : 0); }

function fieldHTML(f, S) {
  const hid = visible(f) ? '' : ' hidden';
  const opt = f.optional ? ` <small>${S.optional}</small>` : '';
  const help = f.help ? `<span class="fhelp" id="h_${f.id}">${f.help}</span>` : '';
  const err = `<p class="err" data-err="${f.id}" role="alert"></p>`;
  if (f.type === 'chips' || f.type === 'multi') {
    if (f.type === 'chips' && f.def && formState[f.id] === undefined) formState[f.id] = defaultReply();
    const type = f.type === 'multi' ? 'checkbox' : 'radio', cur = formState[f.id];
    const chips = f.options.map((o, i) => { const on = Array.isArray(cur) ? cur.includes(i) : cur === i; return `<label><input type="${type}" name="${f.id}" value="${i}"${on ? ' checked data-was="1"' : ''}><span>${o}</span></label>`; }).join('');
    const legend = f.label ? `<legend class="flabel">${f.label}${opt}</legend>` : `<legend class="sr">${steps()[step].q}</legend>`;
    return `<fieldset class="fgroup" data-f="${f.id}"${hid}>${legend}${help}<div class="chips">${chips}</div>${err}</fieldset>`;
  }
  const v = esc(formState[f.id] || ''), ph = esc(f.ph || '');
  const desc = f.help ? ` aria-describedby="h_${f.id}"` : '';
  const input = f.type === 'textarea'
    ? `<textarea id="f_${f.id}" rows="3" maxlength="500" placeholder="${ph}"${desc}>${v}</textarea>`
    : `<input id="f_${f.id}" type="${f.type === 'url' ? 'text' : f.type}" placeholder="${ph}" value="${v}" autocomplete="${f.ac || 'off'}"${f.type === 'url' ? ' inputmode="url" autocapitalize="off" spellcheck="false" dir="ltr"' : ''}${f.type === 'tel' || f.type === 'email' ? ' dir="ltr"' : ''}${desc}>`;
  return `<div class="field" data-f="${f.id}"${hid}><label for="f_${f.id}" class="flabel">${f.label}${opt}</label>${help}${input}${err}</div>`;
}

function submitLabel() { const S = FS(); return waDigits ? S.submit : C.email ? S.submitMail : S.submitCopy; }

function renderStep() {
  const S = FS(), all = steps(), n = all.length;
  $('#bar').style.width = `${Math.round((Math.min(step, n) / n) * 100)}%`;
  $('#preview').hidden = true;
  if (step >= n) { renderDone(); return; }
  const s = all[step], last = step === n - 1;
  $('#form').classList.remove('is-done');
  $('#stepCount').textContent = (last ? S.countLast : S.count).replace('{a}', step + 1).replace('{b}', n).replace('{label}', s.label);
  $('#back').style.visibility = step === 0 ? 'hidden' : 'visible';
  $('#back').textContent = t('back');
  $('#skip').hidden = !s.skip; $('#skip').textContent = S.skip;
  $('#next').hidden = false; $('#next').textContent = last ? submitLabel() : t('next');
  $('#reassure').textContent = last ? (waDigits ? S.reassure : C.email ? S.reassureMail : '') : '';
  $('#privacy').textContent = S.privacy;
  $('#extra').innerHTML = last ? `${waDigits && C.email ? `<button type="button" class="link" id="mailInstead">${S.mailInstead}</button>` : ''}<button type="button" class="link" id="previewBtn">${S.preview}</button>` : '';
  const pkg = formState.pkg != null && X.tiers[L][formState.pkg] ? `<p class="pkg-note">${S.pkgNote}: <b>${X.tiers[L][formState.pkg].n}</b> <button type="button" class="link" id="pkgX">${S.pkgClear}</button></p>` : '';
  $('#steps').innerHTML = `${step === 0 ? pkg : ''}<p class="q" id="q" tabindex="-1">${s.q}</p>${s.help ? `<p class="help">${s.help}</p>` : ''}${s.fields.map(f => fieldHTML(f, S)).join('')}`;
  if ($('#pkgX')) $('#pkgX').onclick = () => { delete formState.pkg; renderStep(); };
  if ($('#mailInstead')) $('#mailInstead').onclick = () => submit('mail');
  if ($('#previewBtn')) $('#previewBtn').onclick = togglePreview;
}

function refreshVisibility() {
  for (const f of curFields()) { const el = $(`#steps [data-f="${f.id}"]`); if (el) el.hidden = !visible(f); }
}
function normUrl(v) { return v && !/^https?:\/\//i.test(v) ? 'https://' + v.replace(/^\/+/, '') : v; }
function readStep() {
  for (const f of curFields()) {
    if (f.type === 'chips') { const c = $(`#steps input[name="${f.id}"]:checked`); formState[f.id] = c ? +c.value : undefined; }
    else if (f.type === 'multi') formState[f.id] = $$(`#steps input[name="${f.id}"]:checked`).map(i => +i.value);
    else { const el = $(`#f_${f.id}`); if (el) formState[f.id] = f.type === 'url' ? normUrl(el.value.trim()) : el.value.trim(); }
  }
}
function validate() {
  const S = FS(); let first = null;
  $$('#steps .err').forEach(e => e.textContent = '');
  for (const f of curFields()) {
    if (!visible(f)) continue;
    const v = formState[f.id], empty = v === undefined || v === '' || (Array.isArray(v) && !v.length);
    let msg = '';
    if (!f.optional && empty) msg = f.err || S.required;
    else if (!empty && f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = f.err;
    else if (!empty && f.type === 'tel' && !/^(\+|00)\d[\d\s()-]{6,}$/.test(v)) msg = f.err;
    if (msg) { const el = $(`#steps [data-err="${f.id}"]`); el.textContent = msg; first = first || el.closest('[data-f]'); }
  }
  if (first) { const fo = $('input,textarea', first); if (fo) fo.focus({ preventScroll: true }); first.scrollIntoView({ block: 'center', behavior: reduced ? 'auto' : 'smooth' }); }
  return !first;
}

/* form message */
function asText(f, v) {
  if (f.type === 'chips') return v === undefined ? '' : (f.options[v] || '');
  if (f.type === 'multi') return (v || []).map(i => f.options[i]).filter(Boolean).join(FS().sep || ', ');
  return v || '';
}
function replyText() {
  const S = FS(), r = formState.reply === undefined ? defaultReply() : formState.reply;
  if (r === 1) return formState.email ? S.replyMsg[1].replace('{email}', formState.email) : '';
  if (r === 2) return formState.phone ? S.replyMsg[2].replace('{phone}', formState.phone) + (formState.bestTime ? S.replyBest.replace('{t}', formState.bestTime) : '') : '';
  return S.replyMsg[0];
}
function val(id) {
  if (id === 'pkg') return formState.pkg != null && X.tiers[L][formState.pkg] ? X.tiers[L][formState.pkg].n : '';
  if (id === 'replyText') return replyText();
  const f = fieldById(id); return f ? asText(f, formState[id]) : '';
}
function message(bold) {
  const S = FS(), lab = k => bold ? `*${k}:*` : `${k}:`;
  const groups = S.msg.groups.map(g => g.map(([k, id]) => { const v = val(id); return v ? `${lab(k)} ${v}` : ''; }).filter(Boolean).join('\n')).filter(Boolean);
  const dz = window.MO_DISCOUNT; if (dz) groups.push(`${lab(S.discLabel || 'Discount')} ${(S.discLine || '{pct}% {code}').replace('{pct}', dz.pct).replace('{code}', dz.code)}`);
  return [S.msg.hello, ...groups, S.msg.thanks].join('\n\n');
}
function mailLink() { const S = FS(); return C.email ? `mailto:${C.email}?subject=${encodeURIComponent(S.mailSubject.replace('{name}', formState.name || ''))}&body=${encodeURIComponent(message(false))}` : ''; }
function togglePreview() {
  readStep(); const p = $('#preview'), S = FS();
  p.hidden = !p.hidden; p.textContent = message(false);
  $('#previewBtn').textContent = p.hidden ? S.preview : S.hidePreview;
}
function submit(via) {
  readStep(); if (!validate()) return;
  if (via === 'mail' && C.email) location.href = mailLink();
  else if (waDigits) window.open(waLink(message(true)), '_blank', 'noopener');
  else if (C.email) location.href = mailLink();
  step = steps().length; renderStep(); toForm();
}
function copyText(text, btn) {
  const ok = () => { btn.textContent = FS().copied; };
  const fallback = () => { const ta = document.createElement('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch (e) {} ta.remove(); };
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(ok, fallback); else fallback();
}
function renderDone() {
  const S = FS(), wa = waLink(message(true)), mail = mailLink();
  $('#form').classList.add('is-done');
  $('#stepCount').textContent = ''; $('#reassure').textContent = ''; $('#extra').innerHTML = '';
  $('#skip').hidden = true; $('#next').hidden = true;
  $('#back').style.visibility = 'visible'; $('#back').textContent = S.edit;
  const body = wa ? S.doneWa.replace('{wa}', `<span dir="ltr">+${waDigits}</span>`) : mail ? S.doneMail : S.doneNone;
  $('#steps').innerHTML = `<div class="done"><p class="q" id="q" tabindex="-1">${S.doneH}</p><p class="help">${body}</p><p class="help">${S.doneNext}</p><div class="send">${wa ? `<a class="btn" href="${wa}" target="_blank" rel="noopener">${S.again}</a>` : ''}<button class="btn${wa ? ' btn-ghost' : ''}" type="button" id="copyBrief">${S.copy}</button>${mail ? `<a class="btn btn-ghost" href="${mail}">${wa ? S.mailInstead : S.submitMail}</a>` : ''}</div><pre class="msg">${esc(message(false))}</pre></div>`;
  $('#copyBrief').onclick = e => copyText(message(!!wa), e.currentTarget);
  if (C.instagram && !$('#igBrief')) {
    const send = $('#steps .send');
    if (send) send.insertAdjacentHTML('beforeend', `<a class="btn btn-ghost" id="igBrief" href="${esc(C.instagram)}" target="_blank" rel="noopener">${S.ig || 'Instagram'}</a>`);
    const ig = $('#igBrief'); if (ig) ig.addEventListener('click', () => copyText(message(false), ig));
  }
}
function toForm() {
  const f = $('#form'); if (f.getBoundingClientRect().top >= 0) return;
  if (lenis) lenis.scrollTo(f, { offset: -80 }); else f.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}
// chip behaviour: "not sure" clears the rest, optional radios can be unticked, conditional fields follow the reply method
$('#steps').addEventListener('click', e => {
  const inp = e.target.closest('input[type=radio]'); if (!inp) return;
  const f = fieldById(inp.name);
  if (f && f.optional && inp.dataset.was === '1') { inp.checked = false; inp.dataset.was = ''; formState[f.id] = undefined; return; }
  $$(`#steps input[name="${inp.name}"]`).forEach(o => o.dataset.was = o === inp ? '1' : '');
});
$('#steps').addEventListener('change', e => {
  const inp = e.target; if (!inp.name) return;
  const f = fieldById(inp.name); if (!f) return;
  if (f.type === 'multi' && f.excl && inp.checked) {
    const ex = String(f.options.length - 1), group = $$(`#steps input[name="${f.id}"]`);
    group.forEach(o => { if (o !== inp && (inp.value === ex || o.value === ex)) o.checked = false; });
  }
  if (f.type === 'chips') { formState[f.id] = +inp.value; refreshVisibility(); }
  const er = $(`#steps [data-err="${f.id}"]`); if (er) er.textContent = '';
});
$('#form').addEventListener('submit', e => e.preventDefault());
$('#next').onclick = () => {
  if (step === steps().length - 1) { submit(); return; }
  readStep(); if (!validate()) return;
  step++; renderStep(); toForm(); $('#q') && $('#q').focus({ preventScroll: true });
};
$('#skip').onclick = () => { readStep(); step++; renderStep(); toForm(); };
$('#back').onclick = () => { if (step < steps().length) readStep(); step = Math.max(0, Math.min(step, steps().length) - 1); renderStep(); };

/* ---------- timecode, cursor, magnetic ---------- */
const tc = $('#tc');
function fmt(sec) { const f = Math.floor((sec % 1) * 25), s = Math.floor(sec) % 60, m = Math.floor(sec / 60) % 60, h = Math.floor(sec / 3600); return [h, m, s, f].map(x => String(x).padStart(2, '0')).join(':'); }
function onScroll() { const max = document.documentElement.scrollHeight - innerHeight; tc.textContent = fmt((scrollY / Math.max(1, max)) * 120); }
addEventListener('scroll', onScroll, { passive: true });
const cur = $('.cursor');
function cursorPlay(on) { if (!cur) return; cur.classList.toggle('play', on); $('span', cur).textContent = on ? 'PLAY' : ''; }
if (!coarse && !reduced) {
  addEventListener('pointermove', e => { cur.style.transform = `translate(${e.clientX}px,${e.clientY}px)`; }, { passive: true });
  $$('.ai-media video, .hero-stack video').forEach(v => { v.addEventListener('mouseenter', () => cursorPlay(true)); v.addEventListener('mouseleave', () => cursorPlay(false)); });
  document.addEventListener('pointerover', e => { const m = e.target.closest('.magnetic'); if (!m || m.dataset.mag) return; m.dataset.mag = '1'; const move = ev => { const r = m.getBoundingClientRect(); m.style.transform = `translate(${(ev.clientX - r.left - r.width / 2) * .25}px,${(ev.clientY - r.top - r.height / 2) * .35}px)`; }; const out = () => { m.style.transform = ''; delete m.dataset.mag; m.removeEventListener('pointermove', move); m.removeEventListener('pointerleave', out); }; m.addEventListener('pointermove', move); m.addEventListener('pointerleave', out); });
} else if (cur) cur.style.display = 'none';

/* lazy play for in-view videos */
const io = new IntersectionObserver(es => es.forEach(e => { const v = e.target; if (e.isIntersecting) { v.preload = 'auto'; v.play().catch(() => {}); } else v.pause(); }), { threshold: .3 });
$$('.lazyplay').forEach(v => io.observe(v));

/* ---------- intro: slate, clips onto the timeline, playhead sweep ---------- */
function intro() {
  const stackVids = $$('#stack video');
  if (!hasGSAP || reduced) { $('#slate').remove(); stackVids.forEach(v => v.play().catch(() => {})); return; }
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
  const o = { s: 0 };
  tl.to(o, { s: 1.0, duration: .9, ease: 'none', onUpdate: () => $('#slateTc').textContent = fmt(o.s) })
    .to('#slate', { yPercent: -100, duration: .8, ease: 'power3.inOut' })
    .set('#slate', { display: 'none' })
    .from('h1 .clip', { xPercent: L === 'ar' ? -60 : 60, opacity: 0, duration: 1, stagger: .12 }, '-=.35')
    .fromTo('h1 .clip', { fontVariationSettings: '"wdth" 125' }, { fontVariationSettings: '"wdth" 70', duration: 1.2, stagger: .12, ease: 'expo.out' }, '<')
    .from(['.kicker', '.hero-sub', '.hero-cta', '.hero-note'], { y: 24, opacity: 0, duration: .8, stagger: .08 }, '-=.8')
    .from(stackVids, { y: 80, opacity: 0, rotateX: 18, duration: 1.1, stagger: .1 }, '<')
    .set('#playhead', { opacity: 1 })
    .to('#playhead', { x: () => innerWidth + 20, duration: 1.6, ease: 'power2.inOut', onUpdate() { const x = gsap.getProperty('#playhead', 'x'); stackVids.forEach(v => { const r = v.getBoundingClientRect(); if (x >= r.left && v.paused) v.play().catch(() => {}); }); } }, '-=.5')
    .to('#playhead', { opacity: 0, duration: .2 })
    .add(() => stackVids.forEach(v => v.paused && v.play().catch(() => {})));
  // mouse parallax on the stack
  if (!coarse) addEventListener('pointermove', e => { const dx = (e.clientX / innerWidth - .5), dy = (e.clientY / innerHeight - .5); gsap.to('#stack', { rotateY: dx * 10, rotateX: -dy * 8, duration: .8, ease: 'power3.out', overwrite: 'auto' }); });
  // headings reveal once
  gsap.utils.toArray('.hooklab figure, .thumbs figure, .edge-list li').forEach((el, i) => gsap.from(el, { y: 60, opacity: 0, duration: .9, delay: (i % 5) * .08, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
  gsap.utils.toArray('.statement, .styles h2, .tests h2, .edge h2, .services h2, .packages h2, .ai h2, .process h2, .faq h2, .brief h2').forEach(h => gsap.from(h, { y: 40, opacity: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: h, start: 'top 85%', once: true } }));
  gsap.utils.toArray('.tier').forEach((el, i) => gsap.from(el, { y: 50, opacity: 0, duration: .9, delay: (i % 4) * .08, ease: 'power3.out', scrollTrigger: { trigger: '#tiers', start: 'top 80%', once: true } }));
}

/* ---------- smooth scroll ---------- */
if (window.Lenis && hasGSAP && !reduced) {
  lenis = new Lenis({ lerp: .09, smoothWheel: true });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000)); gsap.ticker.lagSmoothing(0);
}
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]'); if (!a) return;
  const id = a.getAttribute('href'); if (id.length < 2) return;
  const target = $(id); if (!target) return;
  e.preventDefault();
  if (lenis) lenis.scrollTo(target, { offset: -60 }); else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
});

$('#moreWork') && ($('#moreWork').onclick = () => {
  const keep = X.shown || 10; showAll = !showAll; buildTrack();
  if (showAll && st && hasGSAP) { const n = items().length; const y = st.start + (st.end - st.start) * (keep / Math.max(1, n - 1)); lenis ? lenis.scrollTo(y) : scrollTo(0, y); }
  else if (!showAll) { const w = $('#work'); lenis ? lenis.scrollTo(w, { offset: -60 }) : w.scrollIntoView(); }
});
$('#lang').onclick = () => { if (step < steps().length) readStep(); L = L === 'en' ? 'ar' : 'en'; store.set('lang', L); render(); buildTrack(); };
render(); buildTrack(); intro(); onScroll();
// rebuild the timeline only when crossing the mobile breakpoint (mobile browsers fire resize while scrolling)
let rz, wasMobile = matchMedia('(max-width:600px)').matches;
addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { const m = matchMedia('(max-width:600px)').matches; if (m !== wasMobile) { wasMobile = m; buildTrack(); } }, 200); });
})();
