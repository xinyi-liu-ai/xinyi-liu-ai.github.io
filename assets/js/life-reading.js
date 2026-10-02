(() => {
'use strict';
/* Reading = worlds I enter (Writing = worlds I create).
   Three shelves that open on click, a "pick a shelf for me" draw, and a recommend-me-a-book note. */
const host=document.getElementById('reading-world');if(!host)return;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* small original symbols for each story world (no character art) */
const ico={
 miffy:'<path d="M17 21c-3-6-3-14 0-16 3 2 3 10 1 16M31 21c-2-6-2-14 1-16 3 2 3 10 0 16"/><ellipse cx="24" cy="31" rx="11" ry="10"/><circle cx="20" cy="30" r=".9" class="f"/><circle cx="28" cy="30" r=".9" class="f"/>',
 doraemon:'<path d="M9 17h30" class="r"/><circle cx="24" cy="27" r="9"/><path d="M15.5 26h17M24 31v5"/><circle cx="24" cy="30" r="1.6" class="f"/>',
 mole:'<path d="M10 38V26l8-6 8 6v12M15 38v-6h6v6"/><path d="M33 38V22"/><path d="M33 22l-6-6M33 22l6-6M33 22l6 6M33 22l-6 6"/>',
 pooh:'<path d="M14 18h20M16 18c-5 4-6 15 0 19h16c6-4 5-15 0-19"/><path d="M20 14h8v4h-8z"/><path d="M22 18c0 4 3 4 3 8 0 2-1 3-1 3" class="h"/>',
 kamisama:'<path d="M9 15c8 2 22 2 30 0M12 21h24M16 15v23M32 15v23"/><path d="M24 34c-3-2-2-5 0-8 1 2 3 3 2 6" class="h"/>',
 snoopy:'<path d="M10 24l14-12 14 12M13 22v16h22V22"/><path d="M20 38v-8a4 4 0 0 1 8 0v8"/>'
};
const worlds=[
 {key:'miffy',name:'Miffy',medium:'picture books'},
 {key:'doraemon',name:'Doraemon',medium:'manga & anime'},
 {key:'mole',name:'Mole’s World',medium:'a childhood online game'},
 {key:'pooh',name:'Winnie the Pooh',medium:'stories of the Hundred Acre Wood'},
 {key:'kamisama',name:'Kamisama Kiss',medium:'manga & anime'},
 {key:'snoopy',name:'Snoopy',medium:'Peanuts comic strips'}
];
const curious=[
 {t:'astronomy',world:'astronomy'},{t:'animals',world:'animals'},{t:'Chinese cosmology'},{t:'AI & society'},
 {t:'healing'},{t:'travel & places',world:'travel'},{t:'strange historical facts'}
];
const draws={
 mind:[['Traditional Chinese ideas of the body','Try 《黄帝内经》.'],['How a body keeps time','Visit the Meridian Bureau in Writing ✦','meridian'],['How the mind sorts danger from noise','Visit the Brain Court in Writing ✦','court']],
 stories:worlds.map(w=>[`A small world: ${w.name}`,`Try ${w.name}, in ${w.medium}.`]),
 odd:curious.map(c=>[c.t,'Follow it for one evening and see where it goes.'])
};

const shelf=(key,title,line,spines)=>`<button type="button" class="rd-shelf" data-rd-shelf="${key}" aria-expanded="false" aria-controls="rd-panel-${key}"><span class="rd-spines" aria-hidden="true">${spines.map(([c,h])=>`<i style="--c:${c};--h:${h}%"></i>`).join('')}</span><strong>${title}</strong><small>${line}</small></button>`;

host.innerHTML=`
<p class="rd-pair"><span>Reading = worlds I enter.</span><span>Writing = worlds I create.</span></p>

<section class="rd-block" aria-labelledby="rd-shelves-title">
<div class="rd-head"><span class="life-kicker">My little reading room</span><h3 id="rd-shelves-title">Explore my shelves</h3></div>
<div class="rd-shelves">
${shelf('mind','Mind & Body','Psychology · Neuroscience · Medicine · Traditional Chinese Medicine · Healing',[['#b7a3d6',92],['#9d88c6',78],['#d9cdea',86],['#c7d6ea',70],['#a6bfe0',88]])}
${shelf('stories','Stories & Worlds','Picture books, manga, games, and the worlds I grew up inside',[['#a9c6e8',84],['#f2d8a7',72],['#c9b8e2',90],['#f4c9c9',76],['#b8d8c8',82]])}
${shelf('curious','Curiosity Shelf','Things I read simply because I became curious',[['#ead9b6',74],['#cbbfe2',88],['#bcd3e6',80],['#e8c9b5',92],['#d8e2c4',70]])}
</div>

<div class="rd-panel" id="rd-panel-mind" hidden>
<p class="rd-panel-line">Psychology · Neuroscience · Medicine · Traditional Chinese Medicine · Healing</p>
<div class="rd-books">
<article class="rd-book"><div class="rd-cover" aria-hidden="true"><span lang="zh">黄帝内经</span></div><div><h4><span lang="zh">《黄帝内经》</span></h4><p class="rd-sub">Huangdi Neijing · The Yellow Emperor’s Inner Classic</p><p>Where the meridian clock comes from: an old way of reading the body as rhythm, season, and balance, rather than as separate parts.</p></div></article>
<article class="rd-book rd-book-later"><div class="rd-cover" aria-hidden="true"><span>✦</span></div><div><h4>A shelf still filling</h4><p>Books on the mind and the body will join here one at a time, only the ones I truly love.</p></div></article>
</div>
</div>

<div class="rd-panel" id="rd-panel-stories" hidden>
<p class="rd-panel-line">Hover or tap a little object to see which world it opens.</p>
<div class="rd-worlds" role="list">${worlds.map(w=>`<button type="button" role="listitem" class="rd-world" data-world-name="${esc(w.name)}" data-medium="${esc(w.medium)}" aria-label="${esc(w.name)}, ${esc(w.medium)}"><svg viewBox="0 0 48 48" aria-hidden="true">${ico[w.key]}</svg><span class="rd-tip" aria-hidden="true">${w.name}</span></button>`).join('')}</div>
<p class="rd-world-caption" id="rd-world-caption" aria-live="polite">&nbsp;</p>
</div>

<div class="rd-panel" id="rd-panel-curious" hidden>
<p class="rd-panel-line">Things I read simply because I became curious.</p>
<ul class="rd-tags">${curious.map(c=>c.world?`<li><button type="button" data-open-world="${c.world}">${c.t} <span aria-hidden="true">↗</span></button></li>`:`<li><span>${c.t}</span></li>`).join('')}</ul>
<p class="rd-note">The ones with ↗ have their own little world on this page.</p>
</div>
</section>

<section class="rd-block rd-pick" aria-labelledby="rd-pick-title">
<div class="rd-head"><span class="life-kicker">A small game</span><h3 id="rd-pick-title">Pick a shelf for me ✦</h3></div>
<div class="rd-pick-buttons" role="group" aria-label="Choose a shelf"><button type="button" data-draw="mind">Mind &amp; Body</button><button type="button" data-draw="stories">Stories</button><button type="button" data-draw="odd">Something Unexpected</button></div>
<div class="rd-ticket" id="rd-ticket" hidden aria-live="polite"><span class="life-kicker">Tonight’s shelf</span><h4 id="rd-ticket-topic"></h4><p id="rd-ticket-try"></p></div>
</section>

<section class="rd-block rd-recommend" aria-labelledby="rd-rec-title">
<form id="book-form" class="rd-form">
<span class="life-kicker">A little note from you</span><h3 id="rd-rec-title">Recommend me a book ✦</h3>
<p class="rd-note">Travel asks for a place to go. This one asks for a world to enter.</p>
<label>Book title<input id="book-title" name="title" required maxlength="160" placeholder="A book, a series, a story world…"></label>
<label>Why should I read it?<textarea id="book-why" name="why" required maxlength="700" rows="3" placeholder="One or two sentences is perfect."></textarea></label>
<div class="rd-form-pair"><label>Which shelf?<select id="book-shelf"><option>Mind &amp; Body</option><option>Stories &amp; Worlds</option><option>Curiosity Shelf</option></select></label><label>Public credit<select id="book-credit"><option value="anonymous">Anonymous</option><option value="first">First name</option></select></label></div>
<label id="book-name-label" hidden>First name<input id="book-name" maxlength="40" autocomplete="given-name"></label>
<label class="rd-consent"><input type="checkbox" required> You may mention this book and note after review, with my selected public credit.</label>
<button type="submit" class="rd-primary">prepare my recommendation ✦</button>
<p class="rd-note">Opens a draft in your email app; you send it there. Your email address is visible to Xinyi, but will not be published.</p>
<div id="book-result" hidden role="status"><p>Your draft is ready. Nothing has been sent by this page.</p><a id="book-mail">Open email draft ↗</a><label>Or copy into an email to liu.xinyi10@northeastern.edu<textarea id="book-draft" readonly rows="5"></textarea></label></div>
</form>
</section>`;

const $=id=>document.getElementById(id);

/* shelves: one open at a time, click again to close */
const shelves=[...host.querySelectorAll('.rd-shelf')];
function openShelf(key){
 shelves.forEach(b=>{const on=b.dataset.rdShelf===key&&b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(on));$('rd-panel-'+b.dataset.rdShelf).hidden=!on;if(on)$('rd-panel-'+b.dataset.rdShelf).classList.add('is-opening')});
}
shelves.forEach(b=>b.addEventListener('click',()=>openShelf(b.dataset.rdShelf)));

/* story worlds: name on hover (CSS) and a caption on focus / tap */
host.querySelectorAll('.rd-world').forEach(b=>{const show=()=>{$('rd-world-caption').textContent=`${b.dataset.worldName} · ${b.dataset.medium}`;host.querySelectorAll('.rd-world').forEach(x=>x.classList.toggle('is-on',x===b))};b.addEventListener('focus',show);b.addEventListener('click',show);b.addEventListener('mouseenter',show)});

/* curiosity tags that have their own Life world */
host.querySelectorAll('[data-open-world]').forEach(b=>b.addEventListener('click',()=>{const card=document.querySelector(`.life-card[data-world="${b.dataset.openWorld}"]`);if(card)card.click()}));

/* jump across to Writing -> II The Brain Court (optionally its Meridian Bureau) */
function goCourt(meridian){
 const card=document.querySelector('.life-card[data-world="writing"]');if(card)card.click();
 const tab=document.querySelector('[data-shelf="court"]');if(tab)tab.click();
 const btn=document.querySelector(meridian?'#bc-court-view [data-view="meridian"]':'#bc-meridian-view [data-view="court"]');
 if(btn&&(meridian||!document.getElementById('bc-meridian-view').hidden))btn.click();
}

/* pick a shelf for me */
const last={};
host.querySelectorAll('[data-draw]').forEach(b=>b.addEventListener('click',()=>{
 const pool=draws[b.dataset.draw];let i;do{i=Math.floor(Math.random()*pool.length)}while(pool.length>1&&i===last[b.dataset.draw]);last[b.dataset.draw]=i;
 const [topic,tryLine,link]=pool[i];
 host.querySelectorAll('[data-draw]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
 $('rd-ticket-topic').textContent=topic;
 const p=$('rd-ticket-try');p.textContent='';
 if(link){const a=document.createElement('a');a.href=link==='meridian'?'#meridian-bureau':'#brain-court';a.textContent=tryLine;a.addEventListener('click',e=>{e.preventDefault();goCourt(link==='meridian')});p.append('“',a,'”')}else p.textContent=`“${tryLine}”`;
 const t=$('rd-ticket');t.hidden=false;t.classList.remove('is-drawn');void t.offsetWidth;t.classList.add('is-drawn');
}));

/* recommend me a book: prepares an email draft, sends nothing itself */
$('book-credit').addEventListener('change',()=>{const first=$('book-credit').value==='first';$('book-name-label').hidden=!first;$('book-name').required=first});
$('book-form').addEventListener('submit',e=>{
 e.preventDefault();if(!$('book-form').reportValidity())return;
 const title=$('book-title').value.trim(),why=$('book-why').value.trim();if(!title||!why)return;
 const credit=$('book-credit').value==='first'?$('book-name').value.trim():'Anonymous';
 const body=`Book: ${title}\nShelf: ${$('book-shelf').value}\n\nWhy you should read it:\n${why}\n\nPublic credit: ${credit}\n\nI agree that this book and note may be mentioned after review with the public credit above. Please do not publish my email address.`;
 const href='mailto:liu.xinyi10@northeastern.edu?subject='+encodeURIComponent('A book to read: '+title)+'&body='+encodeURIComponent(body);
 $('book-mail').href=href;$('book-draft').value=body;$('book-result').hidden=false;window.location.href=href;
});
if(reduce)host.classList.add('is-still');
})();
