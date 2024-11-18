const fs = require("fs");
const colors = require("colors");

module.exports = (selfbot, bot) => {
    const countCommands = type => fs.readdirSync("./Commands").reduce((count, dir) => {
        return count + fs.readdirSync(`./Commands/${dir}`).filter(file => {
            return require(`../Commands/${dir}/${file}`).type === type;
        }).length;
    }, 0);

    const selfbotCommands = countCommands("selfbot");
    const clientCommands = countCommands("bot");
    const totalCommands = selfbotCommands + clientCommands;

    console.log(colors.bgGreen(`Successfully loaded ${totalCommands} commands { Selfbot: ${selfbotCommands}, Client: ${clientCommands} }`));
}