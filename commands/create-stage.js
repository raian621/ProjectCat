const { SlashCommandBuilder } = require("discord.js");
const modal = require('../modals/createStageModal.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('create-stage')
    .setDescription('creates a stage for a project in database'),
  async execute(interaction) {
		await interaction.showModal(modal);
  },
};