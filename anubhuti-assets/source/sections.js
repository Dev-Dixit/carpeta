/* below-the-fold images load as they approach the viewport, so the first screen gets the bandwidth */
window.__lazy=window.__lazy||(()=>{const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const im=e.target;im.src=im.dataset.src;im.removeAttribute('data-src');io.unobserve(im)}}),{rootMargin:'150% 0px'}):null;
 return el=>{if(!el.dataset.src)return;if(io)io.observe(el);else{el.src=el.dataset.src}}})();
/* Builds Path, more work, About and Contact into #after. Needs work.js (countUp) loaded first. */
(function(){
const VB=new URLSearchParams(location.search).get('v')!=='a';
const EMAIL='hello@anubhuti.design',LINKEDIN='https://www.linkedin.com/in/theanubhutiuxd/',CV='site/Anubhuti-Jain-Singh-CV.pdf';
const PATH=[
 {yr:'2022 to now',t:'Senior Product Designer',o:'Microsoft',l:'AI creation and agents across Copilot, PowerPoint and Loop. Co-inventor on a US patent filed for voice and touch.'},
 {yr:'2020 to 2022',t:'Product Designer, core shopping',o:'Flipkart',l:'Post-purchase, cancellation, cart and the design system for India’s largest e-commerce platform.'},
 {yr:'2019 to 2020',t:'Product Designer and Researcher',o:'Instasolv',l:'Went into the field with students, then reshaped exam-prep flows and made ratings clearer.'},
 {yr:'2018 to 2019',t:'Freelance Product Designer',o:'Attentive AI',l:'Geospatial extraction workflows, information architecture and a reusable style guide.'},
 {yr:'2018 to 2020',t:'Master of Design',o:'NIFT, New Delhi',l:'Ranked 2 in the NIFT design entrance. Moved from designing buildings to designing products.',edu:1},
 {yr:'2016',t:'Bachelor of Architecture',o:'Vastu Kala Academy, New Delhi',l:'Architecture taught me to think in systems long before I drew a single screen.',edu:1}];
const MORE=[
 {k:'kit',o:'Flipkart',t:'Design system migration',l:'Moved 92 designers from Adobe XD and Sketch onto one Figma system. Nobody asked for it.',h:'Sold it as a business case first, then taught it hands-on.'},
 {k:'cancel',o:'Flipkart',t:'Cancellation nudge',l:'Moved the nudge to the moment someone taps Cancel. Acceptance went from 1.5% to 6.8% in an A/B.',h:'The earlier you step in, the cheaper it is to change a mind.'},
 {k:'omni',o:'Microsoft',t:'Burst to Omni',l:'A mobile agent that helps you get real work done in the minute you have, with swipe-to-decide cards.',h:'Be productive within 60 seconds of picking up your phone.'},
 {k:'loop',o:'Microsoft Loop',t:'Loop Cell',l:'Live Loop blocks that stay in sync wherever they are pasted. Hackathon award; the idea is still alive in Loop.',h:'One block, edited live wherever it is pasted.'},
 {k:'chick',o:'Microsoft FHL',t:'Chicken check-in',l:'A playful project check-in that won a hackathon award and ended up in Microsoft marketing.',h:'A tiny ritual instead of a long status meeting.'},
];
const LINK={kit:'design-system',cancel:'cancellation',omni:'burst-omni',loop:'loop-cell',chick:'chicken'};
const SKI={"Agentic UX": "<path d=\"M5 9h10v8H5zM10 5v4M8 13h.01M12 13h.01M16 4l1 2 2 1-2 1-1 2-1-2-2-1 2-1z\"/>", "AI creation": "<path d=\"M10 3l1.6 4.4L16 9l-4.4 1.6L10 15l-1.6-4.4L4 9l4.4-1.6zM16 13l.8 2.2L19 16l-2.2.8L16 19l-.8-2.2L13 16l2.2-.8z\"/>", "Voice and touch": "<path d=\"M8 3a2 2 0 0 1 2 2v5a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2zM4 10a4 4 0 0 0 8 0M8 14v3M14 9v-1.5a1.3 1.3 0 0 1 2.6 0V13l1.4-.6a1.4 1.4 0 0 1 1.6 2L17 18h-4l-1-3\"/>", "Mobile": "<path d=\"M7 3h6a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 13 17H7a1.5 1.5 0 0 1-1.5-1.5v-11A1.5 1.5 0 0 1 7 3zM9 14.5h2\"/>", "Design systems": "<path d=\"M4 4h5v5H4zM11 4h5v5h-5zM4 11h5v5H4zM13.5 11v5M11 13.5h5\"/>", "Research synthesis": "<path d=\"M9 4a5 5 0 1 1 0 10A5 5 0 0 1 9 4zM12.6 12.6 17 17M7 9h4M9 7v4\"/>", "Behavioural design": "<path d=\"M4 15c3 0 3-8 7-8h4M12 4l3 3-3 3M4 15h2\"/>", "Coded prototypes": "<path d=\"M7 6l-4 4 4 4M13 6l4 4-4 4M11 4l-2 12\"/>"};
const SK=['Agentic UX','AI creation','Voice and touch','Mobile','Design systems','Research synthesis','Behavioural design','Coded prototypes'];
const PLANE='<svg viewBox="0 0 30 30"><g transform="rotate(45 15 15)"><path d="M2 2 27 11.5 15.2 15.2 11.5 27Z" fill="#fffaf3" stroke="#2b3236" stroke-width="1.3" stroke-linejoin="round"/><path d="M2 2 15.2 15.2 11.5 27Z" fill="#f4a98f" stroke="#2b3236" stroke-width="1.3" stroke-linejoin="round"/></g></svg>';

const PB=[
 {yr:'2026',when:'2026',t:'A patent filing and live prototypes',o:'Microsoft',img:'v3-t-2026',l:'Co-invented a voice and touch model for creating, then built prototypes for voice and gesture editing in PowerPoint.',tags:['US patent filed','Voice AI','Built in code']},
 {yr:'2022',when:'2022 to now',t:'Senior Product Designer',o:'Microsoft',img:'v3-t-2022',l:'AI creation and agents across Microsoft 365 Copilot, PowerPoint and Loop.',tags:['Copilot Create','Agents','Mobile']},
 {yr:'2020',when:'2020 to 2022',t:'Product Designer, core shopping',o:'Flipkart',img:'v3-t-2020',l:'Post-purchase, cancellation, returns and cart, plus moving 92 designers onto one system.',tags:['5 awards','92 designers']},
 {yr:'2018',when:'2018 to 2020',t:'Master of Design, then startups',o:'NIFT, Instasolv, Attentive AI',img:'v4-t-2018',l:'Ranked 2 in the NIFT design entrance, then designed EdTech and geospatial products with small teams.',tags:['Rank 2, NIFT entrance','EdTech','Geospatial']},
 {yr:'2016',when:'2016',t:'Bachelor of Architecture',o:'Vastu Kala Academy, New Delhi',img:'v4-t-2016',l:'Learned to think in systems, sections and scale. Lifted to nationals on the side.',tags:['B.Arch','Powerlifting']}];
const PATHB_HTML=`<section id="path" class="tlb"><div class="tl-pin" id="tlPin"><div class="tl-stick">
 <div class="tl-head"><h2>The path so far</h2><p>Newest first. Eight years of product design, from startups to Microsoft 365 Copilot.</p></div>
 <div class="tl-track" id="tlTrack">${PB.map((e,i)=>`<div class="ep" data-i="${i}"><span class="yr">${e.yr}</span><div class="art"><img data-src="renders/${e.img}.webp?v=2" alt="" decoding="async"></div>
  <div class="txt"><span class="when">${e.when}</span><h3>${e.t}</h3><div class="org">${e.o}</div><p>${e.l}</p><ul>${e.tags.map(t=>`<li>${t}</li>`).join('')}</ul></div></div>`).join('')}</div>
 <div class="tl-rail" id="tlRail"><div class="line"></div><div class="fill" id="tlFill"></div>
  <svg class="plane" id="tlPlane" viewBox="0 0 30 30"><g transform="rotate(45 15 15)"><path d="M2 2 27 11.5 15.2 15.2 11.5 27Z" fill="#fffaf3" stroke="#2b3236" stroke-width="1.4" stroke-linejoin="round"/><path d="M2 2 15.2 15.2 11.5 27Z" fill="#f4a98f" stroke="#2b3236" stroke-width="1.4" stroke-linejoin="round"/></g></svg>
  ${PB.map((e,i)=>`<button class="dot" data-i="${i}" style="left:${i/(PB.length-1)*100}%;--k:${i/(PB.length-1)}" data-cursor="${e.when}" data-say="${e.t}"><i></i><span>${e.yr}</span></button>`).join('')}</div>
</div></div></section>`;
const host=document.getElementById('after');
host.innerHTML=`
<section class="sec" id="more" style="padding-top:12vh"><div class="sh rv"><h2>Also on the desk</h2><p>A design system, a cancellation A/B, hackathon wins and concepts.</p></div>
 <div class="more" data-lenis-prevent-touch>${MORE.map((m,i)=>`<${LINK[m.k]?`a href="case.html?id=${LINK[m.k]}"`:'div'} class="mo rv mo-${m.k}" style="--i:${i}"><div class="mo-art"><i class="mo-glow"></i><img data-src="renders/d-${m.k}.webp?v=3" alt="" decoding="async"><i class="mo-shadow"></i></div><small>${m.o}</small><h3>${m.t}</h3><div class="mo-txt"><p class="mo-l">${m.l}</p><p class="mo-h"><b></b>${m.h}</p></div>${LINK[m.k]?'<span class="mo-go">Read the story &rarr;</span></a>':'</div>'}`).join('')}</div></section>
${VB?PATHB_HTML:`<section class="sec" id="path"><div class="sh rv"><h2>The path so far</h2><p>Newest first. Eight years of product design, from startups to Microsoft 365 Copilot.</p></div>
 <div class="path" id="pathEl">${PATH.map(s=>`<div class="stop rv ${s.edu?'edu':''}" data-cursor="${s.o}" data-say="${s.yr}"><i class="dot"></i><span class="yr">${s.yr}</span><h3>${s.t}</h3><span class="org">${s.o}</span><p>${s.l}</p></div>`).join('')}</div></section>`}

<section class="sec" id="about"><h2 class="vh">About</h2><div class="about">
 <div class="pf rv" id="pf" aria-label="Portrait of Anubhuti Jain Singh">
  <div class="pf-arch"><div class="pf-sky"></div><i class="pf-sun"></i><svg class="pf-fly" viewBox="0 0 40 24"><path d="M38 4 3 13l13 3 3 7 5-6 14-13z" fill="#fffaf3" stroke="#2b3236" stroke-width="1.2" stroke-linejoin="round"/></svg></div>
  <div class="pf-line"><i class="key"></i></div>
  <div class="pf-me"><img data-src="renders/portrait-cut.webp" alt="Anubhuti Jain Singh" decoding="async"><div class="vme" id="vme" aria-hidden="true"></div></div>
  <span class="pf-tag t1" data-face="c"><i class="ic"><svg viewBox="0 0 20 20"><path d="M10 3v2M10 5l-4.5 11M10 5l4.5 11M6.6 12.6h6.8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="10" cy="5" r="1.6" fill="currentColor"/></svg><svg class="ib" viewBox="0 0 20 20"><path d="M4 17V9a6 6 0 0 1 12 0v8M2.5 17h15M10 9v8M7 12h6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></i>Architect by training</span><span class="pf-tag t2" data-face="a"><i class="ic"><svg viewBox="0 0 20 20"><path d="M7 6l-4 4 4 4M13 6l4 4-4 4M11 4.5l-2 11" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg><svg class="ib" viewBox="0 0 20 20"><path d="M7 5.5v9l7.5-4.5z" fill="currentColor"/></svg></i>Prototypes in code</span><span class="pf-tag t3" data-face="b"><i class="ic"><svg viewBox="0 0 20 20"><path d="M2 10h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><rect x="4" y="5.5" width="2.6" height="9" rx="1" fill="currentColor"/><rect x="13.4" y="5.5" width="2.6" height="9" rx="1" fill="currentColor"/></svg><svg class="ib" viewBox="0 0 20 20"><path d="M3 15c1.5-4 4-6 7-6s5.5 2 7 6M10 9V4M7.5 6 10 3.5 12.5 6" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></i>Powerlifter</span><span class="pf-tag t4" data-face="c" id="keenTag"><i class="ic eyeic"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M2 10s3-5.5 8-5.5S18 10 18 10s-3 5.5-8 5.5S2 10 2 10z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle id="keenPupil" cx="10" cy="10" r="2.4" fill="currentColor"/></svg></i>Keen eye for detail</span>
 </div>
 <div class="ab"><h3 class="rv">I trained as an architect, so I design in systems, and I prototype in code because the real thing teaches more than a mockup.</h3>
  <p class="rv">My work lives where people need to stay in control: AI that creates with you, orders that go wrong, editing on a small screen, and the design systems that hold it all together. I like messy problems, talking to users early, and shipping.</p>
  <p class="rv ab-way">I start from “this can be done” and work out the how on the way. Like water, I find a path and keep moving: a prototype nobody asked for, a design system nobody asked for, a pill that cost six weeks because it was the right call.</p>
  <div class="facts rv">
   <div class="f-exp"><b data-n="8+">8+</b><span>years designing products</span></div>
   <div class="f-pat"><i class="seal"><svg viewBox="0 0 24 24"><circle cx="12" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9.2 10l2 2 3.6-3.8M8.5 15.5 7 22l5-2.6 5 2.6-1.5-6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></i><b>US patent filed</b><span>Co-inventor of a voice and touch model for AI assistants. Plus <em data-n="5">5</em> impact awards.</span></div>
   <a class="f-sys" href="case.html?id=design-system"><b data-n="92">92</b><span>designers moved onto one Figma system I started</span><i class="f-go" aria-hidden="true">&rarr;</i></a></div>
  <div class="skills rv">${SK.map((s,i)=>`<span style="--d:${i}"><i><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${SKI[s]}</svg></i>${s}</span>`).join('')}</div>
  <div class="lift-card rv" id="lift" role="button" tabindex="0" aria-label="Load the barbell, one plate per tap"><svg class="bb" id="bb" viewBox="0 -56 200 124" aria-hidden="true">
   <path d="M30 64 H170" stroke="#e7d6c9" stroke-width="3" stroke-linecap="round"/>
   <g class="rack" stroke="#c9b3a3" stroke-width="5" stroke-linecap="round" fill="none"><path d="M52 64 V-4 M148 64 V-4"/><path d="M52 6 h-7 M148 6 h7" stroke-width="4"/></g>
   <ellipse class="chalk" cx="100" cy="2" rx="46" ry="9" fill="#fff"/>
   <g id="rig"><path id="bar" d="M4 0 Q100 0 196 0" stroke="#5b6064" stroke-width="4" fill="none" stroke-linecap="round"/>
    <rect x="38" y="-6" width="4" height="12" rx="1.5" fill="#5b6064"/><rect x="158" y="-6" width="4" height="12" rx="1.5" fill="#5b6064"/>
    <g class="ghost" fill="none" stroke="#e0774f" stroke-opacity=".55" stroke-width="1.3" stroke-dasharray="3 3"><rect x="29" y="-25" width="8" height="50" rx="2.6"/><rect x="163" y="-25" width="8" height="50" rx="2.6"/></g>
    <g id="plates"></g></g></svg>
   <div class="lt"><b>Off screen, I powerlift</b><p id="liftMsg">Competed up to nationals. It runs on the same rule as design: you load the bar one rep at a time. Tap to load it.</p>
    <ol class="reps" id="repsRow"><li>Listen</li><li>Sketch</li><li>Prototype</li><li>Test</li><li class="go">Lift</li></ol></div></div>
 </div></div></section>
<section class="game" id="contact"><img class="gbg" id="gbg" data-src="renders/v3-gsky.webp?v=2" alt="" decoding="async"><canvas id="game" aria-label="Paper plane game. Drag the plane back and let go to throw it at the mailbox."></canvas>
 <div class="gcopy"><h2>Send me a paper plane.</h2><p>Write to me at <a class="gmail" href="mailto:hello@anubhuti.design">hello@anubhuti.design</a>. Or, if you have a minute, pull the plane back and land it in the mailbox.</p>
  <ol class="steps" id="steps"><li class="on"><i>1</i>Pull back</li><li><i>2</i>Aim at the mailbox</li><li><i>3</i>Let go</li></ol></div>
 <div class="gscore" id="gscore">Throws <b id="throws">0</b></div>
 <div class="gtag" id="gtag">My mailbox</div><div class="gring" id="gring"></div>
 <div class="ghint" id="ghint">Drag me back</div>
 <div class="gdone" id="gdone" role="dialog" aria-live="polite" aria-atomic="true"><div class="tick">&#10003;</div><h3>Delivered.</h3><p id="gdmsg">My email is on your clipboard: <b>${EMAIL}</b></p>
  <div class="row"><a class="btn pri" href="mailto:${EMAIL}?subject=Hello%20from%20your%20portfolio">Write to me</a><button class="btn" id="again">Throw another</button></div></div>
 <div class="gskip"><a class="gs-mail" href="mailto:${EMAIL}?subject=Hello%20from%20your%20portfolio"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><rect x="2.5" y="4.5" width="15" height="11" rx="2.5"/><path d="m3.5 6 6.5 5 6.5-5"/></svg>${EMAIL}</a><button id="copyMail" aria-label="Copy email">Copy</button><i class="gs-sep"></i><a href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn</a><a href="${CV}" target="_blank" rel="noopener">CV</a></div>
 <div class="gnudge" id="gnudge" role="status"><b>So close.</b><p>Missed. Here is my email anyway:</p><a class="gn-mail" href="mailto:${EMAIL}?subject=Hello%20from%20your%20portfolio">${EMAIL}</a><div class="row"><a class="btn pri" href="mailto:${EMAIL}?subject=Hello%20from%20your%20portfolio">Write to me</a><button class="btn" id="gnCopy">Copy</button><button class="btn ghost" id="gnAgain">Keep throwing</button></div></div>
 <div class="gfoot">Anubhuti Jain Singh, senior product designer. Illustrated and coded by me, 2026. Psst, type hire.</div></section>`;
/* start watching only after the page has its real height, so nothing far below counts as near */
(document.fonts?document.fonts.ready:Promise.resolve()).then(()=>setTimeout(()=>host.querySelectorAll('img[data-src]').forEach(window.__lazy),400));

const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(b=>window.countUp&&countUp(b));io.unobserve(e.target)}),{threshold:.2});
host.querySelectorAll('.rv').forEach(e=>io.observe(e));

