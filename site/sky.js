/* Exploration only: the page runs from a bright morning (hero) to a starry night (contact).
   ?sky=1 Paper day: the page paper warms through the day, hero opens on a morning sky, contact turns to night.
   ?sky=2 One sky: a single painted sky sits behind every section and changes colour as you scroll.
   ?sky=3 Night falls: the site stays in daylight, then night arrives only at the very end. */
(function(){
const LOCK=document.currentScript&&document.currentScript.dataset.lock,Q=new URLSearchParams(location.search).get('sky');
const M=+(Q||LOCK||1),root=document.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;root.classList.add('m'+M);
const $=s=>document.querySelector(s),clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v)),sm=(a,b,v)=>{const x=clamp((v-a)/(b-a));return x*x*(3-2*x)};
const hex=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)),mix=(a,b,k)=>a.map((v,i)=>Math.round(v+(b[i]-v)*k)),rgb=c=>`rgb(${c})`;
const ramp=(stops,t)=>{for(let i=1;i<stops.length;i++)if(t<=stops[i][0]){const[a,ca]=stops[i-1],[b,cb]=stops[i];return mix(hex(ca),hex(cb),sm(a,b,t))}return hex(stops.at(-1)[1])};

/* switcher */
if(!LOCK||/explore-sky/.test(location.pathname)){const sw=document.createElement('nav');sw.className='sw';sw.innerHTML='<span>Sky idea</span>'+['Paper day','One sky','Night falls'].map((n,i)=>`<a href="?sky=${i+1}" class="${i+1===M?'on':''}">${i+1}. ${n}</a>`).join('');document.body.append(sw)}

/* time of day from scroll: anchored to sections so each one has its own hour */
const A=()=>{const y=e=>e?e.getBoundingClientRect().top+scrollY:0,end=document.documentElement.scrollHeight-innerHeight;
 return [[0,0],[y($('#more'))-innerHeight*.5,.36],[y($('#path'))-innerHeight*.5,.56],[y($('#about'))-innerHeight*.5,.72],[y($('#contact'))-innerHeight*.6,.88],[end,1]]};
let anchors=A();addEventListener('resize',()=>anchors=A());setTimeout(()=>anchors=A(),1500);
const tOf=sy=>{for(let i=1;i<anchors.length;i++)if(sy<=anchors[i][0]){const[a,ta]=anchors[i-1],[b,tb]=anchors[i];return ta+(tb-ta)*clamp((sy-a)/Math.max(1,b-a))}return 1};

/* palettes */
const PAPER=M===1?[[0,'#fbfaf6'],[.3,'#fdf6ec'],[.55,'#fceadb'],[.75,'#f8dcd0'],[1,'#f0d2d2']]:M===3?[[0,'#fdf0e2'],[.36,'#fdf1e5'],[.56,'#fcecdc'],[.72,'#fbe6d5'],[.86,'#f8dccd'],[1,'#f3d3cf']]:[[0,'#fdf9f4'],[1,'#fdf9f4']];
const SKYT=[[0,'#cfe2ee'],[.3,'#fde9d4'],[.55,'#f9cfa6'],[.74,'#eeb0a4'],[.9,'#bfa2c9'],[1,'#3a3766']];
const SKYB=[[0,'#fbf4ea'],[.3,'#fff8f0'],[.55,'#fde6d2'],[.74,'#f8d6c8'],[.9,'#f2c9c4'],[1,'#8a6b98']];

/* hero: open on a fresh morning (modes 1 and 2), warming as you dive into the work */
let morn=null;const hs=$('#sky');
if(M!==3&&hs){morn=document.createElement('div');morn.style.cssText='position:absolute;inset:0;background:url(renders/v3-sky-morning.jpg?v=2) 50% 60%/cover;transition:none';hs.append(morn)}

/* mode 2: one painted sky behind everything */
let fx,fctx,clouds=[];
if(M===2){const d=document.createElement('div');d.id='skyfix';fx=document.createElement('canvas');d.append(fx);document.body.prepend(d);fctx=fx.getContext('2d');
 for(let i=0;i<9;i++)clouds.push({x:Math.random(),y:.15+Math.random()*.75,r:.12+Math.random()*.16,v:.004+Math.random()*.006})}

