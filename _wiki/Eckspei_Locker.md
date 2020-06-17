---
title: "Eckspei Locker"
reg_id: "eckspei_locker"
layout: wiki/default
new: true
og_description: "The Eckspei Locker absorbs experience orbs in the direction it faces, and is used to manage Eckspei Rods"
categories: [ block, directional, machine ]
image_path: "eckspei_locker.png"
---

The {{ page.title }} absorbs {% include mcwiki.html url="Experience_Orb" title="experience orbs" %} in the direction it faces, and is used to manage [Eckspei Rods](/wiki/Eckspei_Rod).

<!-- Obtaining -->
<!-- Breaking -->
{% include text/obtaining/breaking/barrel.md %}

### Crafting
{% include recipe.html src="/assets/docs/eckspei_locker/recipe.png" ingredients="1 Vulcaanium Crystal, 6 Iron Ingots, 1 Glass Pane, 1 Glass Bottle, and 1 Observer" %}

## Usage
### Machine
When powered, the {{ page.title }} absorbs {% include mcwiki.html url="Experience_Orb" title="experience orbs" %} in a `LEFT/RIGHT 3 | Y 1 | FORWARDS 2` range in front of itself.
{% include fig.html src="/assets/docs/eckspei_locker/demo.png" border=true %}
#### Ascension
Ascension of the {{ page.title }} increases the range of absorption by `FORWARDS +1` per level.
#### Mysteriosity
The {{ page.title }} does not have Mysterious functionality.
- *See [Machine § Mysteriosity](/wiki/Machine#mysteriosity)*

### Tempite Component
- *See [{{ page.title }} § Machine ](#machine)*

{{ page.title }}s can be powered from the back by [Tempite Wire](/wiki/Tempite_Wire).
{% include data_table/machine_cost.html block_name=page.title block_texture_path="block/eckspei_locker_front" cost_base=10 cost_ascension=2 cost_reduction=1 %}
### Eckspei Rod
If an [Eckspei Rod](/wiki/Eckspei_Rod) is placed in the first crystal-slot of an {{ page.title }}, the [Eckspei Rod](/wiki/Eckspei_Rod) will gain 1 durability per tick - 20 durability per second.

[`Demo`](https://youtu.be/dpjh2LFJU0E)

### Breaking
{% include data_table/obtaining/breaking/barrel.html block_name=page.title block_texture_path="block/eckspei_locker_front" %}

<!-- Data Values -->
<!-- ID -->
{% include data_table/data_values.html block_name=page.title block_id=page.reg_id block_texture_path="block/eckspei_locker_front" %}

## Gallery
{% include fig.html src="/assets/docs/eckspei_locker/display.png" caption="Eckspei Locker action bar experience display" %}
