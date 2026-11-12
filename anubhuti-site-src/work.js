/* Shared case data, card markup and impact count-up, used by / and work-rail.html */
window.CASES=[
 {id:'story-partner',gated:1,t:'PPT Story Partner',o:'Microsoft',y:'2026',img:'v3-c1',tone:'#e0774f',why:'Talk first, slides follow',
  l:'A voice-first partner that helps you find the story before the slides.',
  prob:'Decks start as blank slides before the argument is clear.',did:'Let people talk through intent while Copilot reflects one gap and one next step.',
  role:'Designer and coded-prototype builder',
  hero:['71','rounds of live feedback in 12 days'],m:[['10+','testers on one live link'],['236','commits in 16 days']]},
 {id:'create-mobile',t:'Copilot Create on mobile',o:'Microsoft 365 Copilot',y:'2024 to 2025',img:'v3-c2',tone:'#e0774f',why:'A chat that unfolds into things you make',
  l:'Turned a hidden Create tab into an agent you can call from any chat.',
  prob:'Create was a low-engagement tab on the device people carry most.',did:'Dissolved the tab into chat with an intent-first composer and a visible agent flow.',
  role:'Lead designer, two-week sprint with 18 participants',
  hero:['5 → 1','tabs, and Create is the one left'],m:[['2x','more people tried creating'],['41%','came back to create again']]},
 {id:'voice-gesture',t:'Voice and gesture editing',o:'Microsoft',y:'2026',img:'v3-c3',tone:'#e0774f',why:'Point and talk as one input',
  l:'Edit a deck on your phone by circling what you mean while you talk.',
  prob:'On a phone, picking the exact thing to edit takes longer than saying what you want.',did:'Made a drawn circle and a spoken sentence one input, with each edit returned as a card you can check.',
  role:'Designer and prototyper',
  hero:['16','slides marked up in one spoken pass'],m:[['100%','of first-time testers saw the value'],['0','pop-ups while you talk']]},
 {id:'post-purchase',t:'Post-purchase redesign',o:'Flipkart',y:'2021 to 2022',img:'v3-c4',tone:'#e0774f',why:'Anxious moments, made calm and reversible',
  l:'Redesigned what Flipkart buyers see after they order, so they can track, fix or cancel without calling support.',
  prob:'People called support or cancelled when order information felt unclear.',did:'Rebuilt the page around delivery: one hero card, then actions grouped by job.',
  role:'Sole designer on the order details page',
  hero:['+112','bps self-serve, across Flipkart'],m:[['-76 bps','issues per unit'],['-74 bps','return to origin']]}
];
window.CASE_MORE={
"story-partner": {
"dec": [
"Started from spoken narrative before slide structure.",
"Returned one gap and one next step.",
"Kept one live link open for rapid testing."
],
"out": "A working prototype shaped by 71 rounds of live feedback from 10+ testers in 12 days.",
"team": "Designer and coded-prototype builder. Built and shipped the live link myself.",
"nda": true
},
"create-mobile": {
"dec": [
"Chose Pill over Drawer despite schedule cost.",
"Named Gathering, Drafting, Reviewing, Results.",
"Moved quality by pushing model migration."
],
"out": "The composer pattern now travels across Designer, Researcher, and Analyst agents.",
"team": "Lead Designer for Create on mobile; ran a two-week sprint with 18 participants.",
"nda": true
},
"voice-gesture": {
"dec": [
"Kept the habit people already have: point at it and say it.",
"Let Copilot speak only when it has an idea worth hearing.",
"Returned every edit as a card you can check before it lands."
],
"out": "Every first-time tester saw the value, so voice and gesture editing is being picked up.",
"team": "Designer and prototyper, PowerPoint mobile.",
"nda": true
},
"post-purchase": {
"dec": [
"Put delivery and the likely next action in the first fold.",
"Gave the page a spine instead of polishing widgets one by one.",
"Turned the timeline into a guide with one action per step."
],
"out": "Self-serve rose 112 bps, issues per unit fell 76 bps and return to origin fell 74 bps.",
"team": "Sole designer on the order details page, with 2 PMs and an engineering head.",
"nda": false
},
"design-system": {
"dec": [
"Made migration a business argument first.",
"Turned components into reusable shopping-funnel patterns.",
"Taught the system through hands-on training."
],
"out": "A shared Figma practice replaced split tools for a 92-designer team.",
"team": "Initiated and led migration for the Design and Research community.",
"nda": false
}
};
CASES.forEach(c=>Object.assign(c,CASE_MORE[c.id]||{}));
window.TEASE={"story-partner": ["You talk, Copilot answers with one gap and one next step. Never a wall of slides.", "4 min read"], "create-mobile": ["Chose a pill over a drawer, even though it cost us schedule. Discovery won.", "5 min read"], "voice-gesture": ["Circle it and say it. Copilot raises its hand instead of talking over you.", "4 min read"], "post-purchase": ["Stopped polishing widgets and gave the page a spine. Delivery first.", "5 min read"], "design-system": ["Sold the migration as a business case before a single component was built.", "4 min read"]};CASES.forEach(c=>{const t=TEASE[c.id];if(t){c.tease=t[0];c.read=t[1]}});
window.cardHTML=function(c,i){const meta=c.gated?'Preview open · full case on request':`Read the case · ${c.read}`,cur=c.gated?'Case on request':'Inside this case';return `<article class="card${c.gated?' gated':''}" data-case="${i}" data-cursor="${cur}" data-say="${c.tease}" data-meta="${meta}" style="--tone:${c.tone}">
 <div class="th"><img src="renders/${c.img}.jpg?v=2" alt="${c.why}" style="view-transition-name:thumb-${c.id}"><span class="org">${c.o}, ${c.y}</span>${c.gated?`<span class="ondemand"><svg viewBox="0 0 20 20" aria-hidden="true"><rect x="4.5" y="9" width="11" height="7.5" rx="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M7 9V6.8a3 3 0 0 1 6 0V9" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>On request</span>`:''}<span class="stamp" aria-hidden="true">${String(c.y).slice(0,4)}</span></div>
 <div class="bd"><h3>${c.t}</h3><p class="lede">${c.l}</p>
  <div class="impact"><b class="big" data-n="${c.hero[0]}">${c.hero[0]}</b><span>${c.hero[1]}</span></div>
  <ul class="mx">${c.m.slice(0,1).map(m=>`<li><b>${m[0]}</b>${m[1]}</li>`).join('')}</ul>
  <a class="go" href="case.html?id=${c.id}" data-cursor="${cur}" data-say="${c.tease}" data-meta="${meta}">${c.gated?'Preview, full case on request':'Read the case'} <i>&rarr;</i></a></div></article>`};