/* Path: the plane's dotted trail weaves between the stops and draws as you scroll */
const pe=document.getElementById('pathEl')||document.createElement('div');let pathD=null,pathLen=0,trailEl,aheadEl,pl2;
function buildPath(){if(VB)return;pe.querySelector('svg.pt')?.remove();pe.querySelector('.plane2')?.remove();
 const r0=pe.getBoundingClientRect(),stops=[...pe.querySelectorAll('.stop')],mob=innerWidth<860;
 const P=stops.map(s=>{const d=s.querySelector('.dot').getBoundingClientRect();return [d.left-r0.left+7,d.top-r0.top+7]});
 let d=`M${P[0][0]} ${P[0][1]-40}L${P[0][0]} ${P[0][1]}`;
 for(let k=1;k<P.length;k++){const a=P[k-1],b=P[k];d+=mob?`L${b[0]} ${b[1]}`:` C${a[0]} ${(a[1]+b[1])/2} ${b[0]} ${(a[1]+b[1])/2} ${b[0]} ${b[1]}`}
 pe.insertAdjacentHTML('afterbegin',`<svg class="pt"><path class="ah" d="${d}" fill="none" stroke="rgba(43,50,54,.15)" stroke-width="1.4" stroke-dasharray="2 7" stroke-linecap="round"/><path class="tr" d="${d}" fill="none" stroke="#e0774f" stroke-width="2" stroke-dasharray="1 6" stroke-linecap="round"/></svg>`);
 pl2=document.createElement('div');pl2.className='plane2';pl2.innerHTML=PLANE;pe.append(pl2);
 trailEl=pe.querySelector('.tr');pathLen=trailEl.getTotalLength();tick()}
