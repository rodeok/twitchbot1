const tmi = require('tmi.js')


const opts = {

    options:{
        debug:true,
    },
    identity:{
         username: "Twitbot",
         password: "7cx8tpzt15ywrwzo1sysfjf9czz35s"


    },
    channels:[
         "EmadGG",
         "Rogue",
         "NateHill"
    ]
}
const client = new tmi.client(opts);


client.on('chat',(channel, userstate, message , self)=>{
    if (message == "hello"){
        client.say(channel, "hello")
    }
})

client.on('connected',(address,port)=>{
    console.log(`connected to address ${address} and the port: ${port}`)
})

client.on('message',(channel, userstate, message , self)=>{
    if (message == "hello"){
        client.say(channel, "hello")
    }

    if (message == "emotey"){
        client.say(channel, "hello")
    }

})

client.connect()