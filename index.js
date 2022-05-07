// before running your bot please add your TOKEN from 'discord developer portal' inside the 'config.json' file. Do not share this token. //

const Discord = require('discord.js')
const config = require('./config.json');

const client = new Discord.Client({
    intents: ["GUILDS"]
})

// not necessary, but just to show a basic function //
const emoji = "🦜"

client.on('ready', () => {
    console.log(`The bot successfully loaded in ${emoji}`) // the emoji loads in because we said "const emoji = "🦜""
})

// add more //

client.login(require('./config.json').token);