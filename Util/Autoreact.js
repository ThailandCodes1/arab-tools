const db = require("pro.db")
module.exports = (selfbot) => {
    const autoReactList = db.get("autoReact");
    if (!autoReactList) return;
    autoReactList.forEach(([userId, botIds]) => {
        botIds.forEach(botId => {
            selfbot.autoreaction({
                customBotID: [botId],
                timeout: 5000,
                blacklistedwords: [],
                ownerId: userId,
            });
        });

        selfbot.on("giveawayCreated", (data) => {
            // Handle giveaway created event
        });

        selfbot.on('wins', (data) => {
            // Handle wins event
        });
    });
}