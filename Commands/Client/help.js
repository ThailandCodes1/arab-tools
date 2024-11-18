const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: "help",
    description: "Replies with Pong!",
    type: "bot",
    execute(message) {
        const embed = new EmbedBuilder()
            .setTitle("Arab Tools Help")
            .setDescription("Here is the list of commands for Arab Tools")
            .addFields(
                { name: "<self-prefix>add-autoreact-bot", value: "```<self-prefix>add-autoreact-bot <botId/bot mention>```", inline: true },
                { name: "<self-prefix>remove-autoreact-bot", value: "```<self-prefix>remove-autoreact-bot <botId/bot mention>```", inline: true },
                { name: "<self-prefix>setlevelingchannel", value: "```<self-prefix>setlevelingchannel <channel mention>```", inline: true },
                { name: "<self-prefix>startleveling", value: "```<self-prefix>startleveling```", inline: true },
                { name: "<self-prefix>stopleveling", value: "```<self-prefix>stopleveling```", inline: true },
                { name: "<self-prefix>stayinvoice", value: "```<self-prefix>stayinvoice <channel mention>```", inline: true }
            )
        message.reply({ embeds: [embed] })
    }
}