/* contact: golden hour, dusk and night layers stacked on the game sky */
const sec=$('#contact'),bg=$('#gbg'),gcv=$('#game');const L={};
['dusk','night'].forEach(k=>{const im=document.createElement('img');im.className='skyl';im.alt='';im.dataset.src=`renders/v3-gsky-${k}.webp?v=2`;im.decoding='async';sec.insertBefore(im,gcv);setTimeout(()=>window.__lazy?__lazy(im):(im.src=im.dataset.src),1200);L[k]=im});
const st=document.createElement('canvas');st.id='stars';sec.insertBefore(st,gcv);const sctx=st.getContext('2d');
let SW=0,SH=0,stars=[],shoot=[],flies=[],mx=-999,my=-999,lastHit=false;
function sizeStars(){const r=sec.getBoundingClientRect(),D=Math.min(2,devicePixelRatio||1);SW=r.width;SH=r.height;st.width=SW*D;st.height=SH*D;sctx.setTransform(D,0,0,D,0,0);
 stars=Array.from({length:Math.round(SW*SH/5200)},()=>({x:Math.random()*SW,y:Math.pow(Math.random(),1.6)*SH*.62,r:.4+Math.random()*1.3,p:Math.random()*7,s:.6+Math.random()*1.6}));
 flies=Array.from({length:10},()=>({a:Math.random()*7,b:Math.random()*7,r:30+Math.random()*90,sp:.2+Math.random()*.5}))}
sizeStars();addEventListener('resize',sizeStars);
sec.addEventListener('pointermove',e=>{const r=sec.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});sec.addEventListener('pointerleave',()=>{mx=my=-999});

/* time dial */
const dial=document.createElement('div');dial.className='dial';dial.setAttribute('role','button');dial.tabIndex=0;dial.setAttribute('aria-label','Time of day: Morning. Skip to night.');dial.setAttribute('aria-describedby','dialDesc');dial.setAttribute('aria-expanded','false');
dial.innerHTML=`<svg viewBox="0 0 54 30"><path d="M3 28a24 24 0 0 1 48 0" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="1.5" stroke-dasharray="2 4" stroke-linecap="round"/><path d="M1 28h52" stroke="currentColor" stroke-opacity=".3" stroke-width="1.2" stroke-linecap="round"/><g id="dsun"><circle r="5.5" fill="#f4a24f"/><circle r="9" fill="#f4a24f" opacity=".25"/></g><g id="dmoon" opacity="0"><path d="M2.5-5.5a6 6 0 1 0 3 10.5 5 5 0 1 1-3-10.5z" fill="#ffe7b0"/></g></svg><span class="lb"><b id="dt">6:30 am</b><small id="dn">Morning</small></span><span class="tip" id="dialDesc">This page runs from morning to night. Open the menu to jump by section.</span><span class="dial-menu" id="dialMenu" role="menu"><button data-target="work" role="menuitem"><b>8:30 am</b>Work</button><button data-target="more" role="menuitem"><b>10:30 am</b>Desk</button><button data-target="path" role="menuitem"><b>1:30 pm</b>Path</button><button data-target="about" role="menuitem"><b>4:00 pm</b>About</button><button data-target="contact" role="menuitem"><b>9:30 pm</b>Contact</button></span>`;
document.body.append(dial);const dmenu=dial.querySelector('#dialMenu');
dial.addEventListener('click',e=>{const item=e.target.closest('[data-target]');if(item){e.stopPropagation();const id=item.dataset.target,t=id==='work'?document.getElementById('stage'):document.getElementById(id);if(t){let y=t.getBoundingClientRect().top+scrollY;if(id==='work')y+=innerHeight*1.5;window.__lenis?__lenis.scrollTo(y,{duration:reduce?0:1.5}):scrollTo({top:y,behavior:reduce?'auto':'smooth'})}dmenu.classList.remove('open');dial.setAttribute('aria-expanded','false');return}
 const open=!dmenu.classList.contains('open');dmenu.classList.toggle('open',open);dial.setAttribute('aria-expanded',open)});
