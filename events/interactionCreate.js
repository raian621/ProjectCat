const { Collection } = require("discord.js");

module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);
			console.log("command:", command);
	
			if (!command) {
				console.error(`No command matching ${interaction.commandName} was found.`);
				return;
			}
	
			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		}

		if (interaction.isModalSubmit()) {
			console.log(interaction);
			switch(interaction.customId)
			{
				case "createProjectModal":
					response = `your project submission was received successfully!\n`;		
				case "createStageModal":
					response = `your stage submission was received successfully!\n`;
				case "createTaskModal":
					response += `**Title**: ${interaction.fields.getTextInputValue('inputModalTitle')}\n` +
					`**Due Date**: ${interaction.fields.getTextInputValue('inputModalDate')}\n` +
					`**Description**: ${interaction.fields.getTextInputValue('inputModalDescription')}`;
				await interaction.reply({content: response});
				break;
			}
		}
	},
};