function tick(){if(!trailEl)return;const r=pe.getBoundingClientRect(),k=Math.min(1,Math.max(0,(innerHeight*.62-r.top)/r.height)),L=pathLen*k;
 if(!trailEl._m){const m=document.createElementNS('http://www.w3.org/2000/svg','mask');m.id='ptm';m.setAttribute('maskUnits','userSpaceOnUse');
  m.innerHTML=`<path d="${trailEl.getAttribute('d')}" fill="none" stroke="#fff" stroke-width="12"/>`;trailEl.parentNode.prepend(m);trailEl._m=m.firstChild;trailEl.setAttribute('mask','url(#ptm)')}
 trailEl._m.setAttribute('stroke-dasharray',`${L} ${pathLen+10}`);            // reveal the dotted trail up to the plane
 const pt=trailEl.getPointAtLength(L),pt2=trailEl.getPointAtLength(Math.min(pathLen,L+2)),ang=Math.atan2(pt2.y-pt.y,pt2.x-pt.x)*180/Math.PI;
 pl2.style.transform=`translate(${pt.x}px,${pt.y}px) rotate(${ang+90}deg)`;pl2.style.opacity=k>0&&k<.995?1:0}
addEventListener('scroll',tick,{passive:true});(function loop(){tick();requestAnimationFrame(loop)})();
addEventListener('resize',buildPath);document.fonts.ready.then(buildPath);setTimeout(buildPath,400);

/* Desk cards tilt toward the pointer */
document.querySelectorAll('.mo').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--rx',((e.clientY-r.top)/r.height-.5)*-8+'deg');c.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*10+'deg')});c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})});

/* Exam ranks flip through, pause on hover, advance on click */
{const ex=document.getElementById('exam');if(ex){const R=[['All India Rank 2','NIFT design entrance'],['Rank 80','GATE entrance exam'],['Rank 83','CEED design entrance']];let k=0,hold=false;
 const rk=ex.querySelector('.rk'),lb=ex.querySelector('.ex'),ds=[...ex.querySelectorAll('.edots i')];
 const show=n=>{k=(n+R.length)%R.length;rk.classList.add('out');setTimeout(()=>{rk.firstChild.textContent=R[k][0];lb.textContent=R[k][1];ds.forEach((d,i)=>d.classList.toggle('on',i===k));rk.classList.remove('out');rk.classList.add('inn');requestAnimationFrame(()=>requestAnimationFrame(()=>rk.classList.remove('inn')))},260)};
 setInterval(()=>{if(!hold&&ex.getBoundingClientRect().top<innerHeight)show(k+1)},2800);
 ex.addEventListener('pointerenter',()=>hold=true);ex.addEventListener('pointerleave',()=>hold=false);ex.addEventListener('click',()=>show(k+1));
 ex.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();show(k+1)}})}}

/* Living portrait, fully vector (renders/portrait.svg): a neutral base plus three feathered expression layers
   (architect: thoughtful, prototypes: warm smile, powerlifter: laugh). Every layer carries its own eyes:
   sclera, iris and lid are separate shapes, so the irises follow the pointer and the lids blink. */
{const host=document.getElementById('vme'),pf=document.getElementById('pf');if(host&&pf){
 const reduceM=matchMedia('(prefers-reduced-motion: reduce)').matches;let svg,eyes=[],faces=[],cur='now',tx=0,ty=0,gx=0,gy=0,lastPt=0,lt=0,ready=false;
 const setFace=n=>{cur=n||'now';faces.forEach(f=>{if(f.dataset.face!=='now')f.style.opacity=f.dataset.face===cur?1:0})};
 const load=()=>{if(svg)return;svg=1;fetch('renders/portrait.svg').then(r=>r.text()).then(t=>{host.innerHTML=t;svg=host.querySelector('svg');eyes=[...svg.querySelectorAll('.eye')];faces=[...svg.querySelectorAll('.face')];
  faces.forEach(f=>{f.removeAttribute('opacity');if(f.dataset.face!=='now')f.style.opacity=0});ready=true;pf.classList.add('alive');setFace(cur);if(!reduceM)setTimeout(blink,1600)})};
 new IntersectionObserver((es,o)=>{if(es.some(e=>e.isIntersecting)){load();o.disconnect()}},{rootMargin:'600px'}).observe(pf);
 function blink(){if(!document.hidden)svg.querySelectorAll('.lid').forEach(l=>l.animate([{transform:'scaleY(0)'},{transform:'scaleY(1)',offset:.45},{transform:'scaleY(0)'}],{duration:170,easing:'ease-in-out'}));setTimeout(blink,2400+Math.random()*3600+(Math.random()<.2?-2000:0))}
 const lookAt=(px,py,hold=0)=>{if(!ready)return;const R=svg.getBoundingClientRect();const s=R.width/1536,ex=(+eyes[0].dataset.cx+ +eyes[1].dataset.cx)/2*s+R.left,ey=+eyes[0].dataset.cy*s+R.top;
  const vx=px-ex,vy=py-ey,d=Math.hypot(vx,vy)||1,f=1-Math.exp(-d/150);tx=vx/d*f;ty=vy/d*f;lastPt=performance.now()+hold};
 /* touch has no hover: tapping a pill turns her eyes to it and holds the look for a few seconds */
 pf.querySelectorAll('.pf-tag').forEach(t=>{const aim=hold=>{const r=t.getBoundingClientRect();lookAt(r.left+r.width/2,r.top+r.height/2,hold)};
  t.addEventListener('pointerdown',()=>aim(3500));t.addEventListener('focus',()=>aim(3500));t.addEventListener('pointerenter',e=>{if(e.pointerType!=='mouse')aim(3500)})});
 addEventListener('pointermove',e=>{if(!ready)return;if(e.pointerType!=='mouse'&&performance.now()<lastPt)return;const R=svg.getBoundingClientRect();if(R.bottom<0||R.top>innerHeight)return;lookAt(e.clientX,e.clientY);
  const kp=document.getElementById('keenPupil');if(kp){const kr=kp.closest('svg').getBoundingClientRect(),kx=e.clientX-(kr.left+kr.width/2),ky=e.clientY-(kr.top+kr.height/2),kd=Math.hypot(kx,ky)||1,kf=Math.min(1,kd/120);kp.setAttribute('cx',(10+kx/kd*kf*2.6).toFixed(2));kp.setAttribute('cy',(10+ky/kd*kf*1.6).toFixed(2))}},{passive:true});
 let leaveT=0;const isMouse=e=>e.pointerType==='mouse';
 pf.querySelectorAll('[data-face]').forEach(t=>{t.addEventListener('pointerenter',e=>{if(!isMouse(e))return;clearTimeout(leaveT);setFace(t.dataset.face)});t.addEventListener('pointerleave',e=>{if(!isMouse(e))return;leaveT=setTimeout(()=>setFace('now'),260)});
  /* touch: a tap holds the expression until the next tap; tapping the same pill again returns to neutral */
  t.addEventListener('click',()=>{clearTimeout(leaveT);setFace(cur===t.dataset.face&&!t.__justSet?'now':t.dataset.face);t.__justSet=false});
  t.addEventListener('pointerdown',e=>{if(!isMouse(e)&&cur!==t.dataset.face)t.__justSet=true})});
 (function loop(t){const dt=Math.min(.05,(t-(lt||t))/1000);lt=t;if(ready&&!reduceM){if(t-lastPt>4500){tx*=.96;ty*=.96}
   const k=1-Math.exp(-dt*11);gx+=(tx-gx)*k;gy+=(ty-gy)*k;
   for(const g of eyes){const r=+g.dataset.r,w=(+g.dataset.rt- +g.dataset.l)/2;g.querySelector('.iris').setAttribute('transform',`translate(${(gx*Math.max(0,w-r*1.02)).toFixed(2)} ${(gy*r*.32).toFixed(2)})`)}}
  requestAnimationFrame(loop)})(0);
 window.__face={setFace,lookAt,get cur(){return cur},get g(){return[gx,gy]}}}}

