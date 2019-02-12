const MongoClient = require(`mongodb`).MongoClient
const f = require(`util`).format
const Eris = require(`eris`)

//Project files
const helper = require(`./helper.js`)

//config files
const config = require(`./secrets.json`)

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
let commands = [`ping`]

bot.on(`messageCreate`, async (message) =>
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
        let cmd = ``
        //Check for command and send message contents to appropriate command handler
        if (-1 < message.content.indexOf)
            cmd = message.content.startsWith(`n.`) ? message.content.slice(2, message.content.indexOf(` `) + 1) : message.content.slice(bot.user.mention.length, message.content.indexOf(` `) + 1)
        else
            cmd = message.content.startsWith(`n.`) ? message.content.slice(2, message.content.length + 1) : message.content.slice(bot.user.mention.length, message.content.length + 1)

        if (-1 === commands.indexOf(cmd)) {
            let didYouMean = helper.didYouMean(cmd , commands, `n.`)
            if (0 < didYouMean.length) {
                let response = await bot.createMessage(message.channel.id, didYouMean)
                // setTimeout((msg) => {
                //     msg.delete(`Removing suggestion.`);
                // }, 2000, response)
            }
        }

        if (cmd === `ping`) {
           bot.createMessage(message.channel.id, `Pong!`)
        }
        
    }

//As needed parse messages that don't start with commands but we do care about
})

//TODO: Parse other events
//Guild Create and Delete
//Presence change?


//Go online
bot.connect()
