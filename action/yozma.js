const { bot } = require('../core/bot')
const { rndw } = require('./random')
const { refresh } = require('./allUnits')
const { client } = require('./database')

var t
var edit
var yozma=0
var wrongSoz=[]
var wrongWord=[]
bot.hears('Yozma', ctx => {
    refresh()

    t=0
    wrongWord.length=0
    wrongSoz.length=0
    ctx.reply(t+1+'. '+rndw[t].tarjima)
    edit=ctx.message.message_id+1
    yozma=1
})
bot.on('text', ctx => {
    if(yozma==1) {
        var soz=ctx.message.text
        t++
        if(t<5){
            if(rndw[t-1].word!=soz.toLowerCase()){
                wrongWord.push(rndw[t-1].word)
                wrongSoz.push(soz)
            }
            ctx.deleteMessage()
            ctx.telegram.editMessageText(ctx.chat.id,edit,0,t+1+". "+rndw[t].tarjima, {})
        }
        else{
            if(rndw[t-1].word!=soz.toLowerCase){
                wrongWord.push(rndw[t-1].word)
                wrongSoz.push(soz)
            }
            ctx.deleteMessage()
            ctx.deleteMessage(edit)
            var natija=(t-wrongWord.length)/t*100
            var s='Natijangiz - '+natija
            if(natija<100){
                s+="%\nNoto'g'ri so'zlar ro'yxati:\n"
                for(var i=0;i<wrongWord.length;i++){
                    var index=i+1
                    s+="\n"+index+". "+wrongWord[i]+" - "+wrongSoz[i]
                }
            }
            yozma=0
            if(natija>=70){
                client.query(`UPDATE users SET count+=${natija} WHERE chatid='${ctx.chat.id}'`, (err,res) => {
                    if(!err) {
                    } else {
                        console.log("............................."+err.message);
                    }
                })
            }
            ctx.reply(s)
        }
    }
})