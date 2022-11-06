const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js')

module.exports = new ModalBuilder()
  .setCustomId('createTaskModal')
  .setTitle("Create Task")
  .addComponents(
    new ActionRowBuilder()
      .addComponents(
        new TextInputBuilder()
          .setCustomId('createTaskTitle')
          .setLabel('Task Title:')
          .setStyle(TextInputStyle.Short)
      ),
    new ActionRowBuilder()
      .addComponents(
        new TextInputBuilder()
          .setCustomId('createTaskDescription')
          .setLabel('Task Description:')
          .setStyle(TextInputStyle.Paragraph)
          .setRequired(false)
      ),  
  );