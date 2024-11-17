const db = require("pro.db")

module.exports = {
    name: "startleveling",
    description: "Start the leveling system",
    type: "selfbot",
    execute(message) {
        db.set(`levelingStatus_${message.author.id}`, true);
        message.reply(`** ✅ Leveling system started **`);
    }
}