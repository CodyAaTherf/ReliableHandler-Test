const Discord = require('discord.js')
const { Intents } = require('discord.js')
const ReliableHandler = require('reliablehandler')

const config = require('./config.json')

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILDS
    ]
})

client.on('ready' , () => {
    console.log(`Logged in as ${client.user.tag}!`)

    new ReliableHandler(client , 'cmds')
})

client.login(config.TOKEN)