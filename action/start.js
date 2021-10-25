const { bot }=require('../core/bot')
const { Markup }=require('telegraf')
const { client } = require('./database')

bot.start(ctx => {
    if(ctx.chat.id!=1){
        ctx.replyWithHTML(
            `Salom ${ctx.chat.first_name} botimizga xush kelibsiz \n\nBut botda siz Ingliz va Rus  tillaridan so'z boyligingizni oshirishingiz va ularni tekshirishingiz mumkin. \n`
        )
        ctx.replyWithHTML(`Tilni tanlang`,
            Markup.keyboard([
                ['English'],
                ['Natija','Reyting']
            ])
            .oneTime()
            .resize()
        )
        var t=0

        client.query(`SELECT chatid FROM users WHERE chatid='${ctx.chat.id}'`, (err, res) => {
            if (!err){
                if(res.rows.length==0){
                    client.query(`INSERT INTO users (chatid, name, count) VALUES ('${ctx.chat.id}', '${ctx.chat.first_name}', 0)`, (err1, res1) => {
                        if (!err1){
                        } else {
                            console.log(err1.message)
                        }
                    })
                }
            }
        })
    }
    else{
        ctx.replyWithHTML('reklama',
            Markup.keyboard([
                ['Reklama','Users']
            ])
            .oneTime()
            .resize()
        )
    }
})