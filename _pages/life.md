---
layout: page
title: Life
permalink: /life/
nav: true
nav_order: 3
---
<link rel="stylesheet" href="{{ '/assets/css/life.css' | relative_url }}?v=20260929-animals-2">
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

<div id="animals-world" hidden>
  <div class="animal-tabs" role="tablist" aria-label="Animals">
    <button type="button" role="tab" id="animal-tab-pandas" aria-controls="animal-panel-pandas" aria-selected="true" data-animal-tab="pandas">🐼 Pandas</button>
    <button type="button" role="tab" id="animal-tab-elephants" aria-controls="animal-panel-elephants" aria-selected="false" data-animal-tab="elephants">🐘 Elephants</button>
  </div>

  <section id="animal-panel-pandas" class="animal-panel" role="tabpanel" aria-labelledby="animal-tab-pandas">
    <div class="animal-section-head">
      <span class="life-kicker">A few I’m especially fond of</span>
      <h3>Pandas with a special place in my heart</h3>
      <p>I love giant pandas in general — especially the babies — but a few individuals have become particular favorites.</p>
    </div>

    <div class="animal-favorites">
      <article class="animal-favorite-card">
        <div class="animal-avatar panda-avatar" aria-hidden="true">🐼</div>
        <div><span class="animal-card-note">favorite panda</span><h4>陈园润</h4><p>One of the pandas I always come back to.</p></div>
      </article>
      <article class="animal-favorite-card">
        <div class="animal-avatar qizai-avatar" aria-hidden="true">🐼</div>
        <div><span class="animal-card-note">the chocolate panda</span><h4>七仔 · Qi Zai</h4><p>The world’s only captive brown Qinling giant panda — unmistakable, calm, and very easy to adore.</p></div>
      </article>
      <article class="animal-favorite-card">
        <div class="animal-avatar cub-avatar" aria-hidden="true">◕ᴥ◕</div>
        <div><span class="animal-card-note">tiny chaos</span><h4>Panda babies</h4><p>Honestly, this category could be endless.</p></div>
      </article>
    </div>

    <div class="animal-feature">
      <div class="animal-feature-heading">
        <div><span class="life-kicker">Explore</span><h3>Panda world map</h3><p>Selected giant-panda locations around the world. Click a dot to see who lives there and what makes the program interesting.</p></div>
        <span class="animal-map-note">a growing map · not exhaustive</span>
      </div>
      <div class="panda-map-layout">
        <div class="panda-map" aria-label="Selected giant panda locations">
          <svg viewBox="0 0 960 500" role="img" aria-label="Stylized world map">
            <path class="map-land" d="M80 116c40-51 125-68 190-38 43 19 54 54 28 78-21 19-47 18-54 47-8 35 19 54 6 88-15 41-60 63-93 42-31-20-21-64-49-84-36-25-73-79-28-133z"/>
            <path class="map-land" d="M262 302c42-18 76 13 75 49-1 36-24 53-34 89-9 32-26 43-47 15-23-31-14-62-20-93-5-27 3-49 26-60z"/>
            <path class="map-land" d="M445 104c42-29 97-26 122-2 25 23 10 47-19 55-39 10-79 7-110-5-29-11-22-28 7-48z"/>
            <path class="map-land" d="M493 181c54-39 153-50 245-25 74 20 126 66 110 105-15 38-79 22-111 42-43 28-63 65-113 65-48 0-60-36-83-60-29-31-76-41-91-75-11-24 9-37 43-52z"/>
            <path class="map-land" d="M520 265c45 8 75 39 75 78 0 51-27 109-63 111-39 2-48-46-60-77-12-32-30-72-6-96 13-13 31-20 54-16z"/>
            <path class="map-land" d="M781 350c38-24 95-7 108 26 11 29-17 53-55 52-42-1-78-27-70-49 4-12 9-22 17-29z"/>
          </svg>
          <button class="panda-pin" style="--x:22%;--y:43%" data-panda-place="sandiego" aria-label="San Diego Zoo"></button>
          <button class="panda-pin" style="--x:28%;--y:35%" data-panda-place="washington" aria-label="Smithsonian National Zoo"></button>
          <button class="panda-pin" style="--x:56%;--y:31%" data-panda-place="berlin" aria-label="Zoo Berlin"></button>
          <button class="panda-pin is-active" style="--x:72%;--y:39%" data-panda-place="china" aria-label="China"></button>
          <button class="panda-pin" style="--x:76%;--y:63%" data-panda-place="singapore" aria-label="River Wonders Singapore"></button>
        </div>
        <aside class="panda-place-card" aria-live="polite">
          <span class="life-kicker" id="panda-place-region">China</span>
          <h4 id="panda-place-title">China · native range & conservation centers</h4>
          <p id="panda-place-text">Wild giant pandas live in mountain forests in Sichuan, Shaanxi, and Gansu. China is also home to the major breeding and research centers that support the global population.</p>
          <a id="panda-place-link" href="https://www.nationalzoo.si.edu/animals/giant-panda" target="_blank" rel="noopener">official / reference page ↗</a>
        </aside>
      </div>
    </div>

    <div class="animal-facts">
      <div><span class="life-kicker">Tiny rabbit hole</span><h3>Panda things people often don’t know</h3><p id="panda-fact">Scientists still do not have one conclusive explanation for the giant panda’s black-and-white markings.</p></div>
      <button type="button" class="fact-button" id="panda-fact-button">give me another panda fact ✦</button>
    </div>
  </section>

  <section id="animal-panel-elephants" class="animal-panel" role="tabpanel" aria-labelledby="animal-tab-elephants" hidden>
    <div class="maria-spotlight">
      <div class="animal-avatar elephant-avatar" aria-hidden="true">🐘</div>
      <div><span class="life-kicker">One elephant I especially love</span><h3>Maria · Chimelong</h3><p>I have a particular soft spot for Maria — especially the version of her with grass balanced on her head.</p><span class="photo-note">I’m leaving the photo slot clean for now so I can add the exact Maria photo later instead of hot-linking someone else’s image.</span></div>
    </div>

    <div class="elephant-family">
      <div class="animal-section-head"><span class="life-kicker">Social worlds</span><h3>Inside an elephant family</h3><p>Asian elephant groups are typically built around related females and their young. Calves learn by watching, following, touching, and listening to the adults around them.</p></div>
      <div class="family-diagram" aria-label="Simplified female-centered elephant family">
        <div class="family-node elder"><span>experienced females</span><small>memory · guidance · social knowledge</small></div>
        <div class="family-line"></div>
        <div class="family-row">
          <div class="family-node"><span>daughters & sisters</span><small>related adult females</small></div>
          <div class="family-node calf"><span>calves</span><small>learning the herd</small></div>
          <div class="family-node"><span>“aunties”</span><small>care · play · protection</small></div>
        </div>
      </div>
    </div>

    <div class="animal-facts elephant-facts">
      <div><span class="life-kicker">Listen closely</span><h3>Elephant things I love learning about</h3><p id="elephant-fact">Elephants use very low-frequency rumbles to communicate over long distances — some calls can travel for miles.</p></div>
      <button type="button" class="fact-button" id="elephant-fact-button">give me another elephant fact ✦</button>
    </div>
  </section>

  <div class="animal-sources">
    <span>Fact references:</span>
    <a href="https://nationalzoo.si.edu/animals/giant-panda" target="_blank" rel="noopener">Smithsonian giant panda</a>
    <span>·</span>
    <a href="https://nationalzoo.si.edu/animals/asian-elephant" target="_blank" rel="noopener">Smithsonian Asian elephant</a>
    <span>·</span>
    <a href="https://www.forestry.gov.cn/lyj/1/dzw/20260911/689875.html" target="_blank" rel="noopener">China NFGA on Qi Zai</a>
  </div>
</div>

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
<script src="{{ '/assets/js/life.js' | relative_url }}?v=20260929-animals-2" defer></script>
