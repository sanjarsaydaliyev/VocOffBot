const { bot } = require('../../../core/bot')
const { Markup } = require('telegraf')

var essential

bot.hears('Essential words 1', ctx => {
    ctx.reply('Darsni tanlang',
        Markup.keyboard([
            ['Unit 1','Unit 2'],
            ['Unit 3','Unit 4'],
            ['Unit 5','Unit 6'],
            ['Unit 7','Unit 8'],
            ['Unit 9','Unit 10'],
            ['Unit 11','Unit 12'],
            ['Unit 13','Unit 14'],
            ['Unit 15','Unit 16'],
            ['Unit 17','Unit 18'],
            ['Unit 19','Unit 20'],
            ['Unit 21','Unit 22'],
            ['Unit 23','Unit 24'],
            ['Unit 25','Unit 26'],
            ['Unit 27','Unit 28'],
            ['Unit 29','Unit 30'],
            ['Orqaga (1-6)']
        ])
        .oneTime()
        .resize()
    )
    essential="e1"
})
bot.hears('Orqaga (1-6)', ctx => {
    ctx.replyWithHTML('Darajangizni tanlang',
        Markup.keyboard([
            ['Essential words 1'],
            ['Essential words 2'],
            ['Essential words 3'],
            ['Essential words 4'],
            ['Essential words 5'],
            ['Essential words 6'],
            ['Orqaga menu']
        ])
        .oneTime()
        .resize()
    )
})

function ess() {
    return essential;
}

module.exports={
    ess
}