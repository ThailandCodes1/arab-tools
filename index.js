require("dotenv")["config"]()
const CreateClient = require("./Util/CreateClient")
const colors = require("colors")
const fs = require("fs")
const arabtools = require("arab-tools");
const db = require("pro.db")

let selfbot = process.env.SelfToken ? new CreateClient("selfbot", process.env.SelfToken).client() : (console.log(colors.red("SelfToken is not defined")), process.exit())
let bot = process.env.BotToken ? new CreateClient("bot", process.env.BotToken).client() : (console.log(colors.red("BotToken is not defined")), process.exit())

const ArabToolsSelfbot = new arabtools.user(selfbot);
const ArabToolsBot = new arabtools.bot(bot);
const Leveling = require("./Util/Leveling")
const Autoreact = require("./Util/Autoreact")


setInterval(() => {
    Leveling(ArabToolsSelfbot)
    Autoreact(ArabToolsSelfbot)
}, 2000)




module.exports = {
    bot: ArabToolsBot,
    SelfClient: ArabToolsSelfbot
}

fs.readdirSync("./Handler").forEach(async (file) => {
    const handler = require(`./Handler/${file}`)(selfbot, bot)
})