/* Portrait: three depths (sky, me, tags) drift against the pointer */
{const pf=document.getElementById('pf');if(pf&&matchMedia('(pointer:fine)').matches){const ab=pf.closest('.about');
 ab.addEventListener('pointermove',e=>{const r=pf.getBoundingClientRect();pf.style.setProperty('--mx',Math.max(-1,Math.min(1,(e.clientX-r.left-r.width/2)/r.width)).toFixed(3));pf.style.setProperty('--my',Math.max(-1,Math.min(1,(e.clientY-r.top-r.height/2)/r.height)).toFixed(3))});
 ab.addEventListener('pointerleave',()=>{pf.style.setProperty('--mx',0);pf.style.setProperty('--my',0)})}}

/* Barbell: the design process as a lift. Each tap loads a plate named after a habit (listen, sketch, prototype, test).
   The bar bends more with every plate; the fifth tap lifts it off the rack and racks it again. Tap once more to strip and restart. */
{const bb=document.getElementById('bb'),rig=document.getElementById('rig'),bar=document.getElementById('bar'),plG=document.getElementById('plates'),chalk=bb.querySelector('.chalk'),
 msg=document.getElementById('liftMsg'),row=[...document.querySelectorAll('#repsRow li')],lc=document.getElementById('lift'),base=msg.textContent;
 const H=[50,44,38,32],W=[8,7.5,7,6.5],C=['#e0774f','#ea9573','#f2b59c','#f6cdb9'],NS='http://www.w3.org/2000/svg';
 let n=0,busy=false,lifted=false,sag=0;
 const setBar=(s,y=0)=>{bar.setAttribute('d',`M4 ${s} Q100 ${-s*.7} 196 ${s}`);rig.setAttribute('transform',`translate(0 ${y})`);plG.querySelectorAll('rect').forEach(r=>r.style.translate=`0 ${s*.72}px`)};
 const tween=(D,fn)=>new Promise(res=>{const t0=performance.now();const f=t=>{const k=Math.min(1,(t-t0)/D);fn(k);k<1?requestAnimationFrame(f):res()};requestAnimationFrame(f)});
 const ease=k=>1-Math.pow(1-k,3),back=k=>{const c=1.7;return 1+(c+1)*Math.pow(k-1,3)+c*Math.pow(k-1,2)};
 function plate(i,side){const r=document.createElementNS(NS,'rect'),inner=side==='l'?37:163,off=W.slice(0,i).reduce((a,b)=>a+b+1,0),x=side==='l'?inner-off-W[i]:inner+off;
  Object.entries({x,y:-H[i]/2,width:W[i],height:H[i],rx:2.6,fill:C[i]}).forEach(([k,v])=>r.setAttribute(k,v));r.dataset.side=side;r.dataset.i=i;r.style.opacity=0;plG.append(r);return r}
 async function load(){busy=true;const i=n,L=plate(i,'l'),R=plate(i,'r'),from=46;row[i].classList.add('on');
  await tween(520,k=>{const e=back(k);L.style.transform=`translateX(${-(1-e)*from}px)`;R.style.transform=`translateX(${(1-e)*from}px)`;L.style.opacity=R.style.opacity=Math.min(1,k*3);
   const target=(i+1)*1.6;setBar(sag+(target-sag)*ease(k)+Math.sin(k*Math.PI*3)*(1-k)*1.4)});
  sag=(i+1)*1.6;n++;lc.classList.add('loaded');msg.textContent=['Plate one: listen first. Research before pixels.','Plate two: sketch wide, cheap and fast.','Plate three: prototype in code, so it behaves like the real thing.','Plate four: test with people. Now the bar is loaded.'][i];
  if(n===4)row[4].classList.add('ready');busy=false}
 async function lift(){busy=true;row[4].classList.add('on');lc.classList.add('lifting');
  await tween(1500,k=>{const y=k<.14?5*(k/.14):k<.5?5-46*ease((k-.14)/.36):k<.72?-41:-41+41*ease((k-.72)/.28);
   const w=k<.14?sag+4*(k/.14):k<.5?sag+4-(sag+10)*((k-.14)/.36):k<.72?-6+Math.sin((k-.5)*60)*3*(1-(k-.5)/.22)+6*((k-.5)/.22):sag*((k-.72)/.28);setBar(w,y);
   chalk.style.opacity=k>.68&&k<.98?.85*(1-(k-.68)/.3):0;chalk.setAttribute('rx',46+(k-.68)*90)});
  lc.classList.remove('lifting');lc.classList.add('done');lifted=true;msg.textContent='Lifted and racked. Small reps add up, in the gym and in product. Tap to strip the bar.';busy=false}
 async function strip(){busy=true;const ps=[...plG.children];
  await tween(420,k=>{const e=ease(k);ps.forEach(p=>{const d=p.dataset.side==='l'?-1:1;p.style.transform=`translateX(${d*e*50}px)`;p.style.opacity=1-k});setBar(sag*(1-e))});
  plG.innerHTML='';sag=0;n=0;lifted=false;lc.classList.remove('loaded');row.forEach(r=>r.classList.remove('on','ready'));lc.classList.remove('done');msg.textContent=base;busy=false}
 const go=()=>{if(busy)return;lifted?strip():n<4?load():lift()};
 lc.addEventListener('click',go);lc.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go()}});
 window.__lift={go,get n(){return n},get lifted(){return lifted}}}

