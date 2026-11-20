/* The prize machine: one spin, a real random discount for a hesitant visitor.
   The discount only stays when the visitor starts the brief (enters data) or sends it.
   Odds, the valid days and the triggers live in content.js (CONTENT.discount). */
(() => {
const X = window.CONTENT || {}, D = X.discount;
if (!D || !D.on) return;
const $ = s => document.querySelector(s);
const lang = () => document.documentElement.lang === 'ar' ? 'ar' : 'en';
const T = (k, p) => (D.t[lang()][k] || '').replace('{pct}', p ? p.pct : '').replace('{code}', p ? p.code : '');
const ls = { get: k => { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} } };
const ss = { get: k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } }, set: (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) {} } };
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

let prize = null;
try { const p = JSON.parse(ls.get('mo_prize') || 'null'); if (p && p.locked && p.until > Date.now()) prize = p; } catch (e) {}
if (!prize) { try { prize = JSON.parse(ss.get('mo_prize') || 'null'); } catch (e) {} }
const publish = () => { window.MO_DISCOUNT = prize; document.dispatchEvent(new CustomEvent('mo:discount')); };
publish();

function pick() { const total = D.odds.reduce((s, o) => s + o[1], 0); let r = Math.random() * total; for (const [v, w] of D.odds) { if ((r -= w) < 0) return v; } return D.odds[0][0]; }
function makeCode() { const a = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; let c = ''; for (let i = 0; i < 4; i++) c += a[Math.floor(Math.random() * a.length)]; return 'MO-' + c; }

/* ---------- markup ---------- */
document.body.insertAdjacentHTML('beforeend', `
<div class="prize" id="prize" role="dialog" aria-modal="true" aria-labelledby="prizeH" hidden>
  <div class="prize-box">
    <button class="prize-x" type="button" id="prizeX">×</button>
    <p class="prize-tag" id="prizeTag"></p>
    <h3 id="prizeH"></h3>
    <p class="prize-sub" id="prizeSub"></p>
    <div class="reels" aria-hidden="true"><div class="reel"><div class="strip"></div></div><div class="reel"><div class="strip"></div></div><div class="reel"><div class="strip"></div></div></div>
    <button class="btn prize-spin" type="button" id="prizeSpin"></button>
    <div class="prize-result" id="prizeResult" hidden>
      <p class="prize-win" id="prizeWin" aria-live="polite"></p>
      <p class="prize-terms" id="prizeTerms"></p>
      <div class="btn-row"><a class="btn" href="#brief" id="prizeLock"></a><button class="btn btn-ghost" type="button" id="prizeLater"></button></div>
    </div>
  </div>
</div>
<button class="prize-chip" id="prizeChip" type="button" hidden></button>`);

const box = $('#prize'), chip = $('#prizeChip');
function texts() {
  $('#prizeTag').textContent = T('tag'); $('#prizeH').textContent = T('title'); $('#prizeSub').textContent = T('sub');
  $('#prizeSpin').textContent = T('spin'); $('#prizeX').setAttribute('aria-label', T('close'));
  $('#prizeLock').textContent = T('lock'); $('#prizeLater').textContent = T('later'); $('#prizeTerms').textContent = T('terms');
  if (prize) $('#prizeWin').textContent = T('win', prize);
  renderChip();
}
function renderChip() {
  if (!prize) { chip.hidden = true; return; }
  chip.hidden = false; chip.classList.toggle('is-locked', !!prize.locked);
  chip.textContent = prize.locked ? T('chipLocked', prize) : T('chipWait', prize);
}

