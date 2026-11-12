/* Airy/floating variants. ?air=0|1|2|3 (0 = current). Default comes from window.AIR_DEFAULT once one is picked. */
(function(){
const q=new URLSearchParams(location.search);let v=q.get('air');
if(v===null)v='3';   // picked after comparing 0-3 in air-compare.html
if(v==='0')return;
if(!/case\.html/.test(location.pathname))return;   // spacing variants are for case pages only; the home page has its own staging
document.documentElement.classList.add('air','air'+v);
const css=document.createElement('style');
css.textContent=`
/* shared by all variants: more room, softer edges */
.air main{padding-top:140px}
.air section{margin-top:140px}
.air .story{margin-top:150px}
.air .beats{gap:min(24vh,220px)}
.air .beat p{line-height:1.7}
.air .beat:not(.has-pt)>div:first-child{width:min(100%,800px);justify-self:center}
.air .beat:not(.has-pt) .wide:not(.more){width:min(100%,1000px);justify-self:center}
.air .beat:not(.has-pt) .stats{justify-content:flex-start}
.air .beat.has-pt{column-gap:7vw}
.air .tldr{margin-top:56px;padding:34px 38px}
.air .impact{gap:20px}
.air .outs{gap:20px}
.air .foot{margin-top:160px}
.air .sec{padding-top:20vh;padding-bottom:10vh}
.air .more{gap:26px}
.air .card,.air .imp,.air .outs div,.air .tldr,.air .stats div,.air .tl-c,.air .pp-c,.air .gap{box-shadow:0 40px 70px -50px rgba(120,60,30,.42)}

/* 2: Float. Cards and figures bob gently, each on its own beat. */
.air2 .imp,.air2 .outs div,.air2 .stats div,.air2 .tl-c,.air2 .pp-c,.air2 .md.phone,.air2 .more>*,.air2 .tldr{animation:airBob 7s ease-in-out infinite;animation-delay:calc(var(--bob,0) * -1.3s)}
.air2 .imp:nth-child(2),.air2 .outs div:nth-child(2),.air2 .tl-c:nth-child(2),.air2 .pp-c:nth-child(2){--bob:1}
.air2 .imp:nth-child(3),.air2 .outs div:nth-child(3),.air2 .tl-c:nth-child(3),.air2 .pp-c:nth-child(3){--bob:2}
.air2 .outs div:nth-child(4){--bob:3}
@keyframes airBob{0%,100%{translate:0 0}50%{translate:0 -7px}}
.air2 .imp,.air2 .outs div{transition:box-shadow .6s}
.air2 .imp:hover,.air2 .outs div:hover{box-shadow:0 60px 80px -50px rgba(120,60,30,.5)}

/* 3: Drift. Float, plus clouds that drift behind the page and media that lags the text a touch as you scroll. */

.air3 .imp:nth-child(2),.air3 .outs div:nth-child(2),.air3 .tl-c:nth-child(2),.air3 .pp-c:nth-child(2){--bob:1}
.air3 .imp:nth-child(3),.air3 .outs div:nth-child(3),.air3 .tl-c:nth-child(3),.air3 .pp-c:nth-child(3){--bob:2}
.air3 .beat>.wide,.air3 .beat>.md{will-change:transform}
.air-clouds{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:clip;contain:strict}
.air-clouds i{position:absolute;width:46vw;height:20vw;border-radius:50%;background:radial-gradient(closest-side,rgba(255,255,255,.75),rgba(255,255,255,0));filter:blur(8px);animation:airDrift linear infinite}
@keyframes airDrift{from{transform:translateX(-60vw)}to{transform:translateX(120vw)}}
@media(prefers-reduced-motion:reduce){.air *{animation:none!important}.air-clouds{display:none}}
`;
document.head.append(css);
if(v==='3'){
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 addEventListener('DOMContentLoaded',()=>{
  const c=document.createElement('div');c.className='air-clouds';c.setAttribute('aria-hidden','true');
  c.innerHTML=[[12,90,0],[38,140,-40],[64,110,-75],[84,160,-20]].map(([t,d,dl])=>`<i style="top:${t}%;animation-duration:${d}s;animation-delay:${dl}s"></i>`).join('');
  document.body.prepend(c);
  if(reduce)return;
  let items=[];const pick=()=>{items=[...document.querySelectorAll('.beat>.wide,.beat>.md')]};setTimeout(pick,800);
  (function lp(){const h=innerHeight;for(const e of items){const r=e.getBoundingClientRect();if(r.bottom<0||r.top>h)continue;const off=(r.top+r.height/2-h/2)/h;e.style.transform=`translate3d(0,${off*26}px,0)`}requestAnimationFrame(lp)})()})}
})();
