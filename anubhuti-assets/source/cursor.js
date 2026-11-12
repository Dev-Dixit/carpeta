/* Shared cursor. 1:1 with the pointer (no easing, no lag).
   Default: a soft cream pointer with an ink outline. In the work section it morphs into an object
   for the case on screen (window.cursorIcon(id)). Elements with data-cursor (name) + data-say (line) get a caption. */
(function(){
 if(!matchMedia('(pointer:fine)').matches){window.cursorIcon=()=>{};window.cursorSay=()=>{};return}
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const O='#e0774f',I='#2b3236',C='#fffaf3',S='stroke="'+I+'" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"';
 const ICONS={
  arrow:`<path d="M3 2.5 3 23 8.6 17.6 12.4 26 16.2 24.3 12.5 16.1 20 16Z" fill="${C}" ${S}/><circle cx="20.5" cy="5.5" r="2.4" fill="${O}"/>`,
  mic:`<rect x="10" y="3" width="10" height="15" rx="5" fill="${C}" ${S}/><path d="M12.5 8h5M12.5 11.5h5" ${S} fill="none"/><path d="M6.5 14a8.5 8.5 0 0 0 17 0M15 22.5V27M10.5 27h9" fill="none" ${S}/><circle cx="24" cy="5" r="2.2" fill="${O}"/>`,
  chat:`<path d="M4 6.5A3.5 3.5 0 0 1 7.5 3h15A3.5 3.5 0 0 1 26 6.5v9a3.5 3.5 0 0 1-3.5 3.5H12l-5.5 5v-5h0A3.5 3.5 0 0 1 4 15.5Z" fill="${C}" ${S}/><path d="M15 6.8l1.3 3 3 1.2-3 1.3-1.3 3-1.3-3-3-1.3 3-1.2Z" fill="${O}"/>`,
  voice:`<rect x="6" y="5" width="18" height="21" rx="3.5" fill="${C}" ${S}/><path d="M10 13v3M13 11v7M16 9v11M19 12v5" ${S} fill="none"/><circle cx="21" cy="22" r="3.2" fill="${O}" stroke="${I}" stroke-width="1.4"/>`,
  parcel:`<path d="M4 9.5 15 4l11 5.5v12L15 27 4 21.5Z" fill="${C}" ${S}/><path d="M4 9.5 15 15l11-5.5M15 15v12" fill="none" ${S}/><path d="M9.5 6.8l11 5.5v4" fill="none" stroke="${O}" stroke-width="2" stroke-linecap="round"/>`,
  kit:`<rect x="3.5" y="3.5" width="23" height="23" rx="3" fill="${C}" ${S}/><rect x="7" y="7" width="7" height="7" rx="3.5" fill="${O}"/><rect x="16.5" y="8" width="7" height="4.5" rx="2.25" fill="none" ${S}/><rect x="7" y="17" width="16.5" height="5.5" rx="1.5" fill="none" ${S}/><path d="M14 10.5h2.5M11 14v3" ${S}/>`
 };
 const css=`.fine,.fine *{cursor:none!important}
 .pc{position:fixed;left:0;top:0;z-index:9999;pointer-events:none;will-change:transform}
 .pc .ic{position:absolute;left:-3px;top:-2px;width:30px;height:30px;transform-origin:4px 3px;filter:drop-shadow(0 3px 3px rgba(90,50,30,.22));transition:transform .45s cubic-bezier(.3,1.6,.5,1),opacity .2s}
 .pc .ic.out{transform:scale(.2) rotate(-40deg);opacity:0}
 .pc.obj .ic{left:-15px;top:-15px;transform-origin:15px 15px}
 .pc.hot .ic{transform:scale(1.15) rotate(-6deg)}.pc.tap .ic{transform:scale(.85);transition-duration:.12s}
 .pc .bub{position:absolute;left:26px;top:26px;display:flex;flex-direction:column;gap:2px;width:max-content;max-width:260px;padding:5px 10px;border-radius:12px 12px 12px 4px;background:${I};color:#fff;font:600 12px/1.3 Switzer,system-ui,sans-serif;box-shadow:0 8px 22px rgba(80,40,20,.2);opacity:0;transform:translateY(4px) scale(.96);transform-origin:0 0;transition:opacity .25s,transform .35s cubic-bezier(.2,.8,.2,1),padding .3s,background .3s,color .3s}
 .pc.lbl .bub{opacity:1;transform:none}
 .pc .bub em{font-style:normal;font-weight:500;font-size:12.5px;line-height:1.4;max-height:0;opacity:0;overflow:hidden;transition:max-height .35s,opacity .3s}
 .pc .bub small{font-size:11.5px;font-weight:600;color:${O};display:none}
 .pc.say .bub{padding:10px 13px 11px;background:rgba(255,251,247,.97);color:${I};border-radius:16px 16px 16px 5px}
 .pc.say .bub b{font-size:11.5px;color:#7a7f83;font-weight:600}.pc.say .bub em{max-height:80px;opacity:1}.pc.say .bub small{display:block}
 .pc.flip .bub{left:auto;right:8px;border-radius:12px 12px 4px 12px}`;
 const st=document.createElement('style');st.textContent=css;document.head.append(st);
 const you=document.createElement('div');you.className='pc';you.style.opacity=0;window.__ptr=false;
 you.innerHTML=`<svg class="ic" viewBox="0 0 30 30">${ICONS.arrow}</svg><div class="bub"><b></b><em></em><small></small></div>`;
 const mount=()=>{document.body.append(you);document.body.classList.add('fine')};
 document.body?mount():addEventListener('DOMContentLoaded',mount);
 const ic=you.querySelector('.ic'),bub=you.querySelector('.bub'),bn=bub.querySelector('b'),bs=bub.querySelector('em'),bm=bub.querySelector('small');
 let cur='arrow',hot=null,forced=null,mx=-200,my=-200;
 window.cursorIcon=function(name){name=ICONS[name]?name:'arrow';if(name===cur)return;cur=name;
  if(reduce){ic.innerHTML=ICONS[name];you.classList.toggle('obj',name!=='arrow');return}
  ic.classList.add('out');setTimeout(()=>{ic.innerHTML=ICONS[name];you.classList.toggle('obj',name!=='arrow');ic.classList.remove('out')},170)};
 function show(n,line,meta){bn.textContent=n||'';bs.textContent=line||'';bm.textContent=meta||'';you.classList.toggle('say',!!line);you.classList.toggle('lbl',!!n)}
 window.cursorSay=function(n,line,meta){forced=n?[n,line,meta]:null;if(forced)show(...forced);else refresh()};
 function refresh(){if(document.querySelector('.hire-pop.on')){show('','','');return}if(forced)return;if(hot)show(hot.dataset.cursor||hot.textContent.trim().split(/\s+/).slice(0,4).join(' '),hot.dataset.say||'',hot.dataset.meta||'');else show('','','')}
 addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;if(!window.__ptr){window.__ptr=true;you.style.opacity=1}
  you.style.transform=`translate3d(${mx}px,${my}px,0)`;
  const fl=mx>innerWidth-280&&mx>300;you.classList.toggle('flip',fl);bub.style.maxWidth=(fl?Math.min(260,mx-24):Math.min(260,innerWidth-mx-46))+'px';
  const t=e.target.closest('[data-cursor],a,button');if(t!==hot){hot=t;you.classList.toggle('hot',!!t);forced=null;refresh()}},{passive:true});
 addEventListener('pointerdown',()=>you.classList.add('tap'));addEventListener('pointerup',()=>you.classList.remove('tap'));
 document.addEventListener('mouseleave',()=>{you.style.opacity=0});document.addEventListener('mouseenter',()=>{you.style.opacity=1});
})();
