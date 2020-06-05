---
title: "Breaker"
layout: wiki/default
new: true
description: "The Breaker breaks blocks in the direction it faces"
extra_description: "."
categories: [ block, machine ]
image-path: "breaker.png"
---

<!-- Obtaining -->
<!-- Breaking -->
{% include text/obtaining/breaking/barrel.md %}

### Crafting
{% include recipe.html src="/assets/docs/breaker/recipe.png" ingredients="2 Vulcaanium Crystals, 6 Blackstone, 2 Iron Bars, and 1 Amethyst" %}

## Usage
### Machine
When powered, the Breaker will break blocks directly in front of its front face.
{% include fig.html src="/assets/docs/breaker/demo.png" border=true %}
#### Ascension
Ascension of the {{ page.title }} increases the distance that it breaks.
#### Mysteriosity
The {{ page.title }} does not have Mysterious functionality.
### Tempite Component
- *See [{{ page.title }} § Machine ](#machine)*

{{ page.title }}s can be powered from the back by [Tempite Wire](/wiki/Tempite_Wire).
{% include data_table/machine_cost.html block_name="Breaker" block_id="breaker" block_texture_path="block/breaker" cost_base=20 cost_ascension=4 cost_reduction=3 %}

### Breaking
{% include data_table/obtaining/breaking/barrel.html block_name="Breaker" block_id="breaker" block_texture_path="block/breaker_front" %}

<!-- Data Values -->
<!-- ID -->
{% include data_table/data_values.html block_name="Breaker" block_id="breaker" block_texture_path="block/breaker" %}
