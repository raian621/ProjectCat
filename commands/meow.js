const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName('meow')
    .setDescription('gets ProjectCat to meow in the chat'),
  async execute(interaction) {
    await interaction.reply({content: "Meow... You've been procrastinating haven't you?", ephemeral: false})
  },
}