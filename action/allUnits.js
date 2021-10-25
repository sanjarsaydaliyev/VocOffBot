const { bot } = require("../core/bot")
const { Markup } = require("telegraf")
const { random, rndw } = require("./random")
const { client } = require("./database")
const { ess } = require("./English/Essential/essential_1")

var unit

function refresh(){
    rndw.length=0
    random(unit)
}

function changeUnit(es,change) {
    client.query(`SELECT * FROM ${es+change}`, (err, res) => {
        unit=res.rows
    })
}

bot.hears('Unit 1', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit1")
})

bot.hears('Unit 2', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit2")
})

bot.hears('Unit 3', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit3")
})

bot.hears('Unit 4', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit4")
})

bot.hears('Unit 5', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit5")
})

bot.hears('Unit 6', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit6")
})

bot.hears('Unit 7', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit7")
})

bot.hears('Unit 8', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit8")
})

bot.hears('Unit 9', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit9")
})

bot.hears('Unit 10', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit10")
})

bot.hears('Unit 11', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit11")
})

bot.hears('Unit 12', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit12")
})

bot.hears('Unit 13', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit13")
})

bot.hears('Unit 14', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit14")
})

bot.hears('Unit 15', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit15")
})

bot.hears('Unit 16', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit16")
})

bot.hears('Unit 17', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit17")
})

bot.hears('Unit 18', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit18")
})

bot.hears('Unit 19', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit19")
})

bot.hears('Unit 20', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit20")
})

bot.hears('Unit 21', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit21")
})

bot.hears('Unit 22', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit22")
})

bot.hears('Unit 23', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit23")
})

bot.hears('Unit 24', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit24")
})

bot.hears('Unit 25', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit25")
})

bot.hears('Unit 26', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit26")
})

bot.hears('Unit 27', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit27")
})

bot.hears('Unit 28', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit28")
})

bot.hears('Unit 29', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit29")
})

bot.hears('Unit 30', ctx => {
    ctx.replyWithHTML('<b>Tanlang:</b>\n\n<b>Shunchaki</b> - bunda sozlar shunchaki chiqadi siz ularni takrorlashingiz mumkin.\n\n<b>Yozma</b> - bunda so`zlarni yozish orqali tekshirishingiz mumkin va har bitta so`zni yozilishini kiritasiz keyingi so`z avtomatik chiqadi va eng ohirida natijangizni ko`rishingiz mumkin bo`ladi.',
        Markup.keyboard([
            ['Shunchaki','Yozma'],
            ['Orqaga units','Natija']
        ])
        .oneTime()
        .resize()
    )
    changeUnit(ess(),"unit30")
})

module.exports={
    refresh
}