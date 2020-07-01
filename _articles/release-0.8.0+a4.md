---
title: "TTB v0.8.0 alpha 4 is now out!"
layout: article
og_description: "Trying out a new, more readable, changelog system! Changes in this ver..."
---

##### (01/07/20)

Trying out a new, more readable, changelog system!

---

### Changes in v0.8.0+a4
#### Explosion Pillars
+ Now have a model and texture that adapts to when the pillar is exploding
+ When a pillar explodes, it now triggers nearby pillars to do the same
+ On explosion, pillars now release a crit particle area effect cloud to signify the damage range

#### General changes
+ Dutch translations!
* Staffs and Eckspei Rods are now usable in the offhand!

#### Technical changes
* The explosion simulation now deals less damage if you are further than `3.5` blocks away
* Unstackable custom items now get removed from your inventory if their stack size is greater than 1 - this is incredibly janky and causes client-server desync, but it does the job ¯\\_(ツ)\_/¯
* Staff language strings have been updated to allow for better language support - all staffs from previous versions will be named `item.ttb.staff` due to this, but just give yourself a new one on me ❤
* Optimised compound checking
* Optimised carrot-on-a-stick-item durability management

### Bug fixes in v0.8.0+a4
* Fixed a bug where staffs would not be used on their last durability

---

<div center>
    {% include download_buttons/article.html release="0.8.0+a4" cf_file_id=2993811 %}

    <br>
    <br>

    {% include report_bug.html %}
</div>
