---
title: "Acronite Cage"
reg_id: "acronite_cage"
description: "The Acronite Cage releases a vile of poisonous gas in the direction it faces, affecting all entities its cloud hits"
---

<!-- Obtaining -->
<!-- Breaking -->
{% include text/obtaining/breaking/barrel.md %}

### Crafting
{% include recipe.html ingredients="7 Blackstone, 1 Dispenser, and 1 Iron Bar" %}

## Usage
### Machine
When powered, the Acronite Cage will throw a {% include mcwiki.html url="Lingering_Potion" title="Lingering Potion" %} in the direction it is facing - the effect of this potion is {% include mcwiki.html url="Poison" title="Poison" %} by default, and {% include mcwiki.html url="Wither" title="Wither" %} when [Mysterious]({{ page.url }}#mysteriosity).
{% include fig.html src="/assets/docs/acronite_cage/cross_section.gif" caption="Default Acronite Cage setup" %}
{% include fig.html src="/assets/docs/acronite_cage/birds_eye.gif" caption="Acronite Cages with 5 <a href=\"Vulcaanium_Crystal\">Vulcaanium Crystals</a> (top/bottom), and Acronite Cages with 4 <a href=\"Vulcaanium_Crystal\">Vulcaanium Crystals</a> and a <a href=\"Mysterious_Crystal\">Mysterious Crystal</a> (left/right)" %}
#### Ascension
Ascension of the {{ page.title }} causes the potion to be thrown further. The calculation for its motion is `0.1 * (2 * (ascension level + 1))`
- *See [Machine § Ascension](Machine#ascension)*

#### Mysteriosity
When Mysterious, the thrown potion's effect is changed to {% include mcwiki.html url="Wither" title="Wither" %}, as opposed to the default {% include mcwiki.html url="Poison" title="Poison" %}.
- *See [Machine § Mysteriosity](Machine#mysteriosity)*

### Tempite Component
{{ page.title }}s can be powered from the back by [Tempite Wire](Tempite_Wire).
- *See [{{ page.title }} § Machine ](#machine)*
{% include data_table/machine_cost.html block_name=page.title block_texture_path="block/acronite_cage_front" cost_base=40 cost_ascension=5 cost_reduction=6 %}

### Breaking
{% include data_table/obtaining/breaking/barrel.html block_name=page.title block_texture_path="block/acronite_cage_front" %}

<!-- Data Values -->
<!-- ID -->
{% include data_table/data_values.html block_name=page.title block_id=page.reg_id block_texture_path="block/acronite_cage_front" %}
