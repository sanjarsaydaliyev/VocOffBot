var rndw=[]
function random(unit){
    while(rndw.length!=unit.length){
        var index=Math.ceil(Math.random()*unit.length)
        var t=0
        for(var i=0;i<rndw.length;i++){
            if(rndw[i].id==index){
                t++
            }
        }
        if(t==0){
            rndw.push(unit[index-1])
        }
    }
}
module.exports={
    random,
    rndw
}