/* ---------- the reels ---------- */
const SYM = ['★', '▶', '◆', '♥', '5', '10', '15', '20', '%', '$'];
function fillReel(strip, final, n) {
  const items = []; for (let i = 0; i < n - 1; i++) items.push(SYM[Math.floor(Math.random() * SYM.length)]);
  items.push(final); strip.innerHTML = items.map(s => `<span>${s}</span>`).join('');
}
function spin() {
  const btn = $('#prizeSpin'); btn.disabled = true; btn.textContent = T('spinning');
  const pct = pick(); prize = { pct, code: makeCode(), locked: false, until: Date.now() + D.validDays * 864e5 };
  const finals = ['★', String(pct), '%'];
  const strips = [...box.querySelectorAll('.strip')];
  let done = 0, landed = false;
  const finish = () => { if (landed) return; landed = true; strips.forEach((st, j) => { const hh = st.firstElementChild.getBoundingClientRect().height || 64; st.getAnimations && st.getAnimations().forEach(a => a.cancel()); st.style.transform = `translateY(${-(st.children.length - 1) * hh}px)`; }); land(); };
  setTimeout(finish, 2400);
  strips.forEach((s, i) => {
    const n = 14 + i * 6; fillReel(s, finals[i], n);
    const h = s.firstElementChild.getBoundingClientRect().height || 64;
    const end = () => { if (++done === strips.length) finish(); };
    if (reduced || !s.animate) { s.style.transform = `translateY(${-(n - 1) * h}px)`; end(); return; }
    s.animate([{ transform: 'translateY(0)' }, { transform: `translateY(${-(n - 1) * h}px)` }],
      { duration: 900 + i * 450, easing: `steps(${n - 1}, end)`, fill: 'forwards' }).onfinish = end;
  });
}
function land() {
  ss.set('mo_prize', JSON.stringify(prize)); publish();
  $('#prizeSpin').hidden = true; $('#prizeResult').hidden = false; texts();
  box.classList.add('won'); $('#prizeLock').focus();
}

/* ---------- open, close, lock ---------- */
let lastFocus = null;
function open() {
  if (!box.hidden) return;
  ls.set('mo_spin_shown', '1'); texts(); lastFocus = document.activeElement;
  box.hidden = false; requestAnimationFrame(() => box.classList.add('on')); $('#prizeSpin').focus();
}
function close() { box.classList.remove('on'); box.hidden = true; renderChip(); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
function lock() {
  if (!prize || prize.locked) return;
  prize.locked = true; prize.until = Date.now() + D.validDays * 864e5;
  ls.set('mo_prize', JSON.stringify(prize)); ss.set('mo_prize', JSON.stringify(prize)); publish(); renderChip();
}
$('#prizeSpin').onclick = spin;
$('#prizeX').onclick = close; $('#prizeLater').onclick = close;
$('#prizeLock').addEventListener('click', () => close());
box.addEventListener('click', e => { if (e.target === box) close(); });
addEventListener('keydown', e => { if (e.key === 'Escape' && !box.hidden) close(); });
chip.onclick = () => { const b = $('#brief'); if (b) b.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' }); };
/* entering data in the brief, or sending it, keeps the discount */
const form = $('#form');
if (form) { form.addEventListener('input', lock); form.addEventListener('change', lock); }
document.addEventListener('click', e => { if (e.target.closest('#next, #mailInstead, #prizeLock')) { if (e.target.closest('#prizeLock')) return; lock(); } });
new MutationObserver(texts).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
texts();

/* ---------- when a visitor hesitates ---------- */
const seen = () => ls.get('mo_spin_shown') === '1' || !!prize;
const t0 = Date.now(); let engaged = false, fired = false;
if (form) form.addEventListener('input', () => { engaged = true; lastInput = Date.now(); });
let lastInput = Date.now();
function hesitant() { if (fired || seen() || Date.now() - t0 < D.minMs) return; fired = true; open(); }
document.addEventListener('mouseout', e => { if (!e.relatedTarget && e.clientY < 8 && !engaged) hesitant(); });
const pk = $('#packages');
if (pk) {
  let dwell = 0, timer = null;
  new IntersectionObserver(es => es.forEach(en => {
    clearInterval(timer);
    if (en.isIntersecting) timer = setInterval(() => { dwell += 1000; if (dwell >= D.priceDwellMs && !engaged) hesitant(); }, 1000);
  }), { threshold: .3 }).observe(pk);
}
setInterval(() => {
  if (!form || !engaged) return;
  const r = form.getBoundingClientRect();
  if (r.top < innerHeight && r.bottom > 0 && Date.now() - lastInput > D.formIdleMs && !document.querySelector('#form.is-done')) hesitant();
}, 2000);
setTimeout(() => { if (!engaged && pk && pk.getBoundingClientRect().top < innerHeight * 3) hesitant(); }, D.lateMs);
window.MO_PRIZE_OPEN = open;   // for testing from the console
})();
