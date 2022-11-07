import { SlashCommandBuilder, REST, Routes } from 'discord.js';
import fs from 'fs';
import config from './config'
import * as commandModules from './commands'

type Command = {
  data: SlashCommandBuilder
}

const commands = [];

for (const module of Object.values<Command>(commandModules)) {
	commands.push(module.data);
}

console.log(commands);

const rest = new REST({ version: '10' }).setToken(config.BOT_TOKEN);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		await rest.put(
			Routes.applicationGuildCommands(config.CLIENT_ID, config.GUILD_ID),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${commands.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();