addEventListener('click',e=>{if(!dial.contains(e.target)){dmenu.classList.remove('open');dial.setAttribute('aria-expanded','false')}});dial.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();dial.click()}});addEventListener('keydown',e=>{if(e.key==='Escape'){dmenu.classList.remove('open');dial.setAttribute('aria-expanded','false')}});
const dsun=dial.querySelector('#dsun'),dmoon=dial.querySelector('#dmoon'),dt=dial.querySelector('#dt'),dn=dial.querySelector('#dn');
const NAMES=[[.12,'Morning'],[.38,'Late morning'],[.58,'Afternoon'],[.74,'Golden hour'],[.86,'Sunset'],[.95,'Dusk'],[1.01,'Night']];

let lastP='';function frame(now){const t=tOf(scrollY);
 const p=rgb(ramp(PAPER,t));if(p!==lastP){lastP=p;root.style.setProperty('--paper',p);root.style.setProperty('--paper2',rgb(mix(ramp(PAPER,t),[240,200,190],.12)))}
 if(morn)morn.style.opacity=1-sm(.04,.3,t)*.85;
 if(fx){const D=Math.min(2,devicePixelRatio||1);if(fx.width!==innerWidth*D){fx.width=innerWidth*D;fx.height=innerHeight*D}fctx.setTransform(D,0,0,D,0,0);
  const g=fctx.createLinearGradient(0,0,0,innerHeight);g.addColorStop(0,rgb(ramp(SKYT,t)));g.addColorStop(1,rgb(ramp(SKYB,t)));fctx.fillStyle=g;fctx.fillRect(0,0,innerWidth,innerHeight);
  clouds.forEach(c=>{c.x=(c.x+c.v/60)%1.3;const x=(c.x-.15)*innerWidth,y=c.y*innerHeight,r=c.r*innerWidth,gr=fctx.createRadialGradient(x,y,0,x,y,r);gr.addColorStop(0,`rgba(255,255,255,${.28-t*.15})`);gr.addColorStop(1,'rgba(255,255,255,0)');fctx.fillStyle=gr;fctx.beginPath();fctx.ellipse(x,y,r,r*.42,0,0,7);fctx.fill()});
  root.classList.toggle('dusk',t>.86)}
 /* contact layers */
 const r=sec.getBoundingClientRect(),cp=clamp(1-r.top/innerHeight);
 const dk=M===3?sm(.15,.55,cp):sm(.05,.45,cp),nt=M===3?sm(.5,.95,cp):sm(.4,.9,cp);
 L.dusk.style.opacity=dk;L.night.style.opacity=nt;if(bg){L.dusk.style.objectPosition=L.night.style.objectPosition=bg.style.objectPosition}
 sec.classList.toggle('night',nt>.55);if((nt>.55)!==root.classList.contains('isNight'))root.classList.toggle('isNight',nt>.55);
 /* stars, constellation, shooting stars, fireflies and the lantern */
 if(r.bottom>0&&r.top<innerHeight){sctx.clearRect(0,0,SW,SH);const a=nt,ts=reduce?0:now/1000;
  if(a>.02){const near=[];stars.forEach(s=>{const d=Math.hypot(s.x-mx,s.y-my),boost=d<150?1-d/150:0,tw=.55+.45*Math.sin(ts*s.s+s.p);
    sctx.globalAlpha=a*clamp(tw*.8+boost);sctx.fillStyle='#fff8e6';sctx.beginPath();sctx.arc(s.x,s.y,s.r*(1+boost*1.4),0,7);sctx.fill();if(boost>0)near.push([d,s])});
   near.sort((x,y)=>x[0]-y[0]);const ns=near.slice(0,5).map(n=>n[1]);if(ns.length>1){sctx.globalAlpha=a*.5;sctx.strokeStyle='#ffe2b0';sctx.lineWidth=.8;sctx.beginPath();sctx.moveTo(ns[0].x,ns[0].y);ns.slice(1).forEach(s=>sctx.lineTo(s.x,s.y));sctx.stroke()}
   if(!reduce&&Math.random()<.004*a)shoot.push({x:Math.random()*SW*.7+SW*.2,y:Math.random()*SH*.25,l:1});
   const g=window.__game;if(g&&g.mb&&isFinite(g.mb.x1)){const mb=g.mb,s=(mb.x2-mb.x1)/126,lx=mb.x1+113*s,ly=mb.y1+64*s,pulse=.85+.15*Math.sin(ts*2.2);
    const gr=sctx.createRadialGradient(lx,ly,0,lx,ly,90*s*pulse);gr.addColorStop(0,`rgba(255,214,140,${.55*a})`);gr.addColorStop(1,'rgba(255,214,140,0)');sctx.globalAlpha=1;sctx.fillStyle=gr;sctx.beginPath();sctx.arc(lx,ly,90*s*pulse,0,7);sctx.fill();
    if(!reduce)flies.forEach(f=>{f.a+=f.sp*.016;f.b+=f.sp*.011;const x=mb.cx+Math.cos(f.a)*f.r*s*1.6,y=mb.y2+20*s+Math.sin(f.b)*f.r*s*.6,fl=.5+.5*Math.sin(ts*3+f.r);
     sctx.globalAlpha=a*fl;sctx.fillStyle='#ffe2a6';sctx.shadowColor='rgba(255,210,140,.9)';sctx.shadowBlur=10;sctx.beginPath();sctx.arc(x,y,1.8,0,7);sctx.fill();sctx.shadowBlur=0})}
  }
  const hit=$('#gdone')?.classList.contains('on');if(!reduce&&hit&&!lastHit)for(let i=0;i<7;i++)shoot.push({x:SW*(.35+Math.random()*.6),y:SH*Math.random()*.3,l:1+i*.12});lastHit=hit;
  shoot=shoot.filter(s=>(s.l-=.012)>0);shoot.forEach(s=>{const k=1-s.l,x=s.x-k*260,y=s.y+k*120;if(s.l>1)return;const gr=sctx.createLinearGradient(x,y,x+90,y-42);gr.addColorStop(0,'rgba(255,248,230,.95)');gr.addColorStop(1,'rgba(255,248,230,0)');
   sctx.globalAlpha=Math.max(a,.6)*Math.sin(Math.min(1,s.l)*Math.PI);sctx.strokeStyle=gr;sctx.lineWidth=1.6;sctx.beginPath();sctx.moveTo(x,y);sctx.lineTo(x+90,y-42);sctx.stroke()});sctx.globalAlpha=1}
 /* dial */
 const sunT=clamp(t/.9),ang=Math.PI*(1-sunT),sx=27+Math.cos(ang)*24,sy=28-Math.sin(ang)*24;dsun.setAttribute('transform',`translate(${sx} ${sy})`);
 const night=Math.max(sm(.9,.97,t),nt);dsun.style.opacity=1-night;dmoon.setAttribute('opacity',night);dmoon.setAttribute('transform',`translate(${27+Math.cos(Math.PI*.35)*24} ${28-Math.sin(Math.PI*.35)*24})`);
 dsun.firstChild.setAttribute('fill',rgb(mix([244,190,90],[236,110,70],sm(.6,.88,t))));
 const tod=Math.max(t,nt>.01?.88+nt*.12:0),mins=Math.round((6.5+tod*16)*60/5)*5,h=Math.floor(mins/60),m=mins%60;dt.textContent=`${(h%12)||12}:${String(m).padStart(2,'0')} ${h<12?'am':'pm'}`;
 const name=NAMES.find(n=>tod<n[0])[1];dn.textContent=name;dial.setAttribute('aria-label',`Time of day: ${name}. Skip to night.`);dial.classList.toggle('dark',night>.5);
 requestAnimationFrame(frame)}
requestAnimationFrame(frame);
})();
