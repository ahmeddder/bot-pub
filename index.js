const { constants } = require('crypto')

const Discord = require('discord.js'),
    client = new Discord.Client({
        fechAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')
    
    client.login(process.env.TOKEN)
    client.commands = new Discord.Collection()

    client.on('ready', () => {
        client.user.setActivity('Greed Island RP PS4', {type: 'STREAMING', url: 'https://twitch.tv/jlrayane212'})
    })