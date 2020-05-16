---
title: "Wiki"
layout: default
prefix-icon: "fas fa-book"
navigation_weight: 2
---

<div class="portfolio-list">
    {% assign wiki_frequents = site.wiki | sort: 'frequent_weight' %}{% for wiki in wiki_frequents %}{% if wiki.frequent == true %}{% if wiki.frequent_weight %}
    <div class="item">
        {% if wiki.new %} <h3 class="date">New in {{ wiki.new }}!</h3>{% endif %}
        <h3 class="title">{{ wiki.title }}</h3>
        <h5 class="subtitle">{{ wiki.tags }}</h5>
        <a class="bubble" href="{{ wiki.url }}" rel="noopener noreferrer">
            <img class="inner" src="/assets/docs/{{ wiki.image-path }}" alt="docs/{{ wiki.image-path }}">
        </a>
        <p class="small">{{ wiki.description }}</p>
    </div>
    {% endif %}{% endif %}{% endfor %}
</div>
