/* Coded story snippets for case pages. Each is a short scripted loop in a phone frame that shows one moment,
   not a whole flow. They play while on screen, pause on hover, and "Try it" lets people tap through themselves.
   Content is generic on purpose (no internal UI or data). */
(function(){
const H=(s)=>{const t=document.createElement('template');t.innerHTML=s.trim();return t.content.firstElementChild};
const PROTOS=window.PROTOS={};
function runner(el,script){let tok=0,paused=false,on=false;const waitP=()=>new Promise(r=>{const c=()=>paused?setTimeout(c,120):r();c()});
 const ctl={sleep:async(ms,t)=>{let left=ms;while(left>0){if(t!==tok)throw 0;await new Promise(r=>setTimeout(r,Math.min(60,left)));if(!paused)left-=60}if(t!==tok)throw 0}};
 async function loop(){const t=++tok;try{while(t===tok){await waitP();await script(el,ms=>ctl.sleep(ms,t),t)}}catch(e){}}
 return{play(){if(!on){on=true;loop()}},stop(){on=false;tok++},pause(v){paused=v},restart(){tok++;on=false;this.play()}}}
const tap=(host,target)=>{const r=target.getBoundingClientRect(),h=host.getBoundingClientRect();const f=H('<i class="pt-tap"></i>');f.style.left=(r.left-h.left+r.width/2)+'px';f.style.top=(r.top-h.top+r.height/2)+'px';host.append(f);setTimeout(()=>f.remove(),900)};
const type=async(el,txt,sleep,sp=26)=>{el.textContent='';for(const ch of txt){el.textContent+=ch;await sleep(sp)}};

/* ---------- PPT Story Partner: say it, get one gap and one next step, a plan forms ---------- */
PROTOS.story=el=>{el.innerHTML=`<div class="pt-scr sp"><div class="pt-top"><b>Story Partner</b><span class="pt-live"><i></i>Listening</span></div>
 <div class="sp-say"><div class="sp-wave">${'<i></i>'.repeat(18)}</div><p class="sp-tx"></p></div>
 <div class="sp-card gap"><small>One gap</small><b>Who decides, and what do they need to hear first?</b></div>
 <div class="sp-card nxt"><small>Next step</small><b>Open with the number that worries them.</b></div>
 <div class="sp-plan"><small>Story plan</small><svg viewBox="0 0 220 40"><path d="M6 34 C60 34 70 6 110 6 S170 30 214 18" fill="none" stroke="#e0774f" stroke-width="2" stroke-dasharray="2 5" stroke-linecap="round"/></svg>
  <ol><li><i>1</i>The worry, in one number</li><li><i>2</i>What the pilot changes</li><li><i>3</i>The ask for Friday</li></ol><button class="pt-btn">Make the slides</button></div></div>`;
 const q=s=>el.querySelector(s);
 return runner(el,async(el,sleep)=>{el.querySelectorAll('.on').forEach(e=>e.classList.remove('on'));q('.sp-tx').textContent='';q('.sp').classList.add('talk');
  await sleep(500);await type(q('.sp-tx'),'It\'s for Friday\'s review. We need budget for the mobile pilot, and finance is nervous about cost.',sleep,22);
  q('.sp').classList.remove('talk');await sleep(500);q('.gap').classList.add('on');await sleep(1500);q('.nxt').classList.add('on');await sleep(1600);
  q('.sp-plan').classList.add('on');for(const li of el.querySelectorAll('.sp-plan li')){await sleep(380);li.classList.add('on')}await sleep(600);q('.pt-btn').classList.add('on');await sleep(2600)})};

/* ---------- Copilot Create: ask in chat, the agent runs four stages, survives an app switch ---------- */
PROTOS.create=el=>{el.innerHTML=`<div class="pt-scr cr"><div class="pt-top"><b>Copilot</b><span>Chat</span></div>
 <div class="cr-chat"><p class="me">Make an infographic for Friday's team review</p>
  <div class="cr-agent"><div class="cr-st">${['Gathering','Drafting','Reviewing','Results'].map(s=>`<span>${s}</span>`).join('')}</div>
   <div class="cr-body"><div class="cr-g"><span>Brand colours</span><span>Portrait 9:16</span><span>Team notes</span></div>
    <div class="cr-d"><i></i></div><div class="cr-r"><span>Spelling</span><span>Brand</span><span>Numbers match notes</span></div>
    <div class="cr-out"><div class="ig"><b>Q3 at a glance</b><div class="bars"><i style="height:40%"></i><i style="height:70%"></i><i style="height:55%"></i><i style="height:90%"></i></div></div><small>Sources: Team notes, Q3 numbers</small></div></div></div>
  <p class="me later">Also, can you summarise the thread above?</p></div>
 <div class="cr-mini"><i></i>Drafting infographic</div>
 <div class="cr-away"><b>Another app</b><p>You switched away. The work keeps going.</p></div>
 <div class="cr-note"><b>Copilot</b>Your infographic is ready</div>
 <div class="cr-comp"><span class="pill">Infographic</span><span class="ph">Ask anything</span></div></div>`;
 const q=s=>el.querySelector(s),st=[...el.querySelectorAll('.cr-st span')],sc=q('.cr');
 const stage=i=>{st.forEach((s,j)=>{s.classList.toggle('on',j===i);s.classList.toggle('ok',j<i)});sc.dataset.s=i};
 return runner(el,async(el,sleep)=>{sc.className='pt-scr cr';stage(-1);q('.pill').classList.remove('on');
  await sleep(400);q('.pill').classList.add('on');await sleep(700);sc.classList.add('asked');await sleep(600);stage(0);
  for(const c of el.querySelectorAll('.cr-g span')){await sleep(320);c.classList.add('on')}await sleep(500);stage(1);await sleep(900);
  sc.classList.add('mini');await sleep(700);sc.classList.add('scrolled');await sleep(1100);sc.classList.add('away');await sleep(1500);sc.classList.add('note');await sleep(1300);
  sc.classList.remove('away','note','mini','scrolled');stage(2);for(const c of el.querySelectorAll('.cr-r span')){await sleep(380);c.classList.add('on')}
  await sleep(500);stage(3);await sleep(2800);el.querySelectorAll('.cr-g span,.cr-r span').forEach(c=>c.classList.remove('on'))})};

/* ---------- Voice and gesture: tap to clarify, then keep talking ---------- */
PROTOS.voice=el=>{el.innerHTML=`<div class="pt-scr vo"><div class="vo-slide"><b class="t1">Mobile pilot</b><span class="t2">Section one</span><i></i><i></i><i></i></div>
 <div class="vo-cap"><p class="u"></p><p class="a"></p></div>
 <div class="vo-opts"><button data-o="0">Slide title</button><button data-o="1">Section header</button></div>
 <div class="vo-orb"><i></i><i></i><i></i></div></div>`;
 const q=s=>el.querySelector(s),sc=q('.vo');let picked=null;el.querySelectorAll('.vo-opts button').forEach(b=>b.onclick=()=>{picked=+b.dataset.o});
 return runner(el,async(el,sleep)=>{sc.className='pt-scr vo';q('.t1').textContent='Mobile pilot';q('.t2').textContent='Section one';q('.u').textContent='';q('.a').textContent='';picked=null;el.querySelectorAll('.vo-opts button').forEach(b=>b.classList.remove('on'));
  await sleep(500);sc.classList.add('speak');await type(q('.u'),'Make the title bigger, and orange.',sleep,34);sc.classList.remove('speak');await sleep(400);
  await type(q('.a'),'Which one?',sleep,40);sc.classList.add('ask');let w=0;while(picked===null&&w<1700){await sleep(100);w+=100}
  const i=picked??0,b=el.querySelectorAll('.vo-opts button')[i];if(picked===null)tap(q('.vo'),b);b.classList.add('on');await sleep(450);
  sc.classList.remove('ask');sc.classList.add('done'+i);q('.a').textContent='';await sleep(500);sc.classList.add('speak');await type(q('.u'),'And make it say "Why now".',sleep,34);sc.classList.remove('speak');
  (i?q('.t2'):q('.t1')).textContent='Why now';await sleep(300);await type(q('.a'),'Done. You never had to repeat which one.',sleep,24);await sleep(2600)})};

/* ---------- Order details page: before and after, drag the handle ---------- */
PROTOS.odp=el=>{const rows=['Rate your experience','Offers for you','Similar products','Frequently bought together','Need help?','Change delivery slot','Invoice'];
 el.innerHTML=`<div class="pt-ba"><div class="pt-scr od before"><div class="pt-top"><b>Order details</b></div><div class="od-prod"><i></i><span>Running shoes</span></div>
  <div class="od-tl flat"><span>Ordered</span><span>Packed</span><span>Shipped</span><span>Delivery</span></div>${rows.map(r=>`<div class="od-row${r==='Change delivery slot'?' hid':''}">${r}</div>`).join('')}<div class="od-fold"><span>Most people stop here</span></div></div>
 <div class="pt-scr od after"><div class="pt-top"><b>Order details</b></div><div class="od-hero"><small>Arriving tomorrow by 9 pm</small><b>Out for delivery soon</b><button>Change delivery slot</button></div>
  <div class="od-tl live"><span class="ok">Ordered</span><span class="ok">Packed</span><span class="now">Shipped</span><span>Delivery</span></div>
  <div class="od-bun"><span>Address</span><span>Phone</span><span>Cancel</span></div><div class="od-dem"><div class="od-row">Offers for you</div><div class="od-row">Similar products</div></div></div>
 <div class="pt-hdl" tabindex="0" role="slider" aria-label="Compare before and after" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="pt-lb l">Before</span><span class="pt-lb r">After</span></div>`;
 const ba=el.querySelector('.pt-ba'),hd=el.querySelector('.pt-hdl');let x=.5,drag=false,user=false;
 const set=v=>{x=Math.max(.04,Math.min(.96,v));ba.style.setProperty('--x',x*100+'%');hd.setAttribute('aria-valuenow',Math.round(x*100))};set(.5);
 const mv=e=>{const r=ba.getBoundingClientRect();set((e.clientX-r.left)/r.width)};
 hd.addEventListener('pointerdown',e=>{drag=user=true;hd.setPointerCapture(e.pointerId)});hd.addEventListener('pointermove',e=>drag&&mv(e));hd.addEventListener('pointerup',()=>drag=false);
 ba.addEventListener('click',e=>{if(e.target===hd)return;user=true;mv(e)});hd.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){user=true;set(x-.05)}if(e.key==='ArrowRight'){user=true;set(x+.05)}});
 return runner(el,async(el,sleep)=>{if(user){await sleep(400);return}for(let k=0;k<=1;k+=.02){if(user)return;set(.5+.4*Math.sin(k*Math.PI*2));await sleep(60)}await sleep(900)})};

