(() => {
'use strict';
const host=document.getElementById('writing-world');if(!host)return;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let uid=0;

/* A tiny seeded painter for the story scenes. Each scene can later be swapped for an illustration via `img`. */
function painter(seed){
 let s=seed;const r=()=>(s=s*16807%2147483647)/2147483647;
 const id='sw'+(++uid),defs=[`<filter id="${id}soft" x="-5%" y="-20%" width="110%" height="140%"><feGaussianBlur stdDeviation="4"/></filter>`],body=[];const f=n=>Math.round(n);
 const linear=(stops,op)=>{const g=id+'l'+defs.length;defs.push(`<linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1">${stops.map((c,i)=>`<stop offset="${(i/(stops.length-1)).toFixed(2)}" stop-color="${c}" stop-opacity="${op?op[i]:1}"/>`).join('')}</linearGradient>`);return `url(#${g})`};
 const p={
  sky(stops){body.push(`<rect width="1200" height="600" fill="${linear(stops)}"/>`);return p},
  glow(x,y,rad,c,o){const g=id+'r'+defs.length;defs.push(`<radialGradient id="${g}"><stop offset="0" stop-color="${c}" stop-opacity="${o}"/><stop offset="1" stop-color="${c}" stop-opacity="0"/></radialGradient>`);body.push(`<circle cx="${x}" cy="${y}" r="${rad}" fill="url(#${g})"/>`);return p},
  stars(n,maxY,o,c='#fff'){let out='';for(let i=0;i<n;i++)out+=`<circle${r()<.25?' class="sw-twinkle"':''} cx="${f(r()*1200)}" cy="${f(r()*maxY)}" r="${(.6+r()*1.4).toFixed(1)}" fill="${c}" opacity="${((.25+r()*.75)*o).toFixed(2)}"/>`;body.push(`<g>${out}</g>`);return p},
  clouds(y,rad,c,o){let d=`M-60 600 L-60 ${y}`,x=-60;while(x<1260){const a=rad*(.9+r()*1.1);d+=` a${f(a)} ${f(a*.6)} 0 0 1 ${f(a*2)} 0`;x+=f(a*2)}d+=` L${x} 600 Z`;body.push(`<path class="sw-cloud" d="${d}" fill="${c}" opacity="${o}" filter="url(#${id}soft)"/>`);return p},
  mountains(base,h,c,o,n=7){const pts=[];for(let i=0;i<=n;i++)pts.push([i*1200/n,base-h*(.35+r()*.65)]);let d=`M0 600 L0 ${f(pts[0][1])}`;for(let i=1;i<pts.length;i++){const[x0,y0]=pts[i-1],[x1,y1]=pts[i];d+=` Q${f((x0+x1)/2)} ${f(Math.min(y0,y1)-h*.3*r())} ${f(x1)} ${f(y1)}`}body.push(`<path d="${d} L1200 600 Z" fill="${c}" opacity="${o}"/>`);return p},
  island(x,y,w,c,o){body.push(`<path d="M${x-w} ${y} Q${x-w*.3} ${y+w*.3} ${x} ${y+w*.55} Q${x+w*.3} ${y+w*.3} ${x+w} ${y} Z" fill="${c}" opacity="${o}"/>`);return p},
  palace(x,y,sc,c,o){let d='',cy=y;[[90,26],[70,22],[52,20],[34,18]].forEach(([w,h])=>{w*=sc;h*=sc;const b=h*.9;d+=`M${f(x-w*.55)} ${f(cy)} h${f(w*1.1)} v${f(-b)} h${f(-w*1.1)} Z `;cy-=b;d+=`M${f(x-w)} ${f(cy)} Q${f(x-w*.55)} ${f(cy-h*.15)} ${f(x-w*.4)} ${f(cy-h*.7)} L${f(x+w*.4)} ${f(cy-h*.7)} Q${f(x+w*.55)} ${f(cy-h*.15)} ${f(x+w)} ${f(cy)} Z `;cy-=h*.7});d+=`M${f(x-3*sc)} ${f(cy)} L${x} ${f(cy-28*sc)} L${f(x+3*sc)} ${f(cy)} Z`;body.push(`<path d="${d}" fill="${c}" opacity="${o}"/>`);return p},
  gate(x,y,w,h,c,o){p.glow(x,y-h*.6,w*2.2,c,o*.55);body.push(`<path d="M${x-w} ${y} v${-h} a${w} ${w} 0 0 1 ${2*w} 0 v${h}" fill="none" stroke="${c}" stroke-width="3" opacity="${o}"/><path d="M${x-w*.72} ${y} v${-h*.95} a${w*.72} ${w*.72} 0 0 1 ${w*1.44} 0 v${h*.95}" fill="none" stroke="${c}" stroke-width="1.2" opacity="${o*.6}"/>`);return p},
  lightpath(x,y,w,c,o){body.push(`<path d="M${x-w*.18} ${y} L${x+w*.18} ${y} L${x+w} 600 L${x-w} 600 Z" fill="${linear([c,c],[o,0])}"/>`);return p},
  beam(x1,x2,w,c,o){body.push(`<path class="sw-beam" d="M${x1-w*.15} 0 L${x1+w*.15} 0 L${x2+w} 600 L${x2-w} 600 Z" fill="${linear([c,c],[o,0])}"/>`);return p},
  figure(x,y,sc,c){body.push(`<g transform="translate(${x} ${y}) scale(${sc})" fill="${c}"><circle cx="0" cy="-60" r="6.5"/><circle cx="2" cy="-68" r="3.5"/><path d="M-4 -53 Q-9 -30 -15 0 L15 0 Q9 -30 4 -53 Z"/><path class="sw-ribbon" d="M-5 -47 Q-30 -42 -40 -16 Q-27 -33 -6 -40 Z" opacity=".65"/><path class="sw-ribbon" d="M5 -47 Q33 -45 46 -24 Q31 -36 6 -40 Z" opacity=".65"/></g>`);return p},
  lotus(x,y,sc,c,o){let out='';[-64,-36,-12,12,36,64].forEach(a=>out+=`<ellipse cx="0" cy="-26" rx="9" ry="26" transform="rotate(${a})"/>`);out+=`<ellipse cx="0" cy="-30" rx="10" ry="30"/>`;body.push(`<g transform="translate(${x} ${y}) scale(${sc})" fill="${c}" opacity="${o}">${out}</g>`);return p},
  rings(x,y,radii,c,o){body.push(radii.map((rad,i)=>`<circle class="sw-ring" cx="${x}" cy="${y}" r="${rad}" fill="none" stroke="${c}" stroke-width="1" opacity="${(o*(1-i*.22)).toFixed(2)}"/>`).join(''));return p},
  threads(x,y,c,o){body.push([[-420,-160],[380,-200],[-300,60],[460,40]].map(([dx,dy])=>`<path class="sw-thread" d="M${x} ${y} C${x+dx*.3} ${y+dy*.2} ${x+dx*.7} ${y+dy} ${x+dx} ${y+dy*.8}" fill="none" stroke="${c}" stroke-width="1.4" opacity="${o}"/>`).join(''));return p},
  shards(n,cx,cy,spread,c){let out='';for(let i=0;i<n;i++){const w=6+r()*16;out+=`<rect class="sw-shard" x="${f(cx+(r()-.5)*spread*2)}" y="${f(cy+(r()-.5)*spread)}" width="${f(w)}" height="${f(w*1.4)}" transform="rotate(${f(r()*60-30)})" fill="${c}" opacity="${(.25+r()*.6).toFixed(2)}"/>`}body.push(`<g>${out}</g>`);return p},
  houses(base,n,c,win){let out='',x=40;for(let i=0;i<n;i++){const w=36+r()*40,h=26+r()*34;out+=`<path d="M${f(x)} ${base} v${f(-h)} l${f(w/2)} ${f(-w*.4)} l${f(w/2)} ${f(w*.4)} v${f(h)} Z" fill="${c}"/>`;if(r()<.6)out+=`<rect x="${f(x+w*.4)}" y="${f(base-h*.65)}" width="7" height="9" fill="${win}"/>`;x+=w+20+r()*110;if(x>1160)break}body.push(`<g>${out}</g>`);return p},
  sun(x,y,rad,c){p.glow(x,y,rad*4,c,.55);body.push(`<circle cx="${x}" cy="${y}" r="${rad}" fill="${c}"/>`);return p},
  ground(y,c,o=1){body.push(`<rect x="0" y="${y}" width="1200" height="${600-y}" fill="${c}" opacity="${o}"/>`);return p},
  birds(n,x,y,c){let out='';for(let i=0;i<n;i++){const bx=x+r()*160,by=y+r()*60,w=6+r()*6;out+=`<path d="M${f(bx-w)} ${f(by-w*.4)} Q${f(bx-w*.4)} ${f(by-w*.6)} ${f(bx)} ${f(by)} Q${f(bx+w*.4)} ${f(by-w*.6)} ${f(bx+w)} ${f(by-w*.4)}" fill="none" stroke="${c}" stroke-width="1.5"/>`}body.push(out);return p},
  svg(label){return `<svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(label)}"><defs>${defs.join('')}</defs>${body.join('')}</svg>`}
 };
 return p;
}

const scenes={
 hero:()=>painter(11).sky(['#2c2a4a','#6b5b8e','#d9a7b0','#f6d9c2']).stars(90,320,.9).mountains(380,130,'#4a4270',.45).glow(840,220,330,'#fff4d6',.55).island(840,200,170,'#3b3458',.5).palace(840,200,1,'#3b3458',.62).palace(710,202,.55,'#3b3458',.5).palace(970,202,.55,'#3b3458',.5).gate(840,410,58,70,'#fff3cf',.9).lightpath(840,410,210,'#fff1cc',.5).clouds(400,42,'#efd6e2',.55).clouds(445,56,'#fbe6e1',.8).figure(840,448,1.15,'#3a3050').clouds(515,72,'#fff8f3',.92).svg('A figure stands on a sea of clouds between a heavenly palace and a gate of light'),
 heaven:()=>painter(23).sky(['#f7e3c0','#f4d4c7','#e8d0e4']).glow(600,190,320,'#fffbe8',.95).rings(600,190,[90,140,200],'#c9a063',.45).island(600,300,210,'#caa77a',.4).palace(600,300,1.35,'#b78d5a',.55).palace(420,305,.7,'#b78d5a',.45).palace(780,305,.7,'#b78d5a',.45).clouds(360,48,'#fff',.55).clouds(440,60,'#fffaf3',.8).lotus(250,540,1.4,'#f2b6c6',.85).lotus(960,560,1.1,'#f2b6c6',.75).clouds(520,80,'#fff',.95).svg('Golden heavens with a palace floating above a sea of clouds'),
 descent:()=>painter(37).sky(['#f1d3ad','#a6accf','#3a4474']).clouds(120,50,'#fff5e6',.5).beam(610,650,40,'#fff6d8',.85).glow(640,420,70,'#fff3cf',.9).stars(25,300,.5).mountains(600,110,'#27305a',.9).houses(560,9,'#1d2446','#ffd98a').ground(560,'#1d2446').svg('A thread of light falls from the clouds toward a small human town at dusk'),
 night:()=>painter(41).sky(['#04060d','#090d1d','#121831']).stars(45,470,.35).glow(820,470,260,'#3a4a7a',.12).ground(470,'#060912').figure(820,472,.55,'#39425f').svg('A vast dark night with a single small figure standing alone'),
 fragments:()=>painter(53).sky(['#0a0f22','#191e44','#2a2657']).stars(70,480,.55).beam(860,560,70,'#fce6bd',.32).beam(1010,760,26,'#fce6bd',.22).shards(14,640,300,260,'#fbe3b4').ground(480,'#0b0e1d').figure(560,482,.8,'#4d527d').svg('Beams of light cut through the dark, scattering glowing fragments of memory'),
 awakening:()=>painter(67).sky(['#3b2e6b','#8a5d9a','#e79fae','#f8cfb0']).stars(40,240,.7).glow(600,340,300,'#ffe7c4',.85).rings(600,380,[90,140,200],'#ffe0ae',.5).threads(600,380,'#f5cf88',.6).clouds(470,60,'#f6d0d4',.55).lotus(600,440,2.3,'#fbd3de',.96).clouds(530,80,'#fbe1dc',.85).svg('A great lotus opens in a halo of light as colour returns to the sky'),
 returning:()=>painter(79).sky(['#f6d2ad','#fbe6cf','#e9eff1']).island(300,150,90,'#c7ab96',.12).palace(300,150,.7,'#b99a86',.14).sun(880,330,46,'#ffd49a').birds(5,700,180,'#8d7a70').mountains(470,150,'#cdbca9',.6).mountains(540,120,'#ad9b88',.85).houses(592,8,'#8f7e6e','#ffcf7a').ground(590,'#8f7e6e').figure(520,592,.9,'#5f4f48').svg('An ordinary dawn over human hills, a faint palace fading in the sky')
};

const chapters=[
 {key:'heaven',han:'天界',en:'Before Descent',line:'Long before this life, she was an old soul in a world above.',entries:[['Who was she?','A soul who had walked many lives and trained long in an order of compassion and healing. She could sense energy, feel what others felt, and see how causes become consequences.'],['The world above','Tiered heavens, Buddhist halls and immortal sects, soul archives, and the bureaus that keep karma and fate in order.'],['Why descend?','Not a punishment. A chosen trial: to live pain from the inside, and bring back what can only be learned as a human.']]},
 {key:'descent',han:'入世',en:'Descent',line:'Born into a human life, with almost everything sealed.',entries:[['The seal','Her memories, powers, and mission are sealed at birth. Sealed, not erased.'],['Echoes','As a child: a strange homesickness for temples, clouds, and starlight, and a wish that every living thing could be well.'],['The script begins','The encounters and turning points are set. The choices are still hers.']]},
 {key:'night',han:'极夜',en:'The Long Night',line:'Twelve years in which the lights inside went out, one by one.',entries:[['Tribulation bonds','People who arrive to bring her to the next door, and then leave.'],['Running on backup','She keeps studying, working, succeeding. Inside, a city in darkness runs on backup power.'],['The guardians','Numbness, compulsions, vigilance: not her enemies, but guards who took over when nothing else could.']]},
 {key:'fragments',han:'裂隙',en:'Fragments',line:'Through the cracks, the first light.',entries:[['Dreams','Dreams that feel like memories from somewhere else.'],['Childhood light','The girl who loved the sky and writing, still there beneath everything.'],['Recognition','Sometimes the body remembers before the mind does.']]},
 {key:'awakening',han:'觉醒',en:'Awakening',line:'When the old scripts close, she finally turns inward.',entries:[['Collapse as opening','Relationships end and plans fail. From above: an old script closing.'],['Karma, seen from inside','Rebirth, cause and effect, soul contracts: the rules of her life, understood from within it.'],['Her mission','To turn heavenly understanding into human experience, and leave something that helps others.']]},
 {key:'returning',han:'归来',en:'Returning',line:'Not ascending. Coming home to an ordinary morning.',entries:[['Back into the body','Breath, stillness, qigong, nature, food, sleep.'],['Two selves','The soul of countless lives, and the woman who hurts, fears, loves, and tires. She no longer denies either.'],['With care','To carry the memory of heaven while living an earthly life with care.']]}
];

const realms=[
 {key:'higher',name:'Higher Realms',text:'Tiered heavens, each farther from form and closer to light.'},
 {key:'orders',name:'Buddhist & Immortal Orders',text:'Buddhist halls and cultivation sects, each with its own path, teachers, and disciples. Hers was a path of compassion.'},
 {key:'archives',name:'Soul Archives',text:'Where every lifetime is kept, and where what is lived on earth returns.'},
 {key:'bureau',name:'Script Bureau',file:true},
 {key:'gate',name:'Reincarnation Hall',text:'The gate every soul passes through. Here, memories are sealed.'},
 {key:'human',name:'Human World',text:'The real training ground. Not the heavens, but a body.'}
];

const bonds=[
 {key:'tribulation',name:'Tribulation bond',color:'#c98a8a',text:'Agreed before birth: to be a threshold in each other’s lives for one season.'},
 {key:'practice',name:'Fellow-practice bond',color:'#8fb0a0',text:'Souls who grow side by side, across lifetimes.'},
 {key:'teacher',name:'Teacher & disciple',color:'#9e97c9',text:'Old teachers and students, meeting again as strangers.'},
 {key:'family',name:'Family bond',color:'#c7a27a',text:'Parents and kin, chosen for what they would teach, and what they would wake.'},
 {key:'true',name:'True bond',color:'#d9b25f',text:'Not a reward, not a rescue. Another soul on its own path, arriving once she has become whole.'}
];

const fragments=[
 ['Script Bureau · note 07','This node must not be announced in advance. She must choose without the answer.'],
 ['A memory','She began to suspect that remembering is not the past appearing in the mind, but the body recognising something first.'],
 ['Soul contract · clause 3','Neither party shall meet the other before both are ready.'],
 ['Archive · incoming','One sleepless night spent waiting for a message. Weight: heavier than expected.'],
 ['A dream','A corridor of lamps. One of them was hers, still lit.'],
 ['Narration','From above, it was a three-year node. From below, it was the whole world.'],
 ['Reincarnation Hall · log','Seal applied. Residual echoes permitted: sky, temples, kindness.'],
 ['A memory','The child she used to be had never left. She had only been waiting in the light.'],
 ['Script Bureau · note 12','Do not send the true bond early. She would only lean on him.'],
 ['Narration','Some people are not here to walk the whole road with you. They bring you to the next door.']
];

const sceneHTML=(key,label)=>{const c=chapters.find(x=>x.key===key);return c&&c.img?`<img src="${esc(c.img)}" alt="${esc(label)}" loading="lazy">`:scenes[key]()};

host.innerHTML=`
<nav class="sw-shelf" aria-label="Story worlds"><span class="is-current"><b>I</b> Soul &amp; Awakening</span><span class="is-later"><b>II</b> The Court of the Mind <small>· soon</small></span></nav>
<section class="sw-hero" aria-labelledby="sw-title"><div class="sw-hero-art">${scenes.hero()}</div><div class="sw-hero-copy"><span class="sw-eyebrow">Story World I</span><h3 id="sw-title">Soul &amp; Awakening</h3><p>A soul from the heavens is born into a human life, forgets everything, and slowly finds her way back.</p><div class="sw-actions"><button type="button" id="sw-enter">Enter the Story</button><button type="button" class="sw-frag-open">Open a Random Fragment ✦</button></div></div></section>
<section class="sw-block" id="sw-story" aria-labelledby="sw-story-title"><div class="sw-block-head"><h4 id="sw-story-title">The six realms</h4><button type="button" class="sw-frag-open sw-quiet">open a fragment ✦</button></div>
<div class="sw-rail" role="tablist" aria-label="Chapters of the story">${chapters.map((c,i)=>`<button type="button" role="tab" id="sw-tab-${c.key}" aria-controls="sw-stage" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-i="${i}"><span class="sw-han" lang="zh">${c.han}</span><span class="sw-en">${c.en}</span></button>`).join('<span class="sw-arrow" aria-hidden="true">→</span>')}</div>
<div class="sw-stage" id="sw-stage" role="tabpanel" tabindex="0"><figure class="sw-scene" id="sw-scene"></figure><div class="sw-stage-copy"><span class="sw-eyebrow" id="sw-num"></span><h5 id="sw-ch-title"></h5><p class="sw-line" id="sw-line"></p><div class="sw-entries" id="sw-entries"></div><p class="sw-entry-text" id="sw-entry-text" aria-live="polite"></p></div></div></section>
<section class="sw-block" aria-labelledby="sw-map-title"><div class="sw-block-head"><h4 id="sw-map-title">The world above</h4></div>
<div class="sw-map"><div class="sw-scroll"><ol>${realms.map((r,i)=>`<li><button type="button" data-realm="${r.key}" aria-pressed="${i===3}"><span class="sw-node" aria-hidden="true"></span>${r.name}</button></li>`).join('')}</ol></div><div class="sw-map-detail" id="sw-map-detail" aria-live="polite"></div></div></section>
<section class="sw-block" aria-labelledby="sw-bond-title"><div class="sw-block-head"><h4 id="sw-bond-title">Soul contracts</h4></div>
<div class="sw-bonds"><svg class="sw-bond-art" viewBox="0 0 600 160" aria-hidden="true"><circle cx="110" cy="80" r="30" class="sw-soul"/><circle cx="110" cy="80" r="12" class="sw-soul-core"/><circle cx="490" cy="80" r="30" class="sw-soul"/><circle cx="490" cy="80" r="12" class="sw-soul-core"/><path id="sw-thread" class="sw-bond-thread" d="M140 80 C 240 10, 360 150, 460 80"/></svg>
<div class="sw-bond-list">${bonds.map((b,i)=>`<button type="button" data-bond="${b.key}" aria-pressed="${i===4}">${b.name}</button>`).join('')}</div><p class="sw-bond-text" id="sw-bond-text" aria-live="polite"></p></div></section>
<section class="sw-block" aria-labelledby="sw-return-title"><div class="sw-block-head"><h4 id="sw-return-title">The return transmission</h4></div>
<div class="sw-return"><svg viewBox="0 0 700 220" aria-hidden="true"><defs><linearGradient id="sw-return-grad" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#e5a89b"/><stop offset=".5" stop-color="#c9a4d8"/><stop offset="1" stop-color="#e8c77e"/></linearGradient></defs><path id="sw-return-path" d="M70 185 C 220 185, 260 110, 350 110 S 520 40, 630 35" fill="none" stroke="url(#sw-return-grad)" stroke-width="2" opacity=".7"/>${reduce?'':[0,1,2].map(i=>`<circle r="4" fill="#fff3d6"><animateMotion dur="4.5s" begin="${i*1.5}s" repeatCount="indefinite"><mpath href="#sw-return-path"/></animateMotion></circle>`).join('')}</svg>
<button type="button" class="sw-return-node" style="left:10%;top:84%" data-side="right" data-step="experience"><span></span>Human experience</button><button type="button" class="sw-return-node" style="left:50%;top:50%" data-step="integration"><span></span>Soul archive</button><button type="button" class="sw-return-node" style="left:90%;top:16%" data-side="left" data-step="return"><span></span>Higher realm</button>
<p class="sw-return-step" id="sw-return-step" aria-live="polite">experience → integration → return</p></div>
<p class="sw-return-line">The heavens can know the idea of pain. Only a human life can bring back its weight.</p></section>
<div class="sw-fragment" id="sw-fragment" role="dialog" aria-modal="false" aria-labelledby="sw-frag-tag" hidden><span class="sw-eyebrow" id="sw-frag-tag"></span><p id="sw-frag-text"></p><div><button type="button" id="sw-frag-next">another ✦</button><button type="button" id="sw-frag-close" aria-label="Close fragment">×</button></div></div>`;

const $=id=>document.getElementById(id);
const tabs=[...host.querySelectorAll('[role=tab]')];let current=0;
function entry(i){const c=chapters[current];[...$('sw-entries').children].forEach((b,j)=>b.setAttribute('aria-expanded',String(j===i)));$('sw-entry-text').textContent=c.entries[i][1]}
function chapter(i,focus){
 current=(i+chapters.length)%chapters.length;const c=chapters[current];
 tabs.forEach((t,j)=>{t.setAttribute('aria-selected',String(j===current));t.tabIndex=j===current?0:-1});
 const stage=$('sw-stage');stage.dataset.mood=c.key;stage.setAttribute('aria-labelledby',tabs[current].id);
 $('sw-scene').innerHTML=sceneHTML(c.key,c.en);
 $('sw-num').innerHTML=`${String(current+1).padStart(2,'0')} · <span lang="zh">${c.han}</span>`;$('sw-ch-title').textContent=c.en;$('sw-line').textContent=c.line;
 $('sw-entries').innerHTML=c.entries.map(([label],j)=>`<button type="button" data-entry="${j}" aria-expanded="false" aria-controls="sw-entry-text">${label}</button>`).join('');
 entry(0);
 stage.classList.remove('is-changing');void stage.offsetWidth;stage.classList.add('is-changing');
 if(focus)tabs[current].focus();
}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>chapter(i));t.addEventListener('keydown',e=>{const k={ArrowRight:current+1,ArrowLeft:current-1,Home:0,End:chapters.length-1}[e.key];if(k!==undefined){e.preventDefault();chapter(k,true)}})});
$('sw-entries').addEventListener('click',e=>{const b=e.target.closest('[data-entry]');if(b)entry(Number(b.dataset.entry))});
$('sw-enter').addEventListener('click',()=>{$('sw-story').scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});tabs[current].focus({preventScroll:true})});

