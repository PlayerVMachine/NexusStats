const MongoClient = require(`mongodb`).MongoClient
const f = require(`util`).format
const Eris = require(`eris`)

//Project files
const helpper = require(`./helper.js`)

//config files
const config = require(`./config.json`)

//TODO: Add required project files

//TODO: Create Eris client
const bot = new Eris.Client(config.BOT_TOKEN, {
    messageLimit: 20,
    defaultImageSize:256,
    restMode: true
})

//ready
bot.on(`ready`, () => {
    console.log(`The Tower of Power is online!`)
});

//TODO: Generate command list
commands = []

bot.on(`messageCreate`, message)
{
    //TODO: Parse Messages
    //Ignore Bots
    if (message.author.bot) {
        return
    }

    //Ignore banned userss

    //Check message starts with prefix or bot mention
    if (message.content.startsWith(`n.`) || message.content.startsWith(bot.user.mention))
    {
        //Check for command and send message contents to appropriate command handler
        let cmd = message.content.startsWith(`n.`) ? message.content.splice(2, message.context.indexOf(` `)) : message.content.splice(bot.user.mention.length, message.context.indexOf(` `))
        
        if (-1 = commands.indexOf(cmd)) {
            let response = helper.oneAway(cmd)
            if (0 < response.length)
                bot.createMessage(message.channel.id, response)
        }
        
    }

//As needed parse messages that don't start with commands but we do care about
}

//TODO: Parse other events
//Guild Create and Delete
//Presence change?


//Go online
bot.connect()
