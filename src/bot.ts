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
    var response: string;
    switch(interaction.customId)
    {
      case "createProjectModal":
        response = `your project submission was received successfully!\n`;		
      case "createStageModal":
        response = `your stage submission was received successfully!\n`;
      case "createTaskModal":
        response = `your task submission was received successfully!\n`;
        response += `**Title**: ${interaction.fields.getTextInputValue('inputModalTitle')}\n` +
        `**Due Date**: ${interaction.fields.getTextInputValue('inputModalDate')}\n` +
        `**Description**: ${interaction.fields.getTextInputValue('inputModalDescription')}`;
      await interaction.reply({content: response});
      break;
    }
  }
})

client.on('error', (err) => {
  console.log(err.message)
});

client.login(config.BOT_TOKEN);