/* ---------- Option B path: pinned horizontal timeline from the first build ---------- */
if(VB&&!window.STACK){const tlPin=document.getElementById('tlPin'),tlTrack=document.getElementById('tlTrack'),tlFill=document.getElementById('tlFill'),tlPlane=document.getElementById('tlPlane'),
 dots=[...document.querySelectorAll('#tlRail .dot')],arts=[...tlTrack.querySelectorAll('.art img')];let tlLen=0;
 const eps=[...tlTrack.querySelectorAll('.ep')];let offs=[];
 let G=null;const meas=()=>{const pad=eps[0].offsetLeft;offs=eps.map(e=>e.offsetLeft-pad);tlLen=offs[offs.length-1];tlPin.style.setProperty('--tlLen',tlLen*.8+'px');G=null};
 const geo=()=>{const tr=tlTrack.style.transform;tlTrack.style.transform='none';const t0=tlTrack.getBoundingClientRect().left;const pinTop=tlPin.getBoundingClientRect().top+scrollY;
  G={pinTop,pinH:tlPin.offsetHeight,pad:eps[0].offsetLeft,ep:eps.map(e=>[e.getBoundingClientRect().left-t0,e.offsetWidth]),art:arts.map(im=>{const b=im.parentNode.getBoundingClientRect();return b.left-t0+b.width/2})};tlTrack.style.transform=tr;G.t0=t0};
 // each stop rests with its episode fully in frame, then glides to the next
 const at=p=>{const n=offs.length-1,seg=p*n,i=Math.min(n-1,Math.floor(seg)),f=Math.min(1,Math.max(0,(seg-i-.18)/.64)),e=f*f*(3-2*f);return offs[i]+(offs[i+1]-offs[i])*e};
 let lastP=-1;const fr=()=>{if(!G)geo();const top=G.pinTop-scrollY;if(top+G.pinH<0||top>innerHeight)return;const p=Math.min(1,Math.max(0,-top/(G.pinH-innerHeight)));if(Math.abs(p-lastP)<1e-5)return;lastP=p;const tx=-at(p);
  tlTrack.style.transform=`translate3d(${tx}px,0,0)`;tlFill.style.width=tlPin.classList.contains('woven')?`calc(${p} * (100% - 68px))`:p*100+'%';tlPlane.style.left=p*100+'%';tlPlane.style.transform=`translate(-50%,0) rotate(${Math.sin(p*40)*4}deg)`;
  dots.forEach((d,i)=>d.classList.toggle('on',p>=(i-.22)/(dots.length-1)));
  eps.forEach((e,i)=>{const d=(G.t0+G.ep[i][0]+tx-G.pad)/G.ep[i][1];e.style.opacity=d<0?Math.max(0,1+d*2.4):1});
  const mid=innerWidth/2;arts.forEach((im,i)=>{const off=(G.t0+G.art[i]+tx-mid)/innerWidth;im.style.transform=`translate3d(${off*-60}px,${Math.abs(off)*30}px,0) rotate(${off*-10}deg) scale(${1-Math.abs(off)*.12})`})};
 dots.forEach(d=>d.addEventListener('click',()=>{const top=tlPin.getBoundingClientRect().top+scrollY+(tlPin.offsetHeight-innerHeight)*(+d.dataset.i/(dots.length-1));window.__lenis?__lenis.scrollTo(top,{duration:1.4}):scrollTo({top,behavior:'smooth'})}));
 /* the timeline itself weaves through the episodes: under each painting, up to each year's pill, down past the text and on.
    The plane rides it at a fixed spot on screen, so as the years slide past it climbs and dips with the path. */
 const NSs='http://www.w3.org/2000/svg';let wv=null;
 function weaveBuild(){wv&&wv.svg.remove();wv=null;tlPin.classList.toggle('woven',innerWidth>=860);if(innerWidth<860)return;
  const tr=tlTrack.getBoundingClientRect(),pts=[];const rel=b=>({l:b.left-tr.left,r:b.right-tr.left,t:b.top-tr.top,b:b.bottom-tr.top});
  const stops=[];eps.forEach((e,i)=>{const A=rel(e.querySelector('.art').getBoundingClientRect()),T=rel(e.querySelector('.when').getBoundingClientRect()),X=rel(e.querySelector('.txt').getBoundingClientRect());
   if(i===0)pts.push([A.l-140,A.b-60]);pts.push([A.l+(A.r-A.l)*.28,A.b+26]);pts.push([T.l-34,T.t+(T.b-T.t)/2]);stops.push(pts.length-1);pts.push([X.r+50,X.b+40])});
  const last=pts.at(-1);pts.push([last[0]+260,last[1]-80]);
  let d=`M${pts[0][0]} ${pts[0][1]}`;for(let i=0;i<pts.length-1;i++){const p0=pts[i-1]||pts[i],p1=pts[i],p2=pts[i+1],p3=pts[i+2]||p2;
   d+=` C${p1[0]+(p2[0]-p0[0])/6} ${p1[1]+(p2[1]-p0[1])/6} ${p2[0]-(p3[0]-p1[0])/6} ${p2[1]-(p3[1]-p1[1])/6} ${p2[0]} ${p2[1]}`}
  const svg=document.createElementNS(NSs,'svg');svg.setAttribute('class','tl-weave');svg.setAttribute('width',tlTrack.scrollWidth+400);svg.setAttribute('height',tr.height);
  svg.innerHTML=`<defs><clipPath id="wvc"><rect id="wvr" x="-500" y="0" width="0" height="${tr.height}"/></clipPath></defs><path d="${d}" fill="none" stroke="rgba(43,50,54,.2)" stroke-width="1.6" stroke-dasharray="1.5 8" stroke-linecap="round"/>
   <path d="${d}" fill="none" stroke="#e0774f" stroke-width="2.4" stroke-dasharray="1.5 7" stroke-linecap="round" clip-path="url(#wvc)"/>
   ${stops.map((k,i)=>`<g class="wdot" data-i="${i}" transform="translate(${pts[k][0]} ${pts[k][1]})"><circle r="12" fill="rgba(224,119,79,.14)" class="halo"/><circle r="6.5" fill="#fffaf3" stroke="#e0774f" stroke-width="2"/><circle r="3" fill="#e0774f" class="core"/></g>`).join('')}
   <g id="wvPlane"><g transform="rotate(45) translate(-15 -15)">${tlPlane.querySelector('g').innerHTML}</g></g>`;
  tlTrack.prepend(svg);const path=svg.querySelectorAll('path')[0],L=path.getTotalLength(),look=[];for(let l=0;l<=L;l+=4){const q=path.getPointAtLength(l);look.push([q.x,q.y,l])}
  wv={svg,path,look,rect:svg.querySelector('#wvr'),pl:svg.querySelector('#wvPlane'),x0:pts[stops[0]][0],dots:[...svg.querySelectorAll('.wdot')],stopsX:stops.map(k=>pts[k][0])};
  wv.dots.forEach(g=>g.addEventListener('click',()=>dots[+g.dataset.i]?.click()))}
 const yAt=x=>{const k=wv.look;let lo=0,hi=k.length-1;while(hi-lo>1){const m=(lo+hi)>>1;if(k[m][0]<x)lo=m;else hi=m}const a=k[lo],b=k[hi],f=(x-a[0])/Math.max(.01,b[0]-a[0]);return a[1]+(b[1]-a[1])*Math.min(1,Math.max(0,f))};
 const wvTick=()=>{if(!wv)return;const r=tlPin.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)return;const p=Math.min(1,Math.max(0,-r.top/(tlPin.offsetHeight-innerHeight)));
  const x=at(p)+wv.x0,y=yAt(x),y2=yAt(x+6),ang=Math.atan2(y2-y,6)*180/Math.PI;wv.pl.setAttribute('transform',`translate(${x} ${y}) rotate(${ang})`);wv.rect.setAttribute('width',x+500);
  wv.dots.forEach((g,i)=>g.classList.toggle('on',x>=wv.stopsX[i]-2))};
 const build2=()=>{meas();weaveBuild();lastP=-1};if(window.ResizeObserver){let rq=0;new ResizeObserver(()=>{cancelAnimationFrame(rq);rq=requestAnimationFrame(()=>{G=null;lastP=-1})}).observe(document.body)}addEventListener('resize',build2);document.fonts.ready.then(()=>setTimeout(build2,60));meas();setTimeout(build2,400);
 (function lp(){fr();wvTick();requestAnimationFrame(lp)})()}

