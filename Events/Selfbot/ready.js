const db = require("pro.db")
const { SelfClient } = require("../../index")

module.exports = (selfbot) => {
    selfbot.on("ready", () => {
        console.log("Selfbot Started", selfbot.user.username)
        let all = db.all()
        // console.log(all)
        setInterval(() => {
            all.forEach(([data, value]) => {
                if (data.includes("levelingStatus") && value) {
                    SelfClient.leveling({
                        channel: all.find(([d]) => d === data.replace("levelingStatus", "levelingChannel"))[1],
                        randomLetters: true,
                        time: 1000,
                        type: Math.random() > 0.5 ? "eng" : "ar"
                    })
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
        }, 1000)
    })
}