/* ---------- Cancellation: the doubt nudge fires the moment you tap Cancel ---------- */
PROTOS.cancel=el=>{el.innerHTML=`<div class="pt-scr ca"><div class="pt-top"><b>Your order</b></div><div class="od-prod"><i></i><span>Running shoes<small>Arriving tomorrow</small></span></div>
 <div class="ca-acts"><button class="ca-c">Cancel order</button><button>Track</button></div>
 <div class="ca-sheet"><b>Before you cancel</b><div class="ca-v"><span><i>₹</i>You saved ₹340 on this order</span><span><i>↗</i>It arrives tomorrow</span></div>
  <div class="ca-btns"><button class="pt-btn keep">Keep my order</button><button class="go">Continue to cancel</button></div><small class="ca-why">Shown before you pick a reason</small></div>
 <div class="ca-toast">Order kept. See you tomorrow.</div></div>`;
 const q=s=>el.querySelector(s),sc=q('.ca');let kept=null;q('.keep').onclick=()=>kept=true;q('.go').onclick=()=>kept=false;q('.ca-c').onclick=()=>{sc.classList.add('sheet')};
 return runner(el,async(el,sleep)=>{sc.className='pt-scr ca';kept=null;await sleep(900);tap(sc,q('.ca-c'));await sleep(250);sc.classList.add('sheet');
  await sleep(500);for(const s of el.querySelectorAll('.ca-v span')){s.classList.add('on');await sleep(450)}let w=0;while(kept===null&&w<1600){await sleep(100);w+=100}
  if(kept===null)tap(sc,q('.keep'));await sleep(300);sc.classList.remove('sheet');sc.classList.add(kept===false?'gone':'kept');await sleep(2400);el.querySelectorAll('.ca-v span').forEach(s=>s.classList.remove('on'))})};

