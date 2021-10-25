const { bot } = require('./../core/bot')
const { client } = require('./database')

bot.hears('Natija', ctx => {
    client.query(`SELECT * FROM users WHERE chatid='${ctx.chat.id}'`, (err,res) => {
        if(!err) {
            ctx.reply(`Natijangiz - ${res.rows[0].count}`)
        } else {
            console.log("............."+err.message)
        }
    })
})