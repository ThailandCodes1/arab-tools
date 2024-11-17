const arabtools = require("arab-tools");
// Create a new Discord client
const { Client } = require('discord.js');
const client = new Client({ intents: ["Guilds", "GuildMessages", "GuildVoiceStates"] });
// Create a new class bot
const Bot = new arabtools.bot(client);
client.login(process.env.Bottoken)
client.on("ready", () => {
    console.log("Bot is ready")
})


client.on("messageCreate", async (msg) => {
    if (msg.content == "!broadcast") {
        let args = msg.content.split(" ")[1];

        if (!args) return msg.reply("Please enter a message to broadcast");

        const data = await Bot.Broadcast({
            guildID: msg.guild.id,
            message: args,
            timeout: 2000,
            mention: true,
            logInfo: true,
        });

        msg.reply("Done!")
    }
})




client.on("messageCreate", async (msg) => {
    if (msg.content == "!quran") {
        const connection = await msg.member.voice;
        if (!connection) return msg.reply("You are not in a voice channel");
        await arabtools.quran.play("Al-Fatiha", connection);
    }
})
