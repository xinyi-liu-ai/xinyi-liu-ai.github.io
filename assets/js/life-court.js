(() => {
'use strict';
/* Story World II: The Brain Court. Five acts (enter, meet, interact, polar night, coordination),
   plus a side door into the Meridian Bureau (time -> system -> character). */
const host=document.getElementById('sw-court');if(!host)return;
const world=document.getElementById('writing-world');
const base=((world&&world.dataset.img)||'/assets/img/life/writing/')+'court/';
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const img=(file,alt)=>`<img src="${base}${file}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
const zoom=(file,alt,label,thumb)=>`<button type="button" class="bc-zoom" data-full="${base}${file}" data-alt="${esc(alt)}" aria-label="Enlarge: ${esc(label)}">${img(thumb||file,alt)}<span class="bc-zoom-hint" aria-hidden="true">⤢</span></button>`;
const head=(eyebrow,title,sub,id)=>`<div class="bc-head"><span class="sw-eyebrow">${eyebrow}</span><h4${id?` id="${id}"`:''}>${title}</h4>${sub?`<p><em>${sub}</em></p>`:''}</div>`;

const depts=[
 {file:'gatekeepers',name:'The Gatekeepers',region:'Sensory systems',job:'decide what gets in',alt:'The Gatekeepers poster: a flustered girl at a desk as sound, sight, movement and body signals pour through four gates into the kingdom'},
 {file:'alarm-general',name:'The Alarm General',region:'Amygdala',job:'decides whether it is dangerous',alt:'The Alarm General poster: a general in red shouts ALERT through a megaphone from the castle wall, surrounded by small guards and possible threats'},
 {file:'archivist',name:'The Archivist',region:'Hippocampus',job:'finds what it reminds us of',alt:'The Archivist poster: a girl in a library of glowing photographs explains encoding, storage, retrieval and integration'},
 {file:'strategist',name:'The Strategist',region:'Prefrontal cortex',job:'plans what to do next',alt:'The Strategist poster: an overwhelmed girl at a desk buried in to-do lists beneath panels for planning, decision, inhibition and prioritization'}
];

const steps=on=>`<ol class="bc-steps" aria-label="Time, system, character">${['Time','System','Character'].map((s,i)=>`<li${i===on?' class="is-on" aria-current="step"':''}>${s}</li>`).join('')}</ol>`;

host.innerHTML=`
<div class="bc-view" id="bc-court-view">
<section class="bc-hero" aria-labelledby="bc-title">
${zoom('overview.webp','The Brain Court: a sky kingdom of palaces where the amygdala, prefrontal cortex, hippocampus, sensory gatekeepers, dopamine system, default mode network and hormonal messengers each have their own hall','The Brain Court overview')}
<div class="bc-hero-copy"><span class="sw-eyebrow">Story World II · Act I · Enter the Kingdom</span><h3 id="bc-title">The Brain Court</h3><p><em>A fictional inner kingdom inspired by how different brain systems coordinate thought, memory, sensation, threat, and action.</em></p><button type="button" class="bc-scroll" data-goto="bc-meet">Scroll to enter the Court ↓</button></div>
</section>

<section class="bc-block" id="bc-meet" aria-labelledby="bc-meet-title">
${head('Act II','Meet the Court','Follow one signal through the kingdom.','bc-meet-title')}
<ol class="bc-flow" aria-label="The path of a signal"><li>A signal arrives</li>${depts.map(d=>`<li>${d.name.replace('The ','')}</li>`).join('')}</ol>
<ul class="bc-grid">${depts.map((d,i)=>`<li><button type="button" class="bc-zoom bc-card" data-full="${base}${d.file}.webp" data-alt="${esc(d.alt)}" aria-label="Open the ${esc(d.name)} poster">${img(d.file+'-card.webp',d.alt)}<span class="bc-card-cap"><span class="bc-num">${i+1}</span><strong>${d.name}</strong><small>${d.region} · ${d.job}</small></span><span class="bc-zoom-hint" aria-hidden="true">⤢</span></button></li>`).join('')}</ul>
<button type="button" class="bc-beyond" data-view="meridian">Beyond the Court: Body &amp; Time →</button>
</section>

<section class="bc-block bc-daily" aria-labelledby="bc-daily-title">
${head('Act III · Watch them interact','Brain Court Daily','What happens when an ordinary signal enters a sensitized system?','bc-daily-title')}
${zoom('daily.webp','Four-panel comic: the Gatekeepers report a sound, the Alarm General shouts danger, the sound turns out to be the fridge, and the General decides to keep watching for three hours just in case','Brain Court Daily comic')}
<p class="bc-quote">Same input. Different interpretations.</p>
</section>

<div class="bc-dusk" aria-hidden="true"></div>
<section class="bc-block bc-night" aria-labelledby="bc-night-title">
${head('Act IV','Twelve Years of Polar Night','What happens when an emergency system never stands down?','bc-night-title')}
${zoom('polar-night.webp','Twelve Years of Polar Night: the kingdom at night under an aurora; the Chancellor’s Hall is almost silent while the Alarm Tower and the Archive still glow, and a girl watches from a balcony','Twelve Years of Polar Night')}
<p class="bc-quote">The kingdom survived. It just forgot how to stand down.</p>
</section>
<div class="bc-dawn" aria-hidden="true"></div>

<section class="bc-block bc-coord" aria-labelledby="bc-coord-title">
${head('Act V','Coordination','What does recovery look like?','bc-coord-title')}
${zoom('coordination.webp','Coordination: the whole court gathered around a round table that separates past from present, with the Chancellor leading and the Alarm General asking whether they should check first','Coordination')}
<p class="bc-quote">Recovery is not silence. It is coordination.</p>
</section>
</div>

<div class="bc-view" id="bc-meridian-view" hidden>
<button type="button" class="bc-back" data-view="court">← Back to the Brain Court</button>
<section class="bc-bridge" aria-labelledby="bc-bureau-title">
<span class="sw-eyebrow">Body &amp; Time</span>
<p class="bc-bridge-lead">The Brain Court governs thought, memory, attention, and alarm.<br>Beyond the Court, another system keeps time.</p>
<h3 id="bc-bureau-title">The Meridian Bureau</h3>
<p><em>Inspired by the traditional Chinese meridian clock, twelve keepers take turns across the day.</em></p>
</section>

<section class="bc-block bc-clock" aria-labelledby="bc-clock-title">
${steps(0)}
<div class="bc-head"><h4 id="bc-clock-title">The Meridian Clock</h4><p class="bc-zh" lang="zh">十二位守时者，在一天二十四小时中依次轮值。</p><p>Each meridian takes a two-hour shift, forming a continuous 24-hour cycle.</p></div>
${zoom('meridian-clock.webp','The meridian time wheel: twelve keepers around a yin-yang centre, each holding a two-hour shift from the Gallbladder at 23:00 to the Triple Burner at 21:00','The Meridian Clock')}
</section>

<section class="bc-block bc-legend" aria-labelledby="bc-legend-title">
${steps(1)}
<div class="bc-head"><h4 id="bc-legend-title">How to Read the Clock</h4></div>
${zoom('meridian-legend.webp','Legend: the five element colours, yin and yang markers, organ icons, and how the twelve meridians group into the five elements','How to Read the Clock legend')}
</section>

<section class="bc-block bc-keepers" aria-labelledby="bc-keepers-title">
${steps(2)}
<div class="bc-head"><h4 id="bc-keepers-title">Meet the Twelve Meridian Keepers</h4><p>Each keeper has a time, an element, a Yin–Yang identity, a role, and a path through the body.</p></div>
<p class="bc-hint"><strong>Look for the glowing path ✦</strong>The line on each body silhouette traces where that meridian traditionally travels through the body.</p>
${zoom('meridian-keepers.webp','Twelve meridian character cards, each with its time, element, yin-yang identity, function, colours, and a body silhouette tracing its traditional path','The Twelve Meridian Keepers')}
</section>
<button type="button" class="bc-back bc-back-end" data-view="court">← Back to the Brain Court</button>
</div>`;

/* lightbox: one shared dialog, click the image to toggle actual size */
const box=document.createElement('dialog');
box.className='bc-lightbox';box.setAttribute('aria-label','Enlarged image');
box.innerHTML='<div class="bc-lightbox-inner"><img alt=""></div><button type="button" class="bc-lightbox-close" aria-label="Close">×</button><p class="bc-lightbox-tip">click the image to see it at full size · esc to close</p>';
document.body.appendChild(box);
const boxImg=box.querySelector('img');let opener=null;
function open(btn){opener=btn;box.classList.remove('is-actual');boxImg.src=btn.dataset.full;boxImg.alt=btn.dataset.alt||'';if(box.showModal)box.showModal();else box.setAttribute('open','')}
function close(){if(box.close)box.close();else box.removeAttribute('open')}
box.addEventListener('close',()=>{boxImg.removeAttribute('src');if(opener)opener.focus()});
box.addEventListener('click',e=>{if(e.target===boxImg)box.classList.toggle('is-actual');else if(e.target.closest('.bc-lightbox-close')||e.target===box||e.target.classList.contains('bc-lightbox-inner'))close()});
host.addEventListener('click',e=>{
 const z=e.target.closest('.bc-zoom');if(z){open(z);return}
 const v=e.target.closest('[data-view]');if(v){view(v.dataset.view);return}
 const g=e.target.closest('[data-goto]');if(g)document.getElementById(g.dataset.goto).scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
});

function view(name,scroll=true){
 document.getElementById('bc-court-view').hidden=name!=='court';
 document.getElementById('bc-meridian-view').hidden=name!=='meridian';
 try{history.replaceState(null,'',name==='meridian'?'#meridian-bureau':'#brain-court')}catch(_){}
 if(scroll)host.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'});
}

/* deep links: #brain-court and #meridian-bureau open the Writing world straight onto this story */
const hash=location.hash;
if(hash==='#brain-court'||hash==='#meridian-bureau'){
 const card=document.querySelector('[data-world=writing]');
 if(card&&card.getAttribute('aria-expanded')!=='true')card.click();
 const tab=document.querySelector('[data-shelf=court]');if(tab)tab.click();
 view(hash==='#meridian-bureau'?'meridian':'court',false);
 requestAnimationFrame(()=>host.scrollIntoView({block:'start'}));
}
})();
