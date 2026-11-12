/* Case page: renders a story from stories.js, draws its framework as a rail the plane rides while you read,
   and shifts the page from tension (cooler) to relief (warm) at the pivot beat. */
{
const ORDER=['story-partner','create-mobile','voice-gesture','post-purchase','cancellation','design-system','burst-omni','loop-cell','chicken'];
const q=new URLSearchParams(location.search),qid=q.get('id'),MISSING=!ORDER.includes(qid),id=MISSING?'create-mobile':qid,S=STORIES[id];
if(MISSING){const m=document.createElement('meta');m.name='robots';m.content='noindex';document.head.append(m)}window.__caseMissing=MISSING;window.__caseOrder=ORDER;
const C=CASES.find(c=>c.id===id)||{id,t:S.t,o:S.o,y:S.y,img:S.img,tone:'#e0774f',why:S.t,l:S.lede};
const ci=CASES.findIndex(c=>c.id===id),nid=ORDER[(ORDER.indexOf(id)+1)%ORDER.length],N=CASES.find(c=>c.id===nid)||{id:nid,t:STORIES[nid].t,img:STORIES[nid].img,l:STORIES[nid].lede};
document.title=`${C.t}, Anubhuti Jain Singh`;{const l=document.createElement('link');l.rel='canonical';l.href='https://www.anubhuti.design/case.html?id='+id;document.head.append(l)}document.querySelector('meta[property="og:title"]')?.setAttribute('content',document.title);document.querySelector('meta[name="description"]')?.setAttribute('content',S.lede);{const mp=document.getElementById('mePill');if(mp)mp.href='/'+(ci>=0?'#work='+ci:'#more');}document.documentElement.style.setProperty('--tone',C.tone||'#e0774f');
const CAP={story:'Say what the deck is for. Copilot answers with one gap and one next step, then a plan forms.',
 create:'One ask in chat. The agent gathers, drafts while you switch apps, checks its work and shows its sources.',
 voice:'Mid-conversation, a tap answers “which one?” faster than another sentence. Try it and pick one yourself.',
 odp:'Drag the handle. Left, the old page, with the action people came for below the fold. Right, delivery first.',
 cancel:'The nudge appears the moment you tap Cancel, before you pick a reason. Try it and choose for yourself.',
 kit:'Parts from two tools become one kit, then the screens and the team follow.',
 omni:'Three real decisions inside a minute. Try it and swipe the cards yourself.'};
const esc=s=>s.replace(/"/g,'&quot;');
const imgSrc=c=>c.art||STORIES[c.id]?.art?`renders/${c.img}.webp?v=2`:`renders/${c.img}.jpg?v=2`;
const pivotI=S.beats.findIndex(b=>b.pivot);
const vid=(src,extra='')=>`<video data-src="${src}" muted loop playsinline preload="none" ${/poster=/.test(extra)?extra:extra+` poster="${src.replace(/\.mp4$/,'.jpg')}"`}></video>`;
const cap=c=>c?`<figcaption>${c}</figcaption>`:'';
function media(m){
 if(m.v&&m.phone)return `<figure class="md phone${m.crop?' crop':''}">${vid(m.v,m.poster?`poster="${m.poster}"`:'')}<button class="md-full" data-full="${m.v}" aria-label="Watch with sound">Watch with sound</button>${cap(m.cap)}</figure>`;
 if(m.v&&m.wide)return `<figure class="md wv">${vid(m.v,m.poster?`poster="${m.poster}"`:'')}${m.full?`<button class="md-full" data-full="${m.v}">Watch with sound</button>`:''}${cap(m.cap)}</figure>`;
 if(m.i)return `<figure class="md slide"><img src="${m.i}" alt="${esc(m.cap||'')}" loading="lazy" data-zoom>${cap(m.cap)}</figure>`;
 if(m.g)return `<figure class="md gal"><div class="gal-t" data-lenis-prevent>${m.g.map((g,k)=>`<img src="${g}" alt="${esc(m.cap||'')} (${k+1} of ${m.g.length})" loading="lazy" draggable="false" data-zoom data-k="${k}">`).join('')}</div><div class="gal-nav"><button class="gp" aria-label="Previous">&larr;</button><span class="gc">1 / ${m.g.length}</span><button class="gn" aria-label="Next">&rarr;</button></div>${cap(m.cap)}</figure>`;
 if(m.pair)return `<figure class="md pair">${m.pair.map(p=>`<div>${vid(p.v)}<span>${p.l}</span></div>`).join('')}</figure>`;
 if(m.row)return `<figure class="md row3">${m.row.map((v,k)=>`<div>${vid(v)}<span>${m.l[k]}</span></div>`).join('')}${cap(m.cap)}</figure>`;
 if(m.ba)return `<figure class="md ba"><div class="ba-w"><img src="${m.ba[0]}" alt="${m.l[0]}"><img class="ba-n" src="${m.ba[1]}" alt="${m.l[1]}"><div class="ba-h" tabindex="0" role="slider" aria-label="Compare" aria-valuemin="0" aria-valuemax="100"><i></i></div><span class="ba-l l">${m.l[0]}</span><span class="ba-l r">${m.l[1]}</span></div>${cap(m.cap)}</figure>`;
 if(m.pmap)return `<figure class="md pmap" data-pm='${JSON.stringify(m).replace(/'/g,'&#39;')}'>
  ${m.pmap.length>1?`<div class="pm-tabs" role="tablist">${m.pmap.map((p,k)=>`<button role="tab" data-k="${k}"${k?'':' class="on"'}>${p.l}</button>`).join('')}<i></i></div>`:''}
  <div class="pm-body">
   <div class="pm-col"><span class="pm-h">The whole page</span><div class="pm-stage"><div class="pm-avg" aria-hidden="true"><span>Most people stop here</span><svg viewBox="0 0 100 8" preserveAspectRatio="none"><path d="M0 4 L5 1 L10 7 L15 1 L20 7 L25 1 L30 7 L35 1 L40 7 L45 1 L50 7 L55 1 L60 7 L65 1 L70 7 L75 1 L80 7 L85 1 L90 7 L95 1 L100 4"/></svg><i>✂</i></div><div class="pm-mini"><img alt="" draggable="false"><div class="pm-win" tabindex="0" role="slider" aria-label="Move the screen window"><b>On screen</b></div><div class="pm-pins"></div></div></div></div>
   <div class="pm-col"><span class="pm-h">What the screen shows</span><div class="pm-ph"><div class="pm-scr" data-lenis-prevent><img alt=""></div></div></div>
   <div class="pm-read"><span class="pm-h">Why people opened it</span><div class="pm-n"><b>0</b> <span>of ${m.asks.length} on screen</span></div><ol>${m.asks.map((a,k)=>`<li><i>${k+1}</i>${a}</li>`).join('')}</ol><p class="pm-tip">Drag the window, or scroll inside the phone.</p></div>
  </div>${cap(m.cap)}</figure>`;
 if(m.bars){const mx=Math.max(...m.bars.map(b=>b[1]));return `<figure class="md bars">${m.bars.map((b,i)=>`<div class="br" style="--w:${b[1]/mx*100}%;--i:${i}"><span>${b[0]}</span><i><b></b></i><em>${b[1]}${m.unit||''}</em></div>`).join('')}${cap(m.cap)}</figure>`}
 if(m.tq)return `<figure class="md tq">${m.tq.map(t=>`<blockquote><p>${t[0]}</p><footer><b>${t[1]}</b><small>${t[2]}</small></footer></blockquote>`).join('')}${cap(m.cap)}</figure>`;
 if(m.ui==='gap')return `<figure class="md ui gap">${m.rows.map((r,i)=>`<div class="gp-r${r[2]?' hl':''}" style="--w:${r[1]/m.max*100}%;--i:${i}"><span>${r[0]}</span><i><b></b></i><em>${r[1]}${m.unit||''}</em></div>`).join('')}${cap(m.cap)}</figure>`;
 if(m.ui==='tally')return `<figure class="md ui tally"><div class="tl-g">${m.items.map((t,i)=>`<div class="tl-c" style="--i:${i}"><div class="tl-dots">${Array.from({length:m.of},(_,k)=>`<i${k<t[0]?' class="on"':''} style="--k:${k}"></i>`).join('')}</div><b><span data-n="${t[0]}">${t[0]}</span><small> of ${m.of}</small></b><p>${t[1]}</p></div>`).join('')}</div>${cap(m.cap)}</figure>`;
 if(m.ui==='flow')return `<figure class="md ui flow">${m.lanes.map((l,li)=>`<div class="fl-l${li?' new':''}"><span class="fl-h">${l[0]}</span><ol>${l[1].map((st,k)=>`<li style="--k:${k}" class="${st.startsWith('*')?'hit':''}">${st.replace(/^\*/,'')}</li>`).join('')}</ol></div>`).join('')}${cap(m.cap)}</figure>`;
 if(m.ui==='people')return `<figure class="md ui people">${m.items.map((t,i)=>`<div class="pp-c" style="--i:${i}"><span class="pp-e">${t[0]}</span><b>${t[1]}</b><em>${t[2]}</em><p>${t[3]}</p></div>`).join('')}${cap(m.cap)}</figure>`;
 if(m.scroll)return `<figure class="md scr${m.scroll.length>1?' two':''}" style="--fold:${m.fold}">${m.scroll.map(p=>`<div class="sp"><div class="sp-f"><img src="${p.i}" alt="${p.l}"><i class="fold"><span>Most people stop here</span></i></div><span>${p.l}</span></div>`).join('')}</figure>`;
 return ''}
document.getElementById('main').innerHTML=`
<div class="head"><h1>${C.t}</h1><div><p class="lede">${S.lede}</p><div class="chips"><span>${C.o}</span><span>${C.y}</span><span>${S.status}</span></div></div></div>
<div class="pic${S.art?' art':''}"><img id="pic" src="${S.art?`renders/${S.img}.webp?v=2`:`renders/${C.img}-lg.webp?v=2`}" alt="" fetchpriority="high" decoding="async" style="view-transition-name:thumb-${C.id}"></div>
<div class="impact">${S.out.slice(0,3).map((m,k)=>`<div class="imp ${k?'':'hero'} rv"><b data-n="${m[0]}"${/\d/.test(m[0])?'':' class="wd"'}>${m[0]}</b><span>${m[1]}</span></div>`).join('')}</div>
${S.tldr?`<section class="tldr rv" aria-label="In short"><h2>In short</h2><dl>${[['Problem',S.tldr.p],['My role',S.tldr.r],['Team',S.team],['Key decision',S.tldr.d],['Proof',S.tldr.x],['Status',S.tldr.s]].map(([k,v],i)=>`<div style="--i:${i}"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></section>`:''}
<div class="north rv"><svg viewBox="0 0 28 28" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="14" cy="14" r="11"/><path d="M14 6l2.4 5.6L22 14l-5.6 2.4L14 22l-2.4-5.6L6 14l5.6-2.4z"/></svg><span><b>North star.</b> ${S.ns||NORTH[S.north]}</span></div>
<div class="story" id="story"><aside class="rail" data-arc="${S.arc}" aria-hidden="true"><div class="an">${ARCNAME[S.arc]}</div><p class="why">${S.why||WHY[S.arc]}</p><svg id="arc"></svg></aside>
 <div><div class="mbar glass" aria-hidden="true"><span id="mlb">${S.beats[0].k}</span><i>${S.beats.map(()=>'<b></b>').join('')}</i></div>
 <div class="beats">${S.beats.map((b,i)=>`<section class="beat rv${b.pivot?' pivot':''}${b.lock?' locked':''}${b.proto||(b.media||[]).some(m=>m.phone)?' has-pt':''}${(b.media||[]).some(m=>!m.phone)||b.after?' has-wide':''}" data-i="${i}"><div><span class="bk">${b.k}</span><h2>${b.h}</h2><p>${b.p}</p>${b.lock?`<div class="lk-peek" aria-hidden="true"><span>The story plan, blurred until you have the password</span>${[0,1,2,3].map(i=>`<i style="--i:${i}"><b></b><b></b><b></b></i>`).join('')}</div><div class="lockc" id="lockc"><div class="lk-h"><i><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="9" width="12" height="8" rx="2"/><path d="M7 9V6.5a3 3 0 0 1 6 0V9"/></svg></i>The full case is on request</div><ul><li>The turn, and why it won the room</li><li>The story plan and the two versions we tested</li><li>When Copilot speaks, and when it stays quiet</li><li>Prototype recordings and tester feedback</li></ul><div class="lk-a"><a class="lk-req" href="mailto:hello@anubhuti.design?subject=${encodeURIComponent('Access to the Story Partner case study')}&body=${encodeURIComponent('Hi Anubhuti,\n\nI would like to see the full Story Partner case study.\n\nName:\nCompany:\nRole:\n\nThanks!')}">Request access &rarr;</a><span class="lk-or">or, if you have a password</span><form class="lk-f" id="lkf"><input type="password" name="p" placeholder="Password" autocomplete="current-password" aria-label="Password" required><button type="submit">Unlock</button></form></div><p class="lk-msg" id="lkm" role="status"></p></div>`:''}
  ${b.quote?`<blockquote><span>${b.quote}</span></blockquote>`:''}${b.stat?`<div class="stats">${b.stat.map(s=>`<div><b data-n="${s[0]}">${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div>`:''}${b.more?`<details class="more"><summary><span>See the working</span><small>${b.more.length} ${b.more.length>1?'artefacts':'artefact'}</small><i aria-hidden="true">+</i></summary><div class="more-b">${b.more.map(media).join('')}</div></details>`:''}</div>
  ${b.proto?`<figure class="pt" data-proto="${b.proto}"><div class="pt-stage"></div><figcaption><span>${CAP[b.proto]}</span><button class="pt-try">Try it yourself</button></figcaption></figure>`:''}${(b.media||[]).filter(m=>m.phone).map(media).join('')}${(b.media||[]).filter(m=>!m.phone).length?`<div class="wide">${b.media.filter(m=>!m.phone).map(media).join('')}</div>`:''}${b.after?`<div class="wide">${b.after.map(media).join('')}</div>`:''}</section>`).join('')}</div></div></div>
${S.judge?`<section class="judge rv"><h2>When the AI could get it wrong</h2><p class="jl">How the design handles uncertainty, instead of hoping the model is right.</p><div class="jg">${S.judge.map((r,i)=>`<div class="jr" style="--i:${i}"><span class="jr-k">Risk</span><b>${r[0]}</b><span class="jr-k d">What the design does</span><p>${r[1]}</p></div>`).join('')}</div></section>`:''}<section class="rv"><h2>${S.concept?'What this explored':'What changed'}</h2><div class="outs">${S.out.map(m=>`<div><b data-n="${m[0]}"${/\d/.test(m[0])?'':' class="wd"'}>${m[0]}</b><span>${m[1]}</span></div>`).join('')}</div>
 ${S.foot?`<p class="nda">${S.foot}</p>`:''}${S.patent?`<div class="patent rv"><i class="seal"><svg viewBox="0 0 24 24"><circle cx="12" cy="10" r="6.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9.2 10l2 2 3.6-3.8M8.5 15.5 7 22l5-2.6 5 2.6-1.5-6.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></i><div><small>US patent filed · co-inventor</small><h3>${S.patent.t}</h3><p>${S.patent.p}</p></div></div>`:''}${/NDA/.test(S.team)?'<p class="nda">Parts of this work are under NDA, so the snippets here use made-up content. Happy to walk through the real thing on a call.</p>':''}</section>
<section class="rv"><a class="next" href="case.html?id=${N.id}" data-cursor="${esc(N.t)}" data-say="${STORIES[N.id].gated?'Next story · case on request':'Next story'}"><div class="tx"><small>Next story${STORIES[N.id].gated?' · on request':''}</small><h3>${N.t}</h3><p class="lede" style="font-size:16px">${STORIES[N.id].lede}</p><span class="go">Read it <i>&rarr;</i></span></div><img src="${STORIES[N.id].art?`renders/${N.img}.webp?v=2`:`renders/${N.img}.jpg?v=2`}" alt="" style="view-transition-name:thumb-${N.id}${STORIES[N.id].art?';object-fit:contain;background:#fdf0e6;padding:20px':''}"></a></section>
<footer class="foot rv"><h2>Want the full story?</h2><p>I can walk you through the real constraints, the messy middle and how we found a way through.</p><a class="mail glass" href="mailto:hello@anubhuti.design?subject=About%20${encodeURIComponent(C.t)}">Talk to me about this one &rarr;</a></footer>`;
document.querySelector('.next .go i').style.background='var(--tone)';
/* big outcome words never touch the card edge: shrink until they fit with the card's own padding */
function fitWords(){document.querySelectorAll('.outs b,.imp b').forEach(b=>{if(b.querySelector('span'))return;
 const box=b.parentElement,cs=getComputedStyle(box),room=box.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight)-10;
 const keep={mw:b.style.minWidth,h:b.style.height,d:b.style.display,t:b.innerHTML};b.style.fontSize='';b.style.minWidth='0';b.style.height='';b.style.display='inline-block';b.textContent=b.dataset.n||b.textContent;
 let fs=parseFloat(getComputedStyle(b).fontSize),n=0;while(b.getBoundingClientRect().width>room&&n++<40){fs-=1;b.style.fontSize=fs+'px'}
 b.style.display=keep.d;b.style.minWidth=keep.mw;b.style.height=keep.h;b.innerHTML=keep.t;b.dataset.fitDone=1})}
window.__numReady=Promise.race([document.fonts?document.fonts.ready:Promise.resolve(),new Promise(r=>setTimeout(r,2500))]).then(()=>new Promise(r=>requestAnimationFrame(r))).then(()=>{fitWords();window.__numReadyDone=1;document.documentElement.classList.add('num-ready')});
addEventListener('resize',fitWords);

/* ---- arc rail ---- */
const NS='http://www.w3.org/2000/svg',svg=document.getElementById('arc'),B=S.beats,n=B.length;
const grp=S.arc==='act3'?(()=>{let a=0;return B.map(b=>{const m=/Act (\d)/.exec(b.k);if(m)a=+m[1]-1;return a})})():S.arc==='wsn'?B.map(b=>b.k==='What'?0:b.k==='So what'?1:2):null;let bands=[],pts=[],path,L=0,nodeL=[],plane,trail,mask,nodes=[],labels=[];
function shape(W,H){const top=34,bot=H-24,ys=i=>top+(bot-top)*(n===1?0:i/(n-1)),xs=t=>22+t*(W-70);
 if(S.arc==='golden'){const cx=W/2,cy=H/2,R=[Math.min(W,H)*.14,Math.min(W,H)*.27,Math.min(W,H)*.4],ring=k=>/Why/.test(k)?0:/How/.test(k)?1:2;
  return B.map((b,i)=>{const a=(-90+i*68)*Math.PI/180,r=R[ring(b.k)];return[cx+Math.cos(a)*r,cy+Math.sin(a)*r]})}
 if(S.arc==='hero'){const cx=W/2,cy=H/2,r=Math.min(W*.42,H*.36);return B.map((b,i)=>{const a=(-90+i*(330/n))*Math.PI/180;return[cx+Math.cos(a)*r,cy+Math.sin(a)*r]})}
 return B.map((b,i)=>[xs(b.t),ys(i)])}
function dPath(P){if(S.arc==='wsn'){let d=`M${P[0][0]} ${P[0][1]}`;for(let i=1;i<P.length;i++)d+=` L${P[i-1][0]} ${(P[i-1][1]+P[i][1])/2} L${P[i][0]} ${(P[i-1][1]+P[i][1])/2} L${P[i][0]} ${P[i][1]}`;return d}
 if(S.arc==='mountain'){let d=`M${P[0][0]} ${P[0][1]}`;for(let i=1;i<P.length;i++){const a=P[i-1],b=P[i],up=B[i].t>B[i-1].t;
   for(let k=1;k<=3;k++){const f=k/4,x=a[0]+(b[0]-a[0])*f+(up?(k%2?10:-6):0),y=a[1]+(b[1]-a[1])*f;d+=` L${x} ${y}`}d+=` L${b[0]} ${b[1]}`}return d}
 let d=`M${P[0][0]} ${P[0][1]}`;for(let i=0;i<P.length-1;i++){const p0=P[i-1]||P[i],p1=P[i],p2=P[i+1],p3=P[i+2]||p2;d+=` C${p1[0]+(p2[0]-p0[0])/6} ${p1[1]+(p2[1]-p0[1])/6} ${p2[0]-(p3[0]-p1[0])/6} ${p2[1]-(p3[1]-p1[1])/6} ${p2[0]} ${p2[1]}`}return d}
function build(){const r=svg.getBoundingClientRect();if(!r.width)return;const W=r.width,H=r.height;svg.setAttribute('viewBox',`0 0 ${W} ${H}`);svg.innerHTML='';pts=shape(W,H);const d=dPath(pts);
 let deco='';if(S.arc==='golden'){const cx=W/2,cy=H/2,m=Math.min(W,H);deco=[.14,.27,.4].map((k,i)=>`<circle class="deco" cx="${cx}" cy="${cy}" r="${m*k}"/><text class="dlb" x="${cx}" y="${cy-m*k-5}" text-anchor="middle">${['WHY','HOW','WHAT'][i]}</text>`).join('')}
 if(S.arc==='hero'){const cx=W/2,cy=H/2,rr=Math.min(W*.42,H*.36);deco=`<line class="rule" x1="${cx-rr+10}" y1="${cy}" x2="${cx+rr-10}" y2="${cy}" stroke-dasharray="3 5"/><text class="dlb" x="${cx}" y="${cy-8}" text-anchor="middle">KNOWN WORLD</text><text class="dlb" x="${cx}" y="${cy+16}" text-anchor="middle">THE UNKNOWN</text><circle class="deco" cx="${cx}" cy="${cy}" r="${rr}"/>`+
  Array.from({length:12},(_,k)=>{const a=(-90+k*30)*Math.PI/180;return`<line class="tick" x1="${cx+Math.cos(a)*(rr-4)}" y1="${cy+Math.sin(a)*(rr-4)}" x2="${cx+Math.cos(a)*(rr+4)}" y2="${cy+Math.sin(a)*(rr+4)}"/>`}).join('')}
 if(S.arc==='pixar')deco=pts.map(p=>`<line class="rule" x1="0" y1="${p[1]}" x2="${W}" y2="${p[1]}"/>`).join('')+`<text class="dlb" x="22" y="18">CALM</text><text class="dlb" x="${W-48}" y="18" text-anchor="end">TENSE</text>`;
 if(S.arc==='mountain'){const pk=pts.reduce((a,p)=>p[0]>a[0]?p:a,pts[0]);deco=`<defs><linearGradient id="mg" x1="0" x2="1"><stop offset="0" stop-color="rgba(224,119,79,0)"/><stop offset="1" stop-color="rgba(224,119,79,.16)"/></linearGradient></defs><path class="mtn" d="M0 ${pts[0][1]-10} L${pts.map(p=>p.join(' ')).join(' L')} L0 ${pts[n-1][1]+10}Z"/><text class="dlb" x="${pk[0]}" y="${pk[1]-16}" text-anchor="middle">SUMMIT</text><text class="dlb" x="22" y="18">BASE</text>`}
 if(grp){const G=[...new Set(grp)],names=S.arc==='act3'?['ACT 1','ACT 2','ACT 3']:['WHAT','SO WHAT','NOW WHAT'];deco=G.map(g=>{const ys=pts.filter((_,i)=>grp[i]===g).map(p=>p[1]),a=Math.min(...ys)-30,b=Math.max(...ys)+20;return`<rect class="band" data-g="${g}" x="2" y="${a}" width="${W-4}" height="${b-a}" rx="14"/><text class="dlb" x="10" y="${a+14}">${names[g]}</text>`}).join('')}
 svg.innerHTML=`${deco}<defs><mask id="tm" maskUnits="userSpaceOnUse"><path id="tmp" d="${d}" fill="none" stroke="#fff" stroke-width="14"/></mask></defs>
  <path d="${d}" fill="none" stroke="rgba(43,50,54,.18)" stroke-width="1.5" stroke-dasharray="1.5 7" stroke-linecap="round"/>
  <path d="${d}" fill="none" stroke="var(--tone)" stroke-width="2.4" stroke-dasharray="1.5 6" stroke-linecap="round" mask="url(#tm)"/>
  ${pts.map((p,i)=>`${B[i].pivot?`<circle class="pv" cx="${p[0]}" cy="${p[1]}" r="10" fill="var(--tone)" opacity=".25"/>`:''}<circle class="nd" cx="${p[0]}" cy="${p[1]}" r="${B[i].pivot?6.5:4.5}" fill="#fffaf3" stroke="var(--tone)" stroke-width="1.8"/>
   <text class="lb" x="${p[0]+(['golden','hero'].includes(S.arc)?(p[0]>W/2?10:-10):(p[0]>W*.6?-12:12))}" y="${p[1]+4}" text-anchor="${(['golden','hero'].includes(S.arc)?p[0]>W/2:!(p[0]>W*.6))?'start':'end'}">${B[i].k.replace(/^Act \d · /,'')}</text>`).join('')}
  <g id="apl"><g transform="rotate(45) translate(-13 -13) scale(.87)"><path d="M2 2 27 11.5 15.2 15.2 11.5 27Z" fill="#fffaf3" stroke="#2b3236" stroke-width="1.4" stroke-linejoin="round"/><path d="M2 2 15.2 15.2 11.5 27Z" fill="#f4a98f" stroke="#2b3236" stroke-width="1.4" stroke-linejoin="round"/></g></g>`;
 path=svg.querySelector('path[mask]');mask=svg.querySelector('#tmp');plane=svg.querySelector('#apl');nodes=[...svg.querySelectorAll('.nd')];labels=[...svg.querySelectorAll('.lb')];bands=[...svg.querySelectorAll('.band')];L=path.getTotalLength();
 nodeL=pts.map(p=>{let best=0,bd=1e9;for(let l=0;l<=L;l+=2){const q=path.getPointAtLength(l),dd=(q.x-p[0])**2+(q.y-p[1])**2;if(dd<bd){bd=dd;best=l}}return best});
 for(let i=1;i<nodeL.length;i++)if(nodeL[i]<nodeL[i-1])nodeL[i]=nodeL[i-1];mask.setAttribute('stroke-dasharray',`0 ${L+20}`);shown=-1}
const secs=[...document.querySelectorAll('.beat')],mb=[...document.querySelectorAll('.mbar i b')],mlb=document.getElementById('mlb');let pr=0,shown=-1;
function tick(){const y=innerHeight*.5;let p=0;for(let i=0;i<secs.length;i++){const r=secs[i].getBoundingClientRect(),c=r.top+r.height/2;if(c<=y)p=i;if(i<secs.length-1){const r2=secs[i+1].getBoundingClientRect(),c2=r2.top+r2.height/2;if(c<=y&&c2>y){p=i+(y-c)/(c2-c);break}}}
 const stE=document.getElementById('story');if(!stE)return;const st=stE.getBoundingClientRect();if(st.top>y)p=-.001;p=Math.max(0,Math.min(n-1,p));
 if(Math.abs(p-pr)>.0005){pr+=(p-pr)*.18;if(Math.abs(p-pr)<.001)pr=p}
 const ii=Math.max(0,Math.min(n-1,Math.floor(pr))),f=pr-ii,l=nodeL.length?nodeL[ii]+((nodeL[ii+1]??nodeL[ii])-nodeL[ii])*f:0;
 if(path){const a=path.getPointAtLength(l),b=path.getPointAtLength(Math.min(L,l+3));plane.setAttribute('transform',`translate(${a.x} ${a.y}) rotate(${Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI})`);mask.setAttribute('stroke-dasharray',`${l} ${L+20}`)}
 const cur=Math.round(pr);if(cur!==shown){shown=cur;nodes.forEach((e,i)=>e.classList.toggle('on',i<=cur));labels.forEach((e,i)=>e.classList.toggle('on',i===cur));mb.forEach((e,i)=>e.classList.toggle('on',i===cur));if(grp)bands.forEach(e=>e.classList.toggle('on',+e.dataset.g===grp[cur]));if(mlb)mlb.textContent=B[cur].k}
 const ph=st.top>innerHeight*.6||st.bottom<innerHeight*.3?'':pivotI<0?'':pr<pivotI-.45?'tension':'relief';if(document.body.dataset.phase!==ph)document.body.dataset.phase=ph;
 requestAnimationFrame(tick)}
addEventListener('resize',build);document.fonts.ready.then(build);setTimeout(build,300);requestAnimationFrame(tick);

/* ---- reveal, count-up, snippets, smooth scroll ---- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(countUp);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
setTimeout(()=>document.querySelectorAll('.impact .rv').forEach((e,k)=>setTimeout(()=>{e.classList.add('in');e.querySelectorAll('[data-n]').forEach(countUp)},250+k*120)),100);
mountProtos(document);
/* media: videos play only when on screen; galleries; before/after; scrolling phones; zoom */
const vio=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(e.isIntersecting){if(v.dataset.src&&!v.src){v.src=v.dataset.src}if(!v.dataset.user)v.play().catch(()=>{})}else v.pause()}),{threshold:.3});
/* tap or click an inline clip to pause or resume it; Space or Enter does the same from the keyboard */
document.addEventListener('click',e=>{const v=e.target.closest('figure.md video');if(!v)return;if(v.paused){v.dataset.user='';v.play().catch(()=>{})}else{v.dataset.user='1';v.pause()}v.closest('figure').classList.toggle('paused',v.paused)});
const vpre=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const v=e.target;if(v.dataset.src&&!v.src){v.preload='metadata';v.src=v.dataset.src}vpre.unobserve(v)}}),{rootMargin:'120% 0px'});
document.querySelectorAll('.md video').forEach(v=>{v.playbackRate=1;vio.observe(v);vpre.observe(v)});
document.querySelectorAll('.md.gal').forEach(g=>{const t=g.querySelector('.gal-t'),c=g.querySelector('.gc'),n=t.children.length;let i=0;
 const go=k=>{i=(k+n)%n;t.scrollTo({left:t.children[i].offsetLeft-t.offsetLeft,behavior:'smooth'});c.textContent=`${i+1} / ${n}`};
 g.querySelector('.gp').onclick=()=>go(i-1);g.querySelector('.gn').onclick=()=>go(i+1);
 t.addEventListener('scroll',()=>{const k=Math.round(t.scrollLeft/t.children[0].offsetWidth);if(k!==i){i=Math.min(n-1,k);c.textContent=`${i+1} / ${n}`}},{passive:true})
 /* mouse users can drag the strip too; touch uses the native swipe */
 let dx=null,sl=0,moved=false;t.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')return;dx=e.clientX;sl=t.scrollLeft;moved=false;t.style.scrollSnapType='none'});
 addEventListener('pointermove',e=>{if(dx==null)return;const d=e.clientX-dx;if(Math.abs(d)>4)moved=true;t.scrollLeft=sl-d});
 addEventListener('pointerup',()=>{if(dx==null)return;dx=null;t.style.scrollSnapType='';const k=Math.round(t.scrollLeft/t.children[0].offsetWidth);go(k)});
 t.addEventListener('click',e=>{if(moved){e.stopPropagation();e.preventDefault();moved=false}},true)});
document.querySelectorAll('.md.ba .ba-w').forEach(w=>{const h=w.querySelector('.ba-h');let x=.5,drag=false,auto=true;const set=v=>{x=Math.max(.02,Math.min(.98,v));w.style.setProperty('--x',x*100+'%');h.setAttribute('aria-valuenow',Math.round(x*100))};set(.5);
 const mv=e=>{const r=w.getBoundingClientRect();set((e.clientX-r.left)/r.width)};h.addEventListener('pointerdown',e=>{drag=true;auto=false;h.setPointerCapture(e.pointerId)});h.addEventListener('pointermove',e=>drag&&mv(e));h.addEventListener('pointerup',()=>drag=false);
 w.addEventListener('click',e=>{if(e.target!==h){auto=false;mv(e)}});h.addEventListener('keydown',e=>{auto=false;if(e.key==='ArrowLeft')set(x-.05);if(e.key==='ArrowRight')set(x+.05)});
 new IntersectionObserver(([e])=>{if(e.isIntersecting&&auto){let t0=null;const f=t=>{if(!auto)return;t0??=t;const k=(t-t0)/2600;if(k>1){set(.5);return}set(.5+.32*Math.sin(k*Math.PI*2));requestAnimationFrame(f)};requestAnimationFrame(f)}},{threshold:.5}).observe(w)});
(function scr(){document.querySelectorAll('.md.scr:not(.two) .sp-f').forEach(f=>{const r=f.getBoundingClientRect(),img=f.querySelector('img');if(!img.naturalHeight)return;const k=Math.max(0,Math.min(1,(innerHeight*.75-r.top)/(innerHeight*.9))),max=img.offsetHeight-f.clientHeight;img.style.transform=`translateY(${-k*max*.55}px)`});requestAnimationFrame(scr)})();
/* page map: the whole page on the left, the phone window on the right, the reasons people came counted live */
document.querySelectorAll('.md.pmap').forEach(f=>{const M=JSON.parse(f.dataset.pm),mini=f.querySelector('.pm-mini'),mi=mini.querySelector('img'),win=f.querySelector('.pm-win'),avg=f.querySelector('.pm-avg'),pins=f.querySelector('.pm-pins'),scr=f.querySelector('.pm-scr'),si=scr.querySelector('img'),li=[...f.querySelectorAll('.pm-read li')],nb=f.querySelector('.pm-n b'),tabs=[...f.querySelectorAll('.pm-tabs button')];
 let cur=0,frac=.4,auto=true,last=-1;
 const load=k=>{cur=k;const p=M.pmap[k];f.classList.add('swap');setTimeout(()=>{mi.src=si.src=p.i;pins.innerHTML=p.pins.map((y,j)=>`<i style="top:${y*100}%;--o:${j%2?14:0}px">${j+1}</i>`).join('');f.dataset.k=k;tabs.forEach((t,j)=>{t.classList.toggle('on',j===k);t.setAttribute('aria-selected',j===k)});f.style.setProperty('--tx',k);
  const go=()=>{if(!si.naturalHeight)return;frac=Math.min(1,scr.clientHeight/si.offsetHeight);avg.style.top=frac*100+'%';win.style.height=frac*100+'%';sync();f.classList.remove('swap')};si.complete?go():si.onload=go;scr.scrollTop=0},180)};
 const sync=()=>{const h=si.offsetHeight||1,t=scr.scrollTop/h;win.style.top=t*100+'%';const p=M.pmap[cur].pins;let c=0;p.forEach((y,j)=>{const on=y>=t-.005&&y<=t+frac-.01;li[j].classList.toggle('on',on);pins.children[j]?.classList.toggle('on',on);if(on)c++});
  if(c!==last){last=c;nb.textContent=c;nb.parentElement.classList.remove('bump');void nb.offsetWidth;nb.parentElement.classList.add('bump');f.dataset.c=c}};
 scr.addEventListener('scroll',sync,{passive:true});
 const toY=e=>{const r=mini.getBoundingClientRect();return(e.clientY-r.top)/r.height};let drag=null;
 mini.addEventListener('pointerdown',e=>{auto=false;const y=toY(e),t=scr.scrollTop/si.offsetHeight;drag=y>=t&&y<=t+frac?y-t:frac/2;mini.setPointerCapture(e.pointerId);scr.scrollTop=(y-drag)*si.offsetHeight;f.classList.add('drag')});
 mini.addEventListener('pointermove',e=>{if(drag===null)return;scr.scrollTop=(toY(e)-drag)*si.offsetHeight});
 const up=()=>{drag=null;f.classList.remove('drag')};mini.addEventListener('pointerup',up);mini.addEventListener('pointercancel',up);
 win.addEventListener('keydown',e=>{auto=false;const s=si.offsetHeight*.06;if(e.key==='ArrowDown'){scr.scrollTop+=s;e.preventDefault()}if(e.key==='ArrowUp'){scr.scrollTop-=s;e.preventDefault()}});
 scr.addEventListener('wheel',()=>auto=false,{passive:true});scr.addEventListener('touchstart',()=>auto=false,{passive:true});
 tabs.forEach((t,j)=>t.onclick=()=>{auto=false;load(j)});
 addEventListener('resize',()=>{frac=Math.min(1,scr.clientHeight/(si.offsetHeight||1));avg.style.top=frac*100+'%';win.style.height=frac*100+'%';sync()});
 load(0);
 /* one short demo the first time it is seen: single page glides down to where the reasons are; before/after flips to After */
 new IntersectionObserver(([e],o)=>{if(!e.isIntersecting||reduce)return;o.disconnect();setTimeout(()=>{if(!auto)return;
  if(M.pmap.length>1){load(M.pmap.length-1);return}
  const p=M.pmap[0].pins,to=Math.max(0,Math.min(1-frac,Math.min(...p)-.04))*si.offsetHeight;let t0=null;const f2=t=>{if(!auto)return;t0??=t;const k=Math.min(1,(t-t0)/1800),ee=k<.5?2*k*k:1-(-2*k+2)**2/2;scr.scrollTop=to*ee;if(k<1)requestAnimationFrame(f2)};requestAnimationFrame(f2)},1400)},{threshold:.55}).observe(f)});
const lb=document.createElement('div');lb.className='lb';lb.innerHTML='<img alt=""><button aria-label="Close">&times;</button>';document.body.append(lb);
document.addEventListener('click',e=>{const z=e.target.closest('[data-zoom]');if(z){lb.querySelector('img').src=z.src;lb.classList.add('on');return}
 const fv=e.target.closest('.md-full');if(fv){lb.querySelector('img').style.display='none';lb.querySelector('video')?.remove();const v=document.createElement('video');v.src=fv.dataset.full;v.controls=true;v.autoplay=true;v.playsInline=true;lb.prepend(v);lb.classList.add('on','vid');return}
 if(e.target.closest('.lb')){lb.classList.remove('on','vid');lb.querySelector('video')?.remove();lb.querySelector('img').style.display=''}});
addEventListener('keydown',e=>{if(e.key==='Escape'&&lb.classList.contains('on'))lb.click()});
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;let lenis;
if(!reduce&&window.Lenis){lenis=new Lenis({lerp:.08});(function raf(t){lenis.raf(t);requestAnimationFrame(raf)})(0)}
const pic=document.getElementById('pic');(function par(){const r=pic.getBoundingClientRect();if(!reduce)pic.style.transform=`translateY(${Math.max(-15,Math.min(0,r.top/innerHeight*-15))}%)`;requestAnimationFrame(par)})();
if(ci>=0)document.getElementById('nWork').href=`/#work=${ci}`;
}

/* password unlock for gated cases */
{const f=document.getElementById('lkf');if(f){const m=document.getElementById('lkm'),card=document.getElementById('lockc');
 f.addEventListener('submit',async e=>{e.preventDefault();const p=f.p.value;m.className='lk-msg';m.textContent='Checking…';
  try{const r=await fetch('/api/unlock',{method:'POST',headers:{'content-type':'application/json'},credentials:'same-origin',body:JSON.stringify({p,id:new URLSearchParams(location.search).get('id')})});
   if(r.ok){m.className='lk-msg ok';m.textContent='Unlocked. Opening the full story…';setTimeout(()=>location.reload(),500)}
   else{m.className='lk-msg err';m.textContent=r.status===429?'Too many tries. Please wait a minute.':'That password did not work. Email me and I will send one.';card.classList.remove('shake');void card.offsetWidth;card.classList.add('shake');f.p.select()}}
  catch(err){m.className='lk-msg err';m.textContent='Could not reach the server. Try again in a moment.'}})}}

/* unknown or missing id: say so, and offer every case, instead of quietly showing another one */
if(window.__caseMissing){const O=window.__caseOrder,T=id=>(CASES.find(c=>c.id===id)||STORIES[id]).t,org=id=>(CASES.find(c=>c.id===id)||STORIES[id]).o;
 document.title='Case not found, Anubhuti Jain Singh';
 document.getElementById('main').innerHTML=`<section class="nf"><small>Case not found</small><h1>That story is not on the desk.</h1><p class="lede">The link may be old or mistyped. Here is everything that is.</p><ul class="nf-l">${O.map(i=>`<li><a href="case.html?id=${i}"><b>${T(i)}</b><span>${org(i)}${STORIES[i].gated?' · on request':''}</span><i>&rarr;</i></a></li>`).join('')}</ul><a class="mail glass" href="/">Back to the desk &rarr;</a></section>`}
