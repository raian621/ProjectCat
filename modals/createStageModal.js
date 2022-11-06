const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js')

module.exports = new ModalBuilder()
  .setCustomId('createStageModal')
  .setTitle("Create Stage")
  .addComponents(
    new ActionRowBuilder()
      .addComponents(
        new TextInputBuilder()
          .setCustomId('createStageTitle')
          .setLabel('Stage Title:')
          .setStyle(TextInputStyle.Short)
      ),
    new ActionRowBuilder()
      .addComponents(
        new TextInputBuilder()
          .setCustomId('createStageDescription')
          .setLabel('Stage Description:')
          .setStyle(TextInputStyle.Paragraph)
          .setRequired(false)
      ),
  );