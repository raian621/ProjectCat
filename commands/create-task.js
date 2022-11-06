const { SlashCommandBuilder } = require("discord.js");
const modal = require('../modals/createTaskModal.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('create-task')
    .setDescription('creates a task for a stage in a project'),
  async execute(interaction) {
		// await interaction.channel.send(`This command was run by ProjectCat`);
		await interaction.showModal(modal);
  },
};