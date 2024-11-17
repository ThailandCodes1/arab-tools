const fs = require("fs")
const colors = require("colors")
module.exports = (selfbot, bot) => {
    let count = 0;
    fs.readdirSync("./Events").forEach(async (dir) => {
        fs.readdirSync(`./Events/${dir}`).forEach(async (file) => {
            if (dir.toLowerCase().includes("selfbot")) {
                const Event = require(`../Events/${dir}/${file}`)
                Event(selfbot)
            } else if (dir.toLowerCase().includes("client")) {
                const Event = require(`../Events/${dir}/${file}`)
                Event(bot)
            }
            count++;
        })
    })
    console.log(colors.bgGreen(`Done Successfully Load (${count}) Events`))
}

