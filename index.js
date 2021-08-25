const { get } = require('request-promise-native');

function getStats(options){
    let username = options.username;
    let option = {
        url: `https://api.tracker.gg/api/v2/valorant/standard/profile/riot/${encodeURIComponent(username)}/segments/season?playlist=competitive&seasonId=2a27e5d2-4d30-c9e2-b15a-93b8909a442c`,
        method: 'GET',
        headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9",
            "cache-control": "max-age=0",
            "upgrade-insecure-requests": "1"
        },
        json: true
    }
    get(option).then(json => {
            const response = JSON.stringify({username: username, userLink: `https://tracker.gg/valorant/profile/riot/${encodeURIComponent(username)}/overview`,
                rankInfo: {
                rank: json.data[0].stats.rank.metadata.tierName,
                rankImage: json.data[0].stats.rank.metadata.iconUrl,
                },
                userInfo: {
                    damagePerRound: json.data[0].stats.damagePerRound.displayValue,
                    kDRatio: json.data[0].stats.kDRatio.displayValue,
                    headshotsPercentage: json.data[0].stats.headshotsPercentage.displayValue,
                    winRate: json.data[0].stats.matchesWinPct.displayValue,
                    wins: json.data[0].stats.matchesWon.displayValue,
                    kills: json.data[0].stats.kills.displayValue,
                    headshots: json.data[0].stats.headshots.displayValue,
                    deaths: json.data[0].stats.deaths.displayValue,
                    assists: json.data[0].stats.assists.displayValue,
                    scorePerRound: json.data[0].stats.scorePerRound.displayValue,
                    killsPerRound: json.data[0].stats.killsPerRound.displayValue,
                    firstBloods: json.data[0].stats.firstBloods.displayValue,
                    aces: json.data[0].stats.aces.displayValue,
                    clutches: json.data[0].stats.clutches.displayValue,
                    flawless: json.data[0].stats.flawless.displayValue,
                    mostKills: json.data[0].stats.mostKillsInMatch.displayValue
                }
            }, null, 2)
            console.log(response)
    }).catch(error => {
            console.log(`[Valorant Stats] Error: ${error}`)
            throw new Error(`There was an error checking ${username}'s statistics.\nTry checking if the username and tagline is valid, and public your profile.`);
    })
}


module.exports.getStats = getStats;