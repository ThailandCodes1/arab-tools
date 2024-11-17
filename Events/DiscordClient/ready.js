module.exports = (client) => {
    client.on("ready", () => {
        console.log("Bot Started", client.user.username)
    })
};