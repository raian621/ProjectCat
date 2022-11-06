const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js')

module.exports = new ModalBuilder()
  .setCustomId('createProjectModal')
  .setTitle("Create Project")
  .addComponents(
    new ActionRowBuilder()
      .addComponents(
        new TextInputBuilder()
          .setCustomId('createProjectTitle')
          .setLabel('Project Title:')
          .setStyle(TextInputStyle.Short)
      ),
    new ActionRowBuilder()
      .addComponents(
        new TextInputBuilder()
          .setCustomId('createProjectDescription')
          .setLabel('Project Description:')
          .setStyle(TextInputStyle.Paragraph)
          .setRequired(false)
      ),  
  );