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
 $('dance-world').hidden=key!=='dance';$('animals-world').hidden=key!=='animals';$('simple-world').hidden=true;
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
const pandaPlaces={
 china:{region:'China',title:'China · native range & conservation centers',text:'Wild giant pandas live in mountain forests in Sichuan, Shaanxi, and Gansu. China is also home to the major breeding and research centers that support the global population.',url:'https://www.nationalzoo.si.edu/animals/giant-panda'},
 washington:{region:'Washington, D.C. · USA',title:'Smithsonian’s National Zoo',text:'Bao Li and Qing Bao live at the National Zoo. Their arrival in 2024 began a new research-and-conservation agreement running through 2034.',url:'https://nationalzoo.si.edu/dcpandas'},
 sandiego:{region:'San Diego · USA',title:'San Diego Zoo · Panda Ridge',text:'Xin Bao and Yun Chuan live at Panda Ridge, continuing San Diego Zoo Wildlife Alliance’s long-running giant panda conservation partnership.',url:'https://animals.sandiegozoo.org/animals/giant-panda'},
 berlin:{region:'Berlin · Germany',title:'Zoo Berlin · Panda Garden',text:'Germany’s only giant pandas live at Zoo Berlin. The current panda family includes Meng Meng, Jiao Qing, and the younger twins Leni and Lotti.',url:'https://www.zoo-berlin.de/en/explore-the-zoo/panda-garden'},
 singapore:{region:'Singapore',title:'River Wonders · Giant Panda Forest',text:'Kai Kai and Jia Jia live at River Wonders. Their first cub, Le Le, was born in Singapore in 2021 and later returned to China.',url:'https://www.mandai.com/en/river-wonders/animals-and-zones/giant-panda.html'}
};
const pandaFacts=[
 'Scientists still do not have one conclusive explanation for the giant panda’s black-and-white markings.',
 'Giant pandas are usually solitary, but they are not silent: they chirp, honk, bleat, chomp, and bark during social interactions.',
 'Wild giant pandas live in mountain forests in Sichuan, Shaanxi, and Gansu in central China.',
 'Qi Zai is the world’s only captive brown Qinling giant panda — a rare “chocolate panda” whose coloring is linked to a genetic variant.',
 'A giant panda can spend much of its waking day eating bamboo because bamboo is abundant but relatively low in nutrients.'
];
const elephantFacts=[
 'Elephants use very low-frequency rumbles to communicate over long distances — some calls can travel for miles.',
 'Asian elephant family groups are typically made up of related females, their female offspring, and immature males.',
 'Young elephants learn “herd smarts” by observing and mimicking mothers, aunties, and grandmothers.',
 'An Asian elephant pregnancy lasts roughly 21.5–22 months — one of the longest gestation periods among mammals.',
 'An elephant’s trunk is not just for feeding: it is also used for smelling, touching, drinking, sound production, greeting, reassurance, and play.'
];
let pandaFactIndex=0,elephantFactIndex=0;
root.querySelectorAll('[data-animal-tab]').forEach(btn=>btn.addEventListener('click',()=>{
 const key=btn.dataset.animalTab;
 root.querySelectorAll('[data-animal-tab]').forEach(b=>b.setAttribute('aria-selected',String(b===btn)));
 $('animal-panel-pandas').hidden=key!=='pandas';$('animal-panel-elephants').hidden=key!=='elephants';
}));
root.querySelectorAll('[data-panda-place]').forEach(btn=>btn.addEventListener('click',()=>{
 const d=pandaPlaces[btn.dataset.pandaPlace];if(!d)return;
 root.querySelectorAll('[data-panda-place]').forEach(b=>b.classList.toggle('is-active',b===btn));
 $('panda-place-region').textContent=d.region;$('panda-place-title').textContent=d.title;$('panda-place-text').textContent=d.text;$('panda-place-link').href=d.url;
}));
$('panda-fact-button')?.addEventListener('click',()=>{pandaFactIndex=(pandaFactIndex+1)%pandaFacts.length;$('panda-fact').textContent=pandaFacts[pandaFactIndex]});
$('elephant-fact-button')?.addEventListener('click',()=>{elephantFactIndex=(elephantFactIndex+1)%elephantFacts.length;$('elephant-fact').textContent=elephantFacts[elephantFactIndex]});
if(location.hash==='#dance')openWorld('dance',false);
if(location.hash==='#animals')openWorld('animals',false);
})();