/* ---------- Contact: the slingshot paper plane from the first build, with a clearer UI ---------- */
function GAME(){
 const sec=document.getElementById('contact'),cv=document.getElementById('game'),ctx=cv.getContext('2d'),bg=document.getElementById('gbg'),done=document.getElementById('gdone'),
  steps=[...document.querySelectorAll('#steps li')],ring=document.getElementById('gring'),tag=document.getElementById('gtag'),hintEl=document.getElementById('ghint'),thEl=document.getElementById('throws'),sc=document.getElementById('gscore');
 const MB=window.MAILBOX||[1172,586,1298,668],clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),lerp=(a,b,t)=>a+(b-a)*t;
 let W=0,H=0,A={x:0,y:0},mb={},pullMax=120,K=6,G=1000,plane={x:0,y:0,vx:0,vy:0,a:0,state:'rest'},drag=false,throws=0,parts=[],hintT=0,running=false,last=0,firstDrag=false,aimOK=false;
 const grab=document.createElement('div');grab.style.cssText='position:absolute;width:110px;height:110px;margin:-55px 0 0 -55px;border-radius:50%;touch-action:none;z-index:6';sec.append(grab);
 function step(n){steps.forEach((s,i)=>{s.classList.toggle('on',i===n);s.classList.toggle('ok',i<n)})}
 function size(){const r=sec.getBoundingClientRect();W=r.width;H=r.height;const D=Math.min(2,devicePixelRatio||1);cv.width=W*D;cv.height=H*D;ctx.setTransform(D,0,0,D,0,0);
  const posX=W<700?.82:.5;bg.style.objectPosition=`${posX*100}% 50%`;const s=Math.max(W/1536,H/1024),ox=(W-1536*s)*posX,oy=(H-1024*s)*.5;
  mb={x1:ox+MB[0]*s,y1:oy+MB[1]*s,x2:ox+MB[2]*s,y2:oy+MB[3]*s};mb.cx=(mb.x1+mb.x2)/2;mb.cy=(mb.y1+mb.y2)/2;
  A={x:W<700?W*.3:W*.17,y:W<700?H*.72:H*.7};G=1000*(H/900);pullMax=Math.min(150,Math.max(90,W*.1));K=Math.sqrt(1.25*(Math.max(200,mb.cx-A.x)+pullMax)*G)/pullMax;
  if(plane.state==='rest')reset();Object.assign(grab.style,{left:A.x+'px',top:A.y+'px'});
  const rs=Math.max(70,(mb.x2-mb.x1)*1.5);Object.assign(ring.style,{left:mb.cx+'px',top:mb.cy+'px',width:rs+'px',height:rs+'px'});Object.assign(tag.style,{left:mb.cx+'px',top:(mb.y1-rs*.35)+'px'});
  Object.assign(hintEl.style,{left:A.x+'px',top:(A.y-Math.min(230,Math.max(150,H*.26))*.06-62)+'px'})}
 function reset(){plane={x:A.x,y:A.y,vx:0,vy:0,a:-.35,state:'rest'};done.querySelector('h3').textContent='Delivered.';step(0)}
 function hit(){plane.state='in';plane.s=1;sc.classList.add('win');done.querySelector('h3').textContent=sec.classList.contains('night')?'Delivered under the stars.':'Delivered.';for(let i=0;i<54;i++){const a=Math.random()*Math.PI*2,v=160+Math.random()*380;parts.push({x:mb.cx,y:mb.cy,vx:Math.cos(a)*v,vy:Math.sin(a)*v-240,l:1.4+Math.random()*.6,m:2,t:'bit',r:0,vr:(Math.random()-.5)*14,c:['#fff','#f6b9a3','#e0774f','#f3c26b','#fffaf3'][i%5]})}
  const ok=()=>{};navigator.clipboard?navigator.clipboard.writeText(EMAIL).then(ok,()=>{document.getElementById('gdmsg').innerHTML=`Write to me at <b>${EMAIL}</b>`}):0;
  setTimeout(()=>{done.classList.add('on');done.querySelector('a').focus({preventScroll:true})},520)}
 let misses=0;const nudge=document.getElementById('gnudge');
 function miss(){misses++;if(misses===2||misses===5)setTimeout(()=>nudge.classList.add('on'),700);else if(misses===1){tag.textContent='Almost. Aim higher';setTimeout(()=>tag.textContent='My mailbox',2400)}for(let i=0;i<14;i++){const a=Math.random()*Math.PI*2;parts.push({x:clamp(plane.x,10,W-10),y:clamp(plane.y,10,H*.93),vx:Math.cos(a)*70,vy:Math.sin(a)*40-30,l:.9,m:.9,t:'puff'})}
  plane.state='gone';sec.classList.add('missed');setTimeout(()=>{sec.classList.remove('missed');reset();plane.y+=40;plane.state='return'},650)}
 function upd(dt){slingPhys(dt);if(plane.state==='fly'){const ap=plane.vy>0;plane.vy+=G*(ap?.72:1)*dt;plane.vx*=1-.12*dt;plane.vy*=1-.05*dt;plane.x+=plane.vx*dt;plane.y+=plane.vy*dt;plane.a=Math.atan2(plane.vy,plane.vx);
   if(Math.random()<.5)parts.push({x:plane.x,y:plane.y,vx:0,vy:0,l:.5,m:.5,t:'trail'});
   if(plane.x>mb.x1-30&&plane.x<mb.x2+22&&plane.y>mb.y1-34&&plane.y<mb.y2+26)hit();else if(plane.x>W+60||plane.y>H*.95||plane.x<-60)miss()}
  else if(plane.state==='in'){plane.x=lerp(plane.x,mb.x1+(mb.x2-mb.x1)*.3,.2);plane.y=lerp(plane.y,mb.cy,.2);plane.s=(plane.s||1)*.9}
  parts=parts.filter(p=>(p.l-=dt)>0);parts.forEach(p=>{p.vy+=(p.t==='bit'?600:0)*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.r=(p.r||0)+(p.vr||0)*dt})}
 /* The plane is the same painted paper plane as the rest of the scene (renders/plane.webp?v=2, nose to the right) */
 const PW=()=>Math.min(96,Math.max(70,W*.058));const PL=new Image();
 function drawPlane(x,y,a,s=1){ctx.save();ctx.translate(x,y);ctx.rotate(a);ctx.scale(s,s);
  const w=PW(),h=w*296/640;
  if(PL.complete&&PL.naturalWidth){ctx.shadowColor='rgba(110,55,30,.28)';ctx.shadowBlur=12;ctx.shadowOffsetY=8;ctx.drawImage(PL,-w*.62,-h*.5,w,h)}
  else{ctx.beginPath();ctx.moveTo(24,0);ctx.lineTo(-18,-14);ctx.lineTo(-10,0);ctx.lineTo(-18,12);ctx.closePath();ctx.fillStyle='#fffaf3';ctx.fill()}
  ctx.restore()}
 /* Slingshot: a painted wooden Y with two coral bands and a leather pouch. The pouch follows the plane while you pull,
    then springs back and wobbles after the throw, and the frame rocks a little from the recoil. */
 const SL=new Image();new IntersectionObserver((es,o)=>{if(es.some(e=>e.isIntersecting)){PL.src='renders/plane.webp?v=2';SL.src='renders/sling.webp?v=2';o.disconnect()}},{rootMargin:'150% 0px'}).observe(document.getElementById('contact'));const RING=[[37,25],[285,25]],SW=322,SH=640;
 let pouch={x:0,y:0,vx:0,vy:0},rock=0,rockV=0;
 function slGeo(){const h=Math.min(230,Math.max(150,H*.26)),k=h/SH,x=A.x-SW*k/2,y=A.y-10-RING[0][1]*k;return{k,x,y,h,L:{x:x+RING[0][0]*k,y:y+RING[0][1]*k},R:{x:x+RING[1][0]*k,y:y+RING[1][1]*k}}}
 function band(from,to,w){ctx.lineCap='round';ctx.strokeStyle='#b84e33';ctx.lineWidth=w;ctx.beginPath();ctx.moveTo(from.x,from.y);ctx.lineTo(to.x,to.y);ctx.stroke();
  ctx.strokeStyle='rgba(255,190,160,.85)';ctx.lineWidth=Math.max(1,w*.32);ctx.beginPath();ctx.moveTo(from.x,from.y-w*.18);ctx.lineTo(to.x,to.y-w*.18);ctx.stroke()}
 function sling(front){const g=slGeo(),P=(plane.state==='rest'||drag||plane.state==='return')?{x:plane.x-Math.cos(plane.a)*PW()*.56,y:plane.y-Math.sin(plane.a)*PW()*.56}:pouch,str=Math.min(1,Math.hypot(P.x-A.x,P.y-A.y)/pullMax),w=6.5-str*3,base={x:A.x,y:g.y+g.h};
  const piv=(pt)=>{const c=Math.cos(rock),sn=Math.sin(rock),dx=pt.x-base.x,dy=pt.y-base.y;return{x:base.x+dx*c-dy*sn,y:base.y+dx*sn+dy*c}};
  if(!front){ctx.save();ctx.translate(base.x,base.y);ctx.rotate(rock);ctx.translate(-base.x,-base.y);
    ctx.shadowColor='rgba(120,60,30,.28)';ctx.shadowBlur=18;ctx.shadowOffsetY=10;if(SL.complete&&SL.naturalWidth)ctx.drawImage(SL,g.x,g.y,SW*g.k,SH*g.k);ctx.restore();
   band(piv(g.R),P,w)}
  else{const ang=Math.atan2(P.y-A.y,P.x-A.x);ctx.save();ctx.translate(P.x,P.y);ctx.rotate(str>.05?ang:0);
    ctx.fillStyle='#8a5a3c';ctx.strokeStyle='#2b3236';ctx.lineWidth=1.1;ctx.beginPath();ctx.ellipse(-2,0,6,9-str*2,0,0,7);ctx.fill();ctx.stroke();
    ctx.strokeStyle='rgba(255,220,190,.6)';ctx.beginPath();ctx.moveTo(-9,-5);ctx.lineTo(-9,5);ctx.stroke();ctx.restore();
   band(piv(g.L),P,w)}}
 function slingPhys(dt){if(plane.state!=='rest'&&!drag){const kx=-900*(pouch.x-A.x)-16*pouch.vx,ky=-900*(pouch.y-A.y)-16*pouch.vy;pouch.vx+=kx*dt;pouch.vy+=ky*dt;pouch.x+=pouch.vx*dt;pouch.y+=pouch.vy*dt}
  else{pouch={x:plane.x,y:plane.y,vx:0,vy:0}}
  rockV+=(-160*rock-6*rockV)*dt;rock+=rockV*dt}
 function draw(t){ctx.clearRect(0,0,W,H);
  if(drag){let x=plane.x,y=plane.y,vx=(A.x-plane.x)*K,vy=(A.y-plane.y)*K;const dt=1/30;aimOK=false;
   for(let i=0;i<30;i++){vy+=G*(vy>0?.72:1)*dt;vx*=1-.12*dt;vy*=1-.05*dt;x+=vx*dt;y+=vy*dt;if(x>mb.x1-30&&x<mb.x2+22&&y>mb.y1-34&&y<mb.y2+26)aimOK=true;if(i%2)continue;ctx.beginPath();ctx.arc(x,y,3.6-i*.09,0,7);ctx.fillStyle=aimOK?`rgba(224,119,79,${.95-i*.025})`:`rgba(255,255,255,${.95-i*.03})`;ctx.fill()}
   sec.classList.toggle('aimok',aimOK);step(aimOK?2:1)}
  else if(!firstDrag&&plane.state==='rest'){hintT+=.016;ctx.setLineDash([2,10]);ctx.lineDashOffset=-hintT*40;ctx.strokeStyle='rgba(255,255,255,.85)';ctx.lineWidth=2.4;ctx.lineCap='round';
   ctx.beginPath();ctx.moveTo(A.x+30,A.y-20);ctx.quadraticCurveTo((A.x+mb.cx)/2,Math.min(A.y,mb.y1)-H*.28,mb.x1+10,mb.cy);ctx.stroke();ctx.setLineDash([])}
  sling(false);
  parts.forEach(p=>{const k=p.l/p.m;ctx.globalAlpha=clamp(k);if(p.t==='trail'){ctx.beginPath();ctx.arc(p.x,p.y,2.2,0,7);ctx.fillStyle='#fff';ctx.fill()}
   else if(p.t==='puff'){ctx.beginPath();ctx.arc(p.x,p.y,10+(1-k)*22,0,7);ctx.fillStyle='rgba(255,255,255,.6)';ctx.fill()}
   else{ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.c;ctx.fillRect(-4,-2.5,8,5);ctx.restore()}ctx.globalAlpha=1});
  if(plane.state==='return'){plane.y=lerp(plane.y,A.y,.12);if(Math.abs(plane.y-A.y)<.5)plane.state='rest'}
  if(plane.state!=='gone'){const bob=plane.state==='rest'&&!drag?Math.sin(t/380)*2.5:0;drawPlane(plane.x,plane.y+bob,plane.a,plane.state==='in'?plane.s:1)}
  sling(true);hintEl.style.opacity=!firstDrag&&plane.state==='rest'?1:0}
 function loop(t){if(!running)return;const dt=Math.min(.033,(t-(last||t))/1000);last=t;upd(dt);draw(t);requestAnimationFrame(loop)}
 new IntersectionObserver(([en])=>{if(en.isIntersecting&&!running){running=true;last=0;size();requestAnimationFrame(loop)}else if(!en.isIntersecting)running=false},{threshold:.05}).observe(sec);
 const local=e=>{const r=sec.getBoundingClientRect();return{x:e.clientX-r.left,y:e.clientY-r.top}};
 grab.addEventListener('pointerdown',e=>{if(plane.state!=='rest')return;e.preventDefault();grab.setPointerCapture(e.pointerId);drag=true;firstDrag=true;sec.classList.add('dragging');window.__lenis&&__lenis.stop()});
 grab.addEventListener('pointermove',e=>{if(!drag)return;const p=local(e);let dx=p.x-A.x,dy=p.y-A.y;const d=Math.hypot(dx,dy);if(d>pullMax){dx*=pullMax/d;dy*=pullMax/d}plane.x=A.x+dx;plane.y=A.y+dy;plane.a=Math.atan2(-dy,-dx)});
 const rel=()=>{if(!drag)return;drag=false;sec.classList.remove('dragging','aimok');window.__lenis&&__lenis.start();const dx=A.x-plane.x,dy=A.y-plane.y;if(Math.hypot(dx,dy)<14){reset();return}
  pouch={x:plane.x,y:plane.y,vx:dx*K*.6,vy:dy*K*.6};rockV=-Math.hypot(dx,dy)/pullMax*1.6;plane.vx=dx*K;plane.vy=dy*K;plane.state='fly';throws++;thEl.textContent=throws;sc.classList.add('on');step(3)};
 grab.addEventListener('pointerup',rel);grab.addEventListener('pointercancel',rel);
 document.getElementById('again').onclick=()=>{done.classList.remove('on');sc.classList.remove('win');reset()};
 addEventListener('keydown',e=>{if(e.key==='Escape'&&done.classList.contains('on')){done.classList.remove('on');reset()}});
 const cp=e=>{navigator.clipboard&&navigator.clipboard.writeText(EMAIL);const b=e.currentTarget,t=b.textContent;b.textContent='Copied';b.classList.add('ok');setTimeout(()=>{b.textContent=t;b.classList.remove('ok')},1600)};document.getElementById('copyMail').onclick=cp;document.getElementById('gnCopy').onclick=cp;
 document.getElementById('gnAgain').onclick=()=>nudge.classList.remove('on');
 addEventListener('resize',()=>{if(running)size()});window.__game={hit,get mb(){return mb},get A(){return A},get geo(){return{W,H,G,K,pullMax}}}}
