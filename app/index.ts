import Client from './Client'
import dotenv from 'dotenv'
dotenv.config()

const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_VOICE_STATES'] })

if (process.env['BOT_TOKEN']) client.start(process.env['BOT_TOKEN'])
