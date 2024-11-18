const fs = require("fs")
module.exports = (selfbot) => {
    let leveling = JSON.parse(fs.readFileSync('./database.json', 'utf8'))
    if (!leveling.leveling) leveling.leveling = []

    leveling.leveling.forEach(entry => {
        if (entry.status) {
            selfbot.leveling({
                channel: entry.channel,
                randomLetters: true,
                time: 1000,
                type: Math.random() > 0.5 ? "eng" : "ar"
            })
        } else {
            return;
        }
    })
}