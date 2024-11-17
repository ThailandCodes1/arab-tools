const db = require("pro.db")

module.exports = {
    name: "add-autoreact-bot",
    description: "Add a bot for auto reactions",
    type: "selfbot",
    async execute(message, args) {
        const mentionedUser = message.mentions.users.first();
        if (!mentionedUser) {
            return message.reply("Please provide a bot.");
        }

        const botId = mentionedUser.id;
        const userAutoReact = db.get("autoReact") || [];
        const userId = message.author.id;

        let userEntry = userAutoReact.find(([uid]) => uid === userId);
        if (userEntry) {
            if (userEntry[1].includes(botId)) {
                return message.reply("** ❌ This bot is already in the auto react list **");
            }
            userEntry[1].push(botId);
        } else {
            userAutoReact.push([userId, [botId]]);
        }

        db.set("autoReact", userAutoReact);
        message.reply(`** ✅ Auto react bot set to ${botId} **`);
    }
}