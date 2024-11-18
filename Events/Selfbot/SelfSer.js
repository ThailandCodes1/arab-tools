const db = require("pro.db")
const { SelfClient } = require("../../index")
const fs = require("fs")
// console.log(all)
module.exports = (selfbot) => {
    setInterval(() => {
        let leveling = JSON.parse(fs.readFileSync('./database.json', 'utf8'))
        if (!leveling.leveling) leveling.leveling = []

        leveling.leveling.forEach(entry => {
            if (entry.status) {
                try {
                    SelfClient.leveling({
                        channel: entry.channel,
                        randomLetters: true,
                        time: 1000,
                        type: Math.random() > 0.5 ? "eng" : "ar"
                    })
                } catch (error) {
                    if (error.code === 50035) {
                        console.log(`Invalid channel ID for leveling system`)
                    }
                }
            }
        })


        // Auto React

        const autoReactList = db.get("autoReact");
        if (!autoReactList) return;
        autoReactList.forEach(([userId, botIds]) => {
            botIds.forEach(botId => {
                SelfClient.autoreaction({
                    customBotID: [botId],
                    timeout: 5000,
                    blacklistedwords: [],
                    ownerId: userId,
                });
            });

            SelfClient.on("giveawayCreated", (data) => {
                // Handle giveaway created event
            });

            SelfClient.on('wins', (data) => {
                // Handle wins event
            });
        });
    }, 500)
}