const { bot } = require('../core/bot')
const { Markup } = require('telegraf')
const { rndw } = require('./random')
const { refresh } = require('./allUnits')

var t
bot.hears('Shunchaki', ctx => {
    refresh()
    t=0
    ctx.reply(t+1+'. '+rndw[t].tarjima,
        Markup.inlineKeyboard([Markup.button.callback('Keyingisi','rand')])
    )
})
bot.action('rand', ctx => {
    t++
    if(t<5){
        ctx.editMessageText(t+1+'. '+rndw[t].tarjima,
            Markup.inlineKeyboard([Markup.button.callback('Keyingisi','rand')])
        ).then()
    }
    else{
        ctx.deleteMessage()
        ctx.reply('So`zlar tugadi!')
    }
})