GAME();

/* Hiring lead easter egg: type hire outside form fields for a one-screen summary. */
{const dlg=document.createElement('div');dlg.className='hire-pop';dlg.setAttribute('role','dialog');dlg.setAttribute('aria-modal','true');dlg.setAttribute('aria-labelledby','hireTitle');dlg.innerHTML=`<div class="hire-card"><button class="hire-close" type="button" aria-label="Close hiring summary">×</button><small>Portfolio shortcut</small><h2 id="hireTitle">Anubhuti Jain Singh</h2><p>Senior Product Designer, Microsoft 365 Copilot</p><ul><li><b>2x</b><span>more people tried creating</span></li><li><b>+112 bps</b><span>self-serve at Flipkart</span></li><li><b>92</b><span>designers on one system</span></li></ul><div class="hire-links"><a href="${CV}" target="_blank" rel="noopener">CV</a><a href="${LINKEDIN}" target="_blank" rel="noopener">LinkedIn</a><a href="mailto:${EMAIL}?subject=Hello%20from%20your%20portfolio">Email</a></div></div>`;document.body.append(dlg);
 let typed='',lastFocus=null;const close=()=>{dlg.classList.remove('on');lastFocus&&lastFocus.focus&&lastFocus.focus({preventScroll:true})},open=()=>{lastFocus=document.activeElement;dlg.classList.add('on');dlg.querySelector('.hire-close').focus({preventScroll:true})};
 dlg.addEventListener('click',e=>{if(e.target===dlg||e.target.closest('.hire-close'))close()});
 addEventListener('keydown',e=>{const tag=(e.target&&e.target.tagName||'').toLowerCase(),typing=tag==='input'||tag==='textarea'||e.target?.isContentEditable;if(e.key==='Escape'&&dlg.classList.contains('on')){close();return}if(typing||e.metaKey||e.ctrlKey||e.altKey||e.key.length!==1)return;typed=(typed+e.key.toLowerCase()).slice(-4);if(typed==='hire')open()});}

window.PORTFOLIO_EMAIL=EMAIL;
})();

