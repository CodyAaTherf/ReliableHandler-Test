module.exports = {
    name: 'ping' , // Required
    aliases: ['p'] , // Optional aliases
    minArgs: 0 , 
    maxArgs: 0 ,
    syntaxError: "Syntax Error: `ping` command requires no arguments." ,
    description: "A simple ping command" , // Optional description
    callback: (message) => {
        message.reply('Pong!')
    }
}