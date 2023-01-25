# ApexArchaeology
 A comprehensive, full-featured bot that supports all dig sites and hotspots, waterfiend familiar, porters, GotE, and plenty more!

**Online Status:** 
✅ (Online)

## Features
##### Supports all Dig Sites and Excavation locations
   * Traverse to all Dig Sites and Excavations via Archaeology Journal or Master Archaeology Outfit
      * Yes... literally all of them! Even includes instanced locations like Warforge's *Thalmund's Forge* and Senntisten's *Colosseum*!
   * Player must have the area unlocked and hotspot discovered for the bot to work as intended
##### Task System
   * Queue multiple excavations across multiple Dig Sites 
       * Tasks can be completed after obtaining a certain Archaeology level, Artefact count or *Material count
          * _*Material count coming soon_
##### Grace of the Elves and Porters
   * Keeps the porter count on your Grace of the Elves topped up. The bank trip will trigger when all porters are gone and porter count within your necklace is depleted
   * Captures Seren Spirits
   * To enable this feature, simply have the porters and Grace of the Elves as a part of your preset
##### Waterfiend Familiar
   * Utilize the Waterfiend to increase your material and artefact gathering rate
   * The bot will refresh the Waterfiend's timer and trigger its special ability when its inventory is full or timer about to expire
##### Special Item Turn-ins
* The bot will automatically Complete Tomes that are granted randomly while excavating
* The bot will automatically turn in Pylon batteries and Skeletal rex fragments
     * Currently disabled feature and will be configured as optional in a future update. These items are currently destroyed prior to a bank trip since they cannot be deposited within the bank
##### Imp-souled Support
   * The bot will automatically drink from Super Restore potions when low on Prayer or Summoning points
##### Soil Box & Upgrades
   * The bot fully supports base-level Soil Box as well as the upgraded versions that can hold more soil
##### Auto-Screener Support
   * Just include the Auto-Screener in your configured preset and the bot will take care of the rest!

## Images

Configuration Menu
![Menu](https://iili.io/H3JY68u.md.png)

Progress Report
![Progress Report](https://iili.io/HFyUHwG.png)

## Requirements
##### Client Settings
- Ensure that your RS client settings are set on `Min` and render distance set to `Min`
   - This seems to alleviate some issues users have when attempting to interact with Bank Chests and Material Deposit Boxes
##### Bot Settings
- Player must have a preset configured that contains the items for the corresponding features you'd like the bot to use
   - For example, Waterfiend familiar pouch and scrolls should be in your preset if you want the bot to use the Waterfiend
- Player must have the desired excavation locations unlocked prior to botting at the location
   - Stormguard for instance is a PITA. I'd advise taking the time to unlock all the portals prior to use for a smooth experience
- Player must have the Archaeology Journal or Master Archaeology outfit as part of their preset
- Player must have **five** available inventory slots configured in their preset
- Player must configure their Material Deposit Box to have "Deposit all" option as their single click option

![Progress Report](https://iili.io/Hz2xPUB.png)

## Changelogs
##### ApexArchaeology v1.0.9
`01/24/2023`
- Chasing Sprite Spirits is now enabled and operational

##### ApexArchaeology v1.0.8
`01/18/2023`
- Fixed an issue that was preventing the bot from refilling porters
- Pylon Batteries and Rex Skeletal Fragments turn-in logic has been reversed due to a bug
    - These items will be destroyed for the time being

##### ApexArchaeology v1.0.7
`01/16/2023`
- Fixed an issue that was preventing the bot from depositing the contents within the Soil Box
- Re-enabled the logic that allows depositing Pylon Batteries and Rex Skeletal Fragments
- Added Varrock lodestone to the traversal logic when attempting to navigate to the Arch Guild if the player does not have other means of getting there
- Improved logic for determining which deposit box to use when at Infernal Source

##### ApexArchaeology v1.0.6
`01/14/2023`
- User settings will now persist through bot sessions
- Fixed an issue that was preventing the bot from depositing Soil Box contents when banking

##### ApexArchaeology v1.0.5
`01/08/2023`
- Updated to work with latest API changes

##### ApexArchaeology v1.0.4
`12/27/2022`
- Extra materials are now deposited in the Material Storage Box prior to banking
    - Added additional logic to bank via after depositing in the material storage if there's a damaged artefact in the bot's inventory
- Fixed issues that was causing certain interface interactions to not work properly after the latest API update
- Fixed an issue at the Kharid-Et location that was preventing the bot from moving between the Prison Block, Praetorium, and Barracks if tasks were set up to cascade between those locations
- Fixed an issue where the bot would attempt to refill Grace of the Elves even if the inventory was full

##### ApexArchaeology v1.0.3
`12/22/2022`
- Updated to work with latest API changes
- Improved navigation to the Everlight Oikoi area
- Improved navigation when traversing between northern warforge tunnels to southern warforge tunnel hotspots
- Added framework to support Material Cache's in a future update

##### ApexArchaeology v1.0.2
`11/29/2022`
- Improved navigation and removed depositArea for Everlight Dominion South location

##### ApexArchaeology v1.0.1
`11/20/2022`
- Improved detection of undiscovered hotspot locations
- Added support for Upgraded Soil Box's increased quantity count

##### ApexArchaeology v1.0.0
`11/18/2022`
- Initial Release