---
layout: page
title: Life
permalink: /life/
nav: true
nav_order: 3
---
<link rel="stylesheet" href="{{ '/assets/css/life.css' | relative_url }}">
<div class="life-book" id="life-book">
<p class="life-intro">A few things I love outside research — animals, stars, stories, movement, and exploring the world.</p>
<div class="life-board" aria-label="Things I love">
<button type="button" class="life-card" data-world="animals" aria-expanded="false" aria-controls="life-world"><img src="{{ '/assets/img/life/animal.webp?v=final-20260928' | relative_url }}" width="800" height="800" loading="lazy" alt=""><span class="life-kicker">Wild at heart</span><span class="life-title">Animals</span><span class="life-line">Pandas, elephants, and the lives behind the cute faces.</span><span class="life-plus" aria-hidden="true">+</span></button>
<button type="button" class="life-card" data-world="astronomy" aria-expanded="false" aria-controls="life-world"><img src="{{ '/assets/img/life/astronomy.webp?v=final-20260928' | relative_url }}" width="800" height="800" loading="lazy" alt=""><span class="life-kicker">Look up</span><span class="life-title">Astronomy</span><span class="life-line">Stars, constellations, and a universe of questions.</span><span class="life-plus" aria-hidden="true">+</span></button>
<button type="button" class="life-card" data-world="dance" aria-expanded="false" aria-controls="life-world"><img src="{{ '/assets/img/life/dancing.webp?v=final-20260928' | relative_url }}" width="800" height="800" loading="lazy" alt=""><span class="life-kicker">Move through life</span><span class="life-title">Dance & Movement</span><span class="life-line">From my first ballet steps to moments of stillness.</span><span class="life-plus" aria-hidden="true">+</span></button>
<button type="button" class="life-card" data-world="reading" aria-expanded="false" aria-controls="life-world"><img src="{{ '/assets/img/life/reading.webp?v=final-20260928' | relative_url }}" width="800" height="800" loading="lazy" alt=""><span class="life-kicker">One more world</span><span class="life-title">Reading / Fictional Worlds</span><span class="life-line">Books, animation, games, and worlds to get lost in.</span><span class="life-plus" aria-hidden="true">+</span></button>
<button type="button" class="life-card" data-world="travel" aria-expanded="false" aria-controls="life-world"><img src="{{ '/assets/img/life/traveling.webp?v=final-20260928' | relative_url }}" width="800" height="800" loading="lazy" alt=""><span class="life-kicker">Next stop</span><span class="life-title">Travel & Exploration</span><span class="life-line">New places, unfamiliar landscapes, and a little wonder.</span><span class="life-plus" aria-hidden="true">+</span></button>
<button type="button" class="life-card" data-world="writing" aria-expanded="false" aria-controls="life-world"><img src="{{ '/assets/img/life/writing.webp?v=final-20260928' | relative_url }}" width="800" height="800" loading="lazy" alt=""><span class="life-kicker">Other worlds</span><span class="life-title">Writing / Story Worlds</span><span class="life-line">Imagining characters and worlds that do not exist yet.</span><span class="life-plus" aria-hidden="true">+</span></button>
</div>
<section id="life-world" class="life-world" hidden aria-labelledby="world-title" tabindex="-1">
<div class="world-heading"><div><h2 id="world-title"></h2><p id="world-intro"></p></div><button type="button" id="close-world" aria-label="Close this interest">×</button></div>
<div id="simple-world"></div>
<div id="dance-world" hidden>
<div class="dance-tools"><button type="button" id="dance-shuffle">shuffle a chapter ✦</button><button type="button" id="dance-overview-toggle" aria-expanded="false" aria-controls="dance-overview">view all six</button></div>
<div class="dance-timeline" role="tablist" aria-label="Movement chapters">
<button type="button" role="tab" id="dance-tab-0" aria-controls="dance-chapter" aria-selected="true" tabindex="0" data-chapter="0"><span class="timeline-dot"></span><strong>Ballet</strong><small>Childhood</small></button>
<button type="button" role="tab" id="dance-tab-1" aria-controls="dance-chapter" aria-selected="false" tabindex="-1" data-chapter="1"><span class="timeline-dot"></span><strong>Chinese Classical</strong><small>Childhood</small></button>
<button type="button" role="tab" id="dance-tab-2" aria-controls="dance-chapter" aria-selected="false" tabindex="-1" data-chapter="2"><span class="timeline-dot"></span><strong>Xinjiang-style</strong><small>Childhood</small></button>
<button type="button" role="tab" id="dance-tab-3" aria-controls="dance-chapter" aria-selected="false" tabindex="-1" data-chapter="3"><span class="timeline-dot"></span><strong>Cheerleading</strong><small>Middle School</small></button>
<button type="button" role="tab" id="dance-tab-4" aria-controls="dance-chapter" aria-selected="false" tabindex="-1" data-chapter="4"><span class="timeline-dot"></span><strong>H-pop</strong><small>Master’s years</small></button>
<button type="button" role="tab" id="dance-tab-5" aria-controls="dance-chapter" aria-selected="false" tabindex="-1" data-chapter="5"><span class="timeline-dot"></span><strong>Yoga</strong><small>Yoga · Now</small></button>
</div><div id="dance-overview" class="dance-overview" hidden>
<button type="button" data-jump="0"><img src="{{ '/assets/img/life/dance/ballet.webp' | relative_url }}" alt="" loading="lazy"><span>Ballet</span></button>
<button type="button" data-jump="1"><img src="{{ '/assets/img/life/dance/classical.webp' | relative_url }}" alt="" loading="lazy"><span>Chinese Classical Dance</span></button>
<button type="button" data-jump="2"><img src="{{ '/assets/img/life/dance/xinjiang.webp' | relative_url }}" alt="" loading="lazy"><span>Xinjiang-style Dance</span></button>
<button type="button" data-jump="3"><img src="{{ '/assets/img/life/dance/cheer.webp' | relative_url }}" alt="" loading="lazy"><span>Cheerleading</span></button>
<button type="button" data-jump="4"><img src="{{ '/assets/img/life/dance/hpop.webp' | relative_url }}" alt="" loading="lazy"><span>H-pop / Girl-group Dance</span></button>
<button type="button" data-jump="5"><img src="{{ '/assets/img/life/dance/yoga.webp' | relative_url }}" alt="" loading="lazy"><span>Stillness</span></button>
</div>
<div id="dance-chapter" class="dance-chapter" role="tabpanel" aria-labelledby="dance-tab-0" tabindex="0" data-theme="ballet">
<div class="dance-visual"><img id="dance-image" src="{{ '/assets/img/life/dance/ballet.webp' | relative_url }}" width="900" height="1125" alt="Ballet illustration"><div class="dance-accent" aria-hidden="true"></div></div>
<div class="dance-memory" aria-live="polite" aria-atomic="true"><span class="life-kicker" id="dance-era">Childhood</span><h3 id="dance-title">Ballet</h3><p id="dance-story">Several years of ballet were probably my first introduction to movement as a language.</p><ul id="dance-tags"><li>balance</li><li>precision</li><li>grace</li></ul><div class="dance-pager"><button type="button" id="dance-prev" aria-label="Previous chapter">←</button><span id="dance-count">01 / 06</span><button type="button" id="dance-next" aria-label="Next chapter">→</button></div></div>
</div>
</div>
</section>
<p class="life-ending">Still collecting little worlds. ✦</p>
</div>
<noscript><p>Enable JavaScript to explore the movement timeline.</p></noscript>
<script src="{{ '/assets/js/life.js' | relative_url }}" defer></script>
