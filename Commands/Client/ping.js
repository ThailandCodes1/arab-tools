module.exports = {
    name: "ping",
    description: "Replies with Pong!",
    type: "client",
    execute(message) {
        message.channel.send("Pong!");
    }
}