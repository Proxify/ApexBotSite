# ApexSmithing
Efficiently queue smelting & smithing tasks at Artisan's Workshop. Create all items from Base -> Burial and repeat!

**Online Status:**
✅(Online) - *Task queue is currently broken, pending Abyss client update

### Features
##### Smelt All Bars & Corrupted Ore
- Excludes Masterwork bars (for now)
- Supports smelting bars directly back into the furnace via Family Crest quest completion
##### Smith all base items and all upgrade levels
- Can be configured to smith from Base -> Burial from scratch or just simply finish off your burial-ready items!
##### Supports Task queueing
- For example, you can configure the bot to smelt 384 Elder Rune Bars and then use those bars to create a full Elder Rune set, all the way from Base to Burial set
- When all tasks are complete, the bot can idle or repeat the queue

### Requirements
- Recommended to use at Artisan's Workshop. The bot can work at other locations, but it is optimized and tested here.
- Smelting Gold or Silver bars requires to completion of Family Crest

### Images
Bot Configuration
![Bot Configuration](https://iili.io/bY9JwX.png)

## Changelogs
##### ApexSmithing v1.0.8
`05/05/2023`
- Updated to work with latest client changes
    - Fixed an issue that was causing the bot to crash when smithing an item
    - Fixed an issue that was preventing the bot from selecting the correct upgrade level
    - Fixed an issue that was preventing the bot from progressing past the smelting interface when smelting bars

##### ApexSmithing v1.0.7
`03/10/2023`
- Fixed an issue that was preventing the bot from accurately determining if it has the resources to smith an item

##### ApexSmithing v1.0.6
`02/11/2023`
- Updated to work with latest Abyss client

##### ApexSmithing v1.0.5
`01/28/2023`
- Fixed an issue that was preventing the smelting of Iron, Steel, and Elder Rune bars

##### ApexSmithing v1.0.4
`01/14/2023`
- Updated for latest Abyss API changes
- User settings will now persist through bot sessions
- The player should no longer reopen the Furnace while active smelting bars

##### ApexSmithing v1.0.3
`01/08/2023`
- Updated to work with latest API changes

##### ApexSmithing v1.0.2
`12/22/2022`
- Updated to work with latest API changes
- Addressed an issue that was preventing the bot from interacting with the Forge to reheat an item
- "Kiteshield" was showing twice as a craftable option for the newer metals, this has been fixed

##### ApexSmithing v1.0.1
`10/31/2022`
- Added support for Gold and Silver bars (Family Crest quest required)

##### ApexSmithing v1.0.0
`10/30/2022`
- Initial Release