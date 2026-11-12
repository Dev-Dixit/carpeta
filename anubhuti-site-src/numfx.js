/* Number delighters. Each value animates in a way that matches what it means:
   count   plain numbers, %, +/- bps: count up (or down for negatives), with eased landing
   fold    "5 → 1": the first number folds down one by one into the second, like tabs collapsing
   shift   "2.6% → 5.4%": the before value sits, then the after value counts up past it
   times   "2x": 1x stretches into 2x
   clock   "60s": a stopwatch ring sweeps while seconds tick
   word    words like "Worldwide" or "Foundation": letters set in one by one, as if typeset
   The final text is always what ends up in the DOM, so layout and screen readers stay correct.
   Width is reserved up front, so nothing next to the number moves while it animates. */
(function(){
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const ease=t=>1-Math.pow(1-t,3);
const NUM=/^([^\d\-+]*?)([\-+]?)(\d+(?:\.\d+)?)(.*)$/;
function kind(s){
 if(/\d\s*→\s*\d/.test(s))return /%/.test(s)?'shift':'fold';
 if(/^\d+(\.\d+)?x$/i.test(s))return 'times';
 if(/^\d+s$/.test(s))return 'clock';
 if(!/\d/.test(s))return 'word';
 if(NUM.test(s))return 'count';
 return 'word'}
function run(dur,fn,done){const t0=performance.now();(function f(n){const t=Math.min(1,(n-t0)/dur);fn(t);if(t<1)requestAnimationFrame(f);else done&&done()})(t0)}
function fmt(v,dec){return dec?v.toFixed(dec):String(Math.round(v))}
function reserve(el){const r=el.getBoundingClientRect();if(r.width)el.style.minWidth=Math.ceil(r.width)+'px';if(r.height)el.style.height=Math.ceil(r.height)+'px'}
const FX={
 count(el,s){const m=s.match(NUM),pre=m[1],sign=m[2],n=parseFloat(m[3]),post=m[4],dec=(m[3].split('.')[1]||'').length;
  const dur=Math.min(900,500+n*3),from=n>10?.6:0;
  run(dur,t=>{el.textContent=pre+sign+fmt(n*(from+(1-from)*ease(t)),dec)+post;if(sign==='-')el.style.translate=`0 ${(1-ease(t))*-6}px`},()=>{el.textContent=s;el.style.translate=''})},
 fold(el,s){const [a,b]=s.split('→').map(x=>parseInt(x));const steps=[];for(let k=a;k>=b;k--)steps.push(k);
  el.innerHTML=a+'<i class="nf-ar">→</i><span class="nf-roll"></span>';const r=el.querySelector('.nf-roll');let i=0;
  const show=()=>{r.textContent=steps[i];r.classList.remove('nf-drop');void r.offsetWidth;r.classList.add('nf-drop');
   if(++i<steps.length)setTimeout(show,160);else setTimeout(()=>{el.innerHTML=s.replace('→','<i class="nf-ar">→</i>');el.classList.add('nf-set')},380)};show()},
 shift(el,s){const [A,B]=s.split('→').map(x=>x.trim());const ma=A.match(NUM),mb=B.match(NUM),a=parseFloat(ma[3]),b=parseFloat(mb[3]),dec=(mb[3].split('.')[1]||'').length;
  el.innerHTML=`<span class="nf-was">${A}</span> <i class="nf-ar">→</i> <span class="nf-now">${A}</span>`;const now=el.querySelector('.nf-now');
  setTimeout(()=>run(1200,t=>{now.textContent=mb[1]+fmt(a+(b-a)*ease(t),dec)+mb[4]},()=>{el.textContent=s}),350)},
 times(el,s){const n=parseFloat(s);el.innerHTML='<span class="nf-x">1x</span>';const x=el.firstChild;
  run(900,t=>{const v=1+(n-1)*ease(t);x.textContent=(Number.isInteger(n)&&t<1?v.toFixed(1):fmt(v,0))+'x';x.style.transform=`scaleX(${1+Math.sin(t*Math.PI)*.07})`},()=>{el.textContent=s})},
 clock(el,s){const n=parseInt(s);el.innerHTML=`<svg class="nf-clock" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-opacity=".2" stroke-width="2.4"/><circle class="nf-sweep" cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" pathLength="100" stroke-dasharray="0 100" transform="rotate(-90 12 12)"/></svg><span class="nf-sec">0s</span>`;
  const sw=el.querySelector('.nf-sweep'),sec=el.querySelector('.nf-sec');
  run(1500,t=>{const e=ease(t);sec.textContent=Math.round(n*e)+'s';sw.setAttribute('stroke-dasharray',`${e*100} 100`)},()=>{setTimeout(()=>{el.textContent=s},500)})},
 word(el,s){el.innerHTML=[...s].map((c,i)=>`<span class="nf-l" style="animation-delay:${i*45}ms">${c===' '?'&nbsp;':c}</span>`).join('');setTimeout(()=>{el.textContent=s},s.length*45+700)}
};
window.numFx=function(el){if(window.__numReady&&!window.__numReadyDone){if(!el.__q){el.__q=1;window.__numReady.then(()=>{el.__q=0;numFx(el)})}return}const s=el.dataset.n||el.textContent.trim();if(!el.dataset.n)el.dataset.n=s;
 if(el.dataset.done)return;el.dataset.done=1;el.classList.remove('pend');
 if(reduce){el.textContent=s;return}
 reserve(el);const k=el.dataset.fx||kind(s);el.dataset.fx=k;el.classList.add('nf-'+k);FX[k](el,s)};
window.numFxReset=function(el){delete el.dataset.done;el.textContent=el.dataset.n;el.style.minWidth='';el.style.height=''};
const css=document.createElement('style');css.textContent=`
[data-n]{white-space:nowrap}
[data-n] .nf-roll,[data-n] .nf-x,[data-n] .nf-ar,[data-n] .nf-was,[data-n] .nf-now,[data-n] .nf-sec{vertical-align:top;line-height:inherit}
.nf-clock{vertical-align:top!important;margin-top:.12em}
.nf-roll{display:inline-block}
.nf-drop{animation:nfDrop .23s cubic-bezier(.3,1.4,.5,1)}
@keyframes nfDrop{0%{transform:translateY(-55%);opacity:0}100%{transform:none;opacity:1}}
.nf-ar{font-style:normal;display:inline-block}
.nf-set .nf-ar{animation:nfAr .5s cubic-bezier(.3,1.6,.5,1)}
@keyframes nfAr{0%{transform:translateX(-8px);opacity:0}100%{transform:none;opacity:1}}
.nf-was{opacity:.45;text-decoration:line-through;text-decoration-thickness:.06em}
.nf-x{display:inline-block;transform-origin:0 50%}
.nf-clock{width:.72em;height:.72em;vertical-align:-.04em;margin-right:.12em}
.nf-l{display:inline-block;vertical-align:top;line-height:inherit;animation:nfL .55s cubic-bezier(.2,.9,.3,1.2) both}
@keyframes nfL{0%{opacity:0;transform:translateY(.35em) rotate(6deg)}100%{opacity:1;transform:none}}
`;document.head.append(css);
})();
