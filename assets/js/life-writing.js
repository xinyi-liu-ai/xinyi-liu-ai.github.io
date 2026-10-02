(() => {
'use strict';
const host=document.getElementById('writing-world');if(!host)return;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const base=host.dataset.img||'/assets/img/life/writing/';
const pic=(file,alt,pos='center')=>`<img src="${base}${file}" alt="${esc(alt)}" style="object-position:${pos}" decoding="async">`;

const chapters=[
 {key:'heaven',han:'天界',en:'Before Descent',portrait:true,imgs:[['heaven.webp','She sits by a lotus pool in white and gold robes, the heavenly palaces floating in the clouds behind her','center 30%']],line:'Long before this life, she was an old soul in a world above.',entries:[['Who was she?','A soul who had walked many lives and trained long in an order of compassion and healing. She could sense energy, feel what others felt, and see how causes become consequences.'],['The world above','Tiered heavens, Buddhist halls and immortal sects, soul archives, and the bureaus that keep karma and fate in order.'],['Why descend?','Not a punishment. A chosen trial: to live pain from the inside, and bring back what can only be learned as a human.']]},
 {key:'descent',han:'入世',en:'Descent',portrait:true,imgs:[['descent.webp','She falls through clouds and starlight toward the lights of a human city at dusk','center 35%']],line:'Born into a human life, with almost everything sealed.',entries:[['The seal','Her memories, powers, and mission are sealed at birth. Sealed, not erased.'],['Echoes','As a child: a strange homesickness for temples, clouds, and starlight, and a wish that every living thing could be well.'],['The script begins','The encounters and turning points are set. The choices are still hers.']]},
 {key:'night',han:'极夜',en:'The Long Night',imgs:[['night-snow.webp','She huddles alone in the snow on a dark, windswept plain, a few distant lights on the horizon','30% center']],line:'Twelve years in which the lights inside went out, one by one.',entries:[['Tribulation bonds','People who arrive to bring her to the next door, and then leave.'],['Running on backup','She keeps studying, working, succeeding. Inside, a city in darkness runs on backup power.'],['The guardians','Numbness, compulsions, vigilance: not her enemies, but guards who took over when nothing else could.']]},
 {key:'fragments',han:'裂隙',en:'Fragments',imgs:[['fragments.webp','She reaches toward glowing crystal fragments holding a temple, a kite, and a star map','center']],line:'Through the cracks, the first light.',entries:[['Dreams','Dreams that feel like memories from somewhere else.'],['Childhood light','The girl who loved the sky and writing, still there beneath everything.'],['Recognition','Sometimes the body remembers before the mind does.']]},
 {key:'awakening',han:'觉醒',en:'Awakening',imgs:[['awakening.webp','She meditates on a beach at sunrise, eyes closed, smiling','center']],line:'When the old scripts close, she finally turns inward.',entries:[['Collapse as opening','Relationships end and plans fail. From above: an old script closing.'],['Karma, seen from inside','Rebirth, cause and effect, soul contracts: the rules of her life, understood from within it.'],['Her mission','To turn heavenly understanding into human experience, and leave something that helps others.']]},
 {key:'returning',han:'归来',en:'Returning',imgs:[['returning-campus.webp','She walks back onto campus, smiling, a faint heavenly palace in the sky','center 30%','Back to campus'],['returning-stage.webp','She speaks on stage about human-centered AI','center 30%','On stage']],line:'Not ascending. Coming back to her own life, whole.',entries:[['Back to campus','She returns to study, not as the girl who left, but as someone who remembers why she came.'],['On stage','What she learned in the long night becomes work that helps others.'],['Two selves','The soul of countless lives, and the woman who hurts, fears, loves, and tires. She no longer denies either.']]}
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

const sceneHTML=c=>c.imgs.map(([file,alt,pos],j)=>pic(file,alt,pos).replace('<img ',`<img class="${j?'':'is-shown'}" `)).join('')+(c.imgs.length>1?`<div class="sw-scene-switch" role="group" aria-label="Choose a scene">${c.imgs.map((im,j)=>`<button type="button" data-shot="${j}" aria-pressed="${j===0}">${im[3]}</button>`).join('')}</div>`:'');

host.innerHTML=`
<nav class="sw-shelf" aria-label="Story worlds"><button type="button" data-shelf="soul" aria-pressed="true"><b>I</b> Soul &amp; Awakening</button><button type="button" data-shelf="court" aria-pressed="false"><b>II</b> The Brain Court</button></nav>
<div id="sw-soul">
<section class="sw-hero" aria-labelledby="sw-title"><div class="sw-hero-art">${pic('hero.webp','She looks back and smiles at the edge of a sea of clouds, a road of light winding up to the heavenly palace','center')}</div><div class="sw-hero-copy"><span class="sw-eyebrow">Story World I</span><h3 id="sw-title">Soul &amp; Awakening</h3><p>A soul from the heavens is born into a human life, forgets everything, and slowly finds her way back.</p><div class="sw-actions"><button type="button" id="sw-enter">Enter the Story</button><button type="button" class="sw-frag-open">Open a Random Fragment ✦</button></div></div></section>
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
</div>
<div id="sw-court" hidden></div>
<div class="sw-fragment" id="sw-fragment" role="dialog" aria-modal="false" aria-labelledby="sw-frag-tag" hidden><span class="sw-eyebrow" id="sw-frag-tag"></span><p id="sw-frag-text"></p><div><button type="button" id="sw-frag-next">another ✦</button><button type="button" id="sw-frag-close" aria-label="Close fragment">×</button></div></div>`;

const $=id=>document.getElementById(id);
const tabs=[...host.querySelectorAll('.sw-rail [role=tab]')];let current=0;
function entry(i){const c=chapters[current];[...$('sw-entries').children].forEach((b,j)=>b.setAttribute('aria-expanded',String(j===i)));$('sw-entry-text').textContent=c.entries[i][1]}
let shotTimer=null;
function shot(j){$('sw-scene').querySelectorAll('img').forEach((im,k)=>im.classList.toggle('is-shown',k===j));$('sw-scene').querySelectorAll('[data-shot]').forEach((b,k)=>b.setAttribute('aria-pressed',String(k===j)))}
function chapter(i,focus){
 current=(i+chapters.length)%chapters.length;const c=chapters[current];
 tabs.forEach((t,j)=>{t.setAttribute('aria-selected',String(j===current));t.tabIndex=j===current?0:-1});
 const stage=$('sw-stage');stage.dataset.mood=c.key;stage.classList.toggle('is-portrait',!!c.portrait);clearInterval(shotTimer);stage.setAttribute('aria-labelledby',tabs[current].id);
 $('sw-scene').innerHTML=sceneHTML(c);
 if(c.imgs.length>1&&!reduce){let j=0;shotTimer=setInterval(()=>shot(j=(j+1)%c.imgs.length),5000)}
 $('sw-num').innerHTML=`${String(current+1).padStart(2,'0')} · <span lang="zh">${c.han}</span>`;$('sw-ch-title').textContent=c.en;$('sw-line').textContent=c.line;
 $('sw-entries').innerHTML=c.entries.map(([label],j)=>`<button type="button" data-entry="${j}" aria-expanded="false" aria-controls="sw-entry-text">${label}</button>`).join('');
 entry(0);
 stage.classList.remove('is-changing');void stage.offsetWidth;stage.classList.add('is-changing');
 if(focus)tabs[current].focus();
}
tabs.forEach((t,i)=>{t.addEventListener('click',()=>chapter(i));t.addEventListener('keydown',e=>{const k={ArrowRight:current+1,ArrowLeft:current-1,Home:0,End:chapters.length-1}[e.key];if(k!==undefined){e.preventDefault();chapter(k,true)}})});
$('sw-scene').addEventListener('click',e=>{const b=e.target.closest('[data-shot]');if(b){clearInterval(shotTimer);shot(Number(b.dataset.shot))}});
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

/* story-world shelf: I Soul & Awakening / II The Brain Court (rendered by life-court.js) */
function shelf(key){
 host.querySelectorAll('[data-shelf]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.shelf===key)));
 $('sw-soul').hidden=key!=='soul';$('sw-court').hidden=key!=='court';
 $('sw-fragment').hidden=true;
 if(key!=='court'&&/^#(brain-court|meridian-bureau)$/.test(location.hash)){try{history.replaceState(null,'','#writing')}catch(_){}}
 if(key==='court'&&!/^#(brain-court|meridian-bureau)$/.test(location.hash)){try{history.replaceState(null,'','#brain-court')}catch(_){}}
}
host.querySelectorAll('[data-shelf]').forEach(b=>b.addEventListener('click',()=>shelf(b.dataset.shelf)));

chapter(0);realm('bureau');bond('true');
})();
