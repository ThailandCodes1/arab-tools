module.exports = {
    name: "ping",
    description: "Replies with Pong!",
    type: "selfbot",
    execute(message) {
        message.channel.send("Pong!");
    }
}