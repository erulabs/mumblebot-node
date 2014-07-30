// League API Goes Here
module.exports = function(initData){
    var GAME_CONSTANTS = {
        MAP_NAMES: {
            1: "Summoner's Rift (Summer)",
            2: "Summoner's Rift (Autumn)",
            3: "The Proving Grounds (Tutorial)",
            4: "Twisted Treeline (Old)",
            8: "The Crystal Scar (Dominion)",
            10: "Twisted Treeline (New)",
            12: "Howling Abyss (ARAM)"
        },
        GAME_MODES: {
            CLASSIC: "Classic Summoner's Rift and Twisted Treeline games",
            ODIN: "Dominion / Crystal Scar games",
            ARAM: "ARAM games",
            TUTORIAL: "Tutorial games",
            ONEFORALL: "One for All games",
            FIRSTBLOOD: "Snowdown Showdown games"
        },
        GAME_TYPES: {
            CUSTOM_GAME: "Custom games",
            TUTORIAL_GAME: "Tutorial games",
            MATCHED_GAME: "All other games"
        },
        GAME_SUBTYPES: {
            NONE: "Custom",
            NORMAL: "Summoner's Rift Unranked",
            NORMAL_3x3: "Twisted Treeline Unranked",
            ODIN_UNRANKED: "Dominion Unranked",
            ARAM_UNRANKED_5x5: "ARAM Unranked",
            BOT: "Bot Game On Summoner's Rift and Dominon",
            BOT_3x3: "Bot Game On Twisted Treeline".
            RANKED_SOLO_5x5: "Ranked Summoner's Rift",
            RANKED_TEAM_5x5: "Ranked Team Summoner's Rift",
            RANKED_TEAM_3x3: "Ranked Team Twisted Treeline",
            ONEFORALL_5x5: "One for All",
            FIRSTBLOOD_1x1: "Snowdown Showdown",
            FIRSTBLOOD_2x2: "Team Snowdown Showdown",
            SR_6x6: "Hexakill",
            CAP_5x5: "Team Builder",
            URF: "Ultra Rapid Fire",
            URF_BOT: "Bot Game on Ultra Rapid Fire",
            NIGHTMARE_BOT: "Nightmare Bots"
        }.
        PLAYER_STAT_SUMMARY_TYPES: {
            Unranked: "Summoner's Rift Unranked",
            Unranked3x3: "Twisted Treeline Unranked",
            OdinUnranked: "Dominion Unranked",
            AramUnranked5x5: "ARAM Unranked",
            CoopVsAI: "Bot Game On Summoner's Rift and Dominon",
            CoopVsAI3x3: "Bot Game On Twisted Treeline",
            RankedSolo5x5: "Ranked Summoner's Rift",
            RankedTeam3x3: "Ranked Team Summoner's Rift",
            RankedTeam5x5: "Ranked Team Twisted Treeline",
            OneForAll5x5: "One for All",
            FirstBlood1x1: "Snowdown Showdown",
            FirstBlood2x2: "Team Snowdown Showdown",
            SummonersRift6x6: "Hexakill",
            CAPS5x5: "Team Builder",
            URF: "Ultra Rapid Fire",
            URFBots: "Bot Game on Ultra Rapid Fire",
        }
    }
    var q = require('q');
    return {
        stats: function(summoner, region){

        }
    }
}