/* ---------- Design system: scattered parts snap into one kit, then 92 designers fill in ---------- */
PROTOS.kit=el=>{el.innerHTML=`<div class="pt-kit"><div class="kt-parts">${['b1','b2','b3','c1','c2','t1','t2','x1'].map(k=>`<i class="kp ${k}"></i>`).join('')}</div>
 <div class="kt-lb"><span class="a">Adobe XD</span><span class="b">Sketch</span><span class="c">One Figma kit</span></div>
 <div class="kt-screens">${['Cart','Order','Product'].map(s=>`<div class="ks"><small>${s}</small><i></i><i></i><i class="btn"></i></div>`).join('')}</div>
 <div class="kt-dots">${'<i></i>'.repeat(92)}</div><div class="kt-n"><b>0</b> designers on one system</div></div>`;
 const k=el.querySelector('.pt-kit'),n=el.querySelector('.kt-n b'),dots=[...el.querySelectorAll('.kt-dots i')];
 return runner(el,async(el,sleep)=>{k.className='pt-kit';dots.forEach(d=>d.classList.remove('on'));n.textContent=0;await sleep(1400);k.classList.add('snap');await sleep(1600);k.classList.add('screens');await sleep(1400);
  k.classList.add('team');for(let i=0;i<92;i++){dots[i].classList.add('on');n.textContent=i+1;await sleep(22)}await sleep(2600)})};

