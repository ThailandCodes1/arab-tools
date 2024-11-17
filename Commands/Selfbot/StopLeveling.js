const db = require("pro.db")


module.exports = {
    name: "stopleveling",
    description: "Stop the leveling system",
    type: "selfbot",
    execute(message) {
        db.delete(`levelingStatus_${message.user.id}`, false);
        message.reply(`** ✅ Leveling system stopped **`);
    }
}
