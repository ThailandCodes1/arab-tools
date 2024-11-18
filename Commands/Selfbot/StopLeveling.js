const fs = require("fs")
let path = "./database.json"

module.exports = {
    name: "stopleveling",
    description: "Stop the leveling system",
    type: "selfbot",
    execute(message) {
        let leveling = JSON.parse(fs.readFileSync(path, "utf8"))
        if (!leveling.leveling) leveling.leveling = []

        const existingEntry = leveling.leveling.find(entry => entry.user === message.author.id)
        if (!existingEntry) {
            return message.reply("** ❌ You don't have leveling system enabled **")
        }

        existingEntry.status = false
        fs.writeFileSync(path, JSON.stringify(leveling, null, 2))
        message.reply(`** ✅ Leveling system stopped **`)
    }
}
