const fs = require("fs");
const colors = require("colors");

module.exports = (selfbot) => {
    const commandDirs = fs.readdirSync("./Commands");
    for (const dir of commandDirs) {
        const commandPath = `./Commands/${dir}/`;
        const files = fs.readdirSync(commandPath);
        for (const file of files) {
            const Command = require("../." + commandPath + file);

            if (Command.type === "bot") {
                selfbot.on("messageCreate", async (message) => {
                    if (message.content.startsWith(process.env.SelfPrefix + Command.name)) {
                        await Command.execute(message);
                    }
                });
            }
        }
    }
}