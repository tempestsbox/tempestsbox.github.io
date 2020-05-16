---
title: "Wiki"
layout: default
prefix-icon: "fas fa-book"
navigation_weight: 2
---

<div class="frequents-list">
    {% assign wiki_frequents = site.wiki | sort: 'frequent_weight' %}{% for wiki in wiki_frequents %}{% if wiki.frequent == true %}{% if wiki.frequent_weight %}
    <div class="item{% if wiki.new %}{% else %} push-down{% endif %}">{% if wiki.new %}
        <h3 class="date">New in {{ wiki.new }}!</h3>{% endif %}
        <h3 class="title">{{ wiki.title }}</h3>
        <h5 class="subtitle">{{ wiki.tags }}</h5>
        <a class="bubble" href="{{ wiki.url }}" rel="noopener noreferrer">
            <img class="inner" src="/assets/docs/{{ wiki.image-path }}" alt="docs/{{ wiki.image-path }}"{% if wiki.peekaboo == true %} onmouseover="peekaboo(this);" onmouseout="unpeekaboo(this);"{% endif %}>
        </a>
        <p class="small">{{ wiki.description }}</p>
    </div>
    {% endif %}{% endif %}{% endfor %}
</div>

<script>
    function peekaboo(element) {
        element.setAttribute("src", "/assets/docs/tempite_stone.peekaboo.png");
        element.setAttribute("alt", "docs/tempite_stone.peekaboo.png");
    }
    function unpeekaboo(element) {
        element.setAttribute("src", "/assets/docs/tempite_stone.png");
        element.setAttribute("alt", "docs/tempite_stone.png");
    }
</script>