/* ---------- Burst to Omni: three decisions in under a minute ---------- */
PROTOS.omni=el=>{const C=[['Reply to Priya: yes to Thursday','She is waiting on you'],['Approve edits to the launch note','Due before your 3 pm'],['Share the slides with the team','You said you would in stand-up']];
 el.innerHTML=`<div class="pt-scr om"><div class="om-top"><svg viewBox="0 0 44 44"><circle cx="22" cy="22" r="19" fill="none" stroke="rgba(43,50,54,.12)" stroke-width="4"/><circle class="ring" cx="22" cy="22" r="19" fill="none" stroke="#e0774f" stroke-width="4" stroke-linecap="round" stroke-dasharray="119.4" transform="rotate(-90 22 22)"/></svg><div><b class="om-t">0:00</b><small>Your minute</small></div></div>
 <div class="om-stack">${C.map((c,i)=>`<div class="om-card" style="--i:${i}"><small>Ready for you</small><b>${c[0]}</b><span class="why">Why this? ${c[1]}</span><div class="om-h"><span>Rethink</span><span>Approve</span></div><i class="stamp">Done</i></div>`).join('')}</div>
 <div class="om-end"><b>3 things done</b><span class="om-e">in 0:48</span></div><p class="om-hint">Swipe right to approve, left to rethink</p></div>`;
 const sc=el.querySelector('.om'),cards=[...el.querySelectorAll('.om-card')],ring=el.querySelector('.ring'),tt=el.querySelector('.om-t');let sec=0,ti=0,manual=0;
 const clock=()=>{ring.style.strokeDashoffset=119.4*(1-sec/60);tt.textContent='0:'+String(Math.floor(sec)).padStart(2,'0')};
 const swipe=(c,dir)=>{c.classList.add(dir>0?'yes':'no')};
 cards.forEach(c=>{let sx=null;c.addEventListener('pointerdown',e=>{sx=e.clientX;c.setPointerCapture(e.pointerId)});c.addEventListener('pointermove',e=>{if(sx!==null){c.style.translate=(e.clientX-sx)+'px 0';c.style.rotate=(e.clientX-sx)/18+'deg'}});
  c.addEventListener('pointerup',e=>{const d=e.clientX-sx;sx=null;c.style.translate='';c.style.rotate='';if(Math.abs(d)>50){manual++;swipe(c,d)}})});
 return runner(el,async(el,sleep)=>{sc.className='pt-scr om';cards.forEach(c=>c.classList.remove('yes','no'));sec=0;clock();manual=0;
  for(let i=0;i<cards.length;i++){const c=cards[cards.length-1-i];for(let s=0;s<16;s++){sec+=1;clock();await sleep(70);if(c.classList.contains('yes')||c.classList.contains('no'))break}
   if(!c.classList.contains('yes')&&!c.classList.contains('no')){c.classList.add('lean');await sleep(250);c.classList.remove('lean');swipe(c,1)}await sleep(420)}
  sec=48;clock();sc.classList.add('fin');await sleep(3000)})};

/* mount: play when visible, pause on hover, Try it focuses the snippet */
window.mountProtos=root=>{root.querySelectorAll('[data-proto]').forEach(box=>{const f=PROTOS[box.dataset.proto];if(!f)return;const stage=box.querySelector('.pt-stage');const r=f(stage);
 if(matchMedia('(prefers-reduced-motion: reduce)').matches){r.play();setTimeout(()=>r.pause(true),5000)}
 new IntersectionObserver(([e])=>{e.isIntersecting?r.play():r.stop()},{threshold:.35}).observe(box);
 box.addEventListener('pointerenter',()=>{if(!box.classList.contains('try'))r.pause(true)});box.addEventListener('pointerleave',()=>r.pause(false));
 const t=box.querySelector('.pt-try');if(t)t.onclick=()=>{box.classList.toggle('try');t.textContent=box.classList.contains('try')?'Watch it play':'Try it yourself';r.pause(false);r.restart()}})};
})();
