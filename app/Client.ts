import { Client as client } from 'discord.js'

export class Client extends client {
	async start(token: string) {
		await this.login(token)
	}
}

export default Client
