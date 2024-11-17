const fs = require("fs")
const colors = require("colors")

module.exports = (selfbot, bot) => {
    let count = 0;
    const handleCommand = (entity, prefix) => {
        entity.on("messageCreate", (message) => {
            fs.readdirSync("./Commands").forEach((dir) => {
                fs.readdirSync(`./Commands/${dir}`).forEach((file) => {
                    const Command = require(`../Commands/${dir}/${file}`)
                    if (message.author.bot) return;
                    if (message.content.startsWith(prefix) && message.content.split(" ")[0].slice(1) === Command.name) {
                        Command.execute(message)
                    }
                })
            })
        })
        count++;
    }
    handleCommand(selfbot, process.env.SelfPrefix)
    handleCommand(bot, process.env.BotPrefix)
    console.log(colors.bgGreen(`Done Successfully Load (${count}) Commands`))
}