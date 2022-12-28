# ApexMining
 A full-featured bot supporting several locations, multiple playstyles, ore boxes, seren spirits, Juju potions, and more!

### **Online Status** - ✅ (Private Beta)

## Features
##### Supports all Ore Boxes
- Fully utilizes varbit values to determine ore box status. Including completion for Everything is Oresome
- Bot will fill ore boxes from the action bar if the ore box exists on the action bar. Otherwise, it will fill via Inventory
##### Multi-Rock Mining
- Allows the user to select multiple rocks from within the same location. This allows the bot to fill the Ore Box with multiple ores before making a bank trip
- An Ore Box is required for this feature to function properly
##### Bank presets
- Utilize presets for faster banking and a smoother botting experience
- For certain features to work as intended, your bank preset must be configured to include those items. Such as:
    - Juju potions
    - Porters
    - Grace of the Elves.
##### Grace of the Elves and Porters
- Will automatically refill porters in GotE if the necklace is equipped.
    - If the necklace is not found and porters are in the player's inventory, then the bot will equip the porter
- Automatically captures Seren Spirits
##### Juju Potions
- Perfect Plus, Perfect Mining Juju, and Normal Juju potions are supported
- The bot will consume a new Juju potion when the time is expired or near expiration
    - *The bot will also withdraw and consume a portion of a Juju potion itself during a bank trip if the user does not have a potion set up within their preset (and the bot is configured to use presets)*
##### Rockertunities
- The bot will efficiently interact with Rockertunities based on the bot's chosen playstyle
##### Mining Urns
- Requires user to configure and use bank presets to withdraw the urns
- Requires the user to enable auto-teleport urns in the game's settings
##### All Mine-able locations include a bankable location.
- Deposit Box and Anvil/Forge deposits are supported.
##### Multiple Playstyles
- This controls time until refilling stamina as well as when the bot chooses to gather rockertunities
- Playstyles:
    - 4-Tick / Active
        - Actively clicks on the rock every 4 ticks.
    - Normal
        - Will click on the rock to refresh stamina every 4 to 40 seconds.
    - AFK
        - Will click on the rock to refresh stamina (and stay logged in) every 8 seconds to 3 minutes.
        - This mode can be more geared towards true AFK gameplay if the user also disables AntiBan in the configuration menu.
    - Intelligent
        - This playstyle toggles the user between Active, Normal, and AFK playstyles
        - An 'Active' event can run no longer than 3 minutes at a time
        - A 'Normal' event can run no longer than 8 minutes at a time
        - An 'AFK' event can run no longer than 10 minutes at a time
    - Intelligent (No AFK)
        -  Same as Intelligent but excludes the AFK playstyle
- Intelligent Playstyles:
    - Each playstyle toggle event has a weighted calculation to choose which playstyle is next. The following is a playstyles rough chance of being chosen:
    - Intelligent:
        - Active: ~30%
        - Normal: ~55%
        - AFK: ~15%
    - Intelligent (No AFK):
        - Active: ~35%
        - Normal: ~65%

## Locations
- Burthorpe Mines
- Dwarven Mines
- Varrock East / West
- Remmington (Clan Camp)
- Mining Guild
- Al Kharid Mine
- Yanille
- Port Phasmatys
- North Fremennik (Bane)
- Empty Throne Room (Dark Animica)
- Prifddinas
- Tirannwn (Light Animica)
    - Requires user to have Tirannwn location unlocked
- Uzer (Necrite)
    - Requires user to have Shantay Pass Travel-Throuh Message turned off
    - Requires user to have Uzer unlocked for Magic Carpet
    - Dangerous location. Protection from desert heat is highly recommended. (Include in your preset)
- Al Kharid Resource Dungeon
    - Requires 75 Dungeoneering
- Mining Guild Resource Dungeon
    - Requires 45 Dungeoneering & 60 Mining
- Wilderness Level 6 (Runite rock)
    - Dangerous location

## Rocks
- Copper
- Tin
- Iron
- Coal
- Silver
- Mithril
- Adamantite
- Luminite
- Gold
- Runite
- Orichalcite
- Drakolith
- Necrite
- Phasmatite
- Bane
- Light Animica
- Dark Animica
- Prifddinas Gem Rock
- Seren Stone

## Images

Configuration Menu
![Menu - Placeholder](TBD)

## Changelogs
##### ApexMining v0.0.1
`12/28/2022`
- Private beta release