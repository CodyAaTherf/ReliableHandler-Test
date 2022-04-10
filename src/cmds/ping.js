module.exports = {
    name: 'ping' , // Required
    aliases: ['p'] , // Optional aliases
    description: "A simple ping command" , // Optional description
    callback: (message) => {
        message.reply('Pong!')
    }
}