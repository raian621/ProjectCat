import { Client, GatewayIntentBits } from 'discord.js';
import config from './config';
import * as commandModules from "./commands";

const commands = Object(commandModules);
console.table(commands);

export const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.once("ready", () => {
	console.log('ProjectCat is ready!');
});

client.on('interactionCreate', async interaction => {
	if (interaction.isCommand()) {
		const { commandName } = interaction;
    await commands[commandName].execute(interaction, client)
	}

  if (interaction.isModalSubmit()) {
    console.log(interaction);
    
    switch(interaction.customId)
    {
      case "createProjectModal":
        await commandModules.create_project.handleInput(interaction);
        break;
      case "createStageModal":
        await commandModules.create_task.handleInput(interaction);
        break;
      case "createTaskModal":
        await commandModules.create_task.handleInput(interaction);
        break;
    }
  }
})

client.on('error', (err) => {
  console.log(err.message)
});

client.login(config.BOT_TOKEN);