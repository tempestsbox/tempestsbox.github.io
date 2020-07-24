---
title: "TTB v0.8.0 alpha 7 is now out!"
layout: article
og_description: "General features, updates, and fixes"
---

##### (24/07/20)

### Changes in this version
- Added Sandskull
    - Spawns in desert biomes
    - Skeleton equivalent of the Husk
- Added Ogre
    - Destroys blocks when targeting a player
    - Pounds on-land
- Removed the progression tree advancement tab as it was difficult to maintain
- Improved formatting of the `minecraft:item/barrier` model
    - Some models may be broken, primarily GUIs
    - You can fix GUIs by clicking on any non-slot area
- Added a Tempite Stone trigger sound
- Added a creative/spectator exception for Tempite Gel inventory removal
- Added recipes for:
    - Amethyst Sunpad
    - Tempite Stone
    - Tempite Insulator
- Removed the requirement for a Vulcaanium modifier in machine recipes
- Moved the Tempest Crafter recipe checks to `clock16t`
    - This means recipes will be ran every 16 ticks or 0.8 seconds
- Improved `#ttb:allows_sunlight` block tag
- Improved `#ttb:replace_on_creation` block tag
- Improved Deadlock-item enchantment management
- Given Ratches slow falling
- Eckspei Locker I/O Updates
    - Experience Orbs can now be hoppered into a locker from above
    - You now need a hopper below the locker to output experience to the player (now supports mending!)
    - The Eckspei Locker recipe no longer requires a hopper (replaced with iron ingot)

### Fixes in this version
- Fixed the Amethyst Sunpad continuing to produce sludge/gel at night or in other dimensions ([#14](https://github.com/{{ site.github_user }}/{{ site.github_repo }}/issues/14))
- Fixed the mobs introduced in `a5` not having the `ttb_mob` tag
- Fixed a debug message that was targeting `@a`
- Fixed non-existent function `ttb:entity/function/structure/item_frame/item/diamond`
- Fixed all structure seeding!

---

<div center>
    {% include download_buttons/article.html release="0.8.0+a7" cf_file_id=3013451 %}

    <br>
    <br>

    {% include report_bug.html %}
</div>
