const db = require("pro.db")
const { SelfClient } = require("../../index")

module.exports = {
    name: "stayinvoice",
    description: "Stay in voice channel",
    type: "selfbot",
    execute(message) {
        const channel = message.mentions.channels.first();
        if (!channel) return message.reply("** ❌ Please provide a voice channel **");
        if (channel.type !== "GUILD_VOICE") return message.reply("** ❌ Please provide a voice channel **");
        SelfClient.VoiceStay({
            channel: channel.id,
            guild: message.guild.id,
        })

        message.reply(`** ✅ Stay in voice channel success **`)
    }
}