/* Kudos: five recommendations orbit the portrait. Catch one and it opens into a note; she smiles while you read.
   When the pointer rests, her eyes follow the nearest kudos. ?kudos=envelope|bubble|star switches the object. */
{const pf=document.getElementById('pf');if(pf){
 const REC=[
  {q:'Working with Anubhuti was a dream. She speaks with confidence, has vast knowledge about design, and is a ‘Figma Wizard’. One of the most reliable designers I’ve worked with at Flipkart.',n:'Shashank Sahay',r:'Product Design, WhatsApp (ex-Flipkart)',c:'#e0774f'},
  {q:'Anubhuti is nothing less than a powerhouse. She contributed a lion’s share to post-purchase, user services, shopping cart and design systems in under two years.',n:'Samir Bellare',r:'Design, Cashfree',c:'#e6a25a'},
  {q:'Truly talented and gifted product designer. Her ability to understand and articulate complex issues is her real strength.',n:'Giriraj Singh',r:'CEO, Breadcrumbs',c:'#6f9a95'},
  {q:'One of the rare UI/UX designers with a perfect balance of creativity and discipline.',n:'Shiva Dhawan',r:'Co-founder and CEO, Attentive.ai',c:'#c46f7c'},
  {q:'Asked good questions to flesh out requirements, and moved between day-to-day demands and high-level execution. Highly recommended.',n:'Utkarsh Sharma',r:'CEO, SiteRecon',c:'#8a7bb3'}];
 const qk=new URLSearchParams(location.search).get('kudos'),KIND=['envelope','bubble','star'].includes(qk)?qk:'bubble';
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,INK='#2b3236',PAP='#fffaf3';
 const ICON={
  envelope:c=>`<svg viewBox="0 0 34 30"><rect x="3" y="6" width="28" height="19" rx="3" fill="${PAP}" stroke="${INK}" stroke-width="1.4"/><path d="M3.8 7.2 17 17l13.2-9.8" fill="none" stroke="${INK}" stroke-width="1.4" stroke-linejoin="round"/><circle cx="17" cy="17.2" r="4.4" fill="${c}" stroke="${INK}" stroke-width="1.2"/><path d="M15.2 17.1l1.2 1.3 2.4-2.6" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  bubble:c=>`<img src="renders/kudos.webp?v=2" alt="" draggable="false">`,
  bubbleSvg:c=>`<svg viewBox="0 0 34 30"><path d="M6 4h22a4 4 0 0 1 4 4v11a4 4 0 0 1-4 4H15l-6 5v-5H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4z" fill="${PAP}" stroke="${INK}" stroke-width="1.4" stroke-linejoin="round"/><path d="M11.5 16.5c0-3 1.4-4.6 3.6-5.3M18.5 16.5c0-3 1.4-4.6 3.6-5.3" fill="none" stroke="${c}" stroke-width="2.6" stroke-linecap="round"/><circle cx="12.6" cy="16.4" r="2.2" fill="${c}"/><circle cx="19.6" cy="16.4" r="2.2" fill="${c}"/></svg>`,
  star:c=>`<svg viewBox="0 0 34 30"><path d="M17 2.5l4 8.6 9.4 1.1-7 6.4 1.9 9.3L17 23.2 8.7 27.9l1.9-9.3-7-6.4 9.4-1.1z" fill="${c}" stroke="${INK}" stroke-width="1.4" stroke-linejoin="round"/><path d="M17 7.5l2.4 5.2 5.6.6" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.4" stroke-linecap="round"/></svg>`};
 const ini=n=>n.split(' ').map(w=>w[0]).join('');
 const L=document.createElement('div');L.className='kd';L.innerHTML=`<canvas class="kd-trail" aria-hidden="true"></canvas>
  <div class="kd-count" aria-live="polite"><span class="kd-l">Catch a kudos</span><span class="kd-pips">${REC.map(()=>'<b></b>').join('')}</span></div>
  <div class="kd-note" role="dialog" aria-label="Recommendation"><button class="kd-x" type="button" aria-label="Close">&times;</button><blockquote></blockquote><footer><span class="kd-av"></span><span><b></b><small></small></span><a class="kd-src" href="https://www.linkedin.com/in/theanubhutiuxd/" target="_blank" rel="noopener">LinkedIn</a></footer></div>
  <div class="kd-done"><b>All five caught.</b><span>Thank you for reading what they said.</span><button type="button">Throw them back</button></div>`;
 pf.append(L);
 const cv=L.querySelector('.kd-trail'),g=cv.getContext('2d'),note=L.querySelector('.kd-note'),done=L.querySelector('.kd-done'),cnt=L.querySelector('.kd-count');
 const F=REC.map((r,i)=>{const b=document.createElement('button');b.type='button';b.className='kd-f kd-'+KIND;b.innerHTML=ICON[KIND](r.c);b.setAttribute('aria-label',`Catch the kudos from ${r.n}`);L.append(b);
  return {b,i,ph:i/REC.length*Math.PI*2+.4,sp:.2+.05*((i*3)%5)/4,rx:.5+.04*(i%2),ry:.4+.05*((i+1)%3)/2,cy:.5,bob:i*1.7,h:[],slow:1,st:'fly'}});
 let W=0,H=0,vis=false,reading=-1,lastMove=0,seen=new Set();
 const size=()=>{W=pf.clientWidth;H=pf.clientHeight;const d=Math.min(2,devicePixelRatio||1);cv.width=(W*1.5)*d;cv.height=(H*1.3)*d;g.setTransform(d,0,0,d,W*.25*d,H*.15*d)};size();addEventListener('resize',size);
 new IntersectionObserver(es=>{vis=es[0].isIntersecting},{rootMargin:'100px'}).observe(pf);
 addEventListener('pointermove',()=>lastMove=performance.now(),{passive:true});
 const pips=()=>{L.querySelectorAll('.kd-pips b').forEach((b,i)=>b.classList.toggle('on',seen.has(i)));L.querySelector('.kd-l').textContent=seen.size?`${seen.size} of ${REC.length} kudos`:'Catch a kudos'};
 function open(i){const r=REC[i];reading=i;note.querySelector('blockquote').textContent=r.q;const av=note.querySelector('.kd-av');av.textContent=ini(r.n);av.style.background=r.c;note.querySelector('footer b').textContent=r.n;note.querySelector('footer small').textContent=r.r;
  note.classList.remove('on');void note.offsetWidth;note.classList.add('on');seen.add(i);pips();window.__face?.setFace('a');const nr=note.getBoundingClientRect();window.__face?.lookAt(nr.left+nr.width*.4,nr.top+nr.height*.5,6000);note.querySelector('.kd-x').focus({preventScroll:true})}
 function close(){if(reading<0)return;const i=reading;reading=-1;note.classList.remove('on');window.__face?.setFace('now');const f=F[i];f.st='home';f.t0=performance.now();
  if(seen.size===REC.length)setTimeout(()=>{done.classList.add('on');window.__face?.setFace('b');setTimeout(()=>window.__face?.cur==='b'&&window.__face.setFace('now'),2600)},380)}
 note.querySelector('.kd-x').addEventListener('click',e=>{e.stopPropagation();close()});
 L.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
 document.addEventListener('pointerdown',e=>{if(reading>=0&&!e.target.closest('.kd-note,.kd-f'))close()});
 done.querySelector('button').addEventListener('click',()=>{done.classList.remove('on');seen.clear();pips();F.forEach(f=>{f.st='fly';f.b.classList.remove('gone');f.b.disabled=false;f.b.setAttribute('aria-label',`Catch the kudos from ${REC[f.i].n}`)})});
 F.forEach(f=>{f.b.addEventListener('pointerenter',()=>f.slow=.2);f.b.addEventListener('pointerleave',()=>f.slow=1);f.b.addEventListener('focus',()=>f.slow=0);f.b.addEventListener('blur',()=>f.slow=1);
  f.b.addEventListener('click',e=>{e.stopPropagation();if(f.st!=='fly')return;if(reading>=0)close();f.st='catch';f.t0=performance.now();f.from=[f.x,f.y];f.b.disabled=true})});
 const ease=t=>1-Math.pow(1-t,3);let lt=performance.now(),gl=0;
 (function tick(now){requestAnimationFrame(tick);const dt=Math.min(50,now-lt)/1000;lt=now;if(!vis||!W)return;
  g.clearRect(-W*.25,-H*.15,W*1.5,H*1.3);let near=null,nd=1e9;
  F.forEach(f=>{let x,y,rot=0,sc=1;
   if(f.st==='fly'){if(!reduce)f.ph+=dt*f.sp*f.slow;const a=f.ph;x=W*(.5+Math.cos(a)*f.rx);y=H*(f.cy+Math.sin(a)*f.ry)+(reduce?0:Math.sin(now/650+f.bob)*5);
    const vx=-Math.sin(a)*f.rx*W,vy=Math.cos(a)*f.ry*H;rot=KIND==='star'?now/40%360:Math.max(-16,Math.min(16,Math.atan2(vy,Math.abs(vx)+40)*30))+(KIND==='bubble'?Math.sin(now/420+f.bob)*5:0);
    if(!reduce){f.h.push([x,y]);if(f.h.length>20)f.h.shift();g.beginPath();f.h.forEach(([hx,hy],j)=>j?g.lineTo(hx,hy):g.moveTo(hx,hy));g.strokeStyle='rgba(224,119,79,.32)';g.setLineDash([2,5]);g.lineWidth=1.3;g.stroke()}
    const d=Math.hypot(x-W*.5,y-H*.35);if(d<nd){nd=d;near=f}}
   else if(f.st==='catch'){const t=Math.min(1,(now-f.t0)/(reduce?1:560)),e=ease(t);x=f.from[0]+(W*.5-f.from[0])*e;y=f.from[1]+(H*.18-f.from[1])*e-Math.sin(t*Math.PI)*36;rot=t*(KIND==='star'?540:20);sc=1+t*.5;f.b.style.opacity=1-t*.9;
    if(t>=1){f.st='read';f.b.classList.add('gone');f.h=[];open(f.i)}}
   else if(f.st==='home'){const t=Math.min(1,(now-f.t0)/500);f.b.style.opacity=0;if(t>=1){f.st='parked';f.b.setAttribute('aria-label',`Read again: ${REC[f.i].n}`);f.b.disabled=false;f.b.classList.remove('gone');f.b.classList.add('parked')}x=f.x;y=f.y}
   else {x=f.x;y=f.y}
   if(f.st==='parked'){const k=[...seen].indexOf(f.i);x=W*.5+(k-(REC.length-1)/2)*24;y=-6;rot=0;sc=.62;f.b.style.opacity=1}
   f.x=x;f.y=y;f.b.style.transform=`translate(${x}px,${y}px) rotate(${rot}deg) scale(${sc})`});
  if(reading<0&&near&&now-lastMove>1400&&now-gl>180&&window.__face?.lookAt){gl=now;const r=pf.getBoundingClientRect();window.__face.lookAt(r.left+near.x,r.top+near.y)}})(lt);
 F.forEach(f=>f.b.addEventListener('click',()=>{if(f.st==='parked'){if(reading>=0)close();open(f.i)}}));
 if(qk){const sw=document.createElement('div');sw.className='kd-sw';sw.innerHTML='<span>Kudos object</span>'+['envelope','bubble','star'].map(k=>`<a href="?kudos=${k}#about" class="${k===KIND?'on':''}">${k}</a>`).join('');document.body.append(sw)}
}}
