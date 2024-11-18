const fs = require("fs")
let path = "./database.json"

module.exports = {
    name: "startleveling",
    description: "Start the leveling system", 
    type: "selfbot",
    execute(message) {
        let leveling = JSON.parse(fs.readFileSync(path, "utf8"))
        if (!leveling.leveling) leveling.leveling = []

        const existingEntry = leveling.leveling.find(entry => entry.user === message.author.id)
        if (!existingEntry || !existingEntry.channel) {
            return message.reply("** ❌ Please set the leveling channel first using setlevelingchannel command **")
        }

        existingEntry.status = true
        fs.writeFileSync(path, JSON.stringify(leveling, null, 2))
        message.reply(`** ✅ Leveling system started **`)
    }
}