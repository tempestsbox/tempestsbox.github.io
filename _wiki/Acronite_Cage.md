---
title: "Acronite Cage"
layout: wiki/default
new: true
description: "The Acronite Cage releases a vile of poisonous gas in the direction it faces, affecting all entities its cloud hits"
extra_description: "."
categories: [ block, machine ]
image_path: "acronite_cage.png"
---

<!-- Obtaining -->
<!-- Breaking -->
{% include text/obtaining/breaking/barrel.md %}

### Crafting
{% include recipe.html src="/assets/docs/acronite_cage/recipe.png" ingredients="2 Vulcaanium Crystals, 6 Blackstone, 2 Iron Bars, and 1 Amethyst" %}

## Usage
### Machine
When powered, the Acronite Cage will throw a {% include mcwiki.html url="Lingering_Potion" title="Lingering Potion" %} in the direction it is facing - the effect of this potion is {% include mcwiki.html url="Poison" title="Poison" %} by default, and {% include mcwiki.html url="Wither" title="Wither" %} when [Mysterious]({{ page.url }}#mysteriosity).
{% include fig.html src="/assets/docs/acronite_cage/showcase.gif" caption="Acronite Cages with 5 <a href=\"/wiki/Vulcaanium_Crystal\">Vulcaanium Crystals</a> (top/bottom), and Acronite Cages with 4 <a href=\"/wiki/Vulcaanium_Crystal\">Vulcaanium Crystals</a> and a <a href=\"/wiki/Mysterious_Crystal\">Mysterious Crystal</a> (left/right)" %}
#### Ascension
Ascension of the {{ page.title }} causes the potion to be thrown further. The calculation for its motion is `0.1 * (2 * (ascension level + 1))`
#### Mysteriosity
When Mysterious, the thrown potion's effect is changed to {% include mcwiki.html url="Wither" title="Wither" %}, as opposed to the default {% include mcwiki.html url="Poison" title="Poison" %}.
- *See [Machine § Mysteriosity](/wiki/Machine#mysteriosity)*

### Tempite Component
{{ page.title }}s can be powered from the back by [Tempite Wire](/wiki/Tempite_Wire).
- *See [{{ page.title }} § Machine ](#machine)*
{% include data_table/machine_cost.html block_name=page.title block_id="acronite_cage" block_texture_path="block/acronite_cage_front" cost_base=40 cost_ascension=5 cost_reduction=6 %}

### Breaking
{% include data_table/obtaining/breaking/barrel.html block_name=page.title block_id="acronite_cage" block_texture_path="block/acronite_cage_front" %}

<!-- Data Values -->
<!-- ID -->
{% include data_table/data_values.html block_name=page.title block_id="acronite_cage" block_texture_path="block/acronite_cage_front" %}
