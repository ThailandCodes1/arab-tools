module.exports = (selfbot) => {
    selfbot.on("ready", () => {
        console.log("Selfbot Started", selfbot.user.username)
    })
}