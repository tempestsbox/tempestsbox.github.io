---
title: "TTB v0.8.0 alpha 1 is now out!"
layout: article
og_description: "Say goodbye to ver/1.16 - here's a first alpha release! Remember that this is an alpha release, so not everything from classic TTB will be implemented. On the sa..."
---

**Update** We've just released a quick `a2` hotfix

Say goodbye to `ver/1.16` - here's a first alpha release! Remember that this *is* an alpha release, so not everything from classic TTB will be implemented. On the same topic, if you find any bugs, please [send them to us via the issue tracker](https://github.com/{{ site.github_user }}/{{ site.github_repo }}/issues/new)!

You can find a more detailed explanation of a few of the features below at our work-in-progress TTB wiki - [tempestsbox.github.io/wiki](/wiki)

Most items added by TTB are currently inaccessible in survival mode - to get them, **run `/loot give @s loot ttb:items/<your_item_name>`** in chat.  
If you'd like to explore a custom structure, run `/tag @s add ttb_debug`; then, fly around the world until you see the structure you want in chat, and teleport to the coordinates given. Note that the only non-ore structures that currently spawn in this release are in snowy biomes.

[`Installation Instructions`](/download#installation-instructions)

### Changes in `0.8.0+a2`
```diff
* Fixed missing Item Frame item model
```

### Changes in `0.8.0+a1`
In comparison to classic 0.7\*
```diff
+ Tempite Stone
    * When a Tempite Stone is activated, any adjacent glass blocks
      will be powered with Tempite, sending out a wire-like charge.
      If this charge hits a machine’s back, the machine will be powered.
    * Using a Hopper, you can feed a Tempite Stone Amethyst.
      For every 1 Amethyst, 1000 Tempite is added to the Tempite Stone.
      The maximum amount of Tempite that can be in a Tempite Stone is 64000.
+ Tempite Wire
    * Tempite Wire is the 'wire-like charge' that flows out of Tempite Stone.
    * Tempite Wire replaces the old pink-purple conversion system with
      a spreading entity that travels through glass of the same colour. You
      can bypass the glass having to have the same colour by placing default
      glass in-between two different colours.
+ Acronite Cage
    * When powered, the Acronite Cage will throw a Lingering Potion
      in the direction it is facing - the effect of this potion is Poison by
      default, and Wither when Mysterious.
+ Breaker
    * When powered, the Breaker will break blocks directly in front of
      its front face.
+ Eckspei Locker
    * When powered, the Eckspei Locker absorbs experience orbs in a
      small range in front of itself.
+ Amethyst Crystal
    * Amethyst Crystals can be placed inside Tempite-powered machines
      to reduce their Tempite cost.
+ Vulcaanium Crystal
    * Vulcaanium Crystals can be placed inside Tempite-powered machines
      to ascend their abilities.
+ Mysterious Crystal
    * Mysterious Crystals can be placed inside Tempite-powered machines
      to make their abilities more useful or drastically more effective.
+ Deadlock Dungeons
    * A massive remake of the classic TTB dungeons, where each dungeon
      generated in the world is completely different to any other!
    * These dungeons are completely naturally generated, even down to
      their corridors!
+ Restoration Tome
    * Place a Restoration Tome in the Tempest Crafter's modifier slot
      (the single slot to the left) along with a damaged tool or staff
      in a grid slot, and that tool will be repaired, consuming the
      tome.
+ Staff Left-Click Abilities
    * ...and modification of their right-click abilities to account for these.
    * 'Left-click' implies hurting an entity while holding the staff.
    * The general rules for left-click vs right-click are that left-click affects
      a mob, and right-click affects the player.
+ Per-Staff Durability
    * Every staff item now has its own durability, which is shown in its lore
      and as a durability bar like other items!
+ Tempest Crafter custom GUI
+ Machine custom GUIs
```
