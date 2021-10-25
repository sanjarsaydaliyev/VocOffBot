const { bot } = require("../core/bot")
const { client } = require('./database')

bot.hears('Reyting', ctx => {
    var s='Top 10 yuqori balga ega foydalanuvchilar.\n\n'
    client.query(`SELECT * FROM users ORDER BY count DESC`, (err,res) => {
        if(!err) {
            for(var i=0;i<10;i++){
                var index=i+1
                if(i<res.rows.length){
                    s+=`${index}. `+res.rows[i].name+' - '+Math.trunc(res.rows[i].count)+'\n'
                }
                else{
                    s+=`${index}. --/--\n`;
                }
            }
            var ornim
            for(var i=0;i<res.rows.length;i++){
                if(res.rows[i].chatid==ctx.chat.id){
                    ornim=i+1
                }
            }
        
            s+=`\nFoydalanuvchilar soni - ${res.rows.length}`
            s+=`\nO'rningiz - ${ornim}`
            ctx.replyWithHTML(s)
        } else {
            console.log("-------------------"+err.message)
        }
    })
})
