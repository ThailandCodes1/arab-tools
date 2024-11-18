module.exports = {
    name: "ping",
    description: "Replies with Pong!",
    type: "bot",
    execute(message) {
        message.channel.send("Pong!");
    }
}