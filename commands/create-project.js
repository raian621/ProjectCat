const { SlashCommandBuilder } = require("discord.js");
const modal = require('../modals/createProjectModal.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('create-project')
  .setDescription('creates a project in database'),
  async execute(interaction) {
    await interaction.showModal(modal);
  },
};