function realm(key){
 const r=realms.find(x=>x.key===key);host.querySelectorAll('[data-realm]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.realm===key)));
 $('sw-map-detail').innerHTML=r.file?`<div class="sw-file"><span class="sw-eyebrow">Script Bureau · incarnation file</span><dl><dt>Soul ID</dt><dd><span class="sw-redact">████-██</span></dd><dt>Objective</dt><dd>Experience a finite life: attachment, loss, recovery, creation.</dd><dt>Key encounters</dt><dd class="sw-silhouettes" aria-label="Five characters, not yet revealed">◐ ◑ ◒ ◓ ●</dd><dt>Locked memories</dt><dd>past identity · practice · soul contract · mission</dd><dt>Trigger conditions</dt><dd>Some storylines open only after certain nodes are complete.</dd></dl><p class="sw-rule">The script sets the turning points, not the choices.</p></div>`:`<h5>${r.name}</h5><p>${r.text}</p>`;
}
host.querySelectorAll('[data-realm]').forEach(b=>b.addEventListener('click',()=>realm(b.dataset.realm)));

function bond(key){const b=bonds.find(x=>x.key===key);host.querySelectorAll('[data-bond]').forEach(x=>x.setAttribute('aria-pressed',String(x.dataset.bond===key)));$('sw-thread').style.stroke=b.color;$('sw-bond-text').textContent=b.text}
host.querySelectorAll('[data-bond]').forEach(b=>b.addEventListener('click',()=>bond(b.dataset.bond)));

const stepText={experience:'experience — lived in a body, on earth',integration:'integration — kept, and understood',return:'return — carried back to the higher realm'};
host.querySelectorAll('.sw-return-node').forEach(n=>{const show=()=>$('sw-return-step').textContent=stepText[n.dataset.step];n.addEventListener('mouseenter',show);n.addEventListener('focus',show);n.addEventListener('click',show)});

let lastFrag=-1,opener=null;
function fragment(){let i;do{i=Math.floor(Math.random()*fragments.length)}while(i===lastFrag&&fragments.length>1);lastFrag=i;$('sw-frag-tag').textContent=fragments[i][0];$('sw-frag-text').textContent=fragments[i][1];const card=$('sw-fragment');card.hidden=false;card.classList.remove('is-changing');void card.offsetWidth;card.classList.add('is-changing')}
host.querySelectorAll('.sw-frag-open').forEach(b=>b.addEventListener('click',()=>{opener=b;fragment();$('sw-frag-next').focus()}));
$('sw-frag-next').addEventListener('click',fragment);
const closeFrag=()=>{$('sw-fragment').hidden=true;if(opener)opener.focus()};
$('sw-frag-close').addEventListener('click',closeFrag);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('sw-fragment').hidden)closeFrag()});

chapter(0);realm('bureau');bond('true');
})();
