/**
 * @param {"selfbot" | "bot"} type - The type of client to create
 */

const Selfbot = require("discord.js-selfbot-v13")
const Discord = require("discord.js")

module.exports = class CreateClient {
    constructor(type, token) {
        this.type = type
        this.token = token
    }


    /**
     * @returns {Promise<Selfbot.Client | Discord.Client>}
     */

    client() {
        const client = this.type === "selfbot" ? new Selfbot.Client() : new Discord.Client({ intents: [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent, Discord.GatewayIntentBits.GuildVoiceStates] });
        client.login(this.token);
        return client;
    }
}