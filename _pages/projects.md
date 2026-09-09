---
layout: page
title: projects
permalink: /projects/
description: Projects, utilities, lectures, and articles.
nav: true
nav_order: 3
_styles: |
  .post-title { display: none; }
  .post-description { display: none; }
  .project-entry {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: center;
  }
  .project-section-heading {
    margin-bottom: 1.25rem;
    align-items: flex-end;
  }
  .project-section-heading .content-section-title {
    margin-left: 0;
    margin-bottom: 0;
  }
  .project-section-heading:first-of-type .content-section-title {
    margin-top: 2rem;
  }
  .project-media {
    flex: 0 0 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-entry img.project-thumb {
    display: block;
    width: 150px;
    max-width: 150px;
    height: auto;
    max-height: 120px;
    object-fit: contain;
    border-radius: 4px;
  }
  .project-body {
    flex: 1;
    min-width: 0;
  }
  .project-body p {
    margin-bottom: 0;
  }
  .project-media-spacer {
    flex-shrink: 0;
  }
  @media (max-width: 767.98px) {
    .project-entry {
      flex-direction: column;
      align-items: flex-start;
    }
    .project-media {
      flex-basis: auto;
      align-self: center;
    }
    .project-media-spacer {
      display: none;
    }
  }
---

<!-- _pages/projects.md -->

<div class="project-entry project-section-heading">
  <div class="project-media project-media-spacer" aria-hidden="true"></div>
  <div class="project-body">
    <p class="content-section-title">Projects</p>
  </div>
</div>

<div class="project-entry">
  <div class="project-media">
    <img src="{{ '/assets/img/cleverbirds.png' | relative_url }}" alt="CleverBirds logo" class="project-thumb">
  </div>
  <div class="project-body" markdown="1">

**CleverBirds**  
NeurIPS 2025 benchmark on fine-grained human knowledge tracing.  
[Website](https://cleverbirds-benchmark.github.io/) | [Paper](http://arxiv.org/abs/2511.08512) | [Code](https://github.com/visipedia/clever_birds) | [Models](https://huggingface.co/bossemel/cleverbirds_models)

  </div>
</div>


<div class="project-entry">
  <div class="project-media">
    <img src="{{ '/assets/img/flowpc.png' | relative_url }}" alt="Causal graph examples from Flow PC experiments" class="project-thumb">
  </div>
  <div class="project-body" markdown="1">

**Flow PC**  
LMU MSc thesis on causal discovery: a PC algorithm that tests conditional independence using normalizing flows, applied on eBay auctions data.  
[Code](https://github.com/bossemel/Flow_PC) | [Thesis](https://www.researchgate.net/publication/362174852_Machine_Learning_for_Causal_Discovery_with_Applications_in_Economics)

  </div>
</div>


<div class="project-entry">
  <div class="project-media">
    <img src="{{ '/assets/img/cmflows.png' | relative_url }}" alt="Copula density estimation with CM Flows" class="project-thumb">
  </div>
  <div class="project-body" markdown="1">

**CM Flows**  
Copula density estimation using normalizing flows.  
[Code](https://github.com/bossemel/CMFlows) | [Thesis](https://project-archive.inf.ed.ac.uk/msc/20204428/msc_proj.pdf)

  </div>
</div>






<div class="project-entry project-section-heading">
  <div class="project-media project-media-spacer" aria-hidden="true"></div>
  <div class="project-body">
    <p class="content-section-title">Articles</p>
  </div>
</div>


<div class="project-entry">
  <div class="project-media">
    <img src="{{ '/assets/img/spiegel_trocken.png' | relative_url }}" alt="Chart from SPIEGEL summer weather data journalism piece" class="project-thumb">
  </div>
  <div class="project-body" markdown="1">

**So heiß und trocken war es in Ihrer Stadt**  
Data journalism piece I wrote for SPIEGEL ONLINE, with historic climate accords for cities across Germany.  
[SPIEGEL](https://www.spiegel.de/wissenschaft/natur/sommer-wetter-so-heiss-und-trocken-war-es-in-ihrer-stadt-a-1223319.html)

  </div>
</div>


<div class="project-entry">
  <div class="project-media">
    <img src="{{ '/assets/img/spiegel_wiki.png' | relative_url }}" alt="Chart from SPIEGEL Wikipedia gender data journalism piece" class="project-thumb">
  </div>
  <div class="project-body" markdown="1">

**Wikipedia hat ein Frauenproblem**  
Data journalism piece on gender representation and stereotypes in German Wikipedia biographies.
[SPIEGEL](https://www.spiegel.de/kultur/gesellschaft/wikipedia-hat-ein-frauenproblem-klischees-von-weiblichkeit-a-1231017.html)

  </div>
</div>


<div class="project-entry">
  <div class="project-media">
    <img src="{{ '/assets/img/pieces_ocr.png' | relative_url }}" alt="Screenshot from Pieces OCR blog post" class="project-thumb">
  </div>
  <div class="project-body" markdown="1">

**How we made our OCR code more accurate**  
Blog post on how we improved Pieces' code OCR pipeline.  
[Pieces](https://pieces.app/blog/how-we-made-our-optical-character-recognition-ocr-code-more-accurate)

  </div>
</div>


<div class="project-entry">
  <div class="project-media project-media-spacer" aria-hidden="true"></div>
  <div class="project-body" markdown="1">

**Question-Answering on Source Code Repositories**  
Blog post on how we built Pieces' local indexing and retrieval.

[Pieces](https://pieces.app/blog/question-answering-on-source-code-repositories)

  </div>
</div>



<div class="project-entry project-section-heading">
  <div class="project-media project-media-spacer" aria-hidden="true"></div>
  <div class="project-body">
    <p class="content-section-title">Lectures</p>
  </div>
</div>


<div class="project-entry">
  <div class="project-media project-media-spacer" aria-hidden="true"></div>
  <div class="project-body" markdown="1">

**ML for Economists**  
Jupyter notebooks and lecture materials I prepared for the Machine Learning for Economists course at LMU.  
[Code](https://github.com/bossemel/ML_Economists)

  </div>
</div>


<div class="project-entry">
  <div class="project-media project-media-spacer" aria-hidden="true"></div>
  <div class="project-body" markdown="1">

**UC Mercer Visualization**  
Jupyter notebook tutorial I made for an LMU economics class on exploring satellite land-use imagery with the UC Merced dataset.  
[Code](https://github.com/bossemel/UC_Mercer_Visualization)

  </div>
</div>

<div class="project-entry project-section-heading">
  <div class="project-media project-media-spacer" aria-hidden="true"></div>
  <div class="project-body">
    <p class="content-section-title">Utility</p>
  </div>
</div>


<div class="project-entry">
  <div class="project-media project-media-spacer" aria-hidden="true"></div>
  <div class="project-body" markdown="1">

**JS Divergence**  
Small utility I wrote to estimate Jensen–Shannon divergence with Monte Carlo when densities are only available through samples.  
[Code](https://github.com/bossemel/js_divergence)

  </div>
</div>


<div class="project-entry">
  <div class="project-media project-media-spacer" aria-hidden="true"></div>
  <div class="project-body" markdown="1">

**NAF Python 3**  
Python 3 port of the Neural Autoregressive Flows codebase, which I used for experiments in my Edinburgh MSc thesis on copula density estimation.  
[Code](https://github.com/bossemel/NAF-Python3)

  </div>
</div>

