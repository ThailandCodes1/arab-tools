const fs = require("fs")
let path = "./database.json"


module.exports = {
    name: "setlevelingchannel",
    description: "Set the leveling channel",
    type: "selfbot",
    execute(message) {
        const channel = message.mentions.channels.first();
        if (!channel) return message.reply("Please mention a channel or provide a channel ID");
        /*
        leveling: [
            {
                user: string,
                channel: string,
                status: boolean
            }
        ]
        */
        let leveling = JSON.parse(fs.readFileSync(path, "utf8"))
        if (!leveling.leveling) leveling.leveling = []

        const existingEntry = leveling.leveling.find(entry => entry.user === message.author.id)
        if (existingEntry && existingEntry.channel === channel.id) {
            return message.reply("** ❌ This channel is already set as leveling channel **")
        }

        if (existingEntry) {
            existingEntry.channel = channel.id
        } else {
            leveling.leveling.push({
                user: message.author.id,
                channel: channel.id,
                status: true
            })
        }

        fs.writeFileSync(path, JSON.stringify(leveling, null, 2))
        message.reply(`** ✅ Leveling channel set to ${channel} **`)
    }
}