window.endCardHTML=`<article class="card end" data-cursor="More work" data-say="Design system, cancellation A/B, hackathons and concepts"><div><h3>More from the studio.</h3><p>A design system for 92 designers, a cancellation A/B, hackathon wins and concepts.</p><a class="go" href="#more">See the rest <i>&rarr;</i></a></div></article>`;
/* count up the headline impact number the first time a card is mostly in view */
window.countUp=function(el){if(window.numFx)return numFx(el);if(el.dataset.done)return;el.dataset.done=1;el.classList.remove('pend');el.textContent=el.dataset.n};
/* hide lower-priority lines, one level at a time, until the tallest card fits maxH */
window.fitCards=function(track,maxH){for(let i=1;i<=5;i++)track.classList.remove('f'+i);
 for(let i=1;i<=5&&track.offsetHeight>maxH;i++)track.classList.add('f'+i)};
/* The paper plane flies a peak-and-valley path through the cards, leaving a light dotted trail.
   makeWeave(track, topOffsetPx) builds it inside the track; call the returned fn with (u, velocity),
   where u is the plane’s position in track coordinates. Returns the index of the card the plane has reached. */
window.makeWeave=function(track,topOff){
 const NS='http://www.w3.org/2000/svg',el=(n,a={},p)=>{const e=document.createElementNS(NS,n);for(const k in a)e.setAttribute(k,a[k]);if(p)p.append(e);return e};
 track.querySelectorAll('svg.weave,.weave-plane').forEach(e=>e.remove());
 const vh=innerHeight,th=track.offsetHeight,W=track.scrollWidth,cs=[...track.querySelectorAll('.card')].map(c=>({el:c,x:c.offsetLeft,w:c.offsetWidth,cx:c.offsetLeft+c.offsetWidth/2}));
 const top=topOff,bot=topOff+th,mid=(top+bot)/2,A=(bot-top)/2+Math.min(vh*.05,46),c0=cs[0].cx,S=cs[1]?cs[1].cx-cs[0].cx:600;
 const svg=el('svg',{class:'weave',width:W,height:vh,viewBox:`0 0 ${W} ${vh}`});
 Object.assign(svg.style,{position:'absolute',left:0,top:-topOff+'px',overflow:'visible',pointerEvents:'none',zIndex:0});track.prepend(svg);
 const f=(x,w=0)=>[x,mid-A*Math.cos((x-c0)/S*Math.PI)+Math.sin(x/110+w)*3];
 const U0=cs[0].x-140,U1=cs.at(-1).cx,pd=a=>'M'+a.map(p=>p[0].toFixed(1)+' '+p[1].toFixed(1)).join('L');
 const ah=[];for(let x=U0;x<=U1;x+=6)ah.push(f(x));
 el('path',{d:pd(ah),fill:'none',stroke:'rgba(43,50,54,.16)','stroke-width':1.4,'stroke-dasharray':'2 7','stroke-linecap':'round'},svg);
 const trail=el('path',{fill:'none',stroke:'#e0774f','stroke-width':2,'stroke-dasharray':'1 6','stroke-linecap':'round'},svg);
 const pins=cs.slice(0,5).map((c,i)=>{const g=el('g',{transform:`translate(${c.cx} ${i%2?bot+A-(bot-top)/2:top-A+(bot-top)/2})`},svg);const p=el('g',{class:'wpin'},g);
  el('circle',{r:6,fill:'#fffaf3',stroke:'#e0774f','stroke-width':1.6},p);el('circle',{r:2,fill:'#e0774f'},p);return p});
 const pl=document.createElement('div');pl.className='weave-plane';
 Object.assign(pl.style,{position:'absolute',left:0,top:-topOff+'px',width:'46px',height:'46px',margin:'-23px 0 0 -23px',zIndex:5,pointerEvents:'none',filter:'drop-shadow(0 4px 4px rgba(90,50,30,.2))',willChange:'transform'});
 pl.innerHTML='<svg width="46" height="46" viewBox="0 0 30 30"><g transform="rotate(45 15 15)"><path d="M2 2 27 11.5 15.2 15.2 11.5 27Z" fill="#fffaf3" stroke="#2b3236" stroke-width="1.4" stroke-linejoin="round"/><path d="M2 2 15.2 15.2 11.5 27Z" fill="#f4a98f" stroke="#2b3236" stroke-width="1.4" stroke-linejoin="round"/></g></svg>';track.append(pl);
 /* numbers wait at zero until the plane reaches their card, then count up; scroll back and they reset for a replay */
 const zero=b=>{window.numFxReset?numFxReset(b):(delete b.dataset.done,b.textContent=b.dataset.n);b.classList.add('pend')};
  const unstamp=c=>c.el.classList.remove('stamped');
 cs.forEach(c=>{const b=c.el.querySelector('.big');if(b)zero(b);unstamp(c)});
 let ang=0,wave=0;
 return (u,v=0)=>{u=Math.min(U1,Math.max(U0,u));wave+=v*.001;
  const pts=[];for(let x=U0;x<=u;x+=4)pts.push(f(x,wave*(1-(u-x)/Math.max(1,u-U0))));trail.setAttribute('d',pts.length>1?pd(pts):'');
  const [x,y]=f(u),[x2,y2]=f(u+3);ang+=((Math.atan2(y2-y,x2-x)*180/Math.PI)-ang)*.3;pl.style.transform=`translate(${x}px,${y}px) rotate(${ang+90}deg)`;
  let reached=-1;cs.forEach((c,i)=>{const hit=u>=c.cx-4;if(pins[i])pins[i].classList.toggle('on',hit);c.el.classList.toggle('lit',hit&&u<c.cx+c.w*.6);if(hit){reached=i;c.el.classList.add('stamped');const b=c.el.querySelector('.big');if(b)countUp(b)}else if(u<c.cx-c.w*.9){c.el.classList.remove('stamped');const b=c.el.querySelector('.big');if(b&&b.dataset.done)zero(b)}});
  return reached}};
