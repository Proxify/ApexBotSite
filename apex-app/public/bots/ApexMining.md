# ApexMining
A full-featured bot supporting several locations, multiple playstyles, ore boxes, seren spirits, Juju potions, and more!

**Online Status:** 
⚠️ (Partial)
* Juju potions currently broken in the latest client release

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
- Mining Guild Resource Dungeon
    - Requires 45 Dungeoneering & 60 Mining
- Al Kharid Mine
- Al Kharid Resource Dungeon
    - Requires 75 Dungeoneering
- Yanille
- Port Phasmatys
- North Fremennik (Bane)
- Empty Throne Room (Dark Animica)
- Prifddinas
- Anachronia (Light Animica)
- Tirannwn (Light Animica)
    - Requires user to have Tirannwn location unlocked
- Uzer (Necrite)
    - Requires user to have Shantay Pass Travel-Throuh Message turned off
    - Requires user to have Uzer unlocked for Magic Carpet
    - Dangerous location. Protection from desert heat is highly recommended. (Include in your preset)
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
![Menu](https://iili.io/H55GDrl.md.png)

## Changelogs
##### ApexMining v1.0.9
`02/24/2023`
- Improved overall object interactions in several traversal pathing logics
- Added Precious Gem Rock locations for:
    - Al-Kharid Resource Dungeon Mine
    - Shilo Village Mine
- Added Common Gem Rock location for:
    - Al-Kharid Normal Mine
- Fixed traversals:
    - Yanille
    - Al-Kharid Mine
    - Al-Kharid Resource Dungeon Mine
        - The bot will utilize the Archaeology outfit or journal to bank via the Arch guild if that bank is chosen
        - Additionally, the bot will also use the rock shortcut when traversing back to the mine if the player's Agility level is 38 or higher


##### ApexMining v1.0.8
`02/15/2023`
- Addressed an issue that was preventing the bot from banking at Edgeville bank
- Added May's Chest as a support bank location for Varrock West Mining
- Improved traversals to and from Al Kharid Resource Dungeon, Mining Guild, and Wilderness Level 6 Mine
- Fixed an issue that was causing the Location / Rock menu results to be inaccurate for certain locations
- Fixed a bunch of locations that were not configured properly:
    - Lumbridge Swamp East & West
    - Wilderness Level 6 Mine
    - Gem Rocks at Burthorpe Mine
    - Mithril, Adamant, and Rune rock at Prifddinas

##### ApexMining v1.0.7
`02/11/2023`
- Addressed an issue that was preventing the bot from depositing contents in the ore box when not configured to use a preset
- Updated to work with latest Abyss client

##### ApexMining v1.0.6
`02/01/2023`
- Improved logic for determining rockertunity positioning
    - Previously, if two rocks were too close the bot would not be able to distinguish which rock had the rockertunity active
- Added Forge/Anvil deposit option for Burthorpe bank location
- Added Archaeology Guild bank as a deposit option for Arctic Habitat, Remmington, Varrock West, and Anachronia mining locations
- Improved traversals to Varrock East, Burthorpe and Remmington mine locations

##### ApexMining v1.0.5
`01/28/2023`
- Added Anachronia location support for Light Animica

##### ApexMining v1.0.4
`01/27/2023`
- Fixed an issue that was causing the bot to get stuck during banking trips at certain locations
- Fixed traversals at Prifddinas

##### ApexMining v1.0.3
`01/23/2023`
- Fixed an issue that was causing the client to crash when the bot would bank without a configured preset

##### ApexMining v1.0.2
`01/16/2023`
- Fixed traversal for Empty Throne Room location
    - The bot will utilize the Arch Journal if found within the player's inventory or is equipped

##### ApexMining v1.0.1
`01/14/2023`
- Updated for latest Abyss API changes
- Improved navigation for Mining Guild location

##### ApexMining v1.0.0 (Official Release)
`01/08/2023`
- Updated to work with latest API changes
- Mining Rockertunities are now operational
- The bot will now continue mining the last rock to fill the player's inventory once the Ore Box is full
- Fixed an issue that was preventing Drakolith mining from working properly
- Fixed an issue that was causing the bot to bank early
- Silver and Iron rocks can now be mined within the Burthorpe Mining site

##### ApexMining v0.0.3 (Beta)
`01/07/2023`
- Added persistent saves / JSON serialization & deserialization
- Fixed a NPE when attempting to determine the current mine task
- Fixed an issue that was causing the OreBox to be skipped over when depositing into a bank
- Fixed an issue with depositing via Forge / Anvil

##### ApexMining v0.0.2 (Beta)
`01/01/2023`
- Public beta release
- Added basic logic for all MineLocation and BankLocation traversals. These will need to be thoroughly tested.
- Fixed a NPE when attempting to deposit items in a Bank or Deposit Box
- Fixed a NPE that would occur when determining the active "RockTask" within a "MineTask"
- Added the ability to enable presets in the GUI
- Fixed an issue that was causing the bank deposit logic to only deposit ore from the latest "RockTask"

##### ApexMining v0.0.1 (Beta)
`12/28/2022`
- Private beta release