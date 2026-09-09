---
layout: page
permalink: /publications/
title: publications
nav: true
nav_order: 2
_styles: |
  .post-title { display: none; }
  .publication-entry {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: center;
  }
  .publication-media {
    flex: 0 0 150px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .publication-entry img.publication-thumb {
    display: block;
    width: 150px;
    max-width: 150px;
    height: auto;
    max-height: 120px;
    object-fit: contain;
    border-radius: 4px;
  }
  .publication-body {
    flex: 1;
    min-width: 0;
  }
  .publication-body p {
    margin-bottom: 0;
  }
  @media (max-width: 767.98px) {
    .publication-entry {
      flex-direction: column;
      align-items: flex-start;
    }
    .publication-media {
      flex-basis: auto;
      align-self: center;
    }
  }
---

<!-- _pages/publications.md -->

<div class="publication-entry">
  <div class="publication-media">
    <img src="{{ '/assets/img/cleverbirds.png' | relative_url }}" alt="CleverBirds logo" class="publication-thumb">
  </div>
  <div class="publication-body" markdown="1">

**CleverBirds: A Multiple-Choice Benchmark for Fine-grained Human Knowledge Tracing**  
[Leonie Bossemeyer](https://bossemel.github.io/), [Samuel Heinrich](https://www.birds.cornell.edu/home/staff/sam-heinrich/), [Grant Van Horn](https://gvh.codes/), and [Oisin Mac Aodha](https://homepages.inf.ed.ac.uk/omacaod/)  
NeurIPS 2025 Datasets and Benchmarks Track  
[Paper](http://arxiv.org/abs/2511.08512) | [Data](https://huggingface.co/datasets/bossemel/clever_birds) | [Code](https://github.com/visipedia/clever_birds) | [Models](https://huggingface.co/bossemel/cleverbirds_models)

  </div>
</div>


<div class="publication-entry">
  <div class="publication-media">
    <img src="{{ '/assets/img/cmflows.png' | relative_url }}" alt="Copula density estimation with CM Flows" class="publication-thumb">
  </div>
  <div class="publication-body" markdown="1">

**CM Flows-Copula Density Estimation with Normalizing Flows**  
Leonie Bossemeyer  
Master's thesis, University of Edinburgh, 2020  
Supervised by [Dr. Arno Onken](https://homepages.inf.ed.ac.uk/aonken/)  
[Thesis](https://project-archive.inf.ed.ac.uk/msc/20204428/msc_proj.pdf) | [Code](https://github.com/bossemel/CMFlows)

  </div>
</div>
