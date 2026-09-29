---
layout: about
title: About
permalink: /

profile:
  align: right
  image: xinyi-profile.jpg
  image_circular: true # crops the image to make it circular

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: false # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---
<style>
.home-about {
  --home-card-radius: 14px;
}
.home-about .profile img {
  border: 3px solid color-mix(in srgb, var(--global-theme-color) 16%, transparent);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.10);
}
.home-about .research-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.9rem;
  margin: 0.95rem 0 1.35rem;
}
.home-about .research-card {
  min-height: 220px;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--global-divider-color);
  border-radius: var(--home-card-radius);
  padding: 1.05rem 1.1rem;
  background:
    linear-gradient(
      145deg,
      color-mix(in srgb, var(--global-theme-color) 5%, var(--global-bg-color)),
      var(--global-bg-color) 48%
    );
  transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
}
.home-about .research-card:hover {
  transform: translateY(-2px);
  border-color: color-mix(in srgb, var(--global-theme-color) 45%, var(--global-divider-color));
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.07);
}
.home-about .research-index {
  color: var(--global-theme-color);
  font-size: 0.75rem;
  font-weight: 750;
  letter-spacing: 0.08em;
  margin-bottom: 0.6rem;
}
.home-about .research-title {
  font-weight: 750;
  line-height: 1.3;
}
.home-about .research-copy {
  margin-top: 0.55rem;
  line-height: 1.58;
  font-size: 0.94rem;
}
.home-about .research-link {
  display: inline-block;
  margin-top: auto;
  padding-top: 0.9rem;
  font-size: 0.86rem;
  font-weight: 600;
}
.home-about .collab-callout {
  border: 1px solid color-mix(in srgb, var(--global-theme-color) 30%, var(--global-divider-color));
  border-left: 4px solid var(--global-theme-color);
  border-radius: 10px;
  padding: 1rem 1.1rem;
  margin: 0.9rem 0 0.9rem;
  background: color-mix(in srgb, var(--global-theme-color) 5%, var(--global-bg-color));
  line-height: 1.7;
}
.home-about .collab-highlight {
  color: var(--global-theme-color);
  font-weight: 750;
  font-size: 1.08em;
}
.home-about + .news,
.home-about ~ .news {
  margin-top: 1.7rem;
}
.home-about ~ .news table td {
  padding-top: 0.48rem;
  padding-bottom: 0.48rem;
  vertical-align: top;
}
@media (max-width: 850px) {
  .home-about .research-grid {
    grid-template-columns: 1fr;
  }
  .home-about .research-card {
    min-height: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .home-about .research-card {
    transition: none;
  }
  .home-about .research-card:hover {
    transform: none;
  }
}
</style>

<div class="home-about">

<p>I am a second-year PhD student in Computer Science at <strong>Northeastern University</strong>, advised by <a href="https://www.ccs.neu.edu/home/dasmith/">Prof. David A. Smith</a>.</p>

<p>My research focuses on <strong>evaluating and aligning LLMs and AI agents</strong>, particularly how their reasoning, behavior, and interactions with humans remain consistent with human goals and agency. I am broadly interested in <strong>LLM/agent evaluation, alignment and AI safety, structured reasoning and information extraction, and human–AI interaction</strong>.</p>

<p>Previously, I conducted research at <strong>Microsoft Research</strong> in the Social Computing group and at <strong>Harvard Medical School</strong> in the <a href="https://hidivelab.org/team/members/xinyi-liu/">HIDIVE Lab</a>, where I was advised by <a href="https://dbmi.hms.harvard.edu/people/nils-gehlenborg">Prof. Nils Gehlenborg</a>. I received my M.S. from <strong>The University of Texas at Austin</strong> and my B.S. in Computer Science and Economics from the <strong>University of Maryland, College Park</strong>, where I worked with <a href="https://zcliu.cs.umd.edu/">Prof. Zhicheng Liu</a> and <a href="https://hannahbako.com/">Prof. Hannah Bako</a>.</p>

<h2>Current Research</h2>

<div class="research-grid">
  <div class="research-card">
    <div class="research-index">01</div>
    <div class="research-title">LLM–Agent Consistency</div>
    <div class="research-copy">Do models preserve their judgments as they move from understanding a situation to responding and acting?</div>
    <a class="research-link" href="{{ '/research/#consistency' | relative_url }}" aria-label="Explore LLM–Agent Consistency">Explore →</a>
  </div>
  <div class="research-card">
    <div class="research-index">02</div>
    <div class="research-title">Structured Language Understanding</div>
    <div class="research-copy">Can language models recover complex relations and their interdependencies from natural language?</div>
    <a class="research-link" href="{{ '/research/#structure' | relative_url }}" aria-label="Explore Structured Language Understanding">Explore →</a>
  </div>
  <div class="research-card">
    <div class="research-index">03</div>
    <div class="research-title">Human-Centered AI Alignment</div>
    <div class="research-copy">How can AI systems support human goals, wellbeing, and agency over time?</div>
    <a class="research-link" href="{{ '/research/#alignment' | relative_url }}" aria-label="Explore Human-Centered AI Alignment">Explore →</a>
  </div>
</div>

<h2>Open to Collaboration</h2>

<div class="collab-callout">
Our lab welcomes <span class="collab-highlight">visiting students</span> and <span class="collab-highlight">remote undergraduate and master’s researchers</span>. I also welcome collaborations with <span class="collab-highlight">PhD students and researchers in academia and&nbsp;industry</span>.
</div>

<p>If you are interested in joining, collaborating, or discussing a research idea, feel free to reach out by <a href="mailto:liu.xinyi10@northeastern.edu">email</a>.</p>

</div>
