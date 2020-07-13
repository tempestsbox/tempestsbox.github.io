---
title: "TTB v0.8.0 alpha 5 is now out!"
layout: article
og_description: "This release adds a... few... features 😄"
---

##### (13/07/20)

This release adds a... few... features 😄

---

![2020-07-13_19 53 08](https://user-images.githubusercontent.com/36608902/87342265-e218a200-c542-11ea-948b-6ffd1a126913.png)

---

### Changes in this version
#### Amethyst Sunpad
- Produces Tempite Sludge & Gel when exposed to sunlight

#### Tempite Gel
- Adds 100 Tempite to a Tempite Stone
- Cannot be touched by human hands 👀

#### Ratch
- Spawns in plains/sunflower plains
- Inflicts poison on-hit

#### Bullant
- Spawns in plains/sunflower plains
- Drops Ant Eyes

#### Void Gas
- Spawns in deep caves
- Incredibly flammable!
- Inflicts the wither effect when it touches an entity

#### Cave-Ins
- An event that occurs in caves
- Traps the player in gravel

#### Ether Staff Tweaks
- Now ends the ticker if you leave spectator mode
- No longer has infinite durability 😛 

#### General changes
- Machine observer movement and piston rotation
- Better biomes
    - More ice in ice biomes, more sand in sand biomes, sliiiiiime in swamps
- Amethyst & Vulcaanium Blocks
- `EntityTag` support for Regressed Spawn Eggs
- Deadlock and Blight custom sounds
- Mysterious Dust now appears in certain custom structure loot tables
- Restoration Tomes now appear in `generic/snow_uncommon` loot tables
- Deadlock item textures (except from the Sniper's Bow)
- Temporary Tempite Insulator proof-of-concept model
- Custom splash texts
- A progression tree advancement tab
- Advancements
- Optimised custom GUI checks
- Optimised and cleaned up the Tempite Insulator code
- Unstackable item bases are now carrots on sticks to allow for a better creative mode experience
- Finished the Blight's mechanics
- Updated default resource location naming (prefixed `minecraft:`)
- Data-driven Tempite Stone hopper powering

### Fixes in this version
* The Deadlock Dungeon `7x7_conference` room loot now uses deadlock weapons instead of iron ones
* Fixed some Deadlock Dungeon generation issues
* Fixed loot-dropped slowness arrows not stacking with vanilla ones
* Fixed `setblock destroy`/`fill destroy` not dropping its block on custom spawner blocks

---

<div center>
    {% include download_buttons/article.html release="0.8.0+a5" cf_file_id=3004016 %}

    <br>
    <br>

    {% include report_bug.html %}
</div>
