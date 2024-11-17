const db = require("pro.db")


module.exports = {
    name: "setlevelingchannel",
    description: "Set the leveling channel",
    type: "selfbot",
    execute(message) {
        const channel = message.mentions.channels.first();
        if (!channel) return message.reply("Please mention a channel or provide a channel ID");
        db.set(`levelingChannel_${message.author.id}`, channel.id);
        message.reply(`** ✅ Leveling channel set to ${channel} **`);
    }
}
