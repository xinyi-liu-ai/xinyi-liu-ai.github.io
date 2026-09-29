(() => {
'use strict';
const root=document.getElementById('life-book');if(!root)return;
const $=id=>document.getElementById(id);
const cards=[...root.querySelectorAll('[data-world]')],tabs=[...root.querySelectorAll('[data-chapter]')];
const data=[["ballet", "Ballet", "Childhood", "Several years of ballet were probably my first introduction to movement as a language.", ["balance", "precision", "grace"]], ["classical", "Chinese Classical Dance", "Childhood", "A different kind of expression, in flowing gestures and the stories they can tell.", ["flow", "expression", "storytelling"]], ["xinjiang", "Xinjiang-style Dance", "Childhood", "Another chapter of childhood, full of rhythm, turns, and expressive movement.", ["rhythm", "expression", "joy"]], ["cheer", "Cheerleading", "Middle School", "A brighter, more energetic chapter: moving together and sharing the excitement.", ["energy", "teamwork", "spirit"]], ["hpop", "H-pop / Girl-group Dance", "Master\u2019s years", "A new rhythm, playful choreography, and the fun of learning something different.", ["rhythm", "confidence", "play"]], ["yoga", "Stillness", "Yoga \u00b7 Now", "Sometimes movement is about learning how to become quiet.", ["breath", "presence", "ease"]]];
const imageBase=$('dance-image').getAttribute('src').replace(/ballet\.webp.*$/,'');
let current=0,active=null;
const summaries={animals:'A soft spot for pandas and elephants, and curiosity about the lives they lead.',astronomy:'Looking up, learning the sky, and wondering what is out there.',reading:'Fictional worlds to disappear into — in books, animation, comics, and games.',travel:'Exploring new places, landscapes, and cultures.',writing:'Stories of awakening, imagined worlds, and characters finding their way.'};
function chapter(n,focus=false){
 current=(n+data.length)%data.length;const [key,title,era,story,tags]=data[current];
 tabs.forEach((t,i)=>{t.setAttribute('aria-selected',String(i===current));t.tabIndex=i===current?0:-1});
 const panel=$('dance-chapter');panel.setAttribute('aria-labelledby',tabs[current].id);panel.dataset.theme=key;
 $('dance-image').src=imageBase+key+'.webp';$('dance-image').alt=title+' — illustrated movement chapter';
 $('dance-title').textContent=title;$('dance-era').textContent=era;$('dance-story').textContent=story;
 $('dance-tags').replaceChildren(...tags.map(text=>{const li=document.createElement('li');li.textContent=text;return li}));
 $('dance-count').textContent=String(current+1).padStart(2,'0')+' / 06';
 panel.classList.remove('is-changing');void panel.offsetWidth;panel.classList.add('is-changing');
 if(focus)tabs[current].focus();
}
function openWorld(key,scroll=true){
 const close=active===key;active=close?null:key;
 cards.forEach(c=>{const yes=c.dataset.world===active;c.setAttribute('aria-expanded',String(yes));c.querySelector('.life-plus').textContent=yes?'−':'+'});
 $('life-world').hidden=close;if(close)return;
 const card=cards.find(c=>c.dataset.world===key);$('world-title').textContent=card.querySelector('.life-title').textContent;
 $('world-intro').textContent=key==='dance'?'Different ways I’ve learned to move, perform, and sometimes simply be still.':summaries[key];
 $('dance-world').hidden=key!=='dance';$('animals-world').hidden=key!=='animals';$('astronomy-world').hidden=key!=='astronomy';$('simple-world').hidden=true;
 if(key==='animals'){$('world-title').textContent='Elephants & Pandas';$('world-intro').textContent='A soft spot for panda cubs, elephant calves, and the surprisingly complex lives behind those faces.';}
 if(key==='astronomy')$('world-intro').textContent='Looking up, learning the sky, and collecting tiny reasons to feel small.';
 const artwork=$('world-artwork-image');const original=card.querySelector('img');artwork.src=original.getAttribute('src');artwork.alt=card.querySelector('.life-title').textContent+' — full illustration';$('world-artwork').hidden=false;
 if(key==='dance')chapter(current);
 if(scroll){$('life-world').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});$('life-world').focus({preventScroll:true})}
}
cards.forEach(c=>c.addEventListener('click',()=>openWorld(c.dataset.world)));
$('close-world').addEventListener('click',()=>{const old=active;openWorld(old,false);cards.find(c=>c.dataset.world===old).focus()});
tabs.forEach((t,i)=>{t.addEventListener('click',()=>chapter(i));t.addEventListener('keydown',e=>{let n;if(e.key==='ArrowRight')n=current+1;if(e.key==='ArrowLeft')n=current-1;if(e.key==='Home')n=0;if(e.key==='End')n=5;if(n!==undefined){e.preventDefault();chapter(n,true)}})});
$('dance-prev').addEventListener('click',()=>chapter(current-1));$('dance-next').addEventListener('click',()=>chapter(current+1));
$('dance-shuffle').addEventListener('click',()=>chapter(current+1+Math.floor(Math.random()*5)));
$('dance-overview-toggle').addEventListener('click',()=>{const open=$('dance-overview').hidden;$('dance-overview').hidden=!open;$('dance-overview-toggle').setAttribute('aria-expanded',String(open));$('dance-overview-toggle').textContent=open?'hide overview':'view all six'});
root.querySelectorAll('[data-jump]').forEach(b=>b.addEventListener('click',()=>{chapter(Number(b.dataset.jump));$('dance-overview').hidden=true;$('dance-overview-toggle').setAttribute('aria-expanded','false');$('dance-overview-toggle').textContent='view all six';$('dance-chapter').focus({preventScroll:true})}));
if(location.hash==='#dance')openWorld('dance',false);
if(location.hash==='#animals')openWorld('animals',false);
if(location.hash==='#astronomy')openWorld('astronomy',false);
})();


