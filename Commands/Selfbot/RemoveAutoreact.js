const db = require("pro.db");

module.exports = {
    name: "remove-autoreact-bot",
    description: "Remove the auto react bot",
    type: "selfbot",
    async execute(message) {
        const args = message.content.split(" ").slice(1);
        const userAutoReact = db.get("autoReact") || [];
        const userId = message.author.id;
        const userEntry = userAutoReact.find(([uid]) => uid === userId);
        if (!userEntry) return message.reply("** ❌ No auto react bots found for your account **");

        const botIndex = userEntry[1].indexOf(args[0]);
        if (botIndex === -1) {
            return message.reply(`** ❌ Bot ID ${args[0]} is not in your auto react list. Current list: ${userEntry[1].join(", ")} **`);
        }

        userEntry[1].splice(botIndex, 1);
        if (userEntry[1].length === 0) {
            const userIndex = userAutoReact.findIndex(([uid]) => uid === userId);
            userAutoReact.splice(userIndex, 1);
        }

        db.set("autoReact", userAutoReact);
        message.reply("** ✅ Auto react bot removed **");
    }
}
