const MongoClient = require('mongodb').MongoClient
const f = require('util').format
const Eris = require('eris')

//config files
const config = require('./config.json')

//TODO: Add required project files

//TODO: Create Eris client
const bot = new Eris.Client(config.BOT_TOKEN, {
    messageLimit: 20,
    defaultImageSize:256
})

//ready
bot.on("ready", () => {
    console.log("The Tower of Power is online!")
});

//TODO: Generate command list

//TODO: Parse Messages
//Ignore Bots and banned users
//Check message starts with prefix or bot mention
//Check for command and send message contents to appropriate command handler
//As needed parse messages that don't start with commands but we do care about

//TODO: Parse other events\
//Guild Create and Delete
//Presence change?


//Go